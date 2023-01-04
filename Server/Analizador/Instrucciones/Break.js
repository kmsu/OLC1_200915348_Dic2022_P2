"use strict";
exports.__esModule = true;
var Break = /** @class */ (function () {
    function Break(valor, linea, columna) {
        this.valor = valor;
        this.linea = linea;
        this.columna = columna;
    }
    Break.prototype.ejecutarInstruccion = function (tabla) {
        return "";
    };
    Break.prototype.ejecutarExpresion = function (tabla) {
        throw new Error("Method not implemented.");
    };
    Break.prototype.dibujarAST = function (nodoPadre) {
        throw new Error("Method not implemented.");
    };
    return Break;
}());
exports["default"] = Break;
