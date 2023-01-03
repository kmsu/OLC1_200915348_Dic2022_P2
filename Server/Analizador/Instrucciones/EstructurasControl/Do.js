"use strict";
exports.__esModule = true;
var While = /** @class */ (function () {
    function While(expresion, cuerpo, linea, columna) {
        this.expresion = expresion;
        this.cuerpo = cuerpo;
        this.linea = linea;
        this.columna = columna;
    }
    While.prototype.ejecutarInstruccion = function (tabla) {
        var consola = "";
        var tablaDo = tabla.addSubEntorno("DoWhile");
        for (var _i = 0, _a = this.cuerpo; _i < _a.length; _i++) {
            var instruccion = _a[_i];
            if (instruccion != null) {
                var temp = instruccion.ejecutarInstruccion(tablaDo);
                if (temp != "") {
                    consola += temp + "\n";
                }
            }
        }
        return consola;
    };
    While.prototype.ejecutarExpresion = function (tabla) {
        throw new Error("Method not implemented.");
    };
    While.prototype.dibujarAST = function (nodoPadre) {
        throw new Error("Method not implemented.");
    };
    return While;
}());
exports["default"] = While;
