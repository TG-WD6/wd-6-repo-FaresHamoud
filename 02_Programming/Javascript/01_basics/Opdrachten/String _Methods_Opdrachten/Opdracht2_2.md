1. Wat doet substring() als het eerste getal hoger is dan het tweede getal?
(substring will swap those 2 arguments.)


let somekittens = "De poes van de buurman heeft kittens gehad! Hij vraagt of wij nog kittens willen.";

let result = somekittens.substring(1, 7);
console.log(result)

let result2 = somekittens.substring(6, 2);
console.log(result2)





2. Wat doet slice() als het eerste getal hoger is dan het tweede getal?
slice() will return the empty string. ("")

let result = somekittens.slice(8, 3);
console.log(result)





3. Wat doet substring() bij negatieve waardes?
If either argument is negative, it is treated as if it were 0.

let result = somekittens.substring(-4, 7);
console.log(result)

De poes



4. Wat doet slice() bij negatieve waardes?
If start is negative: sets char from the end of string.
If stop is negative: sets stop to: string.length – Math.abs(stop) (original value), except bounded at 0 (thus, Math.max(0, string.length + stop)) 



let result = somekittens.slice(-1);
console.log(result)

.


let result2 = somekittens.slice(-2, 4);
console.log(result2)


(no result)