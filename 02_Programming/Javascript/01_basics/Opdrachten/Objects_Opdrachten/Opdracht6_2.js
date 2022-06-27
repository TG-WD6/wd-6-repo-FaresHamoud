// Maak een Club class die het volgende bijhoudt:
// Naam
// Type club
// Aantal :Leden



// class Club {
//     constructor(Naam, Typeclub, Leden) {
//         this.Naam = Naam;
//         this.Typeclub = Typeclub;
//         this.Leden = Leden;
//     }

// }



// Maak een Contactinformatie class aan en voeg die toe aan de Club class. De Contactinformatie houdt het volgende bij:
// Adres
// Telefoonnummer
// Contactpersoon


// class Contactinformatie extends Club {
//     constructor(Naam, Adres, Telefoonnummer, Contactpersoon) {
//         super(Naam);
//         this.Adres = Adres;
//         this.Telefoonnummer = Telefoonnummer;
//         this.Contactpersoon = Contactpersoon;
//     }
// }




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


class Club {
    constructor(Naam, Typeclub, Leden) {
        this.Naam = Naam;
        this.Typeclub = Typeclub;
        this.Leden = Leden;
    }
}

class Contactinformatie {
    constructor(Adres, Telefoonnummer, Contactpersoon) {
        this.Adres = Adres;
        this.Telefoonnummer = Telefoonnummer;
        this.Contactpersoon = Contactpersoon;

    }
}



let contact1 = new Contactinformatie('123straat 34b', 061476345, 'Linda')
let club1 = new Club('VLD', 'Volleyball', 34, contact1)

let contact2 = new Contactinformatie('532straat 43a', 061375345, 'Jan')
let club2 = new Club('RDM', 'jogging', 343, contact2)


let contact3 = new Contactinformatie('2straat 12c', 06142545, 'Marc')
let club3 = new Club('Heezen', 'Kayak', 532, contact3)

let contact4 = new Contactinformatie('ABstraat 5', 064255345, 'Steff')
let club4 = new Club('XtR', 'voetbal', 723, contact4)


let contact5 = new Contactinformatie('V straat 44', 064375345, 'Ruth')
let club5 = new Club('SuperC', 'cross-fit', 53, contact5)






let ClubArray = [club1, club2, club3, club4, club5]
for (let i = 0; i < ClubArray.length; i++) {
    console.log(ClubArray[i].Naam);
}


