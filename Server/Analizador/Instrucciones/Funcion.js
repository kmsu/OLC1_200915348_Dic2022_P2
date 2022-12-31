"use strict";
exports.__esModule = true;
var Funcion = /** @class */ (function () {
    function Funcion(id, parametros, instrucciones) {
        this.id = id;
        this.parametros = parametros;
        this.instrucciones = instrucciones;
    }
    Funcion.prototype.TraducirPython = function () {
        var traduccion = "def " + this.id + "( ";
        if (this.parametros != null) {
            for (var i = 0; i <= this.parametros.length - 1; i++) {
                if (i == 0) {
                    traduccion += this.parametros[i];
                }
                else {
                    traduccion += ", " + this.parametros[i];
                }
            }
        }
        traduccion += " ):\n";
        for (var _i = 0, _a = this.instrucciones; _i < _a.length; _i++) {
            var instruccion = _a[_i];
            traduccion += " " + instruccion.TraducirPython() + "\n";
        }
        return traduccion;
    };
    return Funcion;
}());
exports["default"] = Funcion;
