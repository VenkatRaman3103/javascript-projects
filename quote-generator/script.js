let apiQoutes = [];
const quoteContainer = document.querySelector(".quote-container");
const qouteDis = document.querySelector(".quote");
const qoute_author = document.querySelector(".quote-author");
const loader = document.querySelector(".loader");

function newQuote() {
    const randomNum = Math.floor(Math.random() * (apiQoutes.length - 0) + 0);

    const quotes = apiQoutes[randomNum].text;
    qouteDis.textContent = quotes;

    const [author] = apiQoutes[randomNum].author.split(",");
    console.log(author);
    qoute_author.textContent = author !== "type.fit" ? author : "Unknown";
    author: "";
}

// Get quotes from API

async function getQuotes() {
    const apiUrl = "https://type.fit/api/quotes";
    const response = await fetch(apiUrl);
    apiQoutes = await response.json();

    newQuote();
}

function tweetQuote() {
    loading();
    const twitterUrl = `https://twitter.com/intent/tweet?text=${qouteDis.textContent} - ${qoute_author.textContent}`;
    window.open(twitterUrl, "_blank");
}

document.querySelector("#twitter").addEventListener("click", tweetQuote);
document.querySelector("#new-quote").addEventListener("click", newQuote);

getQuotes();
