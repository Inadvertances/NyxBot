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
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
class PingCommand {
    static execute(interaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = new discord_js_1.MessageEmbed()
                .setColor("PURPLE")
                .setTitle("Ping!")
                .setFields([
                {
                    name: `${interaction.user.username} pinged!`,
                    value: "Pong!"
                }
            ])
                .setFooter({
                text: "Powered by Nyxbot"
            })
                .setTimestamp(new Date());
            yield interaction.reply({ embeds: [response], ephemeral: true });
        });
    }
}
exports.default = PingCommand;
