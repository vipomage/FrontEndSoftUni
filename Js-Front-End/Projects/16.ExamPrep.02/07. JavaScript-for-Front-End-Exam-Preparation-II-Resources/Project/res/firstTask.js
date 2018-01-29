let continents = {
    Europe: {
        name: "Europe",
        countries: {
            Bulgaria: {
                name: "Bulgaria",
                capital: "Sofia",
                officialLanguage: "Bulgarian",
                population: 7000000,
                area: 111000,
                politicalStatus: "Republic",
                president: "Rumen Radev",
                officialCurrency: "LEV(BGN)"
            },
            Vatican: {
                name: "Vatican",
                capital: "Vatican City",
                officialLanguage: "Italian",
                population: 1000,
                area: 0.44,
                politicalStatus: "Monarchy",
                monarch: "Francis",
                officialCurrency: "Euro(EUR)"
            }
        }
    },
    Asia: {
        name: "Asia",
        countries: {
            Russia: {
                name: "Russia",
                capital: "Moscow",
                officialLanguage: "Russian",
                population: 144463451,
                area: 17075200,
                politicalStatus: "Republic",
                president: "Vladimir Putin",
                officialCurrency: "Russian ruble(RUB)"
            },
            China: {
                name: "China",
                capital: "Beijing",
                officialLanguage: "Chinese",
                population: 1403500365,
                area: 9596961,
                politicalStatus: "Republic",
                president: "Xi Jinping",
                officialCurrency: "Renminbi(CNY)"
            }
        }
    }
};


function renderAllContinents( continents ) {
    for ( let continent in continents ) {
        console.log( continent );
    }
}


function renderSingleContinent( continent ) {
    console.log( continent[ 'name' ] );
    console.log( 'Countries:' );
    for ( let country in continent[ 'countries' ] ) {
        console.log( '$$$' + country )
    }
}


function renderSingleCountry( country ) {
    if ( country.politicalStatus === 'Republic' ) {
        console.log(
            country.name + '\n' +
            'Capital: ' + country.capital + '\n' +
            'Official Language: ' + country.officialLanguage + '\n' +
            'Population: ' + country.population + '\n' +
            'Area: ' + country.area + ' km2' + '\n' +
            'Political Status: ' + country.politicalStatus + '\n' +
            'President: ' + country.president + '\n' +
            'Official Currency: ' + country.officialCurrency
        );
    } else {
        console.log(
            country.name + '\n' +
            'Capital: ' + country.capital + '\n' +
            'Official Language: ' + country.officialLanguage + '\n' +
            'Population: ' + country.population + '\n' +
            'Area: ' + country.area + ' km2' + '\n' +
            'Political Status: ' + country.politicalStatus + '\n' +
            'Monarch: ' + country.monarch + '\n' +
            'Official Currency: ' + country.officialCurrency
        );
    }
}


renderAllContinents( continents );
renderSingleContinent( continents[ 'Europe' ] );
renderSingleCountry( continents[ 'Europe' ][ 'countries' ][ 'Bulgaria' ] );