"use strict";
exports.__esModule = true;
var Switch = /** @class */ (function () {
    function Switch(expresion, cuerpoCase, linea, columna) {
        this.expresion = expresion;
        this.cuerpoCase = cuerpoCase;
        this.linea = linea;
        this.columna = columna;
    }
    Switch.prototype.ejecutarInstruccion = function (tabla) {
        var consola = "";
        var tablaSwitch = tabla.addSubEntorno("Switch");
        if (this.cuerpoCase != null) {
            consola += this.cuerpoCase.ejecutarInstruccion(tablaSwitch);
        }
        return consola;
    };
    Switch.prototype.ejecutarExpresion = function (tabla) {
        throw new Error("Method not implemented.");
    };
    Switch.prototype.dibujarAST = function (nodoPadre) {
        throw new Error("Method not implemented.");
    };
    return Switch;
}());
exports["default"] = Switch;
