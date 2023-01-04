"use strict";
exports.__esModule = true;
var Errores = /** @class */ (function () {
    function Errores() {
        this.lista = new Array;
    }
    Errores.prototype.putError = function (tipo, fila, columna, descripcion) {
        var temp = JSON.parse('{"Tipo": "' + tipo + '", "Linea": ' + fila + ', "Columna": ' + columna + ', "Descripcion": "' + descripcion + '" }');
        this.lista.push(temp);
    };
    Errores.prototype.getErrores = function () {
        return this.lista;
    };
    return Errores;
}());
exports["default"] = Errores;
