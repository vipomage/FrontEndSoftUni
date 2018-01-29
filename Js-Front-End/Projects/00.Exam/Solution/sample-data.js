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

renderAllPunshes(punshes);
renderSinglePunsh(punshes, "Punsh - The American Pie");

function renderAllPunshes(punshes) {
    for ( let obj in punshes ) {
        console.log( punshes[obj]['name'] );
    }
}

function renderSinglePunsh(punshes, punshName) {

    for ( let obj in punshes ) {
        if (punshes[obj]['name'] === punshName ) {
            
            console.log(
                punshes[obj]['name']+'\n' +
                'Type: '+punshes[obj]['type']+'\n' +
                'Contents: '+punshes[obj]['contents']+'\n' +
                'Description: '+punshes[obj]['description']);
        }
    }
}

