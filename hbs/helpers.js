const hbs = require('hbs');

// helper
hbs.registerHelper('getYear', () => {
    return new Date().getFullYear();
})

hbs.registerHelper('capitalizar', (texto) => {
    
    let palabras = texto.split(' ');
    palabras.forEach( (palabra, pos) =>{
        
        palabras[pos] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();

    });

    return palabras.join(' ');

})
