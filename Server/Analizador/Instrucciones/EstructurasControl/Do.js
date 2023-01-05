"use strict";
exports.__esModule = true;
var Do = /** @class */ (function () {
    function Do(expresion, cuerpo, linea, columna) {
        this.expresion = expresion;
        this.cuerpo = cuerpo;
        this.linea = linea;
        this.columna = columna;
    }
    Do.prototype.ejecutarInstruccion = function (tabla, errores) {
        var consola = "";
        var tablaDo = tabla.addSubEntorno("DoWhile");
        for (var _i = 0, _a = this.cuerpo; _i < _a.length; _i++) {
            var instruccion = _a[_i];
            if (instruccion != null) {
                var temp = instruccion.ejecutarInstruccion(tablaDo, errores);
                if (temp != "") {
                    consola += temp + "\n";
                }
            }
        }
        return consola;
    };
    Do.prototype.ejecutarExpresion = function (tabla, errores) {
        throw new Error("Method not implemented.");
    };
    Do.prototype.dibujarAST = function (nodoPadre) {
        return "";
    };
    return Do;
}());
exports["default"] = Do;
