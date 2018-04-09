

const express = require('express')
const app = express()
const hbs = require('hbs');

require('./hbs/helpers');

// Para el puerto en Heroku
const port = process.env.PORT || 3000 ;




//Para servir contenido estático
app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



app.get('/', function (req, res) {
    res.render('home', {
        nombre: 'Alejandro Lafourcade',
    });


});


app.get('/about', function (req, res) {
    res.render('about', {
    });
});



app.listen(3000, () => {
    console.log(`Escuchando peticiones el puerto ${port}`);
})