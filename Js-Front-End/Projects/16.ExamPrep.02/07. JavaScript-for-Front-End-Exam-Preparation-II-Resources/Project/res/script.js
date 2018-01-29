function renderDataInHTML( continents ) {
    let continent = continents[ 'Europe' ];
    let country = continents[ 'Europe' ][ 'countries' ][ 'Bulgaria' ];
    $( 'div.continents' ).append( $( `<div class="continent"><h5 class="continent-title">${continents[ 'Europe' ][ 'name' ]}</h5></div>` ) );
    $( 'div.continent-data' ).append( $( `
        <h2 class="continent-title">${continent[ 'name' ]}</h2>
        <h3 class="countries-title">Countries</h3>
        <div class="countries"></div>
        <div class="continent-image"></div>` ) );
    $( 'div.countries' ).append( $( '' +
        '<select class="dropdown-select">' +
        '<option disabled selected value> -- select an option -- </option>' +
        `<option value="${country[ 'name' ]}">${country[ 'name' ]}</option>` +
        '</select>' ) );
    $( 'div.continent-image' ).append( $( `<img src="res/images/${continent[ 'name' ].toLowerCase()}.png">` ) );

    if ( country[ 'politicalStatus' ] === 'Republic' ) {
        $( 'div.continent-country' ).append( $(
            `<div class="country-title">
                <h2>${country[ 'name' ]}</h2>
            </div>
            <div class="country-data">
                <div class="country-capital">
                    <strong>Capital:</strong> 
                    <div>${country[ 'capital' ]}</div>
                </div>
                <div class="country-official-language">
                    <strong>Official Language:</strong>
                    <div>${country[ 'officialLanguage' ]}</div>
                </div>
                <div class="country-population">
                    <strong>Population:</strong>
                    <div>${country[ 'population' ]}</div>
                </div>
                <div class="country-area">
                    <strong>Area:</strong> 
                    <div>${country[ 'area' ]} km<sup>2</sup></div>
                </div>
                <div class="country-political-status">
                    <strong>Political Status:</strong>
                    <div>${country[ 'politicalStatus' ]}</div>
                </div>
                <div class="country-president">
                    <strong>President:</strong>
                    <div>${country[ 'president' ]}</div>
                </div>
                <div class="country-official-currency">
                    <strong>Official Currency:</strong>
                    <div>${country[ 'officialCurrency' ]}</div>
                </div>
            </div>`
        ) )
    } else {
        $( 'div.continent-country' ).append( $(
            `<div class="country-title">
                <h2>${country[ 'name' ]}</h2>
            </div>
            <div class="country-data">
                <div class="country-capital">
                    <strong>Capital:</strong> 
                    <div>${country[ 'capital' ]}</div>
                </div>
                <div class="country-official-language">
                    <strong>Official Language:</strong>
                    <div>${country[ 'officialLanguage' ]}</div>
                </div>
                <div class="country-population">
                    <strong>Population:</strong>
                    <div>${country[ 'population' ]}</div>
                </div>
                <div class="country-area">
                    <strong>Area:</strong> 
                    <div>${country[ 'area' ]} km<sup>2</sup></div>
                </div>
                <div class="country-political-status">
                    <strong>Political Status:</strong>
                    <div>${country[ 'politicalStatus' ]}</div>
                </div>
                <div class="country-president">
                    <strong>Monarch:</strong>
                    <div>${country[ 'president' ]}</div>
                </div>
                <div class="country-official-currency">
                    <strong>Official Currency:</strong>
                    <div>${country[ 'officialCurrency' ]}</div>
                </div>
            </div>`
        ) )
    }
}

function attachEvents( continents ) {
    let continent = continents[ 'Europe' ];
    let country = continents[ 'Europe' ][ 'countries' ][ 'Bulgaria' ];
    let continentsNames = [];
}

function continentsRender( continents ) {

    for ( continentName in continents ) {
        $( 'div.continents' ).append( $( `<div class="continent"><h5 class="continent-title">${continentName}</h5></div>` ) );
    }


}

