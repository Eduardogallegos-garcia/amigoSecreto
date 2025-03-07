// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const inputText= document.getElementById('amigo');
const btnAñadir=document.getElementById('añadir');
const lista=document.getElementById('listaAmigos');
const resultado=document.getElementById('resultado');
let amigos=[];
let contador=0;
function agregarAmigo(){
    const nombre=inputText.value;
    if(nombre==""){
        alert("Por favor, inserte un nombre.")
    }else{
        amigos.push(nombre)
        agregarLista();
        inputText.value="";    
    }    
}
function agregarLista(){    
        lista.innerHTML+=`<li>${amigos[contador]}</li>`
        contador++;
}
function sortearAmigo(){
    if(amigos.length!=0){
        const indice=Math.floor(Math.random()*amigos.length);

        resultado.innerHTML=`<li>El amigo secreto es ${amigos[indice]}</li>`
        
    }else{
        alert("No hay amigos para sortear")
    }
}