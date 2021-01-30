const quote = document.getElementById('quote');
const API_URL = "https://simple-quotes-api.herokuapp.com/random";


generateQuote(API_URL);

async function generateQuote(url) {
    const config = {
        cache: 'no-store',
        headers: {
            Accept: 'application/json',
        },
    };

    const res = await fetch(url, config);

    const data = await res.json();
    
    quote.innerHTML = data.text;
 
}