"use strict";
exports.__esModule = true;
var Booleano = /** @class */ (function () {
    function Booleano(valor) {
        this.valorBool = valor;
    }
    Booleano.prototype.TraducirPython = function () {
        if (this.valorBool == true) {
            return "true";
        }
        return "false";
    };
    return Booleano;
}());
exports["default"] = Booleano;
