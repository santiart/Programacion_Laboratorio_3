<?php

$a = 9;//rand(1,10);
$b = 16;//rand(1,10);
$c = 4;//rand(1,10);
$medio;
function SacarMedio($x,$y,$z)
{
    if($x > $y && $x < $z || $x < $y && $x > $z)
    {
        return $x;
    }
    else if($y > $x && $y < $z || $y > $z && $y < $x)
    {
        return $y;
    }
    else if($z > $x && $z < $y || $z > $y && $z < $x)
    {
        return $z;
    }
    else{
        return 'no hay valor del medio';
    }
}

$medio = SacarMedio($a,$b,$c);

echo $medio.'<br>';