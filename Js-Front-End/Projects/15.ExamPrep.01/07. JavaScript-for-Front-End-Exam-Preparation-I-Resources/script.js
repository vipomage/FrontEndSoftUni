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
			`###Evolves To: ${poke[ 'evolvesTo' ]}` );
	}
}

function renderDataInHTML( location ) {
	let container = $( 'div.container' ).replaceWith(
		$( `<div class="container">` +
			`<div class="result">` +
			`<div class="location">` +
			`<h1 class="location-name">Location: ${location.name}</h1>` +
			`<div class="location-coordinates">` +
			`<h2 class="location-longitude">Longitude: ${location[ 'longitude' ]}</h2>`+
			`<h2 class="location-latitude" >Latitude: ${location[ 'latitude' ]}</h2>` +
			`</div>` +
			`</div>` +
			`</div>` +
			`</div>` +
			`<div class="pokemons"></div>` ) );
	let pokemons = location.pokemons;
	for ( let pokemon in pokemons ) {
		let poke = pokemons[ pokemon ];
		$( `<div class="pokemon">
				<div class="pokemon-title">${poke[ 'name' ]}</div>
				<div class="pokemon-stats">
					<div class="pokemon-name">Name: ${poke[ 'name' ]}</div>
					<div class="pokemon-power">Power: ${poke[ 'power' ]}pp</div>
					<div class="pokemon-evolved-from">Evolved From: ${poke[ 'evolvedFrom' ]}</div>
					<div class="pokemon-evolves-to">Evolves To: ${poke[ 'evolvesTo' ]}</div>
				</div> `
		).appendTo( $( 'div.pokemons' ) )
	}
}

function attachEvents() {
	let input = $( 'input.location-input' ).val();
	if ( input ) {
		$( 'div.result' ).append( `<div class="result-element">${input}</div>` );
		$( 'input.location-input' ).replaceWith( $( '<input type="text" class="location-input">' ) );
		$( 'input.location-input' ).focus();
	}
}

function enterKey() {
	$( window ).keydown( function ( event ) {
		if ( event.keyCode === 13 ) {
			event.preventDefault();
			getData();
			return false;
		}
	} );
}

function getData() {
	let input = $( 'input.location-input' ).val();
	if ( input ) {

		$( 'input.location-input' ).replaceWith( $( '<input class="location-input" >' ) );
		$( 'input.location-input' ).focus();
		$.ajax( {
			url: `https://pokemoncodex.firebaseio.com/locations/${input}.json`,
			success: displayData
		} );

		function displayData( location ) {
			if( location === null)
				$('.result').append($('<div class="error">Error loading' +
					' location.</div>')).show();
			else{
			$( 'div.result' ).replaceWith(
				$( `<div class="result" style="display:block">` +
					`<div class="location">`+
					`<h1 class="location-name">Location: ${location.name}</h1>` +
					`<div class="location-coordinates">` +
					`<h2 class="location-longitude">Longitude: ${location[ 'longitude' ]}</h2>` +
					`<h2 class="location-latitude">Latitude: ${location[ 'latitude' ]}</h2>` +
					`</div>` +
					`</div>` +
					`</div>` +
					`</div>` +
					`<div class="pokemons"></div>` ) );
			let pokemons = location.pokemons;

			let pokemonsDiv = $( '<div class="pokemons"></div>' );

			for ( let pokemon in pokemons ) {
				let poke = pokemons[ pokemon ];
				$( `<div class="pokemon">` +
					`<div class="pokemon-title">${poke[ 'name' ]}</div>` +
					`<div class="pokemon-stats">` +
					`<div class="pokemon-name">Name: ${poke[ 'name' ]}</div>` +
					`<div class="pokemon-power">Power: ${poke[ 'power' ]}pp</div>` +
					`<div class="pokemon-evolved-from">Evolved From: ${poke[ 'evolvedFrom' ]}</div>` +
					`<div class="pokemon-evolves-to">Evolves To: ${poke[ 'evolvesTo' ]}</div>` +
					`</div>`
				).appendTo( pokemonsDiv );
			}

			$( 'div.pokemons' ).replaceWith( pokemonsDiv );
			pokemonsDiv.appendTo( $( 'div.result' ) );

		}}
	}
}

