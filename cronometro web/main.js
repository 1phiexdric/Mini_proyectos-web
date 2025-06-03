window.addEventListener('load', ()=>{
let btnPlay = document.querySelector('#play')
let btnPause = document.querySelector('#pause')
let btnRestart = document.querySelector('#restart')
let contador = document.querySelector(".contador")


let intervalId = null
let startTime = null
let elapsedTime = 0
function contar(){
    if(!intervalId){
        startTime = Date.now() - elapsedTime
        // 0 date now a cambiado pero startime no teine e
        intervalId = setInterval(()=>{//evita multiples intervalos
            elapsedTime = Date.now() - startTime
            updateDisplay(elapsedTime)
    }, 100)
}
}


function pausar(){
    clearInterval(intervalId)
    intervalId = null
}

function reiniciarContador(){
    pausar()
    elapsedTime = 0
    updateDisplay(elapsedTime)
}
function updateDisplay(tiempo){
    const totalSeconds = Math.floor(tiempo / 1000)
    const hours = Math.floor((totalSeconds / 3600) /60)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60;
    const pad = (n)=>{
        return String(n).padStart(2, '0');
    }
    const horas = pad(hours)
    const segundos = pad(seconds)
    const minutos = pad(minutes)
    
    contador.innerHTML = `<p>${horas}:${minutos}:${segundos}</p>`
}
btnPlay.addEventListener('click', contar)
btnPause.addEventListener('click', pausar)
btnRestart.addEventListener('click', reiniciarContador)
})

