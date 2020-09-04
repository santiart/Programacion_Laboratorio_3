<?php
require_once "Empleado.php";

class Fabrica
{
    private $_cantidadMaxima;
    private $_empleados;
    private $_razonSocial;

    public function __construct($razonSocial)
    {
        $this->_cantidadMaxima = 5;
        $this->_empleados = array();
        $this->_razonSocial = $razonSocial;
    }

    public function AgregarEmpleado(Empleado $emp)
    {
        $retorno = false;
        if(is_a($emp,"Empleado"))
        {
            if(count($this->_empleados) < $this->_cantidadMaxima)
            {
                array_push($this->_empleados, $emp);
                $retorno = true;
                $this->EliminarEmpleadoRepetido();
            }
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

    private function EliminarEmpleadoRepetido()
    {
        $this->_empleados = array_unique($this->_empleados,SORT_REGULAR);
    }

    public function ToString()
    {
        $cadena  = '';
        $cadena .= 'Cantidad Maxima: '. $this->_cantidadMaxima.'<br>';
        $cadena .= 'Razon Social: '. $this->_razonSocial . '<br>';

        foreach($this->_empleados as $emp)
        {
            $cadena .= "Empleado: " . $emp->GetApellido() . '-' . $emp->GetNombre() . '-' . $emp->GetDni() . '-' .
             $emp->GetSexo() . '-' . $emp->GetLegajo() . '-' . $emp->GetSueldo() .'-' . $emp->GetTurno() . '<br>';
        }

        return $cadena;
    }
}