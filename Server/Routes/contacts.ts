import express from 'express';
//connect the router to controller
import { DisplayAddPage, DisplayContactListPage, DisplayEditPage, ProcessAddPage, ProcessDeletePage, ProcessEditPage } from '../Controller/contacts';
const router = express.Router();
export default router;

//get contacts-list page - with "/contacts-list"
router.get('/', DisplayContactListPage);
//get display edit/:id page - with "/contacts-list/edit:id"
router.get('/update/:id', DisplayEditPage);
//get display /contacts-list/add page
router.get('/add', DisplayAddPage);

//post process /contacts-list/add page
router.post('/add', ProcessAddPage);
//post process /contacts-list/edit/:id page
router.post('/update/:id', ProcessEditPage);

//get process /contacts-list/delete/:id
router.get('/delete/:id', ProcessDeletePage);
