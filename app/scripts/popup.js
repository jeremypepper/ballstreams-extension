'use strict';
/*global $:false */
/*global _:false */
/*global ballstreams:false */


console.log('\'Allo \'Allo! Popup');
var apikey = '84fc473e0b8dba4e3c2dcc67ee1421ed';

function loggedIn() {
	$('form').hide();
	$('#main').show();
	$.ajax({
		type: 'GET',
		dataType: 'text',
		url: 'https://api.ballstreams.com/GetLive?' + $.param({
			key: apikey,
			token: localStorage.token
		})
	}).done(function(rawdata) {
		var data = JSON.parse(rawdata);
		if (data.schedule) {
			var template = ballstreams['score.hbs'];

			// var liveGames = _.filter(data.schedule, function(game) {
			// 	return game.isPlaying;
			// });
			var games = {};
			_.each(data.schedule, function(game) {
				var gameKey = game.awayTeam + "," + game.homeTeam;

				if (!games[gameKey]) {
					games[gameKey] = {};
				}
				games[gameKey][game.feedType] = game;
			});

			_.each(games, function(game) {
				$('#main .games').append($(template(_.values(game)[0])));
			});
		}
	}).fail(function() {
		console.log('error', arguments);
	});
}

if (localStorage.token) {
	loggedIn();
} else {
	$('form').show();
}

$('form').submit(function(event) {
	event.preventDefault();
	var username = $('#username').val();
	var password = $('#password').val();
	localStorage.username = username;
	$.ajax({
		type: 'POST',
		dataType: 'text',
		url: 'https://api.ballstreams.com/Login?',
		data: $.param({
			username: username,
			password: password,
			key: apikey
		})
	}).done(function(rawdata) {
		console.log(rawdata);
		var data = JSON.parse(rawdata);
		if (data.token) {
			localStorage.token = data.token;
			loggedIn();
		}
	}).fail(function(data) {
		console.log(data);
	});
});

$("#games").on("click", "a", function(event) {
	event.preventDefault();
});
