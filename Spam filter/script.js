const messageInput = document.getElementById('message-input')
const result = document.getElementById('result')
const checkMessageButton = document.getElementById('check-message-btn')

const helpRegex = /please help|assist me/i
const dollarRegex = /[0-9]+\s*(?:hundred|thousand|million|billion)?\s+dollars/i;
const freeRegex = /(?:^|\s)fr[e3][e3] m[o0]n[e3]y(?:$|\s)/i;
const stockRegex = /(?:^|\s)[s5][t7][o0][c{[(]k [a@4]l[e3]r[t7](?:$|\s)/i;
const dearRegex = /dear friend/i
const denyList = [helpRegex, dollarRegex, freeRegex, stockRegex,stockRegex]
/*
\Indicadores de bandera\
* i Ignora mayúsculas y minúsculas
* [] permite buscar coincidencias con todos los caracteres dentro, tambien pueden usar un - [a-z]
* + es utilizado para ver si hay mas de una coincidencia
*/
const isSpam = (msg)=> denyList.some((regex)=> regex.test(msg))

checkMessageButton.addEventListener('click', ()=>{
    if(!messageInput.value){
        alert('Please enter a message')
        return
    }
    result.textContent = isSpam(messageInput.value) ? "Oh no! Esto parece un mensaje de spam." : "Este mensaje no parece contener spam."
    messageInput.value = ''
})  