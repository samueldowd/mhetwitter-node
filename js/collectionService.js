Tank.find({ size: 'small' }).where('createdDate').gt(oneYearAgo).exec(callback);

var db = connect('mongodb://admin:root@ds031877.mongolab.com:31877/heroku_app34284493');

var tweetCursor = db.mhetwitter.find( { validated: false } )

while (tweetCursor.hasNext()) {
   db.tweets.update(
   	{item: tweetCursor._id}
   	{
   		$set: {
   			tweetTime: tweetCursor.startedAtTime,
   			text: tweetCursor.object['text'],
   			hashtags: tweetCursor.object['hashtags'],
   			userMentions: tweetCursor.object['user_mentions'],
   			author: tweetCursor.object['author']
   		}
   	}

   	// db.tweetDoc.update(
   	// {item: 'tweetDoc'}
   	// {
   	// 	$set: {
   	// 		tweetCount: tweetCount++,
   	// 		text: tweetCursor.object['text'],
   	// 		hashtags: tweetCursor.object['hashtags'],
   	// 		userMentions: tweetCursor.object['user_mentions'],
   	// 		author: tweetCursor.object['author']
   	// 	}
   	// }


   	)
}




var name
var tweetCount


var tweet = new Tank({ size: name });
small.save(function (err) {
  if (err) return handleError(err);
  // saved!
})