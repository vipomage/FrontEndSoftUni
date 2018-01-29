let punshes = {
    0: {
        name: "Punsh - The American Pie",
        type: "Strong",
        contents: "Some Apple Pie, Whiskey, Vodka, Orange Juice and some other things...",
        description: "By original recipe from the American Pie franchise, this punsh includes everything you would want in a college/university party."
    },
    1: {
        name: "Brendy Punsh",
        type: "Medium",
        contents: "Brendy, Apple Juice, Ice, Avocado Juice, some other strange fruits...",
        description: "The casual Brendy Punsh, quite expensive, nothing interesting here..."
    },
    2: {
        name: "Just Punsh it",
        type: "Sweet",
        contents: "Very Little Vodka, Orange Juice, Apple Juice, Banana Juice, Ice.",
        description: "A very comfortable taste for the lovers of weakly alchoholic drinks. The Just Pinsh It punsh is a sweet multi-vitamol drink, which cannot drunk you."
    }
};

//renderAllPunshesInHTML(punshes);
renderSinglePunshInHTML(punshes, "Punsh - The American Pie");


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
        </div>

            `);

            $('div.content-heading').css('cursor','pointer');
        }
    }


}