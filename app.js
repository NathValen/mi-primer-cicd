// app.js
const express = require('express');
const app = express();

function sumar(a, b) {
  return a + b;
}

app.get('/', (req, res) => {
  res.json({ mensaje: 'Hola Mundo desde mi primer CI/CD', version: '1.0' });
});

app.get('/sumar/:a/:b', (req, res) => {
  const resultado = sumar(Number(req.params.a), Number(req.params.b));
  res.json({ resultado });
});

// Render asigna el puerto automáticamente via variable de entorno
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

module.exports = { app, sumar };