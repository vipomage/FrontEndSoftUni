let punshes = {
    0: {
        name: "One Punsh Man",
        type: "Strong",
        contents: "Very little Vodka, Very little Brendy, Very little Wine, Very little Whiskey, Very little Tequila and a lot of Watermelon Juice.",
        description: "This punsh was discovered in an unknown house party, when there was almost no alcohol left, and the people had to combine a little from every alchohol. One Punsh of this is enough to knock you down for good, hence the name."
    },
    1: {
        name: "Wine Punsh",
        type: "Sweet",
        contents: "Wine, Apple Juice, Ice.",
        description: "Casual Wine Punsh, for the ladies that love wine. It is not very strong, it is actually sweet. Sweet enough to make them sweetly drunk and playful."
    },
    2: {
        name: "Punsh Out",
        type: "Sweet",
        contents: "Champagne, Watermellon Juice, Ice.",
        description: "This is a very sweet, almost non-alchoholic, punsh. Very suitable for ladies, which want to keep their manners but have a little fun at a party."
    }
};
renderAllPunshesInHTML(punshes);
function renderAllPunshesInHTML(punshes) {
    $('div.navbar').append('<div class="navbar-items"></div>');
    for ( let obj in punshes ) {
        let punsh = punshes[obj];

        $('div.navbar-items').append(
            `<div class="navbar-item">
                <h4>${punsh['name']}</h4>
        </div>`)
    }
}
attachPunshesEvents(punshes);

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

    for ( let obj in punshes ) {
        if (punshes[obj]['name'] === punshName ) {
            $('div.content').append(`
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

            $('div.content-heading').css('cursor','pointer');
        }
    }

    attachBackEvents(punshes);
}