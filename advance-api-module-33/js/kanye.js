const loadData = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuote(data.quote))
}

const displayQuote = data => {
    const displayQuotes = document.getElementById('displayQuotes');
    displayQuotes.innerHTML = `
        <span class="d-block blockquote">${data}</span>
        <span>--Kanye West</span>
    `;
}