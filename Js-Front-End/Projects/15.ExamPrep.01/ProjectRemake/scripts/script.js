function renderDataInHTML( obj ) {
    $( 'div.location' ).replaceWith( $(
        `<div class="location">`+
            `<h1 class="location-name">Location: ${obj[ 'name' ]}</h1>`+
            `<div class="location-coordinates">`+
                `<h2 class="location-longitude">Longitude: ${obj[ 'longitude' ]}</h2>`+
                `<h2 class="location-latitude">Latitude: ${obj[ 'latitude' ]}</h2>`+
            `</div>`+
        `</div>`
    ) );
    let container = $('<div class="pokemons">');
    for ( let index in obj[ 'pokemons' ] ) {
        let pokemon = obj[ 'pokemons' ][ index ];
        container.append( $(
            `<div class="pokemon">`+
                `<div class="pokemon-title">${pokemon[ 'name' ]}</div>`+
                `<div class="pokemon-stats">`+
                    `<div class="pokemon-name">Name: ${pokemon[ 'name' ]}</div>`+
                    `<div class="pokemon-power">Power: ${pokemon[ 'power' ]}pp</div>`+
                    `<div class="pokemon-evolved-from">Evolved From: ${pokemon[ 'evolvedFrom' ]}</div>`+
                    `<div class="pokemon-evolves-to">Evolves To: ${pokemon[ 'evolvesTo' ]}</div>`+
                `</div>`+
            `</div>`
        ) );
    }
    $('div.pokemons').replaceWith(container);
}

function attachEvents( input ) {

    $('div.result').append($(`<div class="result-element">${input}</div>`));
    $("input.location-input").val("");


}

function getData(input) {
    $.ajax({
        url:`https://pokemoncodex.firebaseio.com/locations/${input}.json`,
        success:renderResponse
    });
}

function renderResponse( response ) {
    $('.result').show();
    renderDataInHTML(response);


}

