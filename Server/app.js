var express = require('express');
//const res = require('express/lib/response'); //Se crea sola si es necesario (regularmente no se crea)
var morgan = require('morgan');
var app= express();
var cors = require("cors");
var corsOptions = { origin: true, OptionsSuccessStatus: 200 };

var gramatica = require('./gramatica');
var nuevo = 0;

app.use(morgan('dev')); //me muestra en consola que acción hizo el servidor
app.use(express.json());
app.use(cors(corsOptions));//conexion a angular
app.use(express.urlencoded({extended: true}));

var puerto = 8080;
var incremental = 0

app.listen(8080, function () {
    console.log('app nueva escuchando en el puerto 8080');
})


//global.inc = 1


app.get('/', function(req, res) {
    incremental++; //agrego aqui pcomo prueba
    res.json({mensaje: "hola mundo"})
})


app.get('/getIncremental', function(req, res) {
    res.json({incremental: incremental})
})

app.get('/retornoTexto', function(req, res) {
    res.send('este mensaje esta en texto')
})

app.post('/setIncremental', function(req, res){
    //global.inc= req.body.dato //dato es lo que debo colocar en el json desde el post para indicar que es lo que voy a capturar
    //var texto= req.body.texto
    incremental= (req.body.dato+1)
    res.json({ msg: "operacion con exito" })
    
})

//app.delete para eliminar datos
//app.put solo para cambiar un dato que ya esta
//estos son parametros en javascript


/*
app.get('/', function(req, res) {
    fs.readFile('./entrada.txt', (err, data) => {
        if(err) throw err;
        //gramatica.parse(data.toString());
        res.json({mensaje: gramatica.parse(data.toString())})
    });
  
})
*/
var resultado = '';
var analisis = '';
app.post('/editor', function(req, res) {
  
  //res.json({analisis: analisis})
  //analisis = req.body.dato;
  //resultado = gramatica.parse(analisis);
  resultado = gramatica.parse(req.body.dato);
  res.json({resul: resultado})

})

app.get('/getAnalisis', function(req, res) {
    res.json({analisis: resultado})
})