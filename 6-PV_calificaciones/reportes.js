let lasNotas = [4,5,3,2,3];

function mostrarLista() {
    let lista = document.getElementById("listaDeNotas");
    
    for (let nota of lasNotas) {
        let itemLista = document.createElement("li");
        itemLista.innerText = nota;
        lista.appendChild(itemLista);
    }
}

function calcularPromedio() {
    let info = document.getElementById("promedio")
    let promedioActual = 0;

    for (let i = 0; i < lasNotas.length; i++) {
      promedioActual = lasNotas[i]+promedioActual;
    }
    let promedio = promedioActual/lasNotas.length
    info.textContent = "El Promedio es: " + promedio.toString();
}

function notaMasAlta() {
   let info = document.getElementById("notaAlta")
   let notaActual = 0;
   let i=0;
    while(i != lasNotas.length){
        if(notaActual < lasNotas[i]){
            notaActual = lasNotas[i];
        }
        i++
    }
    info.textContent = "La Nota más alta es: " + notaActual.toString();
}

function suspenso() {
   let info = document.getElementById("suspenso")
   let i=0;

    let haysuspenso=false;
    do {
        if (lasNotas[i] < 3) {
            haysuspenso=true
        }
        i++
    } while (haysuspenso == false);
    info.textContent = "Suspenso: " + haysuspenso.toString();
    
}