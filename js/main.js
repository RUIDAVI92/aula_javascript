function clicou(){
    document.getElementById("agradecimento").innerHTML="<b>obrigado por clicar</b>";
    //byid referencia no html
    //inner coloca texto como se fosse direto no html
    //console.log( document.getElementById("agradecimento"));
    //alert("obrigado por clicar");
}

function redirecionar(){
    window.open("https://www.uol.com.br/");  //abre uma nova aba
    window.location.href="https://www.uol.com.br/";  //abre na mesma aba
}

//2 formas de fazer a mesma coisa
//com parametro
function trocar(elemento){
    elemento.innerHTML = "obrigado por passar o mouse";
}

function voltar(elemento){
    elemento.innerHTML ="passe o mouse aqui";
}

function load(){
    alert("pagina carrgada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}
/*
//sem parametro
function trocar(){
    document.getElementById("mousemove").innerHTML="obrigado por passar o mouse";
  //alert("trocar texto");
}

function voltar(){
    document.getElementById("mousemove").innerHTML="passe o mouse aqui";
}
*/
/*
//funcao

function soma(n1,n2){
    return n1+n2;
}
*/
/*
//para variavel global
var validar;  //variavel global
function validaIdade(idade){
    if(idade>=18){
        validar = true;
}else{
    validar = false;
}

}

var idade = prompt("qual sua idade?");
validaIdade(idade);
console.log(validar);
*/
/*
//para variavel local
function validaIdade(idade){
    var validar;  //variavel local
    if(idade>=18){
        validar = true;
}else{
    validar = false;
}
return validar;
}

var idade = prompt("qual sua idade?");
console.log(validaIdade(idade));
*/


/*
function setReplace(frase,nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
alert(soma(5,10));
alert(setReplace("vai japao", "japao","brasil" ));
*/

/*
//date
var d= new Date();
alert(d);  //mostra a data completa
alert(d.getMonth()+1);  //mostra o mes. comeca de 0. por isso +1
alert(d.getMinutes());  //mostra os minutos
//tem um monte de get...
*/

//repeticao
/*
var count;
for(count =0; count < 5; count++){
    console.log("contador " + count);
    alert(count);

}
*/

/*
var count = 0;
while(count < 5){
    console.log(count);
    alert(count);
    count = count + 1;  //count++;
}
*/
//condicional
/*
//var idade =18;
var idade = prompt("qual a idade?");  // recebe dados via teclado  na "janelinha" (alert)
if(idade >=18)
    alert("maior de idade");
else{  //pode nao ter chaves. como no C
    alert("menor de idade");
}

*/



//dicionario - tem a ver dom json
/*
//dicionario com multiplos

var frutas =[{nome: "maca", cor: "vermelha"}, {nome: "uva", cor: "roxa"}];
console.log(frutas); //mostra tudo como esta na variavel
console.log(frutas[1]);  //mostra so o nome
alert(frutas[0].nome);
*/

/*
//dicionario simples
var fruta ={nome: "maca", cor: "vermelha"};
console.log(fruta); //mostra tudo como esta na variavel
console.log(fruta.nome);  //mostra so o nome
alert(fruta.cor);
*/

//lista
/*
var lista = ["maca", "pera", "laranja"];
lista.push("uva");  //inclui no item na lista
//lista.pop();  //tira o ultimo

console.log(lista);  //mostra a lista toda
//console.log(lista.length); //mostar o comprimento
//alert(lista[1]);  //mostra um elemento especifico da lista
//console.log(lista.reverse());  //inverte a lista
console.log(lista.toString()); //transforma uma lista em uma unica string
//console.log(lista.toString()[0]); //imprime so a 1 letra da string
console.log(lista.join(" - "));  //muda o separador da string

*/

//numeros e string 
//console escreve na console do browser f12 ou inspecinar
/*
var nome = "Rui";
var idade = 65;
var idade2 = 10;
var frase = "japão é o melhor time do mundo";
//alert(nome +" tem " + idade + " anos");
//alert(idade + idade2);
console.log(nome);
console.log(idade + idade2);
//console.log(frase.replace("japao", "brasil"));
//alert(frase.replace("japao", "brasil"));  //replace nao funcionou
console.log(frase.toLowerCase());  //minusculo
console.log(frase.toUpperCase());  //maiusculo
*/