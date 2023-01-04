"use strict";
exports.__esModule = true;
var Continue = /** @class */ (function () {
    function Continue(valor, linea, columna) {
        this.valor = valor;
        this.linea = linea;
        this.columna = columna;
    }
    Continue.prototype.ejecutarInstruccion = function (tabla) {
        return "";
    };
    Continue.prototype.ejecutarExpresion = function (tabla) {
        throw new Error("Method not implemented.");
    };
    Continue.prototype.dibujarAST = function (nodoPadre) {
        throw new Error("Method not implemented.");
    };
    return Continue;
}());
exports["default"] = Continue;
