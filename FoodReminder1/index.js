const fetch = require ('node-fetch')
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
           body: "Morning! Time to have breakfast 😋🥘. What ingredient would you like to have?",
           to: process.env.RECIPIENT_NUMBER,
           mediaUrl: "https://miro.medium.com/max/700/1*OtRzMDGD0qepGUCToZHZ3Q.jpeg",
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

        // just try to call my http trigger function 
        async function myMessage(){
            let httpfunc = "https://serverproject1.azurewebsites.net/api/tastyapirecipe"
    
            let resp = await fetch(httpfunc, {
                method: 'GET'
            });

            let data = await resp.json()
            return data;
        }

        let myResp = await myMessage()

        context.res = {
            myResp: myResp
        }
    }

    

