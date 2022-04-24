import { ColorResolvable, MessageEmbed } from 'discord.js';
import { discordClient } from '../DiscordBot';
import template from '../Embeds/BotIdentificationEmbed.json'

export default class MessageCreateEvent {
    static register() {
        discordClient.on("messageCreate", async (message) => {
            if (message.author.bot) {
                return
            }

            if (discordClient.user && message.content.includes(discordClient.user.id)) {
                const { author } = message;

                let response = new MessageEmbed()
                    .setColor(template.color as ColorResolvable)
                    .setTitle(template.title.replace("{{name}}", message.author.username))
                    .setAuthor(template.author)
                    .setDescription(template.description)
                    .setFields([
                        {
                            name: template.fields[0].name,
                            value: message.content,
                            inline: template.fields[0].inline
                        }
                    ])
                    .setFooter(template.footer)
                    .setTimestamp(new Date());

                message.react("❤️");
                message.reply({ embeds: [response] })
            }
        });
    }
}