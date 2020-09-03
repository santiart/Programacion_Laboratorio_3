<?php

$numeros = array();
$promedio;
$contador = 0;
$acumulador = 0;
for($i = 0; $i < 5; $i++)
{
    $numeros[$i] = rand(1,10);
    $acumulador+= $numeros[$i];
    $contador++;
}
$promedio = $acumulador/$contador;

if($promedio > 6)
{
    echo "El promedio es mayor a 6:  $promedio <br>";
}
elseif($promedio < 6)
{
    echo "El promedio es menor a 6:  $promedio <br>";
}
else {
    echo "El promedio es igual a 6:  $promedio <br>";
}

