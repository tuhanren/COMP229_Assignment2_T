import express from 'express';
//connect the router to controller
import { DisplayAddPage, DisplayContactListPage, DisplayEditPage, ProcessAddPage, ProcessDeletePage, ProcessEditPage } from '../Controller/contacts';
const router = express.Router();
export default router;

// import Util functions
import { AuthGuard } from '../Util/index';

//get contacts-list page - with "/contacts-list"
router.get("/", AuthGuard, DisplayContactListPage);
//get display update/:id page - with "/contacts-list/update:id"
router.get("/update/:id", AuthGuard, DisplayEditPage);
//get display /contacts-list/add page
router.get("/add", AuthGuard, DisplayAddPage);

//post process /contacts-list/add page
router.post("/add", AuthGuard, ProcessAddPage);
//post process /contacts-list/update/:id page
router.post("/update/:id", AuthGuard, ProcessEditPage);

//get process /contacts-list/delete/:id
router.get("/delete/:id", AuthGuard, ProcessDeletePage);
