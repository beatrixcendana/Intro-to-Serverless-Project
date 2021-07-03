const querystring = require('querystring');
const fetch = require('node-fetch');
module.exports = async function (context, req) {
    const queryObject = querystring.parse(req.body);

    var reqbody = req.body
    context.log(reqbody)

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: queryObject.MediaUrl0
    };
}
    