/* prompt> */ var mongoose = require('mongoose');

/* prompt> */ mongoose.connect('mongodb://admin:root@ds031877.mongolab.com:31877/heroku_app34284493');

/* prompt> */ var TweetSchema = new mongoose.Schema({
	id: Object,
	object: {
		parent: String,
		text: String,
		hashtags: Array,
		author: {
			author_alias: String,
			author_name: String,
			author_uri: String,
		},
		user_mentions: Array,
		tweet_id: String,
		subtype: String,
		type: String,
	},
	startedAtTime: {
		$date: Date,
	},
	verb: String,
	actor: String,
	context: String,
	type: String,
	});

/* prompt> */ var Tweet = mongoose.model('Tweet', TweetSchema);