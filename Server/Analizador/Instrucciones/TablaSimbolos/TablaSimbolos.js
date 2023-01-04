"use strict";
exports.__esModule = true;
var TablaSimbolos = /** @class */ (function () {
    function TablaSimbolos(padre, nombre) {
        this.padre = padre;
        this.nombre = nombre;
        this.listaSimbolos = new Array;
        this.listaSubEntornos = new Array;
    }
    TablaSimbolos.prototype.addSimbol = function (simbolo) {
        this.listaSimbolos.push(simbolo);
    };
    TablaSimbolos.prototype.addSubEntorno = function (nombre) {
        var entorno = new TablaSimbolos(this, nombre);
        this.listaSubEntornos.push(entorno);
        return entorno;
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
            var tipo = void 0;
            switch (symbol.getTipoDato()) {
                case 0:
                    tipo = "int";
                    break;
                case 1:
                    tipo = "double";
                    break;
                case 2:
                    tipo = "boolean";
                    break;
                case 3:
                    tipo = "char";
                    break;
                case 4:
                    tipo = "string";
                    break;
                default:
                    tipo = "Invalido";
                    break;
            }
            //let temp:reporteJson = JSON.parse('{"no":'+cont+', "id": "' + symbol.getId()+ '", "TipoDato":'+ symbol.getTipoDato()  + ', "valor": "'+ symbol.getValor().toString()+ '", "entorno": "'+ this.nombre + '", "linea": '+ symbol.getLinea()+', "columna": ' + symbol.getColumna()+' }');
            var temp = JSON.parse('{"no":' + cont + ', "id": "' + symbol.getId() + '", "TipoDato": "' + tipo + '", "valor": "' + symbol.getValor().toString() + '", "entorno": "' + this.nombre + '", "linea": ' + symbol.getLinea() + ', "columna": ' + symbol.getColumna() + ' }');
            lista1.push(temp);
            cont++;
        }
        for (var _b = 0, _c = this.listaSubEntornos; _b < _c.length; _b++) {
            var entorno = _c[_b];
            var lista2 = entorno.reporteSymTS();
            for (var _d = 0, lista2_1 = lista2; _d < lista2_1.length; _d++) {
                var symbol = lista2_1[_d];
                lista1.push(symbol);
            }
        }
        return lista1;
    };
    return TablaSimbolos;
}());
exports["default"] = TablaSimbolos;
