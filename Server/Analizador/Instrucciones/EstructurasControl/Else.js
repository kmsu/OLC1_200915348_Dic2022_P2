"use strict";
exports.__esModule = true;
var TablaSimbolos_1 = require("../TablaSimbolos/TablaSimbolos");
var Else = /** @class */ (function () {
    function Else(cuerpo, linea, columna) {
        this.cuerpo = cuerpo;
        this.linea = linea;
        this.columna = columna;
    }
    Else.prototype.ejecutarInstruccion = function (tabla) {
        var consola = "";
        var tablaElse = new TablaSimbolos_1["default"](tabla, "Else");
        for (var _i = 0, _a = this.cuerpo; _i < _a.length; _i++) {
            var instruccion = _a[_i];
            if (instruccion != null) {
                var temp = instruccion.ejecutarInstruccion(tablaElse);
                if (temp != "") {
                    consola += temp + "\n";
                }
            }
        }
        return consola;
    };
    Else.prototype.ejecutarExpresion = function (tabla) {
        throw new Error("Method not implemented.");
    };
    Else.prototype.dibujarAST = function (nodoPadre) {
        throw new Error("Method not implemented.");
    };
    return Else;
}());
exports["default"] = Else;
