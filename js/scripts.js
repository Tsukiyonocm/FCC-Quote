//Select Button for new Quote
var reloadQuote = document.querySelector(".new-quote");
reloadQuote.addEventListener("click", function(){
    window.location.reload(false);
})

//Select QuoteBox for creating elements
const quoteBox = document.querySelector(".quote-box");

//Create Elements and attach classes
const quote = document.createElement("div");
quote.setAttribute("class", "quote");

//Attach as a child to QuoteBox
quoteBox.append(quote);







// ========== Quote API Information ====================================
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
        p.setAttribute("class", "quoteText");
        let quoteString =  data.quote;

        quote.append(p);
        p.append(quoteString);

        //Create author elements
        const span = document.createElement("span");
        span.setAttribute("class", "author");
        let authorString = "- " + data.author;

        quote.append(span);
        span.append(authorString);

        //Selecting Text to be used in Tweet
        var selectTweet = document.getElementsByClassName("quote")[0];
        var tweetText = selectTweet.textContent;

        //Selecting Tweet Button
        var tweetButton = document.getElementsByClassName("create-tweet")[0];
        
        //Apply class + formatting for URL Link
        for(var i = 0; i < tweetText.length; i++){
            tweetText = tweetText.replace(" ","+"); 
        }
        var tweetURL = "https://twitter.com/intent/tweet?text=" + tweetText;
        tweetButton.setAttribute("href", tweetURL);
        tweetButton.setAttribute("target", "_blank");

    }
    else {
        console.log("error");
    }
    
}

request.send();



// //Create a tweet


// createTweet.addEventListener("click", function(){
//     console.log("clicked");
// })