const aNumberArray = ['1', '5', '10', '7', '2', '6', '3', '4', '8', '9']
console.log(aNumberArray);




const fruitsoorten = ['Appel', 'Aardbei', 'banana', 'Peren', 'Kiwi'];
console.log(fruitsoorten);
console.log(fruitsoorten[0], fruitsoorten[1]);


var randomIndex = fruitsoorten[Math.floor(Math.random() * fruitsoorten.length)];
console.log(randomIndex)

// 5.1.7
fruitsoorten.splice(0, 1, 'peer');
console.log(fruitsoorten);



// Verwissel “Peer” en “Aardbei” van positie. Kan je dit ook al met/zonder Array method? 


let verwisseld = fruitsoorten.splice(0, 1, 'aardbei', 'peer', 'banana', 'peren', 'kiwi')
console.log(verwisseld);

