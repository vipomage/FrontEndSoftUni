let obj = {
    name: 'Izgrev',
    longitude: '95.243',
    latitude: '94.231',
    pokemons: {
        0: {
            name: 'Pikachu',
            power: 2000,
            evolvedFrom: 'none',
            evolvesTo: 'Raichu'
        },
        1: {
            name: 'Wartortle',
            power: 500,
            evolvedFrom: 'Squirtle',
            evolvesTo: 'Blastoise'
        },
        2: {
            name: 'CherryBerry',
            power: 9999,
            evolvedFrom: 'Cherry',
            evolvesTo: 'Berry'
        }
    }
};

function renderData( obj ) {
    console.log(
        `Location: ${obj[ 'name' ]}\n` +
        `Longitude: ${obj[ 'longitude' ]} Latitude: ${obj[ 'latitude' ]}`
    );
    console.log( 'Pokemons:' );
    for ( let index in obj[ 'pokemons' ] ) {
        let pokemon = obj[ 'pokemons' ][ index ];
        console.log(
            `###Name: ${pokemon[ 'name' ]}\n` +
            `###Power: ${pokemon[ 'power' ]}pp\n` +
            `###Evolved From: ${pokemon[ 'evolvedFrom' ]}\n` +
            `###Evolves To: ${pokemon[ 'evolvesTo' ]}` )
    }
}

renderData( obj );
