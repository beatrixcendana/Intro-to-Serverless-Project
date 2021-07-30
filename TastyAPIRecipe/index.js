const http = require("https");
const querystring = require('querystring');
const fetch = require('node-fetch');
module.exports = async function (context, req) {
    context.log(req.body)
    //const queryObject = querystring.parse(req.body);
    const userInputRecipe = (req.query.userInputRecipe || (req.body && req.body.userInputRecipe));
    const userTag = (req.query.tag || (req.body && req.body.tag));
    const TastyAPIoptions = await fetch (userInputRecipe,userTag,{
        "method": "GET",
        "hostname": "tasty.p.rapidapi.com",
        "port": null,
        "path": "/recipes/list?from=0&size=1&tags=" + userTag + "&q=" +userInputRecipe,
        "headers": {
            "x-rapidapi-key": "00f8d2ae4dmsh5da21a3af56a803p11c0b1jsn2fb3f647ffbd",
            "x-rapidapi-host": "tasty.p.rapidapi.com",
            "useQueryString": true
        }
    })
    

    const responseMessage = " ";
    
    const TastyAPIRequest = http.request(TastyAPIoptions, function (TastyAPIRequest) {
        const chunks = [];
        TastyAPIRequest.on("data", function (chunk) {
            chunks.push(chunk);
        });
        TastyAPIRequest.on("end", function () {
            const body = Buffer.concat(chunks);
            console.log(body.toString()); //To be removed when response message is getting data
            responseMessage = "User want a recipe for "+ userInputRecipe + 
                        "and the recommended recipes are " + body.toString();
        });
    });
    TastyAPIRequest.end();   
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}
