"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const InteractionCreateEvent_js_1 = __importDefault(require("./InteractionCreateEvent.js"));
const MessageCreateEvent_js_1 = __importDefault(require("./MessageCreateEvent.js"));
class EventsManager {
    static registerEvents() {
        InteractionCreateEvent_js_1.default.register();
        MessageCreateEvent_js_1.default.register();
    }
}
exports.default = EventsManager;
