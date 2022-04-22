import * as dotenv from "dotenv";
import { Server } from "http";
import { DiscordBot } from "./DiscordBot/DiscordBot";

dotenv.config();
if (process.env.CLIENT_TOKEN) {
    DiscordBot.setupBot(process.env.CLIENT_TOKEN);
}

let server: Server = new Server();

server.listen({ port: process.env.PORT || 5000})