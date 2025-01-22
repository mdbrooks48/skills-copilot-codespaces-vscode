// Create web server
// npm install express
// npm install body-parser
// npm install mongoose
// npm install nodemon
// npm install ejs
// npm install express-sanitizer
// npm install method-override
// npm install express-session
// npm install passport
// npm install passport-local
// npm install passport-local-mongoose
// npm install connect-flash

// Import required modules
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var methodOverride = require("method-override");
var expressSanitizer = require("express-sanitizer");
var passport = require("passport");
var LocalStrategy = require("passport-local");
var passportLocalMongoose = require("passport-local-mongoose");
var flash = require("connect-flash");

// Connect to MongoDB
mongoose.connect("mongodb://localhost/comments");

// Create a schema for the comments
var commentSchema = new mongoose.Schema({
    text: String,