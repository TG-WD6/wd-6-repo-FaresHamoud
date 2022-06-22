// 1. Maak meerdere objects Pet met een naam en een soort. Maak een ander dier met elk van de 5 soorten constructor uit de voorbeelden en log deze in de console. Kijk bij elke ook naar de prototype - kan je een verschil ontdekken? 



// let pet = new Object();
// pet.naam = "max"
// pet.soort= "hond"

// let pet = new Object();
// pet.naam = "linda"
// pet.soort= "kat"


// let pet = new Object();
// pet.naam = "bert"
// pet.soort= "vogel"





// object constructor 



function Pet(naam, soort){
    this.naam = naam;
    this.soort = soort;
}


let pet1 = new Pet("dave", "cavia");
console.log(pet1);








// literal constructor
let Pet1 = {
    naam: "Dave",
    soort: "cavia"
};






// function constructor 
function Pet1(naam, soort){
    this.naam = Dave
    this.soort = cavia
}


// singleton constructor







// class-based constructor 