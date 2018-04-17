var request = require('request');
var secrets = require('./secrets.js');
var fs = require('fs');


console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, callback) {

	var options = {
		url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",

		headers: {
			'User-Agent': 'request',
			'Authorization': 'token ' + secrets.GITHUB_TOKEN,
		}
	};

	request(options, function(err, res, body) {
		callback(err, JSON.parse(body));
		// JSON.parse(body).forEach(function (contributor) 

		});
};

function downloadImageByURL(url, filePath) {
	request.get(url)
	request.pipe(fs.createWriteStream(filePath));
}

	getRepoContributors("jquery", "jquery", function (err, result) {
		console.log("Errors: ", err);

		result.forEach(function(contributor) {
			console.log(contributor.avatar_url)
		});
	});