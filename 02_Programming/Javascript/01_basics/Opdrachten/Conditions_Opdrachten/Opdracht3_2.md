1. Schrijf een If/Else blok die een eigen variabele controleert:

Gelijk aan 3?
Groter dan 4?
Groter dan 11?
Kleiner dan 3?


var x = 2;

if (x === 3) {
console.log('Success!');}
else console.log('No Match!');

if (x > 4) {
  console.log('Success!');}
  else console.log('No Match!');

if (x > 11) {
  console.log('Success!');}
  else console.log('No Match!');

if (x < 3) {
  console.log('Success!');}
  else console.log('No Match!');







2. 
<!-- ?? -->







3. 
var x = 0;

if (x === 1) {
console.log('Januari');}



else if (x === 2) {
  console.log('Februari')
}

else if (x === 3) {
  console.log('Maart')
}

else if (x === 4) {
  console.log('April')
}

else if (x === 5) {
  console.log('Mei')
}

else if (x === 6) {
  console.log('Juni')
}

else if (x === 7) {
  console.log('Juli')
}

else if (x === 8) {
  console.log('Augustus')
}

else if (x === 9) {
  console.log('September')
}

else if (x === 10) {
  console.log('October')
}

else if (x === 11) {
  console.log('November')
}

else if (x === 12) {
  console.log('December')
}
else console.log('Geen geldige maand!');




4. 
var maand = "0";

switch (maand) {
  case '1':
  console.log('Januari');
  break;


 case '2':
  console.log('Februari');
  break;


 case '3':
  console.log('Maart');
  break;


 case '4':
  console.log('April');
  break;

 case '5':
  console.log('Mei');
  break;

 case '6':
  console.log('Juni');
  break;

 case '7':
  console.log('Juli');
  break;

 case '8':
  console.log('Augustus');
  break;

 case '9':
  console.log('September');
  break;

 case '10':
  console.log('October');
  break;

   case '11':
  console.log('November');
  break;

   case '12':
  console.log('December');
  break;

  default:
  console.log('Geen geldige maan!');
}




5. 
let x = 3;
let results;

if (x<=4 && x>=0){
  results = 2;
} else {
  results = 5;
}

console.log(results)


Ternary Operator:

let x = 3;
let results;


(x<=4 && x>=0) ? results = 2 : results = 5;
console.log(results)