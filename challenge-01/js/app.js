const pokemonContainer = document.querySelector('.pokemon-container');
const pokemonContainerFilter = document.querySelector(
  '.pokemon-container-filter'
);

const previous = document.querySelector('#previous');
const next = document.querySelector('#next');

let limit = 8;
let offset = 1;

previous.addEventListener('click', () => {
  if (offset != 1) {
    offset -= 9;
    removeChildNodes(pokemonContainer);
    fetchPokemons(offset, limit);
  }
});

next.addEventListener('click', () => {
  offset += 9;
  removeChildNodes(pokemonContainer);
  fetchPokemons(offset, limit);
});

function fetchPokemon(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => res.json())
    .then((data) => {
      createPokemon(data);
    });
}

// FILTER POKEMON FUNCTION

const block = document.querySelector('.pokemon-container');

const searchPokemon = () => {
  let poke = document.getElementById('searchPoke').value.toLowerCase();
  function filterPokemon(name) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        block.style.display = 'none';
        createPokemonFilter(data);
      });
  }
  filterPokemon(poke);
};

const searchButton = document.getElementById('search');
searchButton.addEventListener('click', searchPokemon);

const createPokemonFilter = (pokemon) => {
  const card = document.createElement('div');
  card.classList.add('pokemon-block');

  const spriteContainer = document.createElement('div');
  spriteContainer.classList.add('img-container');

  const sprite = document.createElement('img');
  sprite.src = pokemon.sprites.front_default;

  spriteContainer.appendChild(sprite);

  const number = document.createElement('p');
  number.classList.add('number');
  number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;

  const name = document.createElement('p');
  name.classList.add('name');
  name.textContent = pokemon.name;

  const progressContainer = document.createElement('div');
  progressContainer.classList.add('pokemon-block-progress');

  progressContainer.appendChild(progressBars(pokemon.stats));

  card.appendChild(spriteContainer);
  card.appendChild(number);
  card.appendChild(name);

  card.appendChild(progressContainer);

  pokemonContainerFilter.appendChild(card);
};

// END FILTER POKEMON FUNCTION

function fetchPokemons(offset, limit) {
  for (let i = offset; i <= offset + limit; i++) {
    fetchPokemon(i);
  }
}

function createPokemon(pokemon) {
  const card = document.createElement('div');
  card.classList.add('pokemon-block');

  const spriteContainer = document.createElement('div');
  spriteContainer.classList.add('img-container');

  const sprite = document.createElement('img');
  sprite.src = pokemon.sprites.front_default;

  spriteContainer.appendChild(sprite);

  const number = document.createElement('p');
  number.classList.add('number');
  number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;

  const name = document.createElement('p');
  name.classList.add('name');
  name.textContent = pokemon.name;

  const progressContainer = document.createElement('div');
  progressContainer.classList.add('pokemon-block-progress');

  progressContainer.appendChild(progressBars(pokemon.stats));

  card.appendChild(spriteContainer);
  card.appendChild(number);
  card.appendChild(name);

  card.appendChild(progressContainer);

  pokemonContainer.appendChild(card);
}

function progressBars(stats) {
  const statsContainer = document.createElement('div');
  statsContainer.classList.add('stats-container');

  for (let i = 0; i < 3; i++) {
    const stat = stats[i];

    const statPercent = stat.base_stat / 2 + '%';
    const statContainer = document.createElement('stat-container');
    statContainer.classList.add('stat-container');

    const statName = document.createElement('p');
    statName.classList.add('statName');
    statName.textContent = stat.stat.name;

    const progress = document.createElement('div');
    progress.classList.add('progress');

    const progressBar = document.createElement('div');
    progressBar.classList.add('progress-bar');
    progressBar.setAttribute('aria-valuenow', stat.base_stat);
    progressBar.setAttribute('aria-valuemin', 0);
    progressBar.setAttribute('aria-valuemax', 200);
    progressBar.style.width = statPercent;

    progressBar.textContent = stat.base_stat;

    progress.appendChild(progressBar);
    statContainer.appendChild(statName);
    statContainer.appendChild(progress);

    statsContainer.appendChild(statContainer);
  }

  return statsContainer;
}

function removeChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

fetchPokemons(offset, limit);
