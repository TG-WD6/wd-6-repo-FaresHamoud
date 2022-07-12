
    const fetchPokemon = () => {

        const source = `./pokemon.json-master/pokedex.json`
        fetch(source)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
            const pokemon = {};
            pokemon['name'] = data.name;
            pokemon['id'] = data.id;
            console.log(pokemon);
        });
    

    
    };

