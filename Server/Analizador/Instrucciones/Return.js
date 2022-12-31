"use strict";
exports.__esModule = true;
var Return = /** @class */ (function () {
    function Return(valor, expresion) {
        this.cadena = valor.toLocaleLowerCase();
        this.expresion = expresion;
    }
    Return.prototype.TraducirPython = function () {
        var resultado = "";
        if (this.expresion != null) {
            resultado = this.cadena.toLocaleLowerCase() + " " + this.expresion.TraducirPython();
        }
        else {
            resultado = this.cadena.toLocaleLowerCase();
        }
        return resultado;
    };
    return Return;
}());
exports["default"] = Return;
