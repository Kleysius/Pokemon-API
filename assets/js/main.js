
// async function getPokemon(name) {
//     let pokemons = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
//     pokemons = await pokemons.json();
//     console.log(pokemons);
// }

// Appel d'API de type GET avec méthode .then
function getPokemon(name) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(data => {
            data.json()
                .then(res => {
                    let container = document.querySelector('#container');
                    let content = document.createElement('div');
                    container.appendChild(content);

                    // Créer un conteneur pour l'image
                    let image = document.createElement('img');
                    image.src = res.sprites.front_default;
                    content.appendChild(image);

                    // Créer un conteneur pour le nom
                    let name = document.createElement('p');
                    name.innerHTML = res.name.charAt(0).toUpperCase() + res.name.slice(1);
                    content.appendChild(name);

                    // Créer un conteneur pour le type
                    let type = document.createElement('p');
                    type.innerHTML = `Type : ${convertType(res.types[0].type.name)}`;
                    content.appendChild(type);
                })

        })
}

function create() {
    let name = document.querySelector('#name').value;
    getPokemon(name)
}

function convertType(type) {
    switch (type) {
        case 'normal':
            return 'Normal';
        case 'fighting':
            return 'Combat';
        case 'flying':
            return 'Vol';
        case 'poison':
            return 'Poison';
        case 'ground':
            return 'Sol';
        case 'rock':
            return 'Roche';
        case 'bug':
            return 'Insecte';
        case 'ghost':
            return 'Spectre';
        case 'steel':
            return 'Acier';
        case 'fire':
            return 'Feu';
        case 'water':
            return 'Eau';
        case 'grass':
            return 'Plante';
        case 'electric':
            return 'Électrique';
        case 'psychic':
            return 'Psy';
        case 'ice':
            return 'Glace';
        case 'dragon':
            return 'Dragon';
        case 'dark':
            return 'Ténèbres';
        case 'fairy':
            return 'Fée';
        default:
            return type;
    }
}