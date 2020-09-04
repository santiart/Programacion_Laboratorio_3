<?php
//phpinfo();

echo 'hola mundo';

$nombre = 'juan';
echo '<br>'.$nombre.'<br>';

$nombres = array("Pedro",'Jose');

for ($i=0; $i < count($nombres); $i++) { 
    echo $nombres[$i];
}

$numero1 = 5;
$numero2 = 9;

function Sumar($numero1,$numero2)
{
    return $numero1 + $numero2;
}

//date('d-m-y H:i:s');
//include_once, require_once

class ClasePropia
{
    public $nombre;
    public $edad;

    public function Mostrar($nombre = 'santiago', $edad = 20)
    {
        echo $this->nombre . $this->edad . '<br>';
    }
}

class ClaseDos extends ClasePropia
{
    protected $apellido;

    public function Mostrar2($apellido = 'aguado'){
        $retorno = parent::Mostrar() . $apellido;
        return $retorno;
    }
}
?>