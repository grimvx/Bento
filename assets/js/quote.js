// Logic for showing quote

function displayQuote() {
    if (CONFIG.quoteShow) { document.getElementById('quote').innerText = CONFIG.quoteText; }
};

displayQuote();