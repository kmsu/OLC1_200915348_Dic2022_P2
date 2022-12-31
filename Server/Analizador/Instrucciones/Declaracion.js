"use strict";
exports.__esModule = true;
var Declaracion = /** @class */ (function () {
    function Declaracion(tipo, id, valor) {
        this.tipoDato = tipo;
        this.identificador = id;
        this.valor = valor;
    }
    Declaracion.prototype.TraducirPython = function () {
        var listaId = "";
        for (var i = 0; i <= this.identificador.length - 1; i++) {
            if (i == 0) {
                listaId += this.identificador[i];
            }
            else {
                listaId += ", " + this.identificador[i];
            }
        }
        if (this.valor != null) {
            listaId += " = " + this.valor.TraducirPython();
        }
        else {
            listaId += " = none";
        }
        return listaId;
    };
    return Declaracion;
}());
exports["default"] = Declaracion;
