window.twttr = (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
      t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);
  
    t._e = [];
    t.ready = function(f) {
      t._e.push(f);

      twttr.widgets.createShareButton(
        "https:\/\/dev.twitter.com\/web\/tweet-button",
        document.getElementById("tweet-container"),
        {
          size: "large",
          text: "custom share text",
          hashtags: "example,demo",
          via: "twitterdev",
          related: "twitterapi,twitter"
        }
      );

    };
  
    return t;
  }(document, "script", "twitter-wjs"));

