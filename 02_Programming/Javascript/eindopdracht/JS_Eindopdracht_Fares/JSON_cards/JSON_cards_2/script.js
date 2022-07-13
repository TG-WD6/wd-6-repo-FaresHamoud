
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

