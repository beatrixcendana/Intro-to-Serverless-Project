module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const password = req.query.password || req.body.password
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: password
    };
}

// 1. gets content from a request parameter called password 
// 2. returns it in the function's body
