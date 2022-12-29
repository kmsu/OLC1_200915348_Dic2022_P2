var express = require('express');
var morgan = require('morgan');
var cors = require("cors");
var corsOptions = { origin: true, OptionsSuccessStatus: 200 };
var app= express();

app.use(morgan('dev')); //me muestra en consola que acción hizo el servidor
app.use(express.json());
app.use(cors(corsOptions));//conexion a angular
app.use(express.urlencoded({extended: true}));

var puerto = 8080;
var gramatica = require('./Analizador/gramatica');

app.listen(8080, function () {
    console.log('app nueva escuchando en el puerto 8080');
})

var resultado = '';
var reportError;
app.post('/editor', function(req, res) {
  var Arbol =  gramatica.parse(req.body.dato);
  resultado = Arbol.getTraduccion();
   
  reportError = Arbol.getReporte();
 
  res.json({resul: resultado})
})


app.get('/getAnalisis', function(req, res) {
    res.json({analisis: resultado})
})

app.get('/getErrores',function(req, res){
  res.json({reporte: reportError})
})