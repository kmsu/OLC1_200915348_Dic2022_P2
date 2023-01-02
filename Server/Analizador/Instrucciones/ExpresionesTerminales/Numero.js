"use strict";
exports.__esModule = true;
var Simbolo_1 = require("../TablaSimbolos/Simbolo");
var TipoDato_1 = require("../TablaSimbolos/TipoDato");
var Numero = /** @class */ (function () {
    function Numero(valor, linea, columna) {
        this.valor = valor;
        this.linea = linea;
        this.columna = columna;
    }
    Numero.prototype.ejecutarInstruccion = function (tabla) {
        throw new Error("Method not implemented.");
    };
    Numero.prototype.ejecutarExpresion = function (tabla) {
        var sym = new Simbolo_1["default"](TipoDato_1.TipoDato.ENTERO, this.valor, this.linea, this.columna); //creamos un simbolo que representa una expresion
        return sym;
    };
    Numero.prototype.dibujarAST = function (nodoPadre) {
        throw new Error("Method not implemented.");
    };
    return Numero;
}());
exports["default"] = Numero;
