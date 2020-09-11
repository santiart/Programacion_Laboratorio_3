<?php

require_once "Empleado.php";
require_once "Fabrica.php";

$empleado = new Empleado('Aguado', 'Santiago', 1233,'M',321,4567,'Mañana');
$empleado2 = new Empleado('Rivola','Agustin',465,'M',658,48468,'Noche');
$Fabrica = new Fabrica("Wayne.ent");
$idioma = array('Español,Inglés, Francés');

echo $empleado->ToString($idioma);
echo $empleado2->ToString($idioma);

$Fabrica->AgregarEmpleado($empleado);
$Fabrica->AgregarEmpleado($empleado2);
echo $Fabrica->ToString();

//Lista de empleados despues de eliminar uno
$Fabrica->EliminarEmpleado($empleado);
echo $Fabrica->ToString();


