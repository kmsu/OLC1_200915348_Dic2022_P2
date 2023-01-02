"use strict";
exports.__esModule = true;
var TablaSimbolos = /** @class */ (function () {
    function TablaSimbolos(padre, nombre) {
        this.padre = padre;
        this.nombre = nombre;
        this.listaSimbolos = new Array;
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
    TablaSimbolos.prototype.reporteSymTS = function () {
        var lista1 = new Array;
        var cont = 1;
        for (var _i = 0, _a = this.listaSimbolos; _i < _a.length; _i++) {
            var symbol = _a[_i];
            var temp = JSON.parse('{"no":' + cont + ', "id": "' + symbol.getId() + '", "TipoDato":' + symbol.getTipoDato() + ', "valor": "' + symbol.getValor().toString() + '", "entorno": "' + this.nombre + '", "linea": ' + symbol.getLinea() + ', "columna": ' + symbol.getColumna() + ' }');
            lista1.push(temp);
            cont++;
        }
        if (this.padre != null) {
            var lista2 = this.padre.reporteSymTS();
            for (var _b = 0, lista2_1 = lista2; _b < lista2_1.length; _b++) {
                var symbol = lista2_1[_b];
                lista1.push(symbol);
            }
        }
        return lista1;
    };
    return TablaSimbolos;
}());
exports["default"] = TablaSimbolos;
