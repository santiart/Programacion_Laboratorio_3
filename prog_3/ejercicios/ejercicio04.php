<?php

$numero_1 = 0;
$numero_2 = 0;
$suma = 0;

function Suma($numero1, $numero2)
{
    return $numero1 + $numero2;
}

do
{
    $numero_1++;
    $numero_2++;

    $suma = Suma($numero_1, $numero_2);

    echo $suma . '<br>';

} while (Suma($numero_1,$numero_2) < 1000);