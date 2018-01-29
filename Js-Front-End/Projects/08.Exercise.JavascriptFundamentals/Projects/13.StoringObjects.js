function store( arr ) {

    let studDict = [];
    for ( let i = 0; i < arr.length; i++ ) {
        let name = arr[ i ].split( ' -> ' )[ 0 ];
        let age = arr[ i ].split( ' -> ' )[ 1 ];
        let grade = arr[ i ].split( ' -> ' )[ 2 ];
        let obj = {name: name, age: age, grade: grade};
        studDict.push( obj );
    }
    return `Name: ${studDict[ 0 ].name}\nAge: ${studDict[ 0 ].age}\nGrade: ${studDict[ 0 ].grade}`;
}

console.log( store( [ 'Pesho -> 13 -> 6.00', 'Ivan -> 12 -> 5.57', 'Toni -> 13 -> 4.90' ] ) );