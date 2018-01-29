function renderData( location ) {
    let pokemons = location.pokemons;
    console.log(
        `Location: ${location.name}\n` +
        `Longitude: ${location[ 'longitude' ]} Latitude: ${location[ 'latitude' ]}\n` +
        `Pokemons:` );

    for ( let pokemon in pokemons ) {
        let poke = pokemons[ pokemon ];

        console.log( `###Name: ${poke[ 'name' ]}\n` +
            `###Power: ${poke[ 'power' ]}pp\n` +
            `###Evolved From: ${poke[ 'evolvedFrom' ]}\n` +
            `###Evolves To: ${poke[ 'evolvesTo' ]}`
        );
    }
}
let location = {
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
renderData(location);
