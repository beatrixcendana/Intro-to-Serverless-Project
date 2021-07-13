function getImage() {
    //if the value is not blank
    if (document.getElementById("name").value != '') {
        // I am going to get the output of text and append the heart
        $('#output').text(document.getElementById("name").value + "❤️")
    }
}