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





// fetch("./pokemon.json-master/pokedex.json")
//     .then(function (response) {
//         return response.json();
//     })
// .then(function (data) {
//     console.log(data);
// })

// // to be populated with cards 
// const pokedexCardsContainer = document.querySelector(".pokedex-cards-container");


// // getting user's input 
// const userNumberInput = document.querySelector(".input-field").value;
// const userGenerationInput = document.querySelector(".generation-menu").value;




// generatePokedex();{
//     console.log(userGenerationInput);
// }
    





// how to log in from json example, choose index of arrays?? 

fetch("./pokemon.json-master/pokedex.json")
    .then(function (response) {
        return response.json();
    })
.then(function (data) {
    for(i=0; i<data.length; i++){
        console.log(data[i].id + data[i].name)

    }
})