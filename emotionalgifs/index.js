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



    context.res = {
        // status: 200, /* Defaults to 200 */
        body: main_emotion
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