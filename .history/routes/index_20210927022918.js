let express = require("express");
let router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
/* GET home page. */
router.get("/home", function (req, res, next) {
  res.render("index", { title: "Home" });
});

/* GET about us page. */
router.get("/about", function (req, res, next) {
  res.render("index", { title: "About" });
});

/* GET products page. */
router.get("/products", function (req, res, next) {
  res.render("index", { title: "Products" });
});

/* GET services page. */
router.get("/services", function (req, res, next) {
  res.render("index", { title: "Services" });
});

/* GET contact us page. */
router.get("/contact", function (req, res, next) {
  res.render("index", { title: "Contact" });
});

module.exports = router;
