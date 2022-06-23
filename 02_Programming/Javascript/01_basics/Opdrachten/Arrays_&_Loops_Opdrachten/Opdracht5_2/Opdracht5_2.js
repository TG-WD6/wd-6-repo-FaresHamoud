

// 1. Loop door het array heen en log de items 1 voor 1 in je console.⚠️

// const dutchSports = ["voetbal","Hockey", "Schaatsen"];
// for (const i=0; i<dutchSports.lenght; i++){
//     console.log(dutchSports[i]);
// }







// 2. Doe nu hetzelfde met een for...in en een for...of loop

// let dutchSports = ["voetbal","Hockey", "Schaatsen"];
// for (const index in dutchSports){
//     console.log(index)
// }



// let dutchSports = ["voetbal","Hockey", "Schaatsen"];
// for (const item of dutchSports){
//     console.log(item)
// }






// 3. Maak een for loop die van de getallen 1 t/m 20 de even getallen logt.

// for (let i=0; i<21; i++){
//     console.log(i)
// }



// Maak nu een for-loop aan die drie keer draait.
// // 4. Maak daarbinnen een for-loop die 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 logt.


// for (let i=0; i<3; i++){
//     for(let i=1; i<11; i++)
//     console.log(i)
// }





// 5. Je console.log() toont nu 3x 1,2,3,4,5,6,7,8,9,10. Gebruik nu dezelfde 2 loops om eerst 1, 2,3,4,5,6,7,8,9,10 te loggen, vervolgens 2,4,6,8,10,12,14,16,18,20 en uiteindelijk 3,6,9,12,15,18,21,24,27,30.


// for (let i=1; i<=3; i++){
//     for(let a=1; a<11; a++)
//         // for(let i=1; i<21; i++)

//         console.log(i * a)
// }









// 6. Nu maken we het iets lastiger. De Reeks van Fibonacci is een lijst met getallen waarbij elk getal een opsomming is van de vorige 2 getallen.
// Begin met het array [0,1]. Maak vervolgens een loop die dit array vult met de eerste 50 getallen van de Reeks van Fibonacci. Log dit array.


function Fibonacci(n){
num = [0,1]
if (n <= 1){console.log(num[0])}
if (n == 2){console.log(...num)}

if(n>2){
    for(let i = 1; i<=(n-2); i++){
        num.push(num[num.lenght-1] + num[num.lenght-2])
    }
    console.log(...num)
}

}



Fibonacci(1)
Fibonacci(2)
Fibonacci(10)






















// practice
// let array = ["blink", 182]
// for (const index in array){
//     console.log(index)
// }



// for (const item of array){
//     console.log(item)
// }





// let bugsInCode = true;
// while (bugsInCode){
//     fixBugs()
//     if(needSleep) break;
// }


// let bugsInCode = 1;
// while (bugsInCode > 0){
//     console.log(bugsInCode)
//     bugsInCode += 2
//     if(bugsInCode == 3)continue;
//     bugsInCode -= 1
//     if(needSleep) break;
// }


// let writesBadCode = false;
// do {
// writesBadCode()
// }while (writesBadCode);