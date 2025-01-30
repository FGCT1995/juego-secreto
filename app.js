// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigo = [];
let numeroRandom= 0;


function agregarAmigo() {
    const nombre = (document.getElementById('amigo').value);
    
    if(nombre){
        const existe = amigo.find((am)=>am==nombre);
        
        if(existe){
            alert("Nombre ya registrado");
        }else{
            amigo.push(nombre);  
            mostrarNombres('ul',amigo);
        }
        
    }else{
        alert("Por favor ingresa un nombre valido");
    }
    vaciarCaja();
    return console.log(amigo);
}


function mostrarNombres(elemento,lista) {
    let textoHTML = document.querySelector(elemento);
    textoHTML.innerHTML = lista.join("<br>");
    return;
}

function vaciarCaja() {
    document.querySelector('#amigo').value ="";    
}


function sortearAmigo() {
    numeroRandom=Math.floor(Math.random()*amigo.length);  
    let textoHTML = document.querySelector('ul');    
    if(amigo.length> 1){
        textoHTML.style='color:green;font-weight: bold;font-size: 24px';
        textoHTML.innerHTML = "El amigo secreto sorteado es : "+amigo[numeroRandom];
        condicionesIniciales();
    }else{        
        textoHTML.innerHTML = "Agrega mas nombres";
    }
}

function condicionesIniciales() {
    vaciarCaja();
    amigo = [];
}