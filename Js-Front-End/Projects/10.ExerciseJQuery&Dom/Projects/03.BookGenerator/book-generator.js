let id = 0;

function createBook( wrapper, titleIn, authorIn, isbnIn ) {
    container = $( '#wrapper' );

    let fragment = document.createDocumentFragment();
    let book = 'Book';
    id += 1;
    let containerDiv = $( '<div>' );
    let title = $( '<p>' ).addClass( 'title' );
    let author = $( '<p>' ).addClass( 'author' );
    let isbn = $( '<p>' ).addClass( 'isbn' );
    let selectBtn = $( '<button>Select</button>' );
    let deselectBtn = $( '<button>Deselect</button>' );
    containerDiv.attr( 'id', `${book}${id}` );

    title.text( titleIn );
    author.text( authorIn );
    isbn.text( isbnIn );

    containerDiv.appendTo( fragment );
    title.appendTo( containerDiv );
    author.appendTo( containerDiv );
    isbn.appendTo( containerDiv );
    selectBtn.appendTo( containerDiv );
    deselectBtn.appendTo( containerDiv );

    container.append( fragment );
}
function selectDeselect() {
    let select = $( 'button:contains("Select")' );    // or use jquerry includes
    let deSelect = $( 'button:contains("Deselect")' ); // or use jquerry includes
    let container = $( '#wrapper div' );
    select.on( 'click', () => {
        container.css( 'border', '2px solid blue' );
    } );
    deSelect.on( 'click', () => {
        container.css( 'border', 'none' );
    } );
}