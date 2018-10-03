//llamamos la librerias
var express = require("expres");

//llamamos a la funcion express
var app = express();


//inicializamos una ruta  principal index
app.get('/',function(req,res){

	res.end("Hola Mundo");
	
});

//ponemos en linea el servidor
app.listen(8080,function(){

	console.log("Servidor Online");

});