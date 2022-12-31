"use strict";
exports.__esModule = true;
var Logica = /** @class */ (function () {
    function Logica(izquierdo, operador, derecho) {
        this.izquierdo = izquierdo;
        this.derecho = derecho;
        this.operador = operador;
    }
    Logica.prototype.TraducirPython = function () {
        switch (this.operador) {
            case 'Not':
                return "not " + this.derecho.TraducirPython();
            case 'And':
                return this.izquierdo.TraducirPython() + " and " + this.derecho.TraducirPython();
            case 'Or':
                return this.izquierdo.TraducirPython() + " or " + this.derecho.TraducirPython();
            default:
                return "";
                break;
        }
    };
    return Logica;
}());
exports["default"] = Logica;
