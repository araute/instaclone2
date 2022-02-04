/* Amplify Params - DO NOT EDIT
	API_INSTAGRAMCLONE_GRAPHQLAPIIDOUTPUT
	API_INSTAGRAMCLONE_USERTABLE_ARN
	API_INSTAGRAMCLONE_USERTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

var aws = require('aws-sdk');
var ddb = new aws.DynamoDB();

exports.handler = async (event, context) => {
  let date = new Date();
  let currentEpochTime = Math.floor(new Date().getTime() / 1000).toString();
  if (event.request.userAttributes.sub) {
    let params = {
      Item: {
        id: {S: event.request.userAttributes.sub},
        __typename: {S: 'User'},
        phone: {S: event.request.userAttributes.phone_number},
        profileId: {N: currentEpochTime},
        email: {S: event.request.userAttributes.email},
        addresses: {S: null},
        createdAt: {S: date.toISOString()},
        updatedAt: {S: date.toISOString()},
      },
      TableName: process.env.API_INSTAGRAMCLONE_USERTABLE_NAME,
    };

    try {
      await ddb.putItem(params).promise();
      console.log('Success');
    } catch (e) {
      console.log('Error', e.Message);
    }

    console.log('Success: Everything executed correctly');
    context.done(null, event);
  } else {
    console.log('Error: Nothing was writtent to DynamoDB');
    context.done(null, event);
  }
};
