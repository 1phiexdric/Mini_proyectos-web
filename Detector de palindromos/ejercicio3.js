//Programa que detecte cuando una palabra es un Palindromo

/*let palabra = prompt("Introduce una palabra");

console.log("Tu palabra es " + palabra)

palabra = palabra.toLowerCase()

//split("") divide la cadena en un array de caracteres
//reverse("") invierte el orden del array
//join("") une los elementos del array en una cadena
//deben tener ("") para que funciones
let reversa = palabra.split("").reverse("").join("")

if (palabra === reversa) {
    console.log("Es palindromo")
} else {
    console.log("No es palindromo")
}*/

window.addEventListener("load", function () {
function palindromo(palabra) {
    palabra = palabra.toLowerCase();
    let convertir = palabra.replace(/[^a-z0-9]/gi, '');

    let reversa = convertir.split("").reverse("").join("");

    if(palabra.length < 1 || palabra === "") {
        alert("Please input a value")
        return "No has introducido ninguna palabra";

    }else{
        if (convertir === reversa) {
            return palabra + " Es un palindromo";
        }else {
            return palabra + " no es palindromo";
        }
    }


}
let palabras
let formulario = document.querySelector("#formulario");
let resultado = document.querySelector("#result");

formulario.addEventListener("submit", function () {
    palabras = document.querySelector("#text-input").value;
    resultado.innerHTML = palindromo(palabras);
});


});