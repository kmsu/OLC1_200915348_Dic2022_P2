"use strict";
exports.__esModule = true;
var Simbolo_1 = require("../TablaSimbolos/Simbolo");
var TipoDato_1 = require("../TablaSimbolos/TipoDato");
var Chhar = /** @class */ (function () {
    function Chhar(valor, linea, columna) {
        this.valor = valor;
        this.linea = linea;
        this.columna = columna;
    }
    Chhar.prototype.ejecutarInstruccion = function (tabla, errores) {
        throw new Error("Method not implemented.");
    };
    Chhar.prototype.ejecutarExpresion = function (tabla, errores) {
        return new Simbolo_1["default"](TipoDato_1.TipoDato.CARACTER, this.valor, this.linea, this.columna); //creamos un simbolo que representa una expresion
    };
    Chhar.prototype.dibujarAST = function (nodoPadre) {
        var codGraphviz = nodoPadre + 1 + " [ label=\"" + this.valor + "\"];\n";
        codGraphviz += nodoPadre + " -> " + (nodoPadre + 1) + ";\n";
        return codGraphviz;
    };
    return Chhar;
}());
exports["default"] = Chhar;
