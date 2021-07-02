var multipart = require('parse-multipart');
var fetch = require('node-fetch');

module.exports = async function (context, req) {
    // here's your boundary:
    var boundary = multipart.getBoundary(req.headers['content-type']);

    //var body = req.body
    var body = req.body

    // parse the body
    var parts = multipart.Parse(body, boundary);

    //we are not converting it.
    var image = parts[0].data

    //now we are calling analyzeImage function
    var result = await analyzeImage(image)

    let emotions = result[0].faceAttributes.emotion;

    let objects = Object.values(emotions);

    const main_emotion = Object.keys(emotions).find(key => emotions[key] === Math.max(...objects));

    let gifUrl = await findGifs(main_emotion) //main_emotion is a search parent


    context.res = {
        // status: 200, /* Defaults to 200 */
        body: gifUrl
    };
    console.log(result)
    context.done();
} 


async function analyzeImage(img){
    //change values while testing locally
    const subscriptionKey = process.env.FaceAPI_KEY1;
    const uriBase = process.env.FaceAPI_ENDPOINT + '/face/v1.0/detect';

    let params = new URLSearchParams({
        'returnFaceId': 'true',
        'returnFaceAttributes': 'emotion'   
    })

    //COMPLETE THE CODE
    let resp = await fetch(uriBase + '?' + params.toString(), {
        method: 'POST', 
        body: img,  // img being passed into this function

        headers: {
            'Content-Type': 'application/octet-stream',
            'Ocp-Apim-Subscription-Key': subscriptionKey
        }
    })

    let data = await resp.json();

    return data; 
}

async function findGifs(emotion) {
    const giphykey = process.env.giphy_KEY
    // copy the gif URL from the documentation and add ? plus parameter from documentation
    //api_key is parameter in this case
    let gifresponse = await fetch("https://api.giphy.com/v1/gifs/translate?api_key=" + giphykey + "&s=" + emotion) 

    //now we need to receive it
    let gifresp = await gifresponse.json()
    
    return gifresp.data.url
}