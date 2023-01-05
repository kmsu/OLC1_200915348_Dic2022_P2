"use strict";
exports.__esModule = true;
var Break = /** @class */ (function () {
    function Break(valor, linea, columna) {
        this.valor = valor;
        this.linea = linea;
        this.columna = columna;
    }
    Break.prototype.ejecutarInstruccion = function (tabla, errores) {
        return "";
    };
    Break.prototype.ejecutarExpresion = function (tabla, errores) {
        throw new Error("Method not implemented.");
    };
    Break.prototype.dibujarAST = function (nodoPadre) {
        return "";
    };
    return Break;
}());
exports["default"] = Break;
