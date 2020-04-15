const express = require('express');
const app = express();

app.use(express.urlencoded());

app.get('/', (req, res) => {
  res.send(
    '<form action="/" method="post"><label for="name"><input type="text" id="name" name="name"><button type="submit">Enviar</button></form>');
});

app.post('/', (req, res) => {
  res.send("Hola " + req.body.name + "!");
});
app.listen(3000, () => console.log('Listening on port 3000!'));
