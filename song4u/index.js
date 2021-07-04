const querystring = require('querystring');
const fetch = require('node-fetch'); //use this to make a request
module.exports = async function (context, req) {
    context.log(req.body)
    const queryObject = querystring.parse(req.body);

    let resp = await fetch(queryObject.MediaUrl0,{
        /*The await expression causes async function execution to pause until a Promise is settled 
        (that is, fulfilled or rejected), and to resume execution of the async function after fulfillment. 
        When resumed, the value of the await expression is that of the fulfilled Promise*/
        method: 'GET',
    })

    // receive the response
    let data = await resp.arrayBuffer()
    // data holds this image that we just downloaded

    //now we are calling analyzeImage function
    let ageData = await analyzeImage(data)

    //we are not converting it.
    let age = ageData[0].faceAttributes.age

    let id = determine_generation (age)

    context.log(id)

    const songs = {"GenZ":"https://open.spotify.com/track/0SIAFU49FFHwR3QnT5Jx0k?si=1c12067c9f2b4fbf", 
        "GenY":"https://open.spotify.com/track/1Je1IMUlBXcx1Fz0WE7oPT?si=a04bbdf6ec4948b9", 
        "GenX":"https://open.spotify.com/track/4Zau4QvgyxWiWQ5KQrwL43?si=790d9e3ef2ed408d", 
        "BabyBoomers":"https://open.spotify.com/track/4gphxUgq0JSFv2BCLhNDiE?si=1abb329f2dc24f50", 
        "Unknown":"https://open.spotify.com/track/5ygDXis42ncn6kYG14lEVG?si=84b49b41d09d4d11"}

    let song = songs[id];

    let response = `We guessed you're part of this generation: ${id}! Happy listening! ${song}`;

    context.log(response)
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: response
    };
}

function determine_generation (age) {
    let id;
    if (age > 5 && age < 25) {
        id = "GenZ"
    }
    
    else if (age > 24 && age < 41) {
        id = "GenY"
    }

    else if (age > 40 && age < 57) {
        id = "GenX"
    }

    else if (age > 56 && age < 76) {
        id = "BabyBoomers"
    }

    else {
        id = "Unknown"
    }
    return id;
}
async function analyzeImage(img){
    const subscriptionKey = process.env.FaceAPI_KEY1;
    const uriBase = process.env.FaceAPI_ENDPOINT + '/face/v1.0/detect';
	// env variables (similar to .gitignore/.env file) to not expose personal info

    let params = new URLSearchParams({
	'returnFaceId': 'true',
	'returnFaceAttributes': 'age' //the question asks us to call for age data
    })

    // making the post request
    let resp = await fetch(uriBase + '?' + params.toString(),{ //create post request to that endpoint
        method: 'POST',
        body: img,
        // img is the parameter inputted
        headers: {
            'Content-Type' : 'application/octet-stream',
            'Ocp-Apim-Subscription-Key': subscriptionKey
        }
    })

    // receive the response
    let result = await resp.json();

    return result;
}

    