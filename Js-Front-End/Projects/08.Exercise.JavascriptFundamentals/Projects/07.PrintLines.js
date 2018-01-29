function printLine( arg ) {
    count = 0;
    while ( arg[ count ] !== 'Stop' ) {
        console.log( arg[ count ] );
        count++;
    }
}

printLine( [ 'Line 1', 'Line 2', 'Line 3', 'Stop' ] );
printLine( [ 3, 6, 5, 4, 'Stop' ] );