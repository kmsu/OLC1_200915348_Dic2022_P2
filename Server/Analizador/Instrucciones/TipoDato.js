"use strict";
exports.__esModule = true;
exports.Tipo = void 0;
var Tipo;
(function (Tipo) {
    Tipo[Tipo["ENTERO"] = 0] = "ENTERO";
    Tipo[Tipo["DECIMAL"] = 1] = "DECIMAL";
    Tipo[Tipo["BOOLEANO"] = 2] = "BOOLEANO";
    Tipo[Tipo["CARACTER"] = 3] = "CARACTER";
    Tipo[Tipo["CADENA"] = 4] = "CADENA";
    Tipo[Tipo["VOID"] = 5] = "VOID";
})(Tipo = exports.Tipo || (exports.Tipo = {}));
var TipoDato = /** @class */ (function () {
    function TipoDato(tipoDato) {
        this.dato = tipoDato;
    }
    TipoDato.prototype.TraducirPython = function () {
        return "";
    };
    return TipoDato;
}());
exports["default"] = TipoDato;
