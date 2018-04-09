const http = require('http');

//Creando el servidor
http.createServer( (req, resp) => {

    resp.writeHead(200, { 'Content-Type': 'application/json' });

    let salida = {

        nombre: 'Alejandro',
        edad: 31,
        url: req.url
    }

    // resp.write('Hola Mundo');
    resp.write(JSON.stringify(salida));
    resp.end();

})

.listen(8080);

console.log("Escuchando por el puerto 8080");