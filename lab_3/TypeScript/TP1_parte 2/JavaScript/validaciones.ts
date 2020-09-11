function ValidarCamposVacios(cadena : string):boolean
{
    let retorno = false;
    let tamaño = cadena.length;

    if(tamaño > 0)
    {
        retorno = true;
    }

    return retorno;
}

function ValidarRangoNumerico(numero:number,min:number,max:number):boolean
{
    let retorno = false;
    
    if(numero >= min && numero <= max)
    {
        retorno = true;
    }

    return retorno;
}

function ValidarCombo(id:string, idIncorrecto:string):boolean
{
    let retorno = false;

    if(id != idIncorrecto)
    {
        retorno = true;
    }

    return retorno;
}

function ObtenerTurnoSeleccionado():string
{
    let inputs : HTMLCollectionOf<HTMLInputElement> = <HTMLCollectionOf<HTMLInputElement>> document.getElementsByTagName("input");
    let seleccionados : string = "";

    for(let index = 0; index < inputs.length; index++)
    {
        let input = inputs[index];

        if(input.type === "radio" && input.checked === true)
        {
            seleccionados += input.value + '-';
        }
    }
    
    seleccionados = seleccionados.substr(0, seleccionados.length - 1);
    console.log(seleccionados);

    return seleccionados;
}

function ObtenerSueldoMaximo(valor:string):number
{
    let retorno = 0;
    switch(valor)
    {
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

function AdministrarValidaciones()
{
    let mensajeDeError = "";
    let dni = parseInt((<HTMLInputElement>document.getElementById("txtDni")).value);
    let dniMax = parseInt((<HTMLInputElement>document.getElementById("txtDni")).max);
    let dniMin = parseInt((<HTMLInputElement>document.getElementById("txtDni")).min);

    if(!ValidarRangoNumerico(dni,dniMin,dniMax))
    {
        mensajeDeError += "ERROR!, DNI Invalido. El DNI debe tener un valor entre: " + dniMin + " y: " + dniMax + "\n";
    }

    let apelido = (<HTMLInputElement>document.getElementById("txtApellido")).value;
    if(!ValidarCamposVacios(apelido))
    {
        mensajeDeError += "ERROR!, debe llenar el campo Apellido \n";
    }

    let nombre = (<HTMLInputElement>document.getElementById("txtNombre")).value;
    if(!ValidarCamposVacios(nombre))
    {
        mensajeDeError += "ERROR!, debe llenar el campo Nombre \n";
    }

    let sexo = (<HTMLInputElement>document.getElementById("cboSexo")).value;
    let sexoIncorrecto = "---";
    if(!ValidarCombo(sexo,sexoIncorrecto))
    {
        mensajeDeError += "ERROR!, no a seleccionado un elemento del campo Sexo \n";
    }

    let legajo = parseInt((<HTMLInputElement>document.getElementById("txtLegajo")).value);
    let legajoMax = parseInt((<HTMLInputElement>document.getElementById("txtLegajo")).max);
    let legajoMin = parseInt((<HTMLInputElement>document.getElementById("txtLegajo")).min);

    if(!ValidarRangoNumerico(legajo,legajoMin,legajoMax))
    {
        mensajeDeError += "ERROR!, legajo invalido. El legajo debe tener un valor entre: " + legajoMin + " y " + legajoMax + "\n";
    }

    let sueldo = parseInt((<HTMLInputElement>document.getElementById("txtSueldo")).value);
    let turno = ObtenerTurnoSeleccionado();
    let sueldoMax = ObtenerSueldoMaximo(turno);
    let sueldoMin = parseInt((<HTMLInputElement>document.getElementById("txtSueldo")).min);

    if(!ValidarRangoNumerico(sueldo, sueldoMin, sueldoMax))
    {
        mensajeDeError += "ERROR!, Turno " + turno + " Invalido. El Sueldo debe tener un valor entre: " + sueldoMin + " y " + sueldoMax + "\n";
    }

    if(ValidarCamposVacios(mensajeDeError))
    {
        alert(mensajeDeError);
        console.log(mensajeDeError);
    }
    else
    {
        alert("Datos cargados correctamente!!");
        console.log("Datos cargados correctamente!!");
    }


}