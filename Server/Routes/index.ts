import express from "express";
// import fs from 'fs';
const router = express.Router();
export default router;

//get a reference to teh Game Model Class
import Game from '../Models/game';

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
  // let resumePath = 'Client/Assets/docs/resume.pdf';
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

//get game-list request
router.get('/games-list', function(req, res, next)
{
//db.games.find()
	//Game.find((err, gamesCollection) =>???// check video
	Game.find(function(err, gamesCollection)
	{
		if(err)
		{
			console.error(err);
			res.end(err);
		}
		//print the game-list at the back end
		console.log(gamesCollection);
	});
});
//module.exports = router;
