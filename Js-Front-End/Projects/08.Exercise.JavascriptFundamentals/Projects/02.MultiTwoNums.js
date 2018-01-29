function multiply( arg1 ) {
    return Number( arg1[ 0 ] * arg1[ 1 ] );
}

console.log( multiply( [ '2', '3' ] ) );
console.log( multiply( [ '13', '13' ] ) );
console.log( multiply( [ '1', '2' ] ) );
console.log( multiply( [ '0', '50' ] ) );