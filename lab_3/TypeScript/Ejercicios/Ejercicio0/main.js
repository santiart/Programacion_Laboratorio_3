var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Prueba;
(function (Prueba) {
    var Persona = /** @class */ (function () {
        function Persona(_apellido, nom) {
            this.apellido = _apellido;
            this.nombre = nom;
        }
        Persona.prototype.GetApellido = function () {
            return this.apellido;
        };
        Persona.prototype.GetNombre = function () {
            return this.nombre;
        };
        Persona.prototype.ToString = function () {
            return "Apellido: " + this.GetApellido() + ", Nombre: " + this.GetNombre();
        };
        return Persona;
    }());
    Prueba.Persona = Persona;
    var Alumno = /** @class */ (function (_super) {
        __extends(Alumno, _super);
        function Alumno(apellido, nombre, leg) {
            var _this = _super.call(this, apellido, nombre) || this;
            _this.legajo = leg;
            return _this;
        }
        Alumno.prototype.GetLegajo = function () {
            return this.legajo;
        };
        Alumno.prototype.ToString = function () {
            return _super.prototype.ToString.call(this) + " - Legajo: " + this.GetLegajo() + "\n";
        };
        return Alumno;
    }(Persona));
    Prueba.Alumno = Alumno;
})(Prueba || (Prueba = {}));
/// <reference path="Ejercicio0.ts"/>
var Prueba;
(function (Prueba) {
    var alumno = new Prueba.Alumno("a", "n", 1);
    console.log(alumno.ToString());
    console.log("lalala");
})(Prueba || (Prueba = {}));
