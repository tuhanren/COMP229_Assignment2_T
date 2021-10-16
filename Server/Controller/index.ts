import express, {Request, Response, NextFunction} from 'express';
//get a reference to teh Game Model Class
import Contact from '../Models/contact';

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

