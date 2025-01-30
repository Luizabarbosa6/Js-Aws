const express = require('express');
const app = express();

app.get('/',(req, res) =>{
    res.send("Olá essa é a minha página inicial.");
});

const port = 3000; 
app.listen(port, () =>{
    console.log(`O servidor está rodando http://localhost:${port}`);

});