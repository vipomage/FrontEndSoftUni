function jsonParse( arr ) {

    for ( let key in arr ) {
        let str = arr[ key ];
        let obj = JSON.parse( str );
        console.log( `Name: ${obj.name}\nAge: ${obj.age}\nDate: ${obj.date}` );
    }
}

jsonParse( [
    '{"name":"Gosho","age":10,"date":"19/06/2005"}',
    '{"name":"Tosho","age":11,"date":"04/04/2005"}',
    '{"name":"Maria","age":24,"date":"31/12/1996"}'
] );