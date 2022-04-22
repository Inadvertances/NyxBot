"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const DiscordBot_1 = require("../DiscordBot");
const BotIdentificationEmbed_json_1 = __importDefault(require("../Embeds/BotIdentificationEmbed.json"));
class MessageCreateEvent {
    static register() {
        DiscordBot_1.discordClient.on("messageCreate", (message) => __awaiter(this, void 0, void 0, function* () {
            if (message.author.bot) {
                return;
            }
            if (DiscordBot_1.discordClient.user && message.content.includes(DiscordBot_1.discordClient.user.id)) {
                const { author } = message;
                let response = new discord_js_1.MessageEmbed()
                    .setColor(BotIdentificationEmbed_json_1.default.color)
                    .setTitle(BotIdentificationEmbed_json_1.default.title.replace("{{name}}", message.author.username))
                    .setAuthor(BotIdentificationEmbed_json_1.default.author)
                    .setDescription(BotIdentificationEmbed_json_1.default.description)
                    .setFields([
                    {
                        name: BotIdentificationEmbed_json_1.default.fields[0].name,
                        value: message.content,
                        inline: BotIdentificationEmbed_json_1.default.fields[0].inline
                    }
                ])
                    .setFooter(BotIdentificationEmbed_json_1.default.footer)
                    .setTimestamp(new Date());
                message.react("❤️");
                author.send({ embeds: [response] });
            }
        }));
    }
}
exports.default = MessageCreateEvent;
