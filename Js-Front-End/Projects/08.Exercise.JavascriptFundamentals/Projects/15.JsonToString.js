function jsonToString( input ) {

    let obj = {};
    for ( let kvPair in input ) {
        let key = input[ kvPair ].split( ' -> ' )[ 0 ];
        let value = input[ kvPair ].split( ' -> ' )[ 1 ];

        if ( !isNaN( value ) ) {
            obj[ key ] = Number( value );
        } else {
            obj[ key ] = value;
        }
    }
    return JSON.stringify( obj );
}


console.log( jsonToString( [ 'name -> Angel', 'surname -> Georgiev', 'age -> 20', 'grade -> 6.00', 'date -> 23/05/1995', 'town' +
' -> Sofia' ] ) );