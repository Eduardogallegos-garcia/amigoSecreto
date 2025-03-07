// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const inputText= document.getElementById('amigo');
const btnAñadir=document.getElementById('añadir');
const lista=document.getElementById('listaAmigos');
const resultado=document.getElementById('resultado');
let amigos=[];
let contador=0;
function agregarAmigo(){
    const nombre=inputText.value;
    lista.style.display="block";
    resultado.style.display="none";  
    if(nombre==""){
        alert("Por favor, inserte un nombre.")
    }else{
       
        amigos.push(nombre)

        agregarLista();
        inputText.value=""; 
        console.log(amigos)   
    }    
}
function agregarLista(){ 
         
        lista.innerHTML+=`<li>${amigos[contador]}</li>`
        contador++;
}
function sortearAmigo(){
    if(amigos.length!=0){
        resultado.style.display="block";  
        const indice=Math.floor(Math.random()*amigos.length);
        lista.style.display="none";
        resultado.innerHTML=`<li>El amigo secreto es ${amigos[indice]}</li>`
        amigos=[];
        lista.innerHTML="";
        contador=0;
        console.log(amigos)
    }else{
        alert("No hay amigos para sortear")
    }
}
