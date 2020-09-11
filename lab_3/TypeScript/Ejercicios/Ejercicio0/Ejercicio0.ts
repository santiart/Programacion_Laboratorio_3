namespace Prueba{

    export class Persona
    {
        protected apellido : string;    
        protected nombre : string;

        public constructor(_apellido : string, nom: string)
        {
            this.apellido = _apellido;
            this.nombre = nom;
        }

        public GetApellido() : string
        {
            return this.apellido;
        }
        public GetNombre() : string
        {
            return this.nombre;
        }

        public ToString():string 
        {
            return "Apellido: " + this.GetApellido()+ ", Nombre: " + this.GetNombre();
        }
    }

    export class Alumno extends Persona
    {
        protected legajo : number;

        constructor(apellido:string,nombre:string,leg:number)
        {
            super(apellido, nombre);
            this.legajo = leg;    
        }

        public GetLegajo()
        {
            return this.legajo;
        }

        public ToString()
        {
            return super.ToString() + " - Legajo: " + this.GetLegajo() + "\n";
        }
    }
}