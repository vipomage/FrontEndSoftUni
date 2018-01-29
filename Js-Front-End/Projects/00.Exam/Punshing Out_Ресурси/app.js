let punshes = {};
function getData() {
    punshes = $.ajax( {
        url: `https://punsh-master.firebaseio.com/data/punshes.json`,
        success:renderAllPunshesInHTML,
        error: ''
    } );
}

getData();


function renderAllPunshesInHTML(punshes) {
    $('div.navbar').append('<div class="navbar-items"></div>');
    for ( let obj in punshes ) {

        let punsh = punshes[obj];
        $('div.navbar-items').append(
            `<div class="navbar-item">
                <h4>${punsh['name']}</h4>
        </div>`)
    }

    attachPunshesEvents(punshes);
}

function attachPunshesEvents(punshes) {
    $('div.navbar-item').on('click',(e)=>{
        $('div.navbar-items').remove();


        let target = $(e.target),div;
        let punshName;
        if (target.is('h4')) {
            punshName = e.target.innerHTML;
        }else{
            punshName = e.target.lastElementChild.textContent;
        }


        renderSinglePunshInHTML(punshes,punshName)
    })
}

function attachBackEvents(punshes) {
    $( 'div.content-heading' ).on( 'click', () => {
        $('div.content').replaceWith('<div class="content"></div>');
        renderAllPunshesInHTML(punshes);
        attachPunshesEvents(punshes);
    } );


}

function renderSinglePunshInHTML(punshes, punshName) {

    let container = $('<div class="content"></div>');
    for ( let obj in punshes ) {
        if (punshes[obj]['name'] === punshName ) {
            container.append(`
        <div class="content-header">
            <div class="content-heading">${ punshes[obj]['name']}</div>
        </div>
        <div class="punsh-data">
            <div class="punsh-type">
                <label>Type: </label>
                <h6>${ punshes[obj]['type']}</h6>
            </div>
            <div class="punsh-contents">
                <label>Contents: </label>
                <p>
                    ${ punshes[obj]['contents']}
                </p>
            </div>
            <div class="punsh-description">
                <label>Description: </label>
                <p>
                    ${punshes[obj]['description']}
                </p>
            </div>
        </div>
    </div>
    <div class="footer">
        <div class="footer-caption">
            <h5>&copy; CopyRight 2017 Sanity Web Design Studios. All rights reserved.</h5>
        </div>`);


        }
    }
    $('div.content').replaceWith(container);
    $('div.content-heading').css('cursor','pointer');
    attachBackEvents(punshes);
}