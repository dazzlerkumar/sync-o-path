import type { Client } from "discord.js";
import registerSlashCommands from "./registerCommands.js";

export function handleReady(client: Client): void {
    // Bump job is now started via slash command, not on ready
    client.guilds.cache.forEach((guild) => {
        registerSlashCommands(guild.id); // Pass guild ID to register commands
    });
}