import InteractionCreateEvent from './InteractionCreateEvent.js';
import MessageCreateEvent from './MessageCreateEvent.js';

export default class EventsManager {
    static registerEvents() {
        InteractionCreateEvent.register();
        MessageCreateEvent.register();
    }
}