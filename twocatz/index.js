const fetch = require('node-fetch')

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    // function getNames() {
    //     //initialize the array
    //     var names = ["Shreya", "Emily", "Beau", "Evelyn", "Julia", "Daniel", "Fardeen"]
    //     var random_value = Math.floor(names.length * Math.random())
    //     var resultname = names[random_value]

    //     return resultname
    // }

    // let name1 = getNames()
    // let name2 = getNames()

    let name1 = req.query.name1
    let name2 = req.query.name2
    let name3 = req.query.name3
    let name4 = req.query.name4

    async function getCat(name){
        let endpoint = "https://cataas.com/cat/cute/says/" + name

        let resp = await fetch(endpoint, {
            method: 'GET'
        });
        
        let data = await resp.arrayBuffer()
        // we need to receive it as a buffer since this is an image we are receiving from the API
        // Buffer?? https://developer.mozilla.org/en-US/docs/Web/API/Blob
        
        var base64data = Buffer.from(data).toString('base64')
        //put what you want to turn into base64 inside "originaldata"
        //"originaldata" will be encoded in base64.

        return base64data;
    }

    //As a response
    let cat1 = await getCat(name1)
    let cat2 = await getCat(name2)
    let cat3 = await getCat(name3)
    let cat4 = await getCat(name4)

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: {
            cat1: cat1,
            cat2: cat2,
            cat3: cat3,
            cat4: cat4,
        }
    };
}