<?php

$impares = array(1,3,5,7,9,11,13,15,17,19);
$a = 0;

for($i = 0; $i < 10; $i++)
{
    echo 'Numero: '. $impares[$i].'<br>';
}

while ($a < 10) {
    echo 'Numero: '.$impares[$a] .'<br>';
    $a++; 
}

foreach ($impares as $item) {
    echo 'Numero: '.$item . '<br>';
}