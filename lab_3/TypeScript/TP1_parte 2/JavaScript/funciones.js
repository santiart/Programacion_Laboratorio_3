"use strict";
function ValidarCamposVacios(cadena) {
    var retorno = false;
    var tamaño = cadena.length;
    if (tamaño > 0) {
        retorno = true;
    }
    return retorno;
}
function ValidarRangoNumerico(numero, min, max) {
    var retorno = false;
    if (numero >= min && numero <= max) {
        retorno = true;
    }
    return retorno;
}
function ValidarCombo(id, idIncorrecto) {
    var retorno = false;
    if (id != idIncorrecto) {
        retorno = true;
    }
    return retorno;
}
function ObtenerTurnoSeleccionado() {
    var inputs = document.getElementsByTagName("input");
    var seleccionados = "";
    for (var index = 0; index < inputs.length; index++) {
        var input = inputs[index];
        if (input.type === "radio" && input.checked === true) {
            seleccionados += input.value + '-';
        }
    }
    seleccionados = seleccionados.substr(0, seleccionados.length - 1);
    console.log(seleccionados);
    return seleccionados;
}
function ObtenerSueldoMaximo(valor) {
    var retorno = 0;
    switch (valor) {
        case 'Mañana':
            retorno = 20000;
            break;
        case 'Tarde':
            retorno = 18500;
            break;
        case 'Noche':
            retorno = 25000;
            break;
    }
    return retorno;
}
function Validaciones() {
    var mensajeDeError = "";
    var dni = parseInt(document.getElementById("txtDni").value);
    var dniMax = parseInt(document.getElementById("txtDni").max);
    var dniMin = parseInt(document.getElementById("txtDni").min);
    if (!ValidarRangoNumerico(dni, dniMin, dniMax)) {
        mensajeDeError += "ERROR!, DNI Invalido. El DNI debe tener un valor entre: " + dniMin + " y: " + dniMax + "\n";
    }
    var apelido = document.getElementById("txtApellido").value;
    if (!ValidarCamposVacios(apelido)) {
        mensajeDeError += "ERROR!, debe llenar el campo Apellido \n";
    }
    var nombre = document.getElementById("txtNombre").value;
    if (!ValidarCamposVacios(nombre)) {
        mensajeDeError += "ERROR!, debe llenar el campo Nombre \n";
    }
    var sexo = document.getElementById("cboSexo").value;
    var sexoIncorrecto = "---";
    if (!ValidarCombo(sexo, sexoIncorrecto)) {
        mensajeDeError += "ERROR!, no a seleccionado un elemento del campo Sexo \n";
    }
    var legajo = parseInt(document.getElementById("txtLegajo").value);
    var legajoMax = parseInt(document.getElementById("txtLegajo").max);
    var legajoMin = parseInt(document.getElementById("txtLegajo").min);
    if (!ValidarRangoNumerico(legajo, legajoMin, legajoMax)) {
        mensajeDeError += "ERROR!, legajo invalido. El legajo debe tener un valor entre: " + legajoMin + " y " + legajoMax + "\n";
    }
    var sueldo = parseInt(document.getElementById("txtSueldo").value);
    var turno = ObtenerTurnoSeleccionado();
    var sueldoMax = ObtenerSueldoMaximo(turno);
    var sueldoMin = parseInt(document.getElementById("txtSueldo").min);
    if (!ValidarRangoNumerico(sueldo, sueldoMin, sueldoMax)) {
        mensajeDeError += "ERROR!, Turno " + turno + " Invalido. El Sueldo debe tener un valor entre: " + sueldoMin + " y " + sueldoMax + "\n";
    }
    if (ValidarCamposVacios(mensajeDeError)) {
        alert(mensajeDeError);
        console.log(mensajeDeError);
    }
    else {
        alert("Datos cargados correctamente!!");
        console.log("Datos cargados correctamente!!");
    }
}
