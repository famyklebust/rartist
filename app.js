/*jslint node: true */
'use strict';

// express
var express = require('express');
var app = express();

// depencencies
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// controllers
var lastfmEngine = require('./controllers/lastfm');

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static('public'));
app.use(cookieParser());
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// declare variables
var lastfmUser, topArtists;

app.get('/', function (req, res) {
	topArtists = 0;
	if (!req.cookies.lastfmUser) {
		lastfmUser = 0;
	} else {
		lastfmUser = req.cookies.lastfmUser;
	}
	res.render('index', {
		title: 'rartist',
		lastfmUser: lastfmUser,
		topArtists: topArtists
	});
});

app.post('/', urlencodedParser, function (req, res) {
	if (!req.body) {
		res.redirect('/');
	} else {
		res.cookie('lastfmUser', req.body.username);
		res.redirect('/');
	}
});

app.get('/recommend', function (req, res) {
	if (!req.cookies.lastfmUser) {
		lastfmUser = 0;
		topArtists = 0;
	} else {
		lastfmUser = req.cookies.lastfmUser;
		lastfmEngine.getTopArtists(function (topArtists) {
			res.render('index', {
				title: 'rartist',
				lastfmUser: lastfmUser,
				topArtists: topArtists
			});
		});
	}
});

app.listen(3000, function () {
  console.log('rartist listening on port 3000');
});