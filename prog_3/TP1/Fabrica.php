<?php
require_once "Empleado.php";

class Fabrica
{
    private $_cantidadMaxima;
    private $_empleados;
    private $_razonSocial;

    public function __construct($razonSocial)
    {
        $this->_cantidadMaxima = 0;
        $this->_empleados = array();
        $this->_razonSocial = $razonSocial;
    }

    public function AgregarEmpleado(Empleado $emp)
    {
        $retorno = false;
        if($this->empleados < 5)
        {
            array_push($_empleados, $emp);
            $retorno = true;
        }
        return $retorno;
    }

    public function CalcularSueldos()
    {
        $acum = 0;
        for($i = 0; $i < count($this->_empleados); $i++)
        {
            $acum += $this->_empleados[$i]->_sueldo;
        }
        return $acum;
    }

    public function EliminarEmpleado(Empleado $emp)
    {
        $retorno = false;

        foreach ($this->_empleados as $item => $i) {
            if($i == $emp)
            {
                unset($this->_empleados[$item]);
                $retorno = true;
                break;
            }
        }
        return $retorno;
    }

    private function EliminarEmpleadoRepetido(){}

    public function ToString(){}
}