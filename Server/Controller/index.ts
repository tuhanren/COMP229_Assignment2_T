import express, {Request, Response, NextFunction} from 'express';
//get a reference to teh Game Model Class
import Game from '../Models/game';

export function DisplayHomePage(req: Request, res: Response, next: NextFunction): void
{
	res.render("index", { title: "Home", page:"home" });
}

export function DisplayAboutPage(req: Request, res: Response, next: NextFunction): void
{
	res.render("index", { title: "About", page:"about" });
}

export function DisplayProjectsPage(req: Request, res: Response, next: NextFunction): void
{
	res.render("index", { title: "Projects", page:"projects" });
}

export function DisplayServicesPage(req: Request, res: Response, next: NextFunction): void
{
	res.render("index", { title: "Services", page:"services" });
}

export function DisplayContactPage(req: Request, res: Response, next: NextFunction): void
{
	res.render("index", { title: "Contact", page:"contact" });
}

export function DisplayGameListPage(req: Request, res: Response, next: NextFunction): void
{
      Game.find(function(err, gamesCollection)
	{
		if(err)
		{
			console.error(err);
			res.end(err);
		}
		
		res.render('index', { title: 'Games List', page: 'games-list', games: gamesCollection });
	});
}