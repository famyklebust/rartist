/*jslint node: true */
'use strict';

// express
var express = require('express');
var app = express();

// depencencies
var cookieParser = require('cookie-parser');

// controllers
var lastfmEngine = require('./controllers/lastfm');

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static('public'));
app.use(cookieParser());

// declare variables
var lastfmUser, topArtistsList;

app.get('/', function (req, res) {
	if (!req.cookies.lastfmUser) {
		lastfmUser = 0;
		topArtistsList = 0;
	} else {
		lastfmUser = req.cookies.lastfmUser;
		lastfmEngine.getTopArtists(function (topArtists) {
			topArtistsList = topArtists;
		});
	}
	res.render('index', {
		title: 'rartist',
		lastfmUser: lastfmUser,
		topArtists: topArtistsList
	});
});

app.listen(3000, function () {
  console.log('rartist listening on port 3000');
});