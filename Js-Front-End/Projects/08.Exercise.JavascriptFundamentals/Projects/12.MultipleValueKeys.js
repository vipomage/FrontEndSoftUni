function dictEntry( arr ) {
    let dict = {};
    for ( let i = 0; i < arr.length; i++ ) {
        if ( arr[ i ].split( ' ' ).length !== 1 ) {
            let key = arr[ i ].split( ' ' )[ 0 ];
            let value = arr[ i ].split( ' ' )[ 1 ];
            if ( dict.hasOwnProperty( key ) ) {
                let tempArr = dict[ key ];
                tempArr.push( value );
                dict[ key ] = tempArr;
            } else {
                dict[ key ] = [ value ];
            }
        } else {
            let key = arr[ i ].split( ' ' )[ 0 ];
            if ( dict[ key ] !== undefined ) {
                console.log( dict[ key ].join( '\n' ) );
            } else {
                console.log( 'None' );
            }
        }
    }
}


dictEntry( [ 'key value', 'key eulav', 'test tset', 'key' ] );
dictEntry( [ '3 test', '3 test1', '4 test2', '4 test3', '4 test5', '4' ] );
dictEntry( [ '3 bla', '3 alb', '2' ] );