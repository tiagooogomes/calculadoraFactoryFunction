function Calculadora() {     
    const _operador1 = 0;
    const _operador2 = 0;     

    function operador1(param1) {
        this._operador1 = param1;
    }

    function operador2(param2) {
        this._operador2 = param2;
    }

    
    function somar() {
        console.log(this._operador1 + this._operador2);     
        return this._operador1 + this._operador2;
    }    

    function subtrair() {         
        console.log(this._operador1 - this._operador2);
        return this._operador1 - this._operador2;  
    }

    function dividir() {
        console.log(this._operador1 / this._operador2);
        return this._operador1 / this._operador2;
    }

    function multiplicar() {
        console.log(this._operador1 * this._operador2);
        return this._operador1 * this._operador2;
    }

	function limpar() {
    	this._operador1 = 0;
        this._operador2 = 0;
    }


    return {
        operador1: operador1,
        operador2: operador2, 
        limpar: limpar,
        somar: somar,         
        subtrair: subtrair,
        dividir: dividir,
        multiplicar: multiplicar
    }; 
}

const calc = new Calculadora();

module.exports = calc;