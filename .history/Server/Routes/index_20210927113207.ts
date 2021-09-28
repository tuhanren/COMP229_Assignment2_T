import express from "express";
import fs from 'fs';
const router = express.Router();
export default router;

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Home" });
});
/* GET home page. */
router.get("/home", function (req, res, next) {
  res.render("index", { title: "Home" });
});

/* GET about us page. */
router.get('/about', function(req, res, next) {
  let resumePath = 'Public/Assets/docs/resume.pdf';
  fs.readFile(resumePath, function (err, data) {
    res.contentType('application/pdf');
    res.send(data);
  });
});

/* GET projects page. */
router.get("/projects", function (req, res, next) {
  res.render("index", { title: "Projects" });
});

/* GET services page. */
router.get("/services", function (req, res, next) {
  res.render("index", { title: "Services" });
});

/* GET contact us page. */
router.get("/contact", function (req, res, next) {
  res.render("index", { title: "Contact" });
});

//module.exports = router;
