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










// Gebruik Object.create() om een Object aan te maken. Doe dit voor elke Pet die je in de vorige opdracht hebt gemaakt




var createObj1 = Object.create(KoePet);
createObj1.naam = "milkiee";
createObj1.soort = "milky koe";
console.log(createObj1);




var createObj2 = Object.create(SpinPet);
createObj2.naam = "Harold";
createObj2.soort = "old spin";
console.log(createObj2);




var createObj3 = Object.create(hamsterPet)
createObj3.naam = "bill";
createObj3.soort = "lazy hamster";
console.log(createObj3);




var createObj4 = Object.create(petClass)
createObj4.naam = "bleh";
createObj4.soort = "blob fish";
console.log(createObj4);




var createObj5 = Object.create(CaviaPet)
createObj5.naam = "yula";
createObj5.soort = "jumpy cavia";
console.log(createObj5);