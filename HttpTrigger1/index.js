module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const password = req.query.password || (req.body && req.body.password)
    // if condition: to check if the user's parameter input of password equals letmein.
    // if it does, the output is "Access granted."
    let your_response
    if (password == "letmein") {
        your_response = "Access granted.";
    }

    // if not equal the correct password, output "Acess denied."
    else {
        your_response = "Access denied.";
    }
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: your_response
    };
}

