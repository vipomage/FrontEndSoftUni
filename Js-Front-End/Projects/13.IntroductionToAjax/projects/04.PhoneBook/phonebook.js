$( '#btnLoad' ).on( 'click', () => {
    $.ajax(
        {
            url: 'https://softuniphonebook-b4f2c.firebaseio.com/.json',
            success: loadData
        }
    );

    function loadData( data ) {
        for ( let entry in data ) {
            $( '#phonebook' ).append( `<li>${data[ entry ].name}: ${data[ entry ].phone }</li>` );
        }
    }
} );

$( '#btnCreate' ).on( 'click', () => {
    let send = new XMLHttpRequest();
    let name = $( '#person' ).val();
    let phone = $( '#phone' ).val();

    //TODO Upload contact to firebase.....

    send.open('POST','https://softuniphonebook-b4f2c.firebaseio.com/.json',)

} );



