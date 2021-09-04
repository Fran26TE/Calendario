let nombreMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

let fecha_actual = new Date();
let dia_actual = fecha_actual.getDate();
let mes_actual = fecha_actual.getMonth();
let ano_actual = fecha_actual.getFullYear();

let dia = document.getElementById('dia');
let mes = document.getElementById('mes');
let ano = document.getElementById('ano');

let anterior_mes = document.getElementById('anterior');
let siguiente_mes = document.getElementById('siguiente');

mes.textContent = nombreMeses[mes_actual];
ano.textContent = ano_actual.toString();


anterior_mes.addEventListener('click', mes_anterior());
siguiente_mes.addEventListener('click', mes_siguiente());


// Función que se encarga de escribir lo meses, recibe el parámetro de la variable mes.
function escribe_mes(mes) {
    //Bucle for para los días del último mes
    for (let i = inicio_semana(); i > 0; i--) {
        dia.innerHTML += "<div class='item dias_mes_anterior'>" + (total_dias(mes_actual - 1) - (i - 1)) + "</div>";
    }

    //Bucle for para los días del mes actual
    for (let i = 1; i <= total_dias(mes); i++) {
        if (i === dia_actual) {
            dia.innerHTML += "<div class='calendario_hoy item'> "+ i +" </div>";
        } else {
            dia.innerHTML += "<div class='item'> "+ i +" </div>";
        }
    }

}

// Función para saber el total de días que tiene que dibujar
function total_dias(mes) {
    if (mes === -1) mes = 11;

    if (mes == 0 || mes == 2 || mes == 4 || mes == 6 || mes == 7 || mes == 9 || mes == 11) {
        return 31;

    } else if (mes == 3 || mes == 5 || mes == 8 || mes == 10) {
        return 30;

    } else {
        if (bisiesto() == true) {
            return 29;
        } else {
            return 28;
        }

    }
}

// Función para saber si es año bisiesto
function bisiesto() {
    return (ano_actual % 400 === 0) ? true :
        (ano_actual % 100 === 0) ? false :
            ano_actual % 4 === 0;
};

// Función para saber en que día empieza la semana
function inicio_semana() {
    let inicio = new Date(ano_actual, mes_actual, 1);
    // Modificación para que la semana empiece el lunes
    return ((inicio.getDay() - 1) === -1) ? 6 : inicio.getDay() - 1;
}

// Dibuja el mes anterior
function mes_anterior() {
    if (mes_actual !== 0) {
        mes_actual--;
    } else {
        mes_actual = 11;
        ano_actual--;
    }

    nueva_fecha();

}

// Dibuja el mes siguiente
function mes_siguiente() {
    if (mes_actual !== 11) {
        mes_actual++;
    } else {
        mes_actual = 0;
        ano_actual++;
    }

    nueva_fecha();

}

// Aplica la nueva fecha al mover el calendario
function nueva_fecha() {
    fecha_actual.setFullYear(ano_actual, mes_actual, dia_actual);
    mes.textContent = nombreMeses[mes_actual];
    ano.textContent = ano_actual.toString();
    dia.textContent = '';
    escribe_mes(mes_actual);
}

