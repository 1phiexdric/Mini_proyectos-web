// DOM elements
const form = document.querySelector('.form')

const endpoint = 'https://rpg-creature-api.freecodecamp.rocks/api/creature/'


form.addEventListener('submit', async(e)=>{
    e.preventDefault()
    const inputValue = document.getElementById('search-input')
    const info = await getCreature(inputValue.value)
    if(!info){
        alert("Creature not found")
        return
    }
    renderInfo(info)
})


async function getCreature(nameOrId){
    try{
        const response = await fetch(endpoint + nameOrId)
        if(!response.ok){
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        const data = await response.json()
        console.log(data);
        return data
    }catch(e){
        console.log(e);
    }
}

async function renderInfo(info){
    console.log(info);
    const {name, id, weight, height} = info
    document.querySelector('#creature-name').textContent = name.toUpperCase()
    document.querySelector('#creature-id').textContent = ` #${id.toString().padStart(3, '0')}`
    document.querySelector('#weight').textContent = `Weigth: ${weight}`
    document.querySelector('#height').textContent = `Height: ${height}`
    for(let [key, value]of Object.entries(info.special)){
        
        const elements = document.getElementById(`special-${key}`)
        elements.textContent = value
    }

    const specialInfo = document.querySelector('#special')
    const typeContainer = document.querySelector('.types')
    typeContainer.innerHTML = ''
    info.types.forEach(type=>{
        typeContainer.innerHTML += `<div class="type ${type.name}">${type.name}</div>`
    })
    info.stats.forEach(stat => {
        const statElement = document.getElementById(stat.name);
        if (statElement) {
            statElement.textContent = stat.base_stat;
        }
    });
}