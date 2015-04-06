var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:root@ds031877.mongolab.com:31877/heroku_app34284493');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {

	/*
		{
			tweetCount: 225,
			dates: [DateObject(03/04/2014), DateObject(04/15/2015)]}
			tweetIds: ['5515e9446d3f870de8ac135f', "5515e9446d3f870de8ac1360"]

	*/
	var tweetDocument = mongoose.Schema({
	    tweetCount: Number
	    // Min and Max Dates
	    dates: [Date, Date]
	    // '0100': [count, sentiment]
	    times: {'time': [Number, Number]}
	    tweetObjects: Array
	})

  // yay!
});