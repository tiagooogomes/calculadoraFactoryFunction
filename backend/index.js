const calc = require('./modulos/Calculadora.js');
const bodyParser = require('body-parser')
const express = require('express');
const cors = require("cors");
const fs = require('fs');

const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json())



app.get("/consultar", (req, res) => {
    const op1 = req.query.operador1;
    const op2 = req.query.operador2;
    const operando = req.query.operando;

    calc.operador1(op1);
    calc.operador2(op2);

    if(operando === 'soma') {
        res.send(calc.somar());
    } else if (operando === 'subtracao') {
        res.send(calc.subtrair);
    } else if (operando === 'multiplicacao') {
        res.send(calc.multiplicacao);
    } else if (operando === 'divisao') {
        res.send(calc.divisao);
    }


});




app.listen(port, () => {
    console.log(`Servidor funcionando na porta ${port}!`);
});