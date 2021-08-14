const fetch = require('node-fetch')
const express = require('express')
// const port = process.env.PORT || 3000
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const app = express();
const http = require('http');
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');   
    const userInputRecipe = (req.query.userInputRecipe || (req.body && req.body.userInputRecipe));
    
    app.set('port', process.env.PORT || 3002);
    app.post('/sms', async (req, res) => {
        const twiml = new MessagingResponse();
        userInputRecipeFromSMS = req.body.Body;
        context.log(req.body.Body);
   // const userTag = (req.query.tag || (req.body && req.body.tag));
   // const size = (req.query.size || (req.body && req.body.size));
    let resultData = await fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients="+ userInputRecipe+"&number=1&ignorePantry=true&ranking=1", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": process.env.foodKey,
            "x-rapidapi-host": process.env.foodHost
        }
    })
    // .then(response => {
    //         context.log(response);
    //  })
    //     .catch(err => {
    //         console.error(err);
    // });     
    
    let recipeData = await resultData;
    context.log(recipeData);
    //Show result to response body
    context.res = {
        // status: 200, /* Defaults to 200 */      
        //TODO: create objects for needed to show via Twilio API SMS, HTTP Timer trigger etc
        body: recipeData
    };
    // try context log
    context.log (done);

    // SMS reply to update and fix 
        if (req.body.Body == userInputRecipeFromSMS) {
            twiml.message('recipe please!' + recipeData);
        } else if (req.body.Body == 'recipe yes!') {
            twiml.message('I need that');
        } else if (req.body.Body == 'recipe yes!' + userInputRecipe) {
            twiml.message(recipeData);
        } else if (req.body.Body == "") {
            twiml.message("Oops, this recipe is not available. Try again by sending us another ingredient.");
        } else {
            twiml.message(
                'Sorry, this recipe is not available. Try again by sending us another ingredient.'
            );
        }
        res.writeHead(200, { 'Content-Type': 'text/xml' });
        res.end(twiml.toString());
        });

        http.createServer(app).listen(3002, () => {
          console.log("Example app listening at http://localhost:3002");
        })

    

        // .catch(err => {
        //     context.log.error("Twilio Error: " + err.message + " -- " + err.code);
        //     context.res = {
        //         status: 500,
        //         body: `Twilio Error Message: ${err.message}\nTwilio Error code: ${err.code}`
        //     };
        //     context.done();
        // });  
    
        // try context log
        //context.log (done);
        // context.done();
    }