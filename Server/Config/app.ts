import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
//authentication modules
import session from 'express-session';
import passport from 'passport';
import passportLocal from "passport-local";

//modules for cors
import cors from 'cors';

//authentication objects
let localStrategy = passportLocal.Strategy; // alias
// need a user Model
import User from '../Models/user';

// module for authentication messaging and error management
import flash from 'connect-flash';

// module for database setup
import mongoose, { mongo } from 'mongoose';
// indexRouter
import indexRouter from "../Routes/index";
// add contactsRouter
import contactsRouter from "../Routes/contacts";

// Express Web App Configuration
const app = express();
export default app; // exports app as the default Object for this module

// DB config
import * as DBConfig from './db';
//connect mongoose
mongoose.connect((DBConfig.RemoteURI) ? DBConfig.RemoteURI : DBConfig.LocalURI);

const db = mongoose.connection; // alias for the mongoose connection
db.on("error", function()
{
	console.error("Connection Error")
});

db.once("open", function()
{
	console.log(`Connected to MongoDB at: ${DBConfig.HostName}`);
});

// view engine setup
app.set("views", path.join(__dirname, "../Views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../../Client")));
app.use(express.static(path.join(__dirname, "../../node_modules")));

// add support for cors 
app.use(cors());

// setup express session
app.use(session({
  secret:DBConfig.Seceret,
  saveUninitialized: false,
  resave: false
}));

// initialize connect-flash
app.use(flash());
// initialize passport
app.use(passport.initialize());
app.use(passport.session());

// implement an Auth Strategy - "local"  username / password
passport.use(User.createStrategy());

// serialize and deserialize user data(encripty and decripty)
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use("/", indexRouter);
//use contactsRouter
app.use("/contacts-list", contactsRouter);//defines a new area of website called contacts-list

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err:createError.HttpError, req:express.Request, res:express.Response, next:express.NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

//module.exports = app;
