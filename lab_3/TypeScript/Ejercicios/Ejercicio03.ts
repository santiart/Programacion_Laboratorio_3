miFuncion(8);

function miFuncion(numero:number ,cadena? : string)
{
    if(cadena)
    {
            for(var i = 0; i < numero; i++)
            {
                console.log(cadena);
            }
    }
    else{
        console.log('-'+ numero);
    }
}