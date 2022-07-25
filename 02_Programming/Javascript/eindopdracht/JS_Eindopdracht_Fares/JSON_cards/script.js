// let staticUrl = 'https://github.com/fanzeyi/pokemon.json/blob/master/items.json'

// getJSON(staticUrl, function (data) {
//     console.log(data);
// });

// function setup(){
//     loadJSON("https://raw.githubusercontent.com/fanzeyi/pokemon.json/17d33dc111ffcc12b016d6485152aa3b1939c214/items.json", gotData);
// }


// function gotData(data){
//     println(data);
// }


// ---------

// fetch("/pokemon.json-master/items.json").then(function (response){
//     return response.json();
// }).then(function (obj){
//     console.log(obj);
// })

// const jsonData= require('/pokemon.json-master/items.json'); 
// console.log(jsonData);



// ---------------------




// Access-Control-Allow-Origin;

// fetch("https://github.com/fanzeyi/pokemon.json")
// .then(response => {
//    return response.json();
// })
// .then(jsondata => console.log(jsondata));



// -------- to fetch a json from an url ⚠️console error: Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource

// Access-Control-Allow-Origin;

// fetch("https://github.com/fanzeyi/pokemon.json")
// .then(res => console.log(res))







// let http = new XMLHttpRequest();
// http.open("get", "pokedex.json", true);
// http.send();
// http.onload = function(){
//     if(this.readyState == 4 && this.status == 200){
//         let pokedex = JSON.parse(this.responseText);
//     }
// }



// const importPokemonData = async () => {
//     const result = fetch("./pokemon.json-master/pokedex.json")
//     const returnValue = result.then(response => response.json())
//     return await returnValue;
// }


// const pokemondata = await importPokemonData()
// console.log(pokemondata)






fetch("./pokemon.json-master/pokedex.json")
    .then(function (response) {
        return response.json();
    })

    .then(function (pokemonDataImport) {
        console.log(pokemonDataImport);
    })



// function impoertedData(){
//     let mydata = pokemonDataImport();
//     console.log(mydata)
// }


// .catch(() =>{
//     console.log(pokemonData);
// })


// function logIn (pokemonData.id){

// }
// .then(function (data) {
//     console.log(data);
// })

// // to be populated with cards 
// const pokedexCardsContainer = document.querySelector(".pokedex-cards-container");


// // getting user's input 
// const userNumberInput = document.querySelector(".input-field").value;
// const userGenerationInput = document.querySelector(".generation-menu").value;



const userGenerationInput = document.querySelector(".generation-menu").value;

function pokemoneGeneration() {
    if (userGenerationInput.value = 1) {
        pokemonGenerationSelect = 1 || pokemonGenerationSelect < 151;
    }

    else if (userGenerationInput.value = 2) {
        pokemonGenerationSelect = 151 || pokemonGenerationSelect < 251;
    }
    else if (userGenerationInput.value = 3) {
        pokemonGenerationSelect = 251 || pokemonGenerationSelect < 386;
    }
    else if (userGenerationInput.value = 4) {
        pokemonGenerationSelect = 493 || pokemonGenerationSelect < 493;
    }
    else if (userGenerationInput.value = 5) {
        pokemonGenerationSelect = 151 || pokemonGenerationSelect < 649;
    }
    else if (userGenerationInput.value = 6) {
        pokemonGenerationSelect = 649 || pokemonGenerationSelect > 649;
    }
}






let pickPokemon = pokemonDataImport.map(([$userNumberInput]) => {

})




function generatePokedex() {
    let userNumberInput = document.querySelector(".input-field").value;
    const userGenerationInput = document.querySelector(".generation-menu").value;
    console.log(userNumberInput, userGenerationInput);

    let pokemondData = pokemonDataImport();
    console.log(pokemondData);


}



