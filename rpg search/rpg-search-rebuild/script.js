const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const creatureName = document.getElementById('creature-name');
const creatureId = document.getElementById('creature-id');
const weight = document.getElementById('weight');
const height = document.getElementById('height');
const types = document.getElementById('types');
const hp = document.getElementById('hp');
const attack = document.getElementById('attack');
const defense = document.getElementById('defense');
const specialAttack = document.getElementById('special-attack');
const specialDefense = document.getElementById('special-defense');
const speed = document.getElementById('speed');

const endpoint = 'https://rpg-creature-api.freecodecamp.rocks/api/creature/';

const fetchData = async () => {
  try {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const res = await fetch(`${endpoint}${searchTerm}`);

    if (!res.ok) {
      throw new Error("Creature not found");
    }

    const data = await res.json();
    showCreatureInfo(data);
  } catch (err) {
    resetDisplay();
    alert('Creature not found');
    console.log(err);
  }
};

const showCreatureInfo = (creatureData) => {
  creatureName.textContent = creatureData.name.toUpperCase();
  creatureId.textContent = `#${creatureData.id}`;
  weight.textContent = `Weight: ${creatureData.weight}`;
  height.textContent = `Height: ${creatureData.height}`;

  types.innerHTML = creatureData.types
    .map(obj => `<span class="type ${obj.name}">${obj.name.toUpperCase()}</span>`)
    .join('');

  hp.textContent = creatureData.stats[0].base_stat;
  attack.textContent = creatureData.stats[1].base_stat;
  defense.textContent = creatureData.stats[2].base_stat;
  specialAttack.textContent = creatureData.stats[3].base_stat;
  specialDefense.textContent = creatureData.stats[4].base_stat;
  speed.textContent = creatureData.stats[5].base_stat;
};

const resetDisplay = () => {
  creatureName.textContent = '';
  creatureId.textContent = '';
  weight.textContent = '';
  height.textContent = '';
  types.innerHTML = '';
  hp.textContent = '';
  attack.textContent = '';
  defense.textContent = '';
  specialAttack.textContent = '';
  specialDefense.textContent = '';
  speed.textContent = '';
};

searchForm.addEventListener('submit', e => {
  e.preventDefault();
  fetchData();
});
