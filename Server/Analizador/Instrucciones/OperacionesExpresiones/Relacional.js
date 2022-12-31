"use strict";
exports.__esModule = true;
var Relacional = /** @class */ (function () {
    function Relacional(izquierdo, operador, derecho) {
        this.izquierdo = izquierdo;
        this.derecho = derecho;
        this.operador = operador;
    }
    Relacional.prototype.TraducirPython = function () {
        switch (this.operador) {
            case '>':
                return this.izquierdo.TraducirPython() + " > " + this.derecho.TraducirPython();
            case '<':
                return this.izquierdo.TraducirPython() + " < " + this.derecho.TraducirPython();
            case '==':
                return this.izquierdo.TraducirPython() + " == " + this.derecho.TraducirPython();
            case '!=':
                return this.izquierdo.TraducirPython() + " != " + this.derecho.TraducirPython();
            case '>=':
                return this.izquierdo.TraducirPython() + " >= " + this.derecho.TraducirPython();
            case '<=':
                return this.izquierdo.TraducirPython() + " <= " + this.derecho.TraducirPython();
            default:
                return "";
                break;
        }
    };
    return Relacional;
}());
exports["default"] = Relacional;
