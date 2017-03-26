/*jslint node: true */
'use strict';

// express
var express = require('express');
var app = express();

// controllers
var lastfmEngine = require('./controllers/lastfm');

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static('public'));

app.get('/', function (req, res) {
	lastfmEngine.getTopArtists(function (topArtists) {
		res.render('index', {
			title: 'rartist',
			topArtists: topArtists
		});
	});
});

app.listen(3000, function () {
  console.log('rartist listening on port 3000');
});