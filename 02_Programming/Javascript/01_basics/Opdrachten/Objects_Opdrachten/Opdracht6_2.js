// Maak een Club class die het volgende bijhoudt:
// Naam
// Type club
// Aantal :Leden



class Club {
    constructor(Naam, Typeclub, Leden) {
        this.Naam = Naam;
        this.Typeclub = Typeclub;
        this.Leden = Leden;
    }

}



// Maak een Contactinformatie class aan en voeg die toe aan de Club class. De Contactinformatie houdt het volgende bij:
// Adres
// Telefoonnummer
// Contactpersoon


class Contactinformatie extends Club {
    constructor(Naam, Adres, Telefoonnummer, Contactpersoon) {
        super(Naam);
        this.Adres = Adres;
        this.Telefoonnummer = Telefoonnummer;
        this.Contactpersoon = Contactpersoon;
    }
}


// Maak een array met 5 verschillende Clubs aan. Itereer door het array heen en log voor elke Club de naam, het telefoonnummer en de contactpersoon.









// not using extends, recommended by classmates

// class Club {
//     constructor(Naam, Typeclub, Leden, Contactinformatie) {
//         this.Naam = Naam;
//         this.Typeclub = Typeclub;
//         this.Leden = Leden;
//         this.Adres = Contactinformatie.Adres;
//         this.Telefoonnummer = Contactinformatie.Telefoonnummer;
//         this.Contactpersoon = Contactinformatie.Contactpersoon;

    
//     }

// }





// let clubsArray = [

//     new Club('mark', 'gym', 34, 'hevenstraat 32', '0613364544', 'Jens'),


// ]

// console.log(clubsArray);