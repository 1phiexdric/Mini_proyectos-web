const number = document.getElementById('number')
const converBtn = document.getElementById('convert-btn')
const output = document.getElementById('output')

const RomanNumerals = {
    M: 1000,
    CM:	900,
    D:	500,
    CD:	400,
    C:	100,
    XC:	90,
    L:	50,
    XL:	40,
    X:	10,
    IX:	9,
    V:	5,
    IV:	4,
    I:	1,
}

const convertToRoman = (number)=>{
    let resultado = "";
    for(let [letra, valor] of Object.entries(RomanNumerals)){
        while (number >= valor){
            resultado += letra;
            number -= valor
        }
    }
    return resultado
}

converBtn.addEventListener('click', () => {
    let n = parseInt(number.value)
    if (number.value == "") {
        output.textContent = "Please enter a valid number"
    } else if (n < 0) {
        output.textContent = "Please enter a number greater than or equal to 1"
    } else if (n > 3999) {
        output.textContent = "Please enter a number less than or equal to 3999"
    }else{
        output.textContent = convertToRoman(n)

    }
})

convertToRoman()