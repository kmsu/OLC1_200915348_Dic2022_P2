"use strict";
exports.__esModule = true;
var ComentarioMulti = /** @class */ (function () {
    function ComentarioMulti(valor) {
        this.valor = valor.substring(2, valor.length - 2);
    }
    ComentarioMulti.prototype.TraducirPython = function () {
        return "'''" + this.valor + "'''";
    };
    return ComentarioMulti;
}());
exports["default"] = ComentarioMulti;
