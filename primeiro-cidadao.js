//funçao em js é first-class object (citizens)
// higher-order function  (funçao de alta orden)

//funçao de forma literal
function fun1() { }

//Armazenar em uma vareável
const fun2 =  function() {}

//Armazenar em uma array 
const array = [function(a, b) {return a + b},fun1, fun2]
console.log(array[0] (2, 3));

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function() {return 'ola'}
console.log(obj.falar());


///passar como parametro
function run(fun) {
    fun()
}
run(function (){ console.log('executando...') })

//uma funçao pode retronar ou conter uma funçao
function soma (a, b){
    return function(c){
        console.log(a+ b + c);
    }
    
}
soma (2, 2) (2)
//ou URO ESTÁGIO! Faço faculdade no SENAI, 2° fase em Análise e Desenvolvimento de Sistemas.Meio período de preferência matutino. Obrigada
const cincoMais = soma (4, 2)
cincoMais(2)

