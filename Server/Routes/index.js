"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.default = router;
const game_1 = __importDefault(require("../Models/game"));
router.get("/", function (req, res, next) {
    res.render("index", { title: "Home", page: "home" });
});
router.get("/home", function (req, res, next) {
    res.render("index", { title: "Home", page: "home" });
});
router.get('/about', function (req, res, next) {
    res.render("index", { title: "About", page: "about" });
});
router.get("/projects", function (req, res, next) {
    res.render("index", { title: "Projects", page: "projects" });
});
router.get("/services", function (req, res, next) {
    res.render("index", { title: "Services", page: "services" });
});
router.get("/contact", function (req, res, next) {
    res.render("index", { title: "Contact", page: "contact" });
});
router.get('/games-list', function (req, res, next) {
    game_1.default.find(function (err, gamesCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        console.log(gamesCollection);
    });
});
//# sourceMappingURL=index.js.map