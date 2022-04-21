import { CommandInteraction, MessageEmbed } from "discord.js"
export default class PingCommand {
    static async execute(interaction: CommandInteraction) {
        const response = new MessageEmbed()
            .setColor("PURPLE")
            .setTitle("Ping!")
            .setFields(
                [
                    {
                        name: `${interaction.user.username} pinged!`,
                        value: "Pong!"
                    }
                ]
            )
            .setFooter({
                text: "Powered by Nyxbot"
            })
            .setTimestamp(new Date());
        await interaction.reply({ embeds: [response], ephemeral: true })
    }
}