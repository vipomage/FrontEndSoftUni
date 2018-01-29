function solve( parameters ) {
    let arr = parameters.slice( 1 );
    let outputArr = new Array( Number( parameters[ 0 ] ) );
    for ( let j = 0; j < outputArr.length; j++ ) {
        outputArr[ j ] = 0;
    }
    for ( let i = 0; i < arr.length; i++ ) {
        let call = arr[ i ].split( " " );
        outputArr[ Number( call[ 0 ] ) ] = Number( call[ 2 ] );
    }
    return outputArr.join( "\n" );
}


console.log( solve( [ "3", "0 - 5", "1 - 6", "2 - 7" ] ) );
console.log( solve( [ "2", "0 - 5", "0 - 6", "0 - 7" ] ) );
console.log( solve( [ "5", "0 - 3", "3 - -1", "4 - 2" ] ) );