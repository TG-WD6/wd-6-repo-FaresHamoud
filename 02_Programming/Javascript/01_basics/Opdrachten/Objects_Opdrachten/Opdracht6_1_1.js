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

function CaviaPet(naam, soort){
    this.naam = naam;
    this.soort = soort;
}

const caviaPet = new CaviaPet("Dave", "cavia");
console.log(caviaPet);








// ...................................








// literal constructor

function SpinPet(){
    this.naam = "Liam";
    this.soort = "spin";
}


const spinPet = new SpinPet();
console.log(spinPet);









// ...................................



// function constructor 

function KoePet(naam, soort){
    this.naam = naam
    this.soort = soort
}
let koePet= new KoePet("moo", "koe")
console.log(koePet);







// ...................................







// singleton constructor


let hamsterPet = new function(){
    this.naam = "jeff",
    this.soort = "hamster"
}
console.log(hamsterPet);










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
const MyPetClass = new petClass("Dave", "cavia")
console.log(MyPetClass);






