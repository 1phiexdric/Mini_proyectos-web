const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        if(btn.value === "="){
            display.value = eval(display.value);
        }else if(btn.value === "ac"){
            display.value = "";
        }else if(btn.value === "de"){
            display.value = display.value.slice(0, -1);
        }else{
            display.value += btn.id;
        }
    });
});