// get Elements
let listaOpciones = document.getElementById('listaOpciones');
let buscador = document.getElementById('buscador');
let listaAudiovisual = document.getElementById('listaAudiovisual');
let botonBuscar = document.getElementById('buscar');
let lista = document.getElementById('listaAudiovisual');

//initalize global data ***?
let dataJson;

//Event Listenersdd
listaOpciones.addEventListener('change', cambiarOpcion);
listaOpciones.addEventListener('cambioModo',mensajeModo);
buscador.addEventListener('keydown', soloLetras);
botonBuscar.addEventListener('click', buscar);

function cambiarOpcion(){
    let evento = new CustomEvent('cambioModo');
    listaOpciones.dispatchEvent(evento);
}

function mensajeModo(){
    //alert("se cambio a: "+ listaOpciones.value)
}

function soloLetras(event){
    if ( event.keyCode != 8 && event.keyCode != 32){
        if(event.keyCode > 90 && event.keyCode < 97){
            event.preventDefault();
        }else if(event.keyCode > 122){
            event.preventDefault();
        }else if(event.keyCode < 65 ){
            event.preventDefault();
        }
    }
}

function buscar(){
    if(listaOpciones.value != "none"){
        fetch(`${listaOpciones.value}.json`)
        .then(ans => ans.json())
        .then((exit) => {
            revisar(exit)
        })
        .catch(function(error) {console.log(error)});
    }else{dataJson = ""}
}

function revisar(data) {
    lista.innerHTML = "";
    for(let item of data.data){
        if(item.nombre.startsWith(buscador.value.toUpperCase())){
            let p = document.createElement('p');
            p.id = item.nombre;
            p.innerHTML = item.sinopsis;
            p.style.display = "none";

            let li = document.createElement('li');
            li.innerHTML = item.nombre;
            li.addEventListener('mouseover', function() {
                let p = document.getElementById(item.nombre);
                p.style.display = 'block';
            });

            li.addEventListener('mouseout', function() {
                let p = document.getElementById(item.nombre);
                p.style.display = 'none';
            });

            li.appendChild(p);
            lista.appendChild(li);
        }

    }
}