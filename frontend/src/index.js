fetch('/consultar?operador1=5&operador2=3&operando=somar')

.then(function(resposta){
    const teste = resposta.json();
    return teste
})

.then(function(users){
    console.log(users);
});