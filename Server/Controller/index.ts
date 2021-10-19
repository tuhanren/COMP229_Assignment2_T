import express, {Request, Response, NextFunction} from 'express';

import passport from 'passport';

// create an instance of the User Model
import User from '../Models/user';

//get a reference to teh contact Model Class
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

// functions for authentication
export function DisplayLoginPage(req: Request, res: Response, next: NextFunction): void
{
	res.render("index", { title: "Login", page:"login" });
}

export function ProcessLoginPage(req: Request, res: Response, next: NextFunction): void
{
	passport.authenticate('local', (err, user, info) =>
	{
	  console.log(user);
		
	  // are there any server errors?
	  if(err)
	  {
	    console.error(err);
	    return next(err);
	  }
	  
	  // are there any login errors?
	  if(!user)
	  {
	    req.flash('loginMessage', 'Authentication Error');
	    return res.redirect('/login');
	  }
	  
	  req.login(user, (err) => 
	  {
	    // are there any db errors?
	    if(err)
	    {
		console.error(err);
		return next(err);
	    }
	    
	    console.log("Logged in Successfully");
	    
	    return res.redirect('/contacts-list');
	  });
	})(req, res, next);
}

export function DisplayRegisterPage(req: Request, res: Response, next: NextFunction): void
{
	res.render("index", { title: "Register", page:"register" });
}

export function ProcessRegisterPage(req: Request, res: Response, next: NextFunction): void
{
	// instantiate a new User Object
	let newUser = new User
	({
		username: req.body.username,
		emailAddress: req.body.emailAddress,
		displayName: req.body.firstName + " " + req.body.lastName
	});

	User.register(newUser, req.body.password, (err) => 
	{
		if(err)
		{
			console.error('Error: Inserting New User');
			if(err.name == "UserExistsError")
		{
			console.error('Error: User Already Exists');
		}
			req.flash('registerMessage', 'Registration Error');

			return res.redirect('/register');
		}

		// after successful registration - let's login the user
		return passport.authenticate('local')(req, res, () =>
		{
			return res.redirect('/contacts-list');
		});
	});
}

export function ProcessLogoutPage(req: Request, res: Response, next: NextFunction): void
{
	req.logOut();

	res.redirect('/login');
}