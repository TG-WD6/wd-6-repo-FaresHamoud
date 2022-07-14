
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


function fetchPokemon(data){
    console.log(data[0].type);
}

// for(let pokemon of fetchPokemon){
//     output += `
//        <div class="pokedex-cards-container">
//         //   <img src="${./02_Programming\Javascript\eindopdracht\JS_Eindopdracht_Fares\JSON_cards\JSON_cards_2\pokemon.json-master}">
//           <p class="title">${item.title}</p>
//           <p class="pokemon-name">${fetchPokemon.name}</p>
//           </p>
//        </div>
//     `;
//  }