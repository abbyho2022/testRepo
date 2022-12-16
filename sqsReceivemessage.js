var AWS = require("aws-sdk");
// Set the region
AWS.config.update({ region: "ap-northeast-1" });

// Create an SQS service object
var sqs = new AWS.SQS({ apiVersion: "2022-10-21" });

var queueURL = "https://sqs.ap-northeast-1.amazonaws.com/234232853477/initial_quota_count_dev";

var params = {
  AttributeNames: ["SentTimestamp"],
  MaxNumberOfMessages: 1,
  MessageAttributeNames: ["All"],
  QueueUrl: queueURL,
  VisibilityTimeout: 0,
  WaitTimeSeconds: 0
};

sqs.receiveMessage(params, function(err, data) {
  if (err) {
    console.log("Receive Error", err);
  } else if (data.Messages) {
    console.log("Received Data:",data);
    var deleteParams = {
      QueueUrl: queueURL,
      ReceiptHandle: data.Messages[0].ReceiptHandle
    };
    sqs.deleteMessage(deleteParams, function(err, data) {
      if (err) {
        console.log("Delete Error", err);
      } else {
        console.log("Message Deleted", data);
      }
    });
  }
});