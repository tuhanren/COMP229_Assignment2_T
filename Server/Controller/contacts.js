"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessDeletePage = exports.ProcessAddPage = exports.ProcessEditPage = exports.DisplayAddPage = exports.DisplayEditPage = exports.DisplayContactListPage = void 0;
const contact_1 = __importDefault(require("../Models/contact"));
function DisplayContactListPage(req, res, next) {
    contact_1.default.find(function (err, contactsCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Contacts List', page: 'contacts-list', contactlist: contactsCollection });
    });
}
exports.DisplayContactListPage = DisplayContactListPage;
function DisplayEditPage(req, res, next) {
    let id = req.params.id;
    contact_1.default.findById(id, {}, {}, (err, contactsItemToEdit) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Edit', page: 'update', item: contactsItemToEdit });
    });
}
exports.DisplayEditPage = DisplayEditPage;
function DisplayAddPage(req, res, next) {
    res.render('index', { title: 'Add', page: 'update', item: '' });
}
exports.DisplayAddPage = DisplayAddPage;
function ProcessEditPage(req, res, next) {
    let id = req.params.id;
    let updatedContactItem = new contact_1.default({
        "_id": id,
        "FullName": req.body.FullName,
        "EmailAddress": req.body.EmailAddress,
        "ContactNumber": req.body.ContactNumber
    });
    contact_1.default.updateOne({ _id: id }, updatedContactItem, {}, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/contacts-list');
    });
}
exports.ProcessEditPage = ProcessEditPage;
function ProcessAddPage(req, res, next) {
    let newContactItem = new contact_1.default({
        "FullName": req.body.FullName,
        "EmailAddress": req.body.EmailAddress,
        "ContactNumber": req.body.ContactNumber
    });
    contact_1.default.create(newContactItem, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/contacts-list');
    });
}
exports.ProcessAddPage = ProcessAddPage;
function ProcessDeletePage(req, res, next) {
    let id = req.params.id;
    contact_1.default.remove({ _id: id }, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/contacts-list');
    });
}
exports.ProcessDeletePage = ProcessDeletePage;
//# sourceMappingURL=contacts.js.map