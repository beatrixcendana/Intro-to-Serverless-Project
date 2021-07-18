async function getImage(event) {
    event.preventDefault()
    var myform = document.getElementById("myform")
    //get image uploaded by user via the form
    let nameInput = document.getElementById("username");
    console.log (nameInput.value)
  
    let fileInput = document.getElementById ("image");
    let file = fileInput.files[0]; // get image data

    var payload = new FormData(myform);
    console.log (payload)
    payload.append("file", file);
    $('#output').text("Thanks!")
    

    if (document.getElementById('username').value != '') {

        try {
            let url = "https://serverproject1.azurewebsites.net/api/bunnimage-upload?code=qvtHouQGs5aqr4zmdpifA4BMhTU82no7rtrC2cwkwlCW5W3YrvaMkw=="
            console.log("Image was uploaded, making POST request to Azure function")
            // create request to Azure function
            const resp = await fetch (url, {
                method: 'POST',
                headers: {
                    codename : nameInput.value
                },
                body: payload
            });
            console.log("Image was uploaded, making POST request to Azure function")
            // Your image has been stored successfully!
            console.log("POST request was made successfully");
            $('#output').text("Your image has been stored successfully!")
        } catch(err) {
            $('#output').text(err)
        } 
    }

    else {
        alert("No name error.")
    }
    
}

async function downloadImage() {
  let username = document.getElementById('downloadusername').value
  console.log(username)
  if (username != '') {

    try {
      let url = "https://serverproject1.azurewebsites.net/api/bunnimage-download?code=zT2nAF2s/XLt9UDWJWETHLs1cC9x4DNcgJRKJhpjpAPvsJSAmepaRQ=="

    console.log("Got file name, making GET request to download image")
    fetch(url, {
      headers: {
        username: username
      }
    })
    // we can return response in JSON by put curly bracket
      .then(resp => {
        return resp.json()
      })
      .then(data => {
        console.log(data)
        console.log(data.downloadUri)
        window.open(data.downloadUri, "_self")
      });

    } catch(err) {
      alert(err)
    }


  } else {
    alert("No name error.")
  }
}