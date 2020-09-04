<?php

if(isset($_POST["accion"]))
{
    $accion = $_POST["accion"];
    $nombre = $_POST["nombre"];
    $apellido = $_POST["apellido"];
    $legajo = $_POST["legajo"];
}
else{
    $accion = null;
    $nombre = null;
    $apellido = null;
    $legajo = null;
}

switch ($accion) {
    case 1:
        $ar = fopen("datos.txt", "a");
        $alta = $legajo ." - ". $apellido." - ".$nombre;
        $cant = fwrite($ar, $alta."\r\n");
        if($cant > 0)
        {
            echo "exito";
        }

        fclose($ar);
        break;

    case 2:
        $ar = fopen("datos.txt","r");

        echo "<h2>".fgets($ar)."<h2>";

        fclose($ar);
        break;
}


