"use strict";
exports.__esModule = true;
var Simbolo_1 = require("../TablaSimbolos/Simbolo");
var TipoDato_1 = require("../TablaSimbolos/TipoDato");
var Decimal = /** @class */ (function () {
    function Decimal(valor, linea, columna) {
        this.valor = valor;
        this.linea = linea;
        this.columna = columna;
    }
    Decimal.prototype.ejecutarInstruccion = function (tabla, errores) {
        throw new Error("Method not implemented.");
    };
    Decimal.prototype.ejecutarExpresion = function (tabla, errores) {
        var sym = new Simbolo_1["default"](TipoDato_1.TipoDato.DECIMAL, this.valor, this.linea, this.columna); //creamos un simbolo que representa una expresion
        return sym;
    };
    Decimal.prototype.dibujarAST = function (nodoPadre) {
        throw new Error("Method not implemented.");
    };
    return Decimal;
}());
exports["default"] = Decimal;
