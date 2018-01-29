function reverse( arg ) {
    for ( let i = arg.length - 1; i >= 0; i-- ) {
        console.log( arg[ i ] );
    }
}

reverse( [ 10, 15, 20 ] );
reverse( [ 5, 5.5, 24, -3 ] );
reverse( [ 20, 1, 20, 1, 20 ] );