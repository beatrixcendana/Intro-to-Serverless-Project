function getImage(event) {
    event.preventDefault()
    var myform = document.getElementById("myform")
    //get image uploaded by user via the form
    let nameInput = document.getElementById("username");
    let fileInput = document.getElementById ("image");
    let file = fileInput.files[0]; // get image data

    var payload = new FormData(myform);
    console.log (payload)
    payload.append("file", file);
    $('#output').text("Thanks!")
    

    if (document.getElementById('username').value != '') {

        try {
            let url = "https://serverproject1.azurewebsites.net/api/bunnimage-upload"
            console.log("Image was uploaded, making POST request to Azure function")
            // create request to Azure function
            const resp = fetch (url, {
                method: 'POST',
                headers: {
                    'codename' : nameInput.value
                },
                body: payload
            });

            console.log ("POST request was made successfully");
            $('#output').text("Your image has been stored successfully!")

        } catch(err) {
            $('#output').text(err)
        }
        
    }

    else {
        alert("No name error.")
    }

    
}