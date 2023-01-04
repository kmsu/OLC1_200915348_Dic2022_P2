"use strict";
exports.__esModule = true;
var Simbolo_1 = require("../TablaSimbolos/Simbolo");
var TipoDato_1 = require("../TablaSimbolos/TipoDato");
var IfTernario = /** @class */ (function () {
    function IfTernario(condicion, condVerdadero, condFalso, linea, columna) {
        this.condicion = condicion;
        this.condVerdadero = condVerdadero;
        this.condFalso = condFalso;
        this.linea = linea;
        this.columna = columna;
    }
    IfTernario.prototype.ejecutarInstruccion = function (tabla) {
        throw new Error("Method not implemented.");
    };
    IfTernario.prototype.ejecutarExpresion = function (tabla) {
        var valor;
        if (this.condicion) {
            valor = this.condVerdadero.ejecutarExpresion(tabla).getValor();
        }
        else {
            valor = this.condFalso.ejecutarExpresion(tabla).getValor();
        }
        var sym = new Simbolo_1["default"](TipoDato_1.TipoDato.BOOLEANO, valor, this.linea, this.columna); //creamos un simbolo que representa una expresion
        return sym;
    };
    IfTernario.prototype.dibujarAST = function (nodoPadre) {
        throw new Error("Method not implemented.");
    };
    return IfTernario;
}());
exports["default"] = IfTernario;
