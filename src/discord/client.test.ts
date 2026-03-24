import client from './client.js';
import { Events, MessageReaction, User } from 'discord.js';
import { mockUser, mockMessage, mockReaction } from '@shoginn/discordjs-mock';

// Polyfill jest for @shoginn/discordjs-mock
(global as any).jest = vi;

describe('Discord Client Reaction Listener', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('should log the correct emoji name when a user reacts', async () => {
    const consoleSpy = vi.spyOn(console, 'log');
    
    // Mock client.user.id
    vi.spyOn(client, 'user', 'get').mockReturnValue({ id: 'bot-id' } as any);

    // Create mock user and message
    const user = mockUser(client, { id: 'user-id', username: 'test-user' });
    const message = mockMessage({ 
      client, 
      override: { content: 'Test message' } as any 
    });
    
    // Create mock reaction
    const reaction = mockReaction({
      message,
      user,
      override: { emoji: { name: '🎫' } } as any
    });

    // Manually trigger the event
    client.emit(Events.MessageReactionAdd as any, reaction as unknown as MessageReaction, user as unknown as User);

    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining('User test-user#user#0000 reacted with 🎫 to message: Test message')
    );
  });

  it('should ignore bot\'s own reactions', async () => {
    const consoleSpy = vi.spyOn(console, 'log');
    
    // Mock client.user.id to be same as bot's
    vi.spyOn(client, 'user', 'get').mockReturnValue({ id: 'bot-id' } as any);

    const botUser = mockUser(client, { id: 'bot-id', username: 'bot-user' });
    const message = mockMessage({ 
      client, 
      override: { content: 'Test message' } as any 
    });
    const reaction = mockReaction({
      message,
      user: botUser,
      override: { emoji: { name: '🎫' } } as any
    });

    client.emit(Events.MessageReactionAdd as any, reaction as unknown as MessageReaction, botUser as unknown as User);

    expect(consoleSpy).not.toHaveBeenCalled();
  });

  it('should fetch the reaction if it is partial', async () => {
    vi.spyOn(client, 'user', 'get').mockReturnValue({ id: 'bot-id' } as any);
    
    const user = mockUser(client, { id: 'user-id', username: 'test-user' });
    const message = mockMessage({ 
      client, 
      override: { content: 'Test message' } as any 
    });
    
    const reaction = mockReaction({
      message,
      user,
      override: { emoji: { name: '🎫' } } as any
    });

    // Make it partial
    Object.defineProperty(reaction, 'partial', { value: true });
    const fetchSpy = vi.spyOn(reaction, 'fetch').mockResolvedValue(reaction as any);

    await client.emit(Events.MessageReactionAdd as any, reaction as unknown as MessageReaction, user as unknown as User);

    expect(fetchSpy).toHaveBeenCalled();
  });
});
