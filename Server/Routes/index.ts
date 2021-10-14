import express from "express";
// import fs from 'fs';
const router = express.Router();
export default router;

// instantiate an object of type index controller
import { DisplayAboutPage, DisplayContactPage, DisplayGameListPage, DisplayHomePage, DisplayProjectsPage, DisplayServicesPage } from '../Controller/index';

/* GET home page. */
router.get("/", DisplayHomePage);

/* GET home page. */
router.get("/home", DisplayHomePage);

/* GET about us page. */
router.get('/about', DisplayAboutPage);

/* GET projects page. */
router.get("/projects", DisplayProjectsPage);

/* GET services page. */
router.get("/services", DisplayServicesPage);

/* GET contact us page. */
router.get("/contact", DisplayContactPage);

//get game-list request
router.get('/games-list', DisplayGameListPage);

//module.exports = router;
