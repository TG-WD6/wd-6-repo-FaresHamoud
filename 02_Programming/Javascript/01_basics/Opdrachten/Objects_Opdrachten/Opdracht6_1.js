// 1. Maak meerdere objects Pet met een naam en een soort. Maak een ander dier met elk van de 5 soorten constructor uit de voorbeelden en log deze in de console. Kijk bij elke ook naar de prototype - kan je een verschil ontdekken? 



// let petdog = new Pet('naam', 'soort');
// pet.naam = "max"
// pet.soort= "hond"

// let petcat = new Pet('naam', 'soort');
// pet.naam = "linda"
// pet.soort= "kat"


// let petbird = new Pet('naam', 'soort');
// pet.naam = "bert"
// pet.soort= "vogel"









// ...................................







// object constructor 

// function Pet(naam, soort){
//     this.naam = naam;
//     this.soort = soort;
// }

// const Pet1 = new Pet("Dave", "cavia");
// console.log(Pet1);








// ...................................








// literal constructor

// function Pet(){
//     this.naam = "Dave";
//     this.soort = "cavia";
// }


// const Pet1 = new Pet();
// console.log(Pet1);









// ...................................



// function constructor 

// function Pet(naam, soort){
//     this.naam = naam
//     this.soort = soort
// }
// let Pet1 = new Pet("dave", "cavia")
// console.log(Pet1);







// ...................................







// singleton constructor


// let Pet1 = new function(){
//     this.naam = "Dave",
//     this.soort = "cavia"
// }
// console.log(Pet1);










// ...................................


// class-based constructor 

class petClass {
    constructor(naam, soort) {
        this.naam = naam
        this.soort = soort 
    // this.whatPet()   }
    // whatPet(){
    //     // console.log(`${this.name} dat is mijn pet`)
    }
}
const MyPet = new petClass("Dave", "cavia")
console.log(MyPet);






