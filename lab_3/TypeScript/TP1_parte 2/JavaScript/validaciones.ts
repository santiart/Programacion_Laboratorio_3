

function AdministrarValidaciones()
{

}

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
    let dato : HTMLCollectionOf<HTMLInputElement> = <HTMLCollectionOf<HTMLInputElement>> document.getElementsByTagName("input");

    //terminar

    return "";
}