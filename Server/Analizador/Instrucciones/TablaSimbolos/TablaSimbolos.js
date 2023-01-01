"use strict";
exports.__esModule = true;
var TablaSimbolos = /** @class */ (function () {
    function TablaSimbolos(padre, nombre) {
        this.padre = padre;
        this.nombre = nombre;
    }
    TablaSimbolos.prototype.addSimbol = function (simbolo) {
        this.listaSimbolos.push(simbolo);
    };
    TablaSimbolos.prototype.buscarSimbolo = function (id) {
        var simboloActual;
        for (var _i = 0, _a = this.listaSimbolos; _i < _a.length; _i++) {
            var symbol = _a[_i];
            if (symbol.getId() == id) {
                simboloActual = symbol;
                break;
            }
        }
        /* PODRIA DAR ERROR PORQUE PODRÍA NO HABER ASIGNADO NULL AL SIMBOLOACTUAL */
        if (simboloActual == null && this.padre != null) {
            simboloActual = this.padre.buscarSimbolo(id);
        }
        return simboloActual;
    };
    return TablaSimbolos;
}());
exports["default"] = TablaSimbolos;