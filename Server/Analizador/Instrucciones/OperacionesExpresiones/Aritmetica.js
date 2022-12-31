"use strict";
exports.__esModule = true;
exports.Operacion = void 0;
var Operacion;
(function (Operacion) {
    Operacion[Operacion["UnarioSuma"] = 0] = "UnarioSuma";
    Operacion[Operacion["UnarioResta"] = 1] = "UnarioResta";
    Operacion[Operacion["Suma"] = 2] = "Suma";
    Operacion[Operacion["Resta"] = 3] = "Resta";
    Operacion[Operacion["Multiplicacion"] = 4] = "Multiplicacion";
    Operacion[Operacion["Division"] = 5] = "Division";
    Operacion[Operacion["Parentesis"] = 6] = "Parentesis";
})(Operacion = exports.Operacion || (exports.Operacion = {}));
var Aritmetica = /** @class */ (function () {
    function Aritmetica(izquierdo, operador, derecho) {
        this.izquierdo = izquierdo;
        this.derecho = derecho;
        this.operador = this.getOperador(operador);
    }
    Aritmetica.prototype.getOperador = function (operador) {
        switch (operador) {
            case '+':
                if (this.izquierdo == null) {
                    return Operacion.UnarioSuma;
                }
                else {
                    return Operacion.Suma;
                }
            case '-':
                if (this.izquierdo == null) {
                    return Operacion.UnarioResta;
                }
                else {
                    return Operacion.Resta;
                }
            case "*":
                return Operacion.Multiplicacion;
            case '/':
                return Operacion.Division;
            default:
                return Operacion.Parentesis;
        }
    };
    Aritmetica.prototype.TraducirPython = function () {
        switch (this.operador) {
            case Operacion.Parentesis:
                return "(" + this.derecho.TraducirPython() + ")";
            case Operacion.UnarioSuma:
                return this.derecho.TraducirPython();
            case Operacion.UnarioResta:
                return "-" + this.derecho.TraducirPython();
            case Operacion.Suma:
                return this.izquierdo.TraducirPython() + " + " + this.derecho.TraducirPython();
            case Operacion.Resta:
                return this.izquierdo.TraducirPython() + " - " + this.derecho.TraducirPython();
            case Operacion.Multiplicacion:
                return this.izquierdo.TraducirPython() + " * " + this.derecho.TraducirPython();
            case Operacion.Division:
                return this.izquierdo.TraducirPython() + " / " + this.derecho.TraducirPython();
            default:
                return "";
                break;
        }
    };
    return Aritmetica;
}());
exports["default"] = Aritmetica;
