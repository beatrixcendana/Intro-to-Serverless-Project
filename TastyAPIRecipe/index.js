// const foodAPIKey = process.env.foodKey;
// const foodAPIHost = process.env.foodHost;
const fetch = require('node-fetch')
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');   
    const userInputRecipe = (req.query.userInputRecipe || (req.body && req.body.userInputRecipe));
   // const userTag = (req.query.tag || (req.body && req.body.tag));
   // const size = (req.query.size || (req.body && req.body.size));
    let resultData = await fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients="+ userInputRecipe+"&number=1&ignorePantry=true&ranking=1", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": process.env.foodKey,
            "x-rapidapi-host": process.env.foodHost
        }
    }).then(response => {
            context.log(response);
     })
        .catch(err => {
            console.error(err);
    });     
    
    let recipeData = await resultData;
    context.log(recipeData);
    //Show result to response body
    context.res = {
        // status: 200, /* Defaults to 200 */      
        //TODO: create objects for needed to show via Twilio API SMS, HTTP Timer trigger etc
        body: recipeData
    };
   
}