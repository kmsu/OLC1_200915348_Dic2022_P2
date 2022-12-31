"use strict";
exports.__esModule = true;
var ComentaioSimple = /** @class */ (function () {
    function ComentaioSimple(valor) {
        this.valor = valor.substring(2, valor.length);
    }
    ComentaioSimple.prototype.TraducirPython = function () {
        return "#" + this.valor;
    };
    return ComentaioSimple;
}());
exports["default"] = ComentaioSimple;