function continentData( continents, continentName ) {
    let continent = continents[ continentName ];
    let country = continents[ 'Europe' ][ 'countries' ][ 'Bulgaria' ];

    let container = $( 'div.continent-data' );
    container.replaceWith( $( `
        <div class="continent-data" style="display: inline-block">
        <h2 class="continent-title">${continent[ 'name' ]}</h2>
        <h3 class="countries-title">Countries</h3>
        <div class="countries"></div>
        <div class="continent-image"></div>
        </div>` ) );

    $( 'div.countries' ).append( $( '' +
        '<select class="dropdown-select">' +
        '<option disabled selected value "> -- select an option -- </option>' +
        '</select>' ) );
    $( 'div.continent-image' ).append( $( `<img src="res/images/${continent[ 'name' ].toLowerCase()}.png">` ) );
    for ( let country in continents[ continentName ][ 'countries' ] ) {
        $( 'select' ).append( $( `<option class="country-selection" value="${country}">${country}</option>` ) );

    }

    $( 'select.dropdown-select' ).on( 'change', function () {
        let country = $( 'select.dropdown-select' ).val();
        continentCountry( continents[ continentName ][ 'countries' ][ country ] );
    } );

}

function continentCountry( country ) {
    if ( country[ 'politicalStatus' ] === 'Republic' ) {
        $( 'div.continent-country' ).replaceWith( $(
            `<div class="continent-country" style="display: inline-block"><div class="country-title">
                <h2>${country[ 'name' ]}</h2>
            </div>
            <div class="country-data">
                <div class="country-capital">
                    <strong>Capital:</strong> 
                    <div>${country[ 'capital' ]}</div>
                </div>
                <div class="country-official-language">
                    <strong>Official Language:</strong>
                    <div>${country[ 'officialLanguage' ]}</div>
                </div>
                <div class="country-population">
                    <strong>Population:</strong>
                    <div>${country[ 'population' ]}</div>
                </div>
                <div class="country-area">
                    <strong>Area:</strong> 
                    <div>${country[ 'area' ]} km<sup>2</sup></div>
                </div>
                <div class="country-political-status">
                    <strong>Political Status:</strong>
                    <div>${country[ 'politicalStatus' ]}</div>
                </div>
                <div class="country-president">
                    <strong>President:</strong>
                    <div>${country[ 'president' ]}</div>
                </div>
                <div class="country-official-currency">
                    <strong>Official Currency:</strong>
                    <div>${country[ 'officialCurrency' ]}</div>
                </div>
            </div></div>`
        ) )
    } else {
        $( 'div.continent-country' ).replaceWith( $(
            `<div class="continent-country" style="display: inline-block"><div class="country-title">
                <h2>${country[ 'name' ]}</h2>
            </div>
            <div class="country-data">
                <div class="country-capital">
                    <strong>Capital:</strong> 
                    <div>${country[ 'capital' ]}</div>
                </div>
                <div class="country-official-language">
                    <strong>Official Language:</strong>
                    <div>${country[ 'officialLanguage' ]}</div>
                </div>
                <div class="country-population">
                    <strong>Population:</strong>
                    <div>${country[ 'population' ]}</div>
                </div>
                <div class="country-area">
                    <strong>Area:</strong> 
                    <div>${country[ 'area' ]} km<sup>2</sup></div>
                </div>
                <div class="country-political-status">
                    <strong>Political Status:</strong>
                    <div>${country[ 'politicalStatus' ]}</div>
                </div>
                <div class="country-president">
                    <strong>Monarch:</strong>
                    <div>${country[ 'monarch' ]}</div>
                </div>
                <div class="country-official-currency">
                    <strong>Official Currency:</strong>
                    <div>${country[ 'officialCurrency' ]}</div>
                </div>
            </div></div>`
        ) )
    }
}
//even i lost myself in my code
