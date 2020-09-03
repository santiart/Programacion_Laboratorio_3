<?php

$lapicera1 = array();
$lapicera1['color'] = 'azul';
$lapicera1['marca'] = 'm1';
$lapicera1['trazo'] = 'fino';
$lapicera1['precio'] = 45;

$lapicera2 = array();
$lapicera1['color'] = 'negro';
$lapicera1['marca'] = 'm2';
$lapicera1['trazo'] = 'ultrafino';
$lapicera1['precio'] = 50;

$lapicera3 = array();
$lapicera1['color'] = 'rojo';
$lapicera1['marca'] = 'm3';
$lapicera1['trazo'] = 'grueso';
$lapicera1['precio'] = 75;

$lapiceras = array($lapicera1,$lapicera2,$lapicera3);

foreach ($lapiceras as $item) {
    
    foreach ($item as $item2) {
        echo '<br>'. $item2;
    }
    echo '<br>';
}