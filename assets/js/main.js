
// async function getPokemon(name) {
//     let pokemons = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
//     pokemons = await pokemons.json();
//     console.log(pokemons);
// }



// Appel d'API de type GET avec méthode .then
function getPokemon(name) {
    fetch(`https://pokebuildapi.fr/api/v1/pokemon/${name}`) 
        .then(data => {
            data.json()
                .then(res => {
                    let container = document.querySelector('#container');
                    let content = document.createElement('div');
                    container.appendChild(content);

                    // Créer un conteneur pour l'image
                    let image = document.createElement('img');
                    image.src = res.image;
                    content.appendChild(image);

                    // Créer un conteneur pour l'id
                    let id = document.createElement('p');
                    id.className = "idPokemon";
                    id.innerHTML = `No. ${res.id}`;
                    content.appendChild(id);

                    // Créer un conteneur pour le nom
                    let name = document.createElement('p');
                    name.innerHTML = res.name;
                    content.appendChild(name);

                    // Créer un conteneur pour le type 1
                    let type = document.createElement('p');
                    type.innerHTML = "Type : " + createStringType(res.apiTypes);
                    content.appendChild(type);

                    content.addEventListener('mousemove', (e) => {
                        const xAxis = (content.offsetWidth / 2 - e.pageX + content.offsetLeft) / 15 * 3;
                        const yAxis = (content.offsetHeight / 2 - e.pageY + content.offsetTop) / 15 * 3;
                        content.style.transform = "perspective(2000px) rotateY(" + xAxis + "deg) rotateX(" + yAxis + "deg)";
                    });
                    content.addEventListener('mouseenter', () => {
                        content.style.transition = '0.1s';
                    });
                    content.addEventListener('mouseleave', () => {
                        content.style.transform = 'rotateY(0deg) rotateX(0deg)';
                        content.style.transition = 'all 0.5s ease';
                    });
                })
        })
}

function getPokemonId(id) {
    fetch(`https://pokebuildapi.fr/api/v1/pokemon/${id}`)
        .then(data => {
            data.json()
                .then(res => {
                    let container = document.querySelector('#container');
                    let content = document.createElement('div');
                    container.appendChild(content);

                    // Créer un conteneur pour l'image
                    let image = document.createElement('img');
                    image.src = res.image;
                    content.appendChild(image);

                    // Créer un conteneur pour l'id
                    let id = document.createElement('p');
                    id.className = "idPokemon";
                    id.innerHTML = `No. ${res.id}`;
                    content.appendChild(id);

                    // Créer un conteneur pour le nom
                    let name = document.createElement('p');
                    name.innerHTML = res.name;
                    content.appendChild(name);

                    // Créer un conteneur pour le type 1
                    let type = document.createElement('p');
                    type.innerHTML = "Type : " + createStringType(res.apiTypes);
                    content.appendChild(type);

                    content.addEventListener('mousemove', (e) => {
                        const xAxis = (content.offsetWidth / 2 - e.pageX + content.offsetLeft) / 15 * 3;
                        const yAxis = (content.offsetHeight / 2 - e.pageY + content.offsetTop) / 15 * 3;
                        content.style.transform = "perspective(2000px) rotateY(" + xAxis + "deg) rotateX(" + yAxis + "deg)";
                    });
                    content.addEventListener('mouseenter', () => {
                        content.style.transition = '0.1s';
                    });
                    content.addEventListener('mouseleave', () => {
                        content.style.transform = 'rotateY(0deg) rotateX(0deg)';
                        content.style.transition = 'all 0.5s ease';
                    });
                })
        })
}

function display() {
    let id = document.querySelector('#id').value;
    getPokemonId(id)
}

// Mettre un effet sur le background du body, le background se déplace en fonction du mouvement de la souris
const bgBody = document.querySelector('body');

bgBody.addEventListener('mousemove', (e) => {
    const xAxis = (window.innerWidth / 10 - e.pageX * 2) / 30;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 30;
    bgBody.style.backgroundPosition = `${xAxis}px ${yAxis}px`;
});

bgBody.addEventListener('mouseenter', () => {
    bgBody.style.transition = '0.1s';
});

bgBody.addEventListener('mouseleave', () => {
    bgBody.style.backgroundPosition = 'center';
    bgBody.style.transition = 'all 0.5s ease';
});

function create() {
    let name = document.querySelector('#name').value;
    getPokemon(name)
}

function createStringType(types) {
    let str = ''
    types.forEach(type => {
        str += type.name + ' '
    });
    return str
}

