"use strict";
exports.__esModule = true;
var Break = /** @class */ (function () {
    function Break(valor) {
        this.cadena = valor.toLocaleLowerCase();
    }
    Break.prototype.TraducirPython = function () {
        return this.cadena;
    };
    return Break;
}());
exports["default"] = Break;
