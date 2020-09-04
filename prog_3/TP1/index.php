<?php
require_once "Persona.php";
require_once "Empleado.php";

$empleado = new Empleado('Aguado', 'Santiago', 1233,'M',321,4567,'Mañana');
$idioma = array('Español,Inglés, Francés');

echo $empleado->ToString($idioma);
