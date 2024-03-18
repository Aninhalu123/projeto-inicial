const botao = document.getElementById("botao");
botao.addEventListener("click",alertar);

var nome  = document.getElementById("nome");
var saida = document.getElementById("saida-de-dados");
var email = document.getElementById("email");

var telefone = document.getElementById("telefone");
var email = document.getElementById("email");
var logradouro = document.getElementById("cep");
var numero   = document.getElementById("cep");
var complemento = document.getElementById("cep");
var bairro = document.getElementById("cep");
var estado = document.getElementById("cep");
var cidade   = document.getElementById("cep");



function alertar (){
    //alert("O  nome inserido foi + nome");

    saida.innerText = "nome:" + nome.Value;
    "\n E-mail: " + email.value;
}

