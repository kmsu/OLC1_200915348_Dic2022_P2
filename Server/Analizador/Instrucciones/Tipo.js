"use strict";
exports.__esModule = true;
var Simbolo_1 = require("./TablaSimbolos/Simbolo");
var TipoDato_1 = require("./TablaSimbolos/TipoDato");
var Tipo = /** @class */ (function () {
    function Tipo(tipo, linea, columna) {
        this.tipo = tipo;
        this.linea = linea;
        this.columna = columna;
    }
    Tipo.prototype.ejecutarInstruccion = function (tabla, errores) {
        throw new Error("Method not implemented.");
    };
    Tipo.prototype.ejecutarExpresion = function (tabla, errores) {
        return new Simbolo_1["default"](this.tipo, null, this.linea, this.columna); //simbolo vacio se utiliza para representar el tipo de la variable a declarar
    };
    Tipo.prototype.dibujarAST = function (nodoPadre) {
        var strTipo = "";
        switch (this.tipo) {
            case TipoDato_1.TipoDato.BOOLEANO:
                strTipo = "Boolean";
                break;
            case TipoDato_1.TipoDato.CADENA:
                strTipo = "String";
                break;
            case TipoDato_1.TipoDato.CARACTER:
                strTipo = "Char";
                break;
            case TipoDato_1.TipoDato.DECIMAL:
                strTipo = "Double";
                break;
            case TipoDato_1.TipoDato.ENTERO:
                strTipo = "Int";
                break;
        }
        var id = new Date().getUTCMilliseconds();
        var codGraphviz = id + " [ label=\"" + strTipo + "\"];\n";
        codGraphviz += nodoPadre + " -> " + id + ";\n";
        return codGraphviz;
    };
    return Tipo;
}());
exports["default"] = Tipo;
