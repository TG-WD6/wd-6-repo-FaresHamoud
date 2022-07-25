
const source = `./pokemon.json-master/pokedex.json`
fetch(source)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        fetchPokemon(data);
        // console.log(data);
        // const pokemon = [];
        // pokemon['name'] = data.name;
        // pokemon['id'] = data.id;

    }).catch((error) => {
        console.log(error);
        console.log('Failed to load json');
    })


function fetchPokemon(data) {
    // console.log(data[16].type);
const displayPokedex = (data) => {
    console.log(data);
}

}



// let userGenerationInput = document.querySelector(".generation-menu").value;

// let pokemonGenerationSelectRange = function () {
//     if (userGenerationInput.value = 1) {
//         pokemonGenerationSelect = 1 || pokemonGenerationSelect < 151;
//     }

//     else if (userGenerationInput.value = 2) {
//         pokemonGenerationSelect = 151 || pokemonGenerationSelect < 251;
//     }
//     else if (userGenerationInput.value = 3) {
//         pokemonGenerationSelect = 251 || pokemonGenerationSelect < 386;
//     }
//     else if (userGenerationInput.value = 4) {
//         pokemonGenerationSelect = 493 || pokemonGenerationSelect < 493;
//     }
//     else if (userGenerationInput.value = 5) {
//         pokemonGenerationSelect = 151 || pokemonGenerationSelect < 649;
//     }
//     else if (userGenerationInput.value = 6) {
//         pokemonGenerationSelect = 649 || pokemonGenerationSelect > 649;
//     }
// }


