
// 5.3.1

const dutchSports = ["voetball", "Hockey", "Schaatsen"];
// const addSportsToEnd = dutchSports.push('Zeilen', 'Zwemmen');
// console.log(dutchSports);






// 5.3.2
// const addSportsToBeginning = dutchSports.unshift('Volleybal')







// 5.3.3 Maak een nieuw array ballSports, met de balsporten uit dutchSports
// 5.3.4 Verwijder die items uit dutchSports.

// let ballSports = dutchSports.slice(0,1);
// console.log(ballSports);







// 5.3.5 Sorteer het dutchSports array.


// dutchSports.sort()
// console.log(dutchSports);





// 5.3.6 Log elk item in de console.

// for (let i=0; i<dutchSports.length; i++){
//     console.log(dutchSports[i]);
// }






// 5.3.7 Maak een nieuw array sportsLength, met daarin de lengte van elk item in het dutchSports array.


let sportsLength = dutchSports.map((i) => {return i.length})



// const sportsLength = (dutchSports.length);
// console.log(sportsLength);


// for (i=0; i<sportsLength; i++){
//     console.log(sportsLength[i]);

// }

// use .map() here!!! 