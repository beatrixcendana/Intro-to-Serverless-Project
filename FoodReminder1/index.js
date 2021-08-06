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
    }

// Just try to implement the food API into timer trigger function, but still not work. I will just comment this out. I might use some of the codes later.
// const twiAccountSid = process.env.TWILIO_SID;
// const twiAuthToken = process.env.TWILIO_TOKEN;
// const client = require('twilio')(twiAccountSid, twiAuthToken);
// // try tasty API
// const fetch = require('node-fetch')
// const express = require('express')
// const MessagingResponse = require('twilio').twiml.MessagingResponse;
// const bodyParser = require('body-parser');
// const app = express();
// const http = require('http');
// module.exports = async function (context, myTimer) {
//     var timeStamp = new Date().toISOString();
//     if (myTimer.IsPastDue) {
//         context.log('JavaScript is running late!');
//     }
//     client.messages
//         .create({
//             from: process.env.SENDER_NUMBER,
//             body: "Morning! Time to have breakfast :yum::shallow_pan_of_food:. What ingredient would you like to have?",
//             to: process.env.RECIPIENT_NUMBER,
//             mediaUrl: "https://miro.medium.com/max/700/1*OtRzMDGD0qepGUCToZHZ3Q.jpeg",
//         })
//         .then(message => {
//             context.log("Message sent");
//             context.res = {
//                 body: 'Text successfully sent'
//             };
         
//             let userInputRecipeFromSMS = '';
             
//              // 1. When message sent, then wait for Twiml response = userInputRecipe salad 
//              // 2. Response = userInputRecipe, call API and get response for recipe
//              // 3. When we have the recipe data like name, url etc., we send it as sms via Twilio 
//             app.post('/sms', (req, res) => {
//                 const twiml = new MessagingResponse();
//                 userInputRecipeFromSMS = req.body.Body;
//                 context.log(req.body.Body);
//               //Use SMS reply as input to call Api for recipes 
//               // remove the await  
//               let resultData = fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=" + userInputRecipeFromSMS + "&number=1&ignorePantry=true&ranking=1", {
//                     "method": "GET",
//                     "headers": {
//                         "x-rapidapi-key": process.env.foodKey,
//                         "x-rapidapi-host": process.env.foodHost
//                     }
//                 }).then(response => {
//                     context.log(response);
//                 }).catch(err => {
//                         console.error(err);
//                     });
                
//                 // remove the await
//                 let recipeData = resultData;
//                 context.log(recipeData);
//                 //Show result to response body
//                 context.res = {
//                     // status: 200, /* Defaults to 200 */      
//                     //TODO: create objects for needed to show via Twilio API SMS, HTTP Timer trigger etc
//                     body: recipeData
//                 };
//                 // SMS reply to update and fix 
//                 if (req.body.Body == userInputRecipeFromSMS) {
//                     twiml.message('recipe please!' + recipeData);
//                 } else if (req.body.Body == 'recipe yes!') {
//                     twiml.message('I need that');
//                 } else if (req.body.Body == 'recipe yes!' + userInputRecipe) {
//                     twiml.message(recipeData);
//                 } else if (req.body.Body == "") {
//                     twiml.message("Oops, this recipe is not available. Try again by sending us another ingredient.");
//                 } else {
//                     twiml.message(
//                         'Sorry, this recipe is not available. Try again by sending us another ingredient.'
//                     );
//                 }
//                 res.writeHead(200, { 'Content-Type': 'text/xml' });
//                 res.end(twiml.toString());
//             });
//             http.createServer(app).listen(1337, () => {
//                 console.log('Express server listening on port 1337');
//             });
//             context.done();
//         }).catch(err => {
//             context.log.error("Twilio Error: " + err.message + " -- " + err.code);
//             context.res = {
//                 status: 500,
//                 body: `Twilio Error Message: ${err.message}\nTwilio Error code: ${err.code}`
//             };
//             context.done();
//         });  
   
// }