import * as dotenv from "dotenv";
import { DiscordBot } from "./DiscordBot/DiscordBot";

dotenv.config();
if (process.env.CLIENT_TOKEN) {
    DiscordBot.setupBot(process.env.CLIENT_TOKEN);
}
