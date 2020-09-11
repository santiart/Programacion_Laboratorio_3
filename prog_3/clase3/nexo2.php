<?php

if(isset($_POST["accion"]))
{
    $accion = $_POST["accion"];
    $nombre = $_POST["nombre"];
    $apellido = $_POST["apellido"];
    $legajo = $_POST["legajo"];
    //var_dump($_POST);
    $foto = $_FILES["foto"];
}
else{
    $accion = null;
    $nombre = null;
    $apellido = null;
    $legajo = null;
    $foto = null;
}

switch ($accion) {
    case 1:
        $ar = fopen("datos.txt", "a");
        $alta = $legajo ." - ". $apellido." - ".$nombre. "-" .RecuperarPath();
        $cant = fwrite($ar, $alta."\r\n");
        if($cant > 0)
        {
            echo "exito";
        }

        fclose($ar);
        break;

    case 2:
        $file = fopen("datos.txt","r");

        while(!feof($file))
        {
            echo "<h2>" . fgets($file)."</h2>";
        }
        fclose($file);
        break;
        break;

    case 3:
        echo "<h2>" . BuscarLegajo("./datos.txt",$_POST["legajo"])."</h2>";

        break;

    default:
        echo 'toga';
        break;
}

function BuscarLegajo($path,$legajo)
{
    $file = fopen($path,"r");
    while(!feof($file))
    {
        $registro = fgets($file);

        $array = explode(" - ",$registro);

        if($array[0] == $legajo)
        {
            return $registro;
        }
        fclose($file);
        return "no hay nadie con ese legajo";
    }
}

function RecuperarPath()
{
    $nombre = $_POST["legajo"]. "-" .$_POST["apellido"]. "-" .date("d-m-y-m-s") . "." . pathinfo($_FILES["foto"]["name"],PATHINFO_EXTENSION);
    $path = "./archivos/".$nombre;

    move_uploaded_file($_FILES["foto"]["tmp_name"],$path);

    return $nombre;
}

