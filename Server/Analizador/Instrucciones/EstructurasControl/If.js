"use strict";
exports.__esModule = true;
var TablaSimbolos_1 = require("../TablaSimbolos/TablaSimbolos");
var If = /** @class */ (function () {
    function If(expresion, cuerpo, cuerpoElse, linea, columna) {
        this.expresion = expresion;
        this.cuerpo = cuerpo;
        this.cuerpoElse = cuerpoElse;
        this.linea = linea;
        this.columna = columna;
    }
    If.prototype.ejecutarInstruccion = function (tabla) {
        var consola = "";
        var tablaIf = new TablaSimbolos_1["default"](tabla, "If");
        for (var _i = 0, _a = this.cuerpo; _i < _a.length; _i++) {
            var instruccion = _a[_i];
            if (instruccion != null) {
                var temp = instruccion.ejecutarInstruccion(tablaIf);
                if (temp != "") {
                    consola += temp + "\n";
                }
            }
        }
        if (this.cuerpoElse != null) {
            consola += this.cuerpoElse.ejecutarInstruccion(tabla);
        }
        return consola;
    };
    If.prototype.ejecutarExpresion = function (tabla) {
        throw new Error("Method not implemented.");
    };
    If.prototype.dibujarAST = function (nodoPadre) {
        throw new Error("Method not implemented.");
    };
    return If;
}());
exports["default"] = If;
