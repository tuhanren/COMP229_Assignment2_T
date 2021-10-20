"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const contacts_1 = require("../Controller/contacts");
const router = express_1.default.Router();
exports.default = router;
const index_1 = require("../Util/index");
router.get('/', contacts_1.DisplayContactListPage);
router.get('/update/:id', index_1.AuthGuard, contacts_1.DisplayEditPage);
router.get('/add', index_1.AuthGuard, contacts_1.DisplayAddPage);
router.post('/add', index_1.AuthGuard, contacts_1.ProcessAddPage);
router.post('/update/:id', index_1.AuthGuard, contacts_1.ProcessEditPage);
router.get('/delete/:id', index_1.AuthGuard, contacts_1.ProcessDeletePage);
//# sourceMappingURL=contacts.js.map