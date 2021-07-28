const twiAccountSid = process.env.TWILIO_SID;
const twiAuthToken = process.env.TWILIO_TOKEN;
const client = require('twilio')(twiAccountSid, twiAuthToken);
module.exports = async function (context, myTimer) {
    var timeStamp = new Date().toISOString();    
    if (myTimer.IsPastDue)
    {
        context.log('JavaScript is running late!');
    }
    client.messages
    .create({ from: process.env.SENDER_NUMBER,
           body: "It’s time to have lunch🍽️! What food/ingredients would you like to have?",
           to: process.env.RECIPIENT_NUMBER,
           mediaUrl: "https://peterattiamd.com/wp-content/uploads/2012/09/dan-gold-298710-1440x500.jpg",
       })
        .then(message => {             
           context.log("Message sent");
           context.res = {
               body: 'Text successfully sent'
           };
           context.log('JavaScript timer trigger done!', timeStamp);
           context.done();
        }).catch(err => {
          context.log.error("Twilio Error: " + err.message + " -- " + err.code);
          context.res = {
                   status: 500,
                   body: `Twilio Error Message: ${err.message}\nTwilio Error code: ${err.code}`
               };
          context.done();
        });
    }