import express from "express";
// import fs from 'fs';
const router = express.Router();
export default router;

// instantiate an object of type index controller
import { DisplayAboutPage, DisplayContactPage, DisplayHomePage, DisplayLoginPage, DisplayProjectsPage, DisplayRegisterPage, DisplayServicesPage, ProcessLoginPage, ProcessLogoutPage, ProcessRegisterPage } from '../Controller/index';

/* GET home page. */
router.get("/", DisplayHomePage);

/* GET home page. */
router.get("/home", DisplayHomePage);

/* GET about us page. */
router.get("/about", DisplayAboutPage);

/* GET projects page. */
router.get("/projects", DisplayProjectsPage);

/* GET services page. */
router.get("/services", DisplayServicesPage);

/* GET contact us page. */
router.get("/contact", DisplayContactPage);

/* GET display login page */
router.get("/login", DisplayLoginPage);

/* POST process login page*/
router.post("/login", ProcessLoginPage);

/* GET display register page*/
router.get("/register", DisplayRegisterPage);

/* POST process register page*/
router.post("/register", ProcessRegisterPage);

/* GET logout page */
router.get("/logout", ProcessLogoutPage);

//get contacts-list request
//router.get('/contacts-list', DisplayContactListPage);

//module.exports = router;
