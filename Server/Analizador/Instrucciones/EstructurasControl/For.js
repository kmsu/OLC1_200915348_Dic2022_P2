"use strict";
exports.__esModule = true;
var For = /** @class */ (function () {
    function For(expresion, cuerpo, linea, columna) {
        this.expresion = expresion;
        this.cuerpo = cuerpo;
        this.linea = linea;
        this.columna = columna;
    }
    For.prototype.ejecutarInstruccion = function (tabla, errores) {
        var consola = "";
        var tablaFor = tabla.addSubEntorno("For");
        for (var _i = 0, _a = this.cuerpo; _i < _a.length; _i++) {
            var instruccion = _a[_i];
            if (instruccion != null) {
                var temp = instruccion.ejecutarInstruccion(tablaFor, errores);
                if (temp != "") {
                    consola += temp + "\n";
                }
            }
        }
        return consola;
    };
    For.prototype.ejecutarExpresion = function (tabla, errores) {
        throw new Error("Method not implemented.");
    };
    For.prototype.dibujarAST = function (nodoPadre) {
        throw new Error("Method not implemented.");
    };
    return For;
}());
exports["default"] = For;
