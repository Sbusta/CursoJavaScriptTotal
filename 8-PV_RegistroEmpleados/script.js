let listaEmpleados = [];

function Empleado(legajo,nombre,apellido,fecha,cargo) {
    this.legajo = legajo;
    this.nombre = nombre;
    this.apellido = apellido;
    this.fecha = fecha;
    this.cargo = cargo;
}

function guardarEmpleado() {

    let legajo = document.getElementById("legajo").value;
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let fecha = document.getElementById("fecha").value;
    let cargo = document.getElementById("cargo").value;

    let empleado = new Empleado(legajo,nombre,apellido,fecha,cargo);
    listaEmpleados.push(empleado);
    cleanInput();
}

function cleanInput() {

    document.getElementById("legajo").value = "";
    document.getElementById("nombre").value= "";
    document.getElementById("apellido").value= "";
    document.getElementById("fecha").value= "";
    document.getElementById("cargo").value= "";
}

function mostrarEmpleados() {
    let i = 1;
    let listado = "";
    for (let empleado of listaEmpleados) {
        listado = listado + i + ": ";
        for (let info in empleado) {
            listado = listado +  info + ": " + empleado[info] + ","
        }  
        listado = listado + "\n"
        i++      
    }
    alert(listado)
}