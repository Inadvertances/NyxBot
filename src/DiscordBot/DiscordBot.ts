import Discord, { Intents } from "discord.js"
import EventsManager from "./Events/EventManager";

export const discordClient = new Discord.Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

export class DiscordBot {
    static setupBot(token: string) {
        if (token) {

            discordClient.once("ready", () => {
                console.log('NyxBot is online')
            })

            discordClient.login(token);

            EventsManager.registerEvents()
        }
    }
}