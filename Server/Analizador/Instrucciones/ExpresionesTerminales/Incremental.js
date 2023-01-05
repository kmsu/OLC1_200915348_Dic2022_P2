"use strict";
exports.__esModule = true;
var Simbolo_1 = require("../TablaSimbolos/Simbolo");
var TipoDato_1 = require("../TablaSimbolos/TipoDato");
var Incremental = /** @class */ (function () {
    function Incremental(id, tipo, linea, columna) {
        this.id = id;
        this.tipo = tipo;
        this.linea = linea;
        this.columna = columna;
    }
    Incremental.prototype.ejecutarInstruccion = function (tabla, errores) {
        this.ejecutarExpresion(tabla, errores);
        return "";
    };
    Incremental.prototype.ejecutarExpresion = function (tabla, errores) {
        var sym = tabla.buscarSimbolo(this.id);
        if (sym != null) {
            if (this.tipo == '++') {
                sym.setValor(Number(sym.getValor() + 1));
            }
            else {
                sym.setValor(Number(sym.getValor() - 1));
            }
        }
        else {
            //Error semantico, no existe la variable
            //console.log("Error semantico, no existe la variable en incrementales en linea " + this.linea);
            errores.putError("Semantico", this.linea, this.columna, "no existe la variable " + this.id);
            sym = new Simbolo_1["default"](TipoDato_1.TipoDato.INVALIDO, "", this.linea, this.columna);
        }
        return sym;
    };
    Incremental.prototype.dibujarAST = function (nodoPadre) {
        return "";
    };
    return Incremental;
}());
exports["default"] = Incremental;
