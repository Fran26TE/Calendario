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


document.getElementById("anterior").addEventListener("click", mes_anterior());

function mes_anterior() {

    if(mes_actual !== 0){
        mes_actual--;
    }else{
        mes_actual = 11;
        ano_actual--;
    }

    nuevo_mes();
}

function nuevo_mes () {
    fecha_actual.setFullYear(ano_actual,mes_actual,dia_actual);
    mes.textContent = nombreMeses[mes_actual];
    ano.textContent = ano_actual.toString();
    dia.textContent = '';
    
}


