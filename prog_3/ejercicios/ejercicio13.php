<?php

$animales = array();
$años = array();
$lenguajes = array();


array_push($animales, 'Perro','Gato','Raton','Araña','Mosca');
array_push($años,'1986','1996','2015','78','86');
array_push($lenguajes,'php','mysql','html5','typescript','ajax');

$completo = array_merge($animales,$años,$lenguajes);

foreach ($completo as $item) {
    echo $item.'<br>';
}