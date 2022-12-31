"use strict";
exports.__esModule = true;
var Print = /** @class */ (function () {
    function Print(cadena, expresion) {
        this.cadena = cadena;
        this.expresion = expresion;
    }
    Print.prototype.TraducirPython = function () {
        var resultado = "";
        if (this.expresion != null) {
            resultado += "print (" + this.cadena + ", " + this.expresion.TraducirPython() + ")";
        }
        else {
            resultado += "print (" + this.cadena + ")";
        }
        return resultado;
    };
    return Print;
}());
exports["default"] = Print;
