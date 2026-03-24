import client from './discord/client.js';

const token = process.env.DISCORD_TOKEN;

if (token && process.env.NODE_ENV !== 'test') {
  client.login(token);
} else if (!token && process.env.NODE_ENV !== 'test') {
  console.error('DISCORD_TOKEN is not defined in environment variables.');
}
