function domDynamicForm() {
    let container = $( 'div#content' ).addClass( 'items-control' ); //or  attr('class','items-control);
    let addCtrlsDiv = $( '<div id="add-controls">' );
    let labelTxtFOne = $( '<label for="fieldOne">Enter text:</label>' );
    let textFieldOne = $( '<input class="fieldOne" type="text">' );
    let addBtn = $( '<a class="button add" style="display:inline-block">Add</a>' );

    labelTxtFOne.appendTo( addCtrlsDiv );
    textFieldOne.appendTo( addCtrlsDiv );
    addBtn.appendTo( addCtrlsDiv );
    //Add-Controls

    let searchCtrlsDiv = $( '<div id="search-conrols">' );
    let searchText = $( '<label for="search-field">Search:</label>' );
    let searchInput = $( '<input class="search-field">' );

    searchText.appendTo( searchCtrlsDiv );
    searchInput.appendTo( searchCtrlsDiv );
    //search-controls

    let resultDiv = $( '<div class="result-controls">' );
    let unsortedList = $( '<ul class="items-list">' );
    unsortedList.appendTo( resultDiv );

    addCtrlsDiv.appendTo( container );
    searchCtrlsDiv.appendTo( container );
    resultDiv.appendTo( container );
    //result addition + button functionalities

    $( 'a.button:contains("Add")' ).on( 'click', () => {

        let text = $( 'input.fieldOne' ).val();
        let item = $( `<li class="list-item"><a class="button">X</a><strong>${text}</strong></li>` );
        if (text!==""){
            $('input.fieldOne').css('background','white');
            item.appendTo( unsortedList );
            unsortedList.appendTo( resultDiv );
        }else {
            $('input.fieldOne').css('background','red');
        }

    } );

    $( 'ul' ).on( 'click', 'a:contains("X")', function () { // this line here Made me cry :D
        $( this ).parent().remove();
    } );

    $( 'input.search-field' ).keyup( 'input.search-field', () => {
        let text = $( 'input.search-field' ).val();
        let items = $( 'li.list-item strong' ).map( function () {
            return $( this ).text();
        } ).get();

        for ( let i = 0; i < items.length; i++ ) { //i know those lowerCase checks :D judge FTW
            if ( items[ i ].toLowerCase().includes( text.toLowerCase() ) ) {
                $( `strong:contains(${items[ i ]})` ).parent().show();
            } else {
                $( `strong:contains(${items[ i ]})` ).parent().hide();
            }
        }
    } );
}




