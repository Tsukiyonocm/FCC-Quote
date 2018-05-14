//Select QuoteBox for creating elements
const quoteBox = document.querySelector(".quote-box");

//Create Elements and attach classes
const quote = document.createElement("div");
quote.setAttribute("class", "quote");

//Attach as a child to QuoteBox
quoteBox.append(quote);



// Create a request variable and assign a new XMLHttpRequest object to it
var request = new XMLHttpRequest();

//Open a new connection, using the GET request on the URL endpoint 
request.open("GET", "https://talaikis.com/api/quotes/random/", true);

request.onload = function(){
    // Access JSON data
    var data = JSON.parse(this.response);
    
    if(request.status >= 200 && request.status < 400){

        //Create Quote Elements
        const p = document.createElement("p");
        let quoteString = '" ' + data.quote + ' "';

        quote.append(p);
        p.append(quoteString);

        //Create author elements
        const span = document.createElement("span");
        span.setAttribute("class", "author");
        let authorString = "- " + data.author;

        quote.append(span);
        span.append(authorString);
    }
    else {
        console.log("error");
    }
    
}

request.send();



// div class quote
// p + span + &quot; + p text + &quot;