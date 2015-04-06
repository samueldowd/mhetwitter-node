/* prompt> */ var mongoose = require('mongoose');

/* prompt> */ mongoose.connect('mongodb://admin:root@ds031877.mongolab.com:31877/heroku_app34284493');

/* prompt> */ var TweetSchema = new mongoose.Schema({
		parent: String,
		text: String,
		hashtags: Array,
		to: String,
		author: {
			author_alias: String,
			author_name: String,
			author_uri: String,
		},
		user_mentions: Array,
		tweet_id: String,
		tweet_uri: String,
		subtype: String,
		type: String,
	});

/* prompt> */ var tweetCreate = mongoose.model('tweetCreate', TweetSchema);