// app.js - Nuestra API web simple
const express = require('express');
const app = express();

// Función que suma dos números (esto es lo que vamos a testear)
function sumar(a, b) {
  return a + b;
}

// Ruta principal
app.get('/', (req, res) => {
  res.json({ mensaje: 'Hola Mundo desde mi primer CI/CD', version: '1.0' });
});

// Ruta que suma dos números recibidos como parámetros
app.get('/sumar/:a/:b', (req, res) => {
  const resultado = sumar(Number(req.params.a), Number(req.params.b));
  res.json({ resultado });
});

// Exportamos la función para poder testearla
module.exports = { app, sumar };