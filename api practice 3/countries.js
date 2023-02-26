const countryData = ()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data =>displayCountry(data))

}

const displayCountry = countries=>{
    const countriesContainer = document.getElementById('country-container');
    countries.forEach(country=>{
        console.log(country)
    const countrydiv = document.createElement('div');
    countrydiv.classList.add('countrylist');
    
      countrydiv.innerHTML=  `<h1>Country: ${country.name.common}</h1>`;

        countriesContainer.appendChild(countrydiv);
    })
    
   
}

countryData();