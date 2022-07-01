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






fetch("./pokemon.json-master/items.json")
    .then(function (response) {
        return response.json();
    })
// .then(function (data) {
//     console.log(data);
// })




// user's input values 
const getValueInput = () => {
    let inputNumberByUser = document.getElementsByClassName("input-field").value;
    console.log(inputNumberByUser);}

    const getSelectedGen = () => {
        selectedGen = document.querySelector(".generation-menu");
        output = selectedGen.value;
        console.log(output);

    }