function product( arr ) {
    let count = 0;

    for ( let i = 0; i < arr.length; i++ ) {
        if ( arr[ i ] < 0 ) {
            count++;

            if ( arr[ i ] === 0 ) {
                return 'Positive';
            }
        }
    }
    if ( count % 2 === 0 ) {
        return 'Positive';
    } else {
        return 'Negative';
    }
}


console.log( product( [ '2', '3', '-1' ] ) );
console.log( product( [ '5', '4', '3' ] ) );
console.log( product( [ '-3', '-4', '5' ] ) );
console.log( product( [ '-3', '-10', '0' ] ) );