/*jslint node: true */
'use strict';

var config = require('../config');
var request = require('request');

var apiKey = '&api_key=' + config.lastfm.api;
var baseUrl = 'http://ws.audioscrobbler.com/2.0/';
var reqParms = '&format=json&period=3month&limit=9';
var lastfmUser = '&user=famyklebust';

exports.getTopArtists = function (callback) {
	if (!lastfmUser) {
		callback(0);
	} else {
		request(baseUrl + '?method=user.gettopartists' + reqParms + lastfmUser + '&api_key=' + apiKey, function (error, response, body) {
			var topArtists = JSON.parse(body);
			if (!topArtists.topartists) {
				callback(0);
			} else {
				callback(topArtists.topartists.artist);
			}
		});
	}
};