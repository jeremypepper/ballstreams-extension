'use strict';
/*global $:false */

console.log('\'Allo \'Allo! Popup');
var apikey = '84fc473e0b8dba4e3c2dcc67ee1421ed';

function loggedIn() {
	$('form').hide();
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
