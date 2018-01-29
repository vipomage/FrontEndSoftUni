function addOrRem( arr ) {

    let myArr = [];
    for ( let i = 0; i < arr.length; i++ ) {
        let action = arr[ i ].split( ' ' )[ 0 ];
        let index = arr[ i ].split( ' ' )[ 1 ];

        if ( action === 'add' ) {
            myArr.push( index );
        }
        if ( action === 'remove' ) {
            myArr.splice( index, 1 );
        }
    }
    return myArr.join( '\n' );
}


console.log( addOrRem( [ 'add 3', 'add 5', 'add 7' ] ) );
console.log( addOrRem( [ 'add 3', 'add 5', 'remove 1', 'add 2' ] ) );
console.log( addOrRem( [ 'add 3', 'add 5', 'remove 2', 'remove 0', 'add 7' ] ) );