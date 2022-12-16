// Load the SDK for JavaScript
var AWS = require("aws-sdk");
// Set the region
AWS.config.update({ region: "ap-northeast-1" });

// Create an SQS service object
var sqs = new AWS.SQS({ apiVersion: "2022-10-21" });

var params = {};

sqs.listQueues(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);
  }
});


var posMsgParams = {
    DelaySeconds: 10,
    MessageBody: '{"Schema":"eztable","Table":"quota_count","Columns":["restaurant_id","available","open","close","created_at","effective_from","effective_to","ndays"],"Rows":[[12959,true,true,true,"2022-10-21 15:42:50","2022-10-21 15:42:50","2022-10-22 15:42:50",90]],"Action":"initial","id":"1666338170"} ',
    QueueUrl: "https://sqs.ap-northeast-1.amazonaws.com/234232853477/initial_quota_count"
   };

sqs.sendMessage(posMsgParams, function(err, data) {
    console.log("Done sendMessage")
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data);
    }
  });