<?php

$op1 = rand(1,10);
$op2 = rand(1,10);
$operador = array('+','-','/','*');
$indice = rand(0,3);

switch($operador[$indice])
{
    case '+':
        echo "$op1 + $op2 = " . ($op1 + $op2);
        break;
    case '-':
        echo "$op1 - $op2 = " . ($op1 - $op2);
        break;
    case '/';
        echo  "$op1 / $op2 = " . ((float)$op1 / $op2);
        break;
    case '*':
        echo  "$op1 * $op2 = " . ($op1 * $op2);
        break;
}

//usar un random como indice