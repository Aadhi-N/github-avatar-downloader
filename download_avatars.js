var request = require('request');
var request = require('./secrets.js');

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, callback) {

	var options = {
		url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",

		headers: {
			'User-Agent': 'request',
		}
	};

	

	request(options, function(err, res, body) {
		callback(err, body);
	});
};


	getRepoContributors("jquery", "jquery", function (err, result) {
		console.log("Errors: ", err);

		console.log("Results: ", result);
	});