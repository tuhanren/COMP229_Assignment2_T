import express from "express";
import fs from 'fs';
const router = express.Router();
export default router;

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Home", page:"home" });
});
/* GET home page. */
router.get("/home", function (req, res, next) {
  res.render("index", { title: "Home", page:"home" });
});

/* GET about us page. */
router.get('/about', function(req, res, next) {
  res.render("index", { title: "About", page:"about" });
  // let resumePath = 'Public/Assets/docs/resume.pdf';
  // fs.readFile(resumePath, function (err, data) {
  //   res.contentType('application/pdf');
  //   res.send(data);
  // });
});

/* GET projects page. */
router.get("/projects", function (req, res, next) {
  res.render("index", { title: "Projects", page:"projects" });
});

/* GET services page. */
router.get("/services", function (req, res, next) {
  res.render("index", { title: "Services", page:"services" });
});

/* GET contact us page. */
router.get("/contact", function (req, res, next) {
  res.render("index", { title: "Contact", page:"contact" });
});

//module.exports = router;
