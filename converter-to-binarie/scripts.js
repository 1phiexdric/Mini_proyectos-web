const numberInput = document.getElementById("number-input")
const convertBtn = document.getElementById("convert-btn")
const result = document.getElementById("result")
const cleanBtn = document.getElementById("clean-btn")

cleanBtn.addEventListener('click', ()=>{
    result.textContent = ""
    numberInput.value= ""
})
const decimalToBinary = (input)=>{
    if(input === 0){
        return "0"
    }else if(input === 1){
    return "1"
  }
     return decimalToBinary(Math.floor(input / 2))+ (input % 2)
}

const checkUserInput = () => {
    if(!numberInput.value ||  isNaN(parseInt(numberInput.value)) || parseInt(numberInput.value) < 0){
        alert("Please provide a decimal number greater than or equal to 0")
        return
    }
    
    // numberInput.value = ""
    result.textContent = decimalToBinary(parseInt(numberInput.value))
};
convertBtn.addEventListener("click", checkUserInput);
numberInput.addEventListener("keydown", (e) => {
    if(e.key == "Enter"){
        checkUserInput()
    }
});