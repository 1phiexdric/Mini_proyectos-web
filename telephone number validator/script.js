const checkBtn = document.getElementById("check-btn")
const clearBtn = document.getElementById("clear-btn")
const input = document.getElementById("user-input")
const resultsDiv = document.getElementById("results-div")
const numberPhoneRegex = /^1?\s*(\(\d{3}\)|\d{3})[-\s.]?\d{3}[-\s.]?\d{4}$/

checkBtn.addEventListener("click", ()=>{
    if(input.value.trim() === ""){
        alert("Please provide a phone number")
    }
    const isValid = numberPhoneRegex.test(input.value)
    if(isValid){
        resultsDiv.innerText += "Valid US number: " + input.value + "\n"
    }else{
        resultsDiv.innerText += "Invalid US number: " + input.value + "\n"
    }
})

clearBtn.addEventListener("click", ()=>{
    resultsDiv.innerText = ""
    input.value = ""
})