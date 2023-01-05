"use strict";
exports.__esModule = true;
var While = /** @class */ (function () {
    function While(expresion, cuerpo, linea, columna) {
        this.expresion = expresion;
        this.cuerpo = cuerpo;
        this.linea = linea;
        this.columna = columna;
    }
    While.prototype.ejecutarInstruccion = function (tabla, errores) {
        var consola = "";
        var tablaWhile = tabla.addSubEntorno("While");
        for (var _i = 0, _a = this.cuerpo; _i < _a.length; _i++) {
            var instruccion = _a[_i];
            if (instruccion != null) {
                var temp = instruccion.ejecutarInstruccion(tablaWhile, errores);
                if (temp != "") {
                    consola += temp + "\n";
                }
            }
        }
        return consola;
    };
    While.prototype.ejecutarExpresion = function (tabla, errores) {
        throw new Error("Method not implemented.");
    };
    While.prototype.dibujarAST = function (nodoPadre) {
        return "";
    };
    return While;
}());
exports["default"] = While;
