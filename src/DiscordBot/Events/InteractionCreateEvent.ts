import PingCommand from "../Commands/PingCommand";
import { discordClient } from "../DiscordBot";

const RegisteredCommands = {
    Ping : "ping"
}

export default class InteractionCreateEvent {
    static register() {
        discordClient.on("interactionCreate", async (interaction) => {
            if (!interaction.isCommand()) {
                return;
            }
        
            const { commandName } = interaction;
            
            switch(commandName){
                case RegisteredCommands.Ping : {
                    PingCommand.execute(interaction);
                    break;
                }
            }

        });
    }
}