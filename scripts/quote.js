let requestURL;
if (languageRUEN == 'ru') {
    requestURL = './translate/quoteru.json';
} else {
    requestURL = 'https://www.breakingbadapi.com/api/quotes';
}
//
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.send();
const quoteHTML = document.querySelector('.Quote');
const AuthorHTML = document.querySelector('.Author');
const Reload = document.querySelector('.reload');
let quotes;

function changeLanguageQuote () {
    if (languageRUEN == 'ru') {
        requestURL = '../translate/quoteru.json';
    } else {
        requestURL = 'https://www.breakingbadapi.com/api/quotes';
    }
    request.open('GET', requestURL);
    request.send();
    console.log(requestURL)
};
language.addEventListener('change',changeLanguageQuote)
request.onload = function () {
    if (request.status != 200) {
        return;
    }

    quotes = JSON.parse(request.response);
    const quoteRand = getRandomArbitrary(0, quotes.length);
    const quotesOBJ = quotes[quoteRand];
    quoteHTML.innerHTML = quotesOBJ.quote;
    AuthorHTML.innerHTML = quotesOBJ.author;
    Reload.style.display = 'block';
};
Reload.onclick = function () {
    const quoteRand = getRandomArbitrary(0, quotes.length);
    const quotesOBJ = quotes[quoteRand];
    quoteHTML.innerHTML = quotesOBJ.quote;
    AuthorHTML.innerHTML = quotesOBJ.author;
};
// while (flagQuotes) {
//     if(flagQuotes==2){
//         var quoteRand = getRandomArbitrary(0, quotes.length);
//         quoteHTML.innerHTML = array[quoteRand.quote];
//     }
// }
//
// quoteHTML.innerHTML = array[quoteRand.quote];
// const quoteObj = array[quoteRand];
// console.log(quoteObj.quote);
// console.log(quoteRand);
