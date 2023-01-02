"use strict";
exports.__esModule = true;
var Simbolo_1 = require("./TablaSimbolos/Simbolo");
var Declaracion = /** @class */ (function () {
    function Declaracion(tipo, id, valor, linea, columna) {
        this.tipoDato = tipo;
        this.identificador = id;
        this.valor = valor;
        this.linea = linea;
        this.columna = columna;
    }
    Declaracion.prototype.ejecutarInstruccion = function (tabla) {
        var symTipo = this.tipoDato.ejecutarExpresion(tabla); //ejecutarExpresion porque se va a obtener el tipo de variable
        var symValor;
        if (this.valor != null) {
            symValor = this.valor.ejecutarExpresion(tabla);
            console.log("El valor de la expresion es: " + symValor.getValor().toString());
            console.log("El tipo de la expresion es: " + symValor.getTipoDato());
        }
        else {
            symValor = new Simbolo_1["default"](symTipo.getTipoDato(), null, -1, -1); //-1, -1 porque no existe en el codigo de entrada
            console.log("");
        }
        for (var _i = 0, _a = this.identificador; _i < _a.length; _i++) {
            var id = _a[_i];
            if (tabla.buscarSimbolo(id) == null) {
                //comparar el tipo de variable con el tipo resultante de la expresion a asignar
                console.log("tipo dato variable: " + symTipo.getTipoDato());
                console.log("tipo dato expresion: " + symValor.getTipoDato());
                if (symTipo.getTipoDato() == symValor.getTipoDato()) {
                    //set id al simbolo y agrega a la lista
                    var temp = symValor.copiarSimbolo();
                    temp.setId(id);
                    temp.setLinea(this.linea);
                    temp.setColumna(this.columna);
                    tabla.addSimbol(temp);
                    console.log("se agrego la variable " + id + " en la tabla de simbolos");
                }
                else {
                    //error semantico, el tipo de la variable no es compatible con el tipo del valor a asignar
                    console.log("error semantico, el tipo de la variable no es compatible con el tipo del valor a asignar");
                }
            }
            else {
                //error semantico ya existe la variable
                console.log("error semantico ya existe la variable");
            }
        }
        return ""; //como solo metemos el simbolo a la ts retornamos la cadena vacia porque no retornamos a la consola
    };
    Declaracion.prototype.ejecutarExpresion = function (tabla) {
        throw new Error("Method not implemented.");
    };
    Declaracion.prototype.dibujarAST = function (nodoPadre) {
        throw new Error("Method not implemented.");
    };
    return Declaracion;
}());
exports["default"] = Declaracion;
