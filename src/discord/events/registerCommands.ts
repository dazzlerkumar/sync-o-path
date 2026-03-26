import { REST, Routes, ApplicationCommandOptionType } from "discord.js";
import type { ApplicationCommandDataResolvable } from "discord.js";
import { helpCommand } from "../commands/help.js";

const clientId = process.env.CLIENT_ID;
const token = process.env.DISCORD_TOKEN;



const commands: ApplicationCommandDataResolvable[] = [
    helpCommand,
    {
        name: "join",
        description: "Join the voice channel",
    },
    {
        name: "leave",
        description: "Leave the voice channel",
    },
    {
        name: "create-issue",
        description: "Create a new product issue or ticket",
        options: [
            {
                name: "title",
                type: ApplicationCommandOptionType.String,
                description: "The title of the issue",
                required: true,
            },
            {
                name: "description",
                type: ApplicationCommandOptionType.String,
                description: "The description of the issue",
                required: true,
            },
            {
                name: "priority",
                type: ApplicationCommandOptionType.String,
                description: "The priority of the issue",
                required: true,
                choices: [
                    { name: "High", value: "high" },
                    { name: "Medium", value: "medium" },
                    { name: "Low", value: "low" },
                ],
            },
        ],
    },
    {
        name: "sprint",
        description: "Manage sprints or view sprint status",
        options: [
            {
                name: "action",
                type: ApplicationCommandOptionType.String,
                description: "Action to perform on the sprint",
                required: true,
                choices: [
                    { name: "Status", value: "status" },
                    { name: "Start", value: "start" },
                    { name: "End", value: "end" },
                ],
            },
        ],
    },
    {
        name: "standup",
        description: "Submit your daily standup report",
        options: [
            {
                name: "yesterday",
                type: ApplicationCommandOptionType.String,
                description: "What did you accomplish yesterday?",
                required: true,
            },
            {
                name: "today",
                type: ApplicationCommandOptionType.String,
                description: "What will you work on today?",
                required: true,
            },
            {
                name: "blockers",
                type: ApplicationCommandOptionType.String,
                description: "Do you have any blockers?",
                required: false,
            },
        ],
    },
    {
        name: "roadmap",
        description: "View the product roadmap",
    },
];
async function registerSlashCommands(guildId: string): Promise<void> {
    if (!clientId || !token) {
        console.error("Missing CLIENT_ID or DISCORD_TOKEN in environment variables");
        return;
    }

    const rest = new REST({ version: "10" }).setToken(token);

    try {
        console.log("Onboarding slashes :>");

        await rest.put(
            Routes.applicationGuildCommands(clientId, guildId),
            { body: commands }
        );

        console.log("Successfully registered commands :D");
    } catch (error) {
        console.error("Failed to register commands:", error);
    }
}

export default registerSlashCommands;