const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries => {
    // for(const country of countries){
    //     console.log(country);
    // }
    const countriesContainer = document.getElementById('countries-container');
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add("col-12", "col-md-3");
        countryDiv.innerHTML = `
            <div class="country m-2 p-3 border border-warning rounded shadow-md>
                <h5>Name: <span class="text-warning">${country.name.common}</span></h5>
                <p>Capital: ${country.capital ? country.capital[0] : 'No Capital'}</p>
                <p>Flag: <img src="${country.flags.png}"></p>
                <button onclick="loadDetail('${country.cca2}')" class="btn btn-outline-warning">More Details</button>
            </div>
        `;
        countriesContainer.appendChild(countryDiv);
    });
}


const loadDetail = code =>{
    const url = `https://restcountries.com/v3.1/alpha/${code}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetails(data[0]))
}

const displayCountryDetails = details => {
    // console.log(details);
    const displayDetails = document.getElementById('modalBody');
        displayDetails.innerHTML = `
            <span class="close fs-2 p-1 position-absolute">&times;</span>
            <h5>Country Name: <span class="text-info">${details.name.common}</span></h5>
            <p><span class="fw-bold">Capital:</span> ${details.capital ? details.capital[0] : 'No Capital'}</p>
            <p><span class="fw-bold">Continents:</span> ${details.continents[0]}</p>
            <p><span class="fw-bold">Timezones:</span> ${details.timezones[0]}</p>
            <p>Flag: <img class="w-50" src="${details.flags.png}"></p>
        `;
        
        const modal = document.getElementById('myModal')
        const span = document.getElementsByClassName("close")[0];
        modal.style.display = "block";
        span.onclick = function() {
            modal.style.display = "none";
        }
}


loadCountries()