function calcs( arr ) {
    if ( arr[ 0 ] <= arr[ 1 ] ) {
        return Number( arr[ 0 ] * arr[ 1 ] );
    }
    if ( arr[ 0 ] > arr[ 1 ] ) {
        return Number( arr[ 0 ] / arr[ 1 ] );
    }
}

console.log( calcs( [ '2', '3' ] ) );
console.log( calcs( [ '13', '13' ] ) );
console.log( calcs( [ '3', '2' ] ) );
console.log( calcs( [ '144', '12' ] ) );