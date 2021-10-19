"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const contacts_1 = require("../Controller/contacts");
const router = express_1.default.Router();
exports.default = router;
router.get('/', contacts_1.DisplayContactListPage);
router.get('/update/:id', contacts_1.DisplayEditPage);
router.get('/add', contacts_1.DisplayAddPage);
router.post('/add', contacts_1.ProcessAddPage);
router.post('/update/:id', contacts_1.ProcessEditPage);
router.get('/delete/:id', contacts_1.ProcessDeletePage);
//# sourceMappingURL=contacts.js.map