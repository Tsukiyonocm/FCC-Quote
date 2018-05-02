// Create a request variable and assign a new XMLHttpRequest object to it
var request = new XMLHttpRequest();

//Open a new connection, using the GET request on the URL endpoint 
request.open("GET", "https://talaikis.com/api/quotes/random/", true);

request.onload = function(){
    // Access JSON data
    var data = JSON.parse(this.response);
    
    if(request.status >= 200 && request.status < 400){
        console.log(data.quote);
        console.log(data.author);
        console.log(data.cat);
    }
    else {
        console.log("error");
    }
    
}

request.send();