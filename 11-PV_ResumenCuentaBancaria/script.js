
function cargarResumen(){
    fetch('resumen.json')
    .then(ans => ans.json())
    .then(function(exitData) {
        mostrarinfo(exitData);
    })
    .catch(function(err){ console.log("ERROR \n" + err)})
}

function mostrarinfo(data){
    let nombreBanco = document.getElementById("nombreBanco");
    let sucursal = document.getElementById("sucursal");
    let nombre = document.getElementById("nombre");
    let nroCuenta = document.getElementById("nroCuenta");
    let usd = document.getElementById("usd");
    let eur = document.getElementById("eur");
    let CBU = document.getElementById("CBU");

    nombreBanco.textContent = data.banco;
    sucursal.textContent = data.sucursal;
    nombre.textContent =  `Nombre: ${data.titular}`;
    nroCuenta.textContent = `Nro cuenta: ${data.nro_cuenta}`
    CBU.textContent = `CBU: ${data.cbu}`
    usd.textContent = `${data.saldo[0].monto} ${data.saldo[0].moneda}`;
    eur.textContent = `${data.saldo[1].monto} ${data.saldo[1].moneda}`

}