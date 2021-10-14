"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const GameSchema = new Schema({
    name: String,
    genre: String,
    developer: String,
    cost: Number
}, {
    collection: "games"
});
const Model = mongoose_1.default.model("Game", GameSchema);
exports.default = Model;
//# sourceMappingURL=game.js.map