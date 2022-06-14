1. Wat is het verschil tussen == en ===?
== Returns true if the operands are equal, === Returns true if the operands are equal and of the same type.


2. Wat is het verschil tussen > en >=? En tussen < en <=?
 ">" greter than, ">=" greater than or equal
 "<" lesser than, "<=" lesser than or equal to





 3. Schrijf de If conditie zo, dat je alleen “Result!” ziet als x==4 en y==8
let result= "result!"
let x = 4;
let y = 8

 if (x==4 && y==8) {console.log(result);}


 4. Schrijf de If conditie zo, dat je alleen “Result!” ziet als x==4 of y==8
let result= "result!"
let x = 4;
let y = 3

 if (x==4 || y==8) {console.log(result);}


 5. Zet nu de console.log(“Results”) in een Else { } na de If. Kan je de conditie omdraaien zodat je alsnog “Results!” te zien krijgt?
let result = "result!"
let x = 4;
let y = 8

 if (x==4) {console.log(result);}
 else if (y==8) {console.log(result);}



6. Kan je het vorige antwoord ook geven zonder || te gebruiken?

<!-- ????? -->





7. 8. 9. 10. 
let a = 45;

if (a > 5 && a < 10) 
{console.log("result!");
} 
else if (a >= 11 && a <= 21)
{console.log("result!");
} 
else if 
  (a === 21 || a === 23)
  {console.log("result!");
} 
else if (a < 32 || (a >= 40 && a <= 45))
{console.log("result!");
} 


else {console.log("no result!");
} 


11. 
nee, geen verandering