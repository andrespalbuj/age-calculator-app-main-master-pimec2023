// 1.A) Recogemos los huecos donde escribimos e interactuamos:

const dayInput = document.querySelector(".input-days");
const monthInput = document.querySelector(".input-months");
const yearInput = document.querySelector(".input-years");

// 1.B) Buscamos también (la palanca) el botón:

const btn = document.querySelector(".calculator__user-input-btn");

// 1.C) Recogemos también (los cartelitos) donde obtenemos la respuesta final

const dayOutput = document.querySelector(".output-days span");
const monthOutput = document.querySelector(".output-months span");
const yearOutput = document.querySelector(".output-years span");

//2. El robot se queda superatento (con las orejas abiertas) esperando que alguien haga click en el botón:

btn.addEventListener("click", () =>{

//1º)Comprueba si dejaste la casilla vacía

if (dayInput.value === '' || monthInput.value === '' || yearInput.value === '') {
    mostrarError('!Uy¡ Rellena todos los campos');
    return;
}
//2º)Comprueba si inventaste un mes imposible:

if (monthInput.value > 12 || monthInput.value < 1) {
    mostrarError('¡El año solo tiene 12 meses');
    return;
}
//3º) El robot mira el calendario de hoy:

const hoy = new Date();

//4º) El robot guarda la fecha de tu nacimiento:

const nacimiento = new Date(yearInput.value, monthInput.value - 1, dayInput.value);

//5º)Cálculo matemático de la diferencia:

let edadCalculadaAños = hoy.getFullYear() - nacimiento.getFullYear();
let edadCalculadaMeses = hoy.getMonth() - nacimiento.getMonth();
let edadCalculadaDias = hoy.getDate() - nacimiento.getDate();

//6º) Ajuste si el día actual es menor que el día de nacimiento:

if (edadCalculadaDias < 0) {
    edadCalculadaMeses--;
    //Días del mes anterior

    const ultimoDiaMesAnterior = new Date(hoy.getFullYear(), hoy.getMonth(), 0). getDate();
    edadCalculadaDias += ultimoDiaMesAnterior;
}
//7º) Ajuste si el mes actual es menor que el mes de nacimiento

if (edadCalculadaMeses < 0) {
    edadCalculadaAños--;
    edadCalculadaMeses += 12;
}
//8º) Muestra el resultado por pantalla

yearOutput.textContent = edadCalculadaAños;
monthOutput.textContent = edadCalculadaMeses;
dayOutput.textContent = edadCalculadaDias;


});



