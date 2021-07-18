async function y1k3s() {
    let url = `https://serverproject1.azurewebsites.net/api/twocatz?name1=${document.getElementById("name1").value}&name2=${document.getElementById("name2").value}&name3=${document.getElementById("name3").value}&name4=${document.getElementById("name4").value}`
    
    let resp = await fetch(url, {
      method: 'GET',
    });

    let data = await resp.json();

    let name1 = document.getElementById("name1").value
    let endpoint1= "data:image/png;base64," + data.cat1
    if(name1 != '') {
        document.getElementById("image1").src = endpoint1 //call to API
    }

    let name2 = document.getElementById("name2").value
    let endpoint2= "data:image/png;base64," + data.cat2
    if(name2 != '') {
        document.getElementById("image2").src = endpoint2 //call to API
    }

    let name3 = document.getElementById("name3").value
    let endpoint3= "data:image/png;base64," + data.cat3
    if(name3 != '') {
        document.getElementById("image3").src = endpoint3 //call to API
    }

    let name4 = document.getElementById("name4").value
    let endpoint4= "data:image/png;base64," + data.cat4
    if(name4 != '') {
        document.getElementById("image4").src = endpoint4 //call to API
    }
}