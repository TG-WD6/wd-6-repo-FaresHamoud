// let arrayLike = document.querySelectorAll("div")
// console.log(arrayLike)

// // Gebruik Array.from() om er een nieuw array van te maken.

// console.log(Array.from(arrayLike));












// Onderzoek de volgende array methods: 







// filter()

// const arrayToBeFiltered = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const filtering = arrayToBeFiltered.filter(n => n >= 5);
// console.log(filtering);





// find() 

const arrayToBeFound = ['ab', '33', '434', 'cat', 'bob', '232', 'cat', '2', 1 , 22 , 3333, 22,]

// const animal = arrayToBeFound.find(findcat);
// console.log(animal);


// ⚠️it is finding the first value only and cannot be used to search for a string 

// console.log(arrayToBeFound.find((x) => x > 10));

// let findCat = arrayToBeFound.find((f) => f == 'cat')
// console.log(findCat);








// some() 

// const checkUsingSome = (a) => a === 'bob';
// const checkUsingSome2 = (a) => a === 'nann';
// console.log(arrayToBeFound.some(checkUsingSome));
// console.log(arrayToBeFound.some(checkUsingSome2))












// every()


// const arrayOfNumbers = [2, 10, 343,  5, 27, 4]
// function useEvery (n) {
//     return n > 1;
// }


// console.log(arrayOfNumbers.every(useEvery));




















// includes()




// const useIncludes = arrayToBeFound.includes('ab');

// if(useIncludes){
//     console.log("it is included")
// }
// else {
//     console.log("it is not included ")}