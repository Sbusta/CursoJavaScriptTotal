function Automovil(marca, modelo, color, anio, titular) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anio = anio;
    this.titular = titular;    
}

let auto1 = new Automovil("Ferrari", "F40", "Rojo", 1988, "Michael");
let auto2 = new Automovil("Porsche", "911", "negro", 1998, "Sebastian");
let auto3 = new Automovil("Mazda", "2", "Gris", 2010, "Jaime");
let automoviles = [auto1,auto2,auto3];

Automovil.prototype.venderAutomovil = function(titularNuevo) {
    this.titular = titularNuevo;
}

Automovil.prototype.encender = function() {
    alert("El automovil fue encendido");
}

Automovil.prototype.verAuto = function() {
   return `${this.marca} ${this.modelo} - ${this.anio} - ${this.titular}`;
}

function mostrarRegistros() {
    let lista = document.getElementById('listaAutomoviles');
    
    for(let auto of automoviles) {
        let item = document.createElement('li');
        item.innerText = auto.verAuto();
        lista.appendChild(item);
    }
}