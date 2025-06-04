const parrafoFecha = document.getElementById('current-date')
const dateOptionsSelectElement = document.getElementById('date-options')

// fecha
const fecha = new Date()
const dia = fecha.getDate()
const month = fecha.getMonth()+1
const year = fecha.getFullYear()
const horas = fecha.getHours()
const minutos = fecha.getMinutes()
const fechaFormateada = `${dia}-${month}-${year}`

parrafoFecha.textContent = fechaFormateada
dateOptionsSelectElement.addEventListener('change', ()=>{
    switch(dateOptionsSelectElement.value){
        case 'dd-mm-yyyy':
            parrafoFecha.textContent = fechaFormateada
            break
        case "yyyy-mm-dd":
            parrafoFecha.textContent = fechaFormateada.split('-').reverse().join('-')
            break
        case "mm-dd-yyyy-h-mm":
            parrafoFecha.textContent = `${month}-${dia}-${year} ${horas} Horas ${minutos} Minutos`
            break
        default:
            parrafoFecha.textContent = fechaFormateada
    }
})