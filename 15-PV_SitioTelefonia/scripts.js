async function consultarInventario(){
    try{
        fetch('https://my-json-server.typicode.com/fedegaray/telefonos/db',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            let cuerpoTabla = document.getElementById("tblContenido");
            let salida = "";
            for(let elemento of data.dispositivos){
                salida += `
                    <tr>
                        <td>${elemento.id}</td>
                        <td>${elemento.marca}</td>
                        <td>${elemento.modelo}</td>
                        <td>${elemento.color}</td>
                        <td>${elemento.almacenamiento} GB</td>
                        <td>${elemento.procesador}</td>
                    </tr>
                `;
            }
            cuerpoTabla.innerHTML = salida;

        })
        .catch(error => { throw new Error("Error en la solicitud: " + error) })
    } catch (error) {
        console.error(error)
    }
}

async function consultarUnidad() {
    try{
        let inputId = await document.getElementById("consultarId").value;

        axios.get(`https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/${inputId}`)
        .then(res => {
            
            document.getElementById("consultarName").value = res.data.marca;
            document.getElementById("consultarModelo").value = res.data.modelo;
            document.getElementById("consultarColor").value = res.data.color;
            document.getElementById("consultarAlmacenamiento").value = res.data.almacenamiento;
            document.getElementById("consultarProcesador").value = res.data.procesador;
        })
        .catch(error => { throw new Error("Error en la solicitud: " + error) })
    }catch (error) {
        console.error(error)
    }            
}

async function modificarArticulo(){
    try{
        console.log(document.getElementById("consultarName").value)
        let inputId = document.getElementById('consultarId').value;
        axios.put(`https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/${inputId}`,{
            marca: document.getElementById("consultarName").value ,
            modelo: document.getElementById("consultarModelo").value ,
            color: document.getElementById("consultarColor").value ,
            almacenamiento: document.getElementById("consultarAlmacenamiento").value ,
            procesador: document.getElementById("consultarProcesador").value ,           
        }).catch(error => { throw new Error("Error en la solicitud: " + error) })
        alert(`Articulo con id ${inputId} modificado`);           

        consultarInventario();
    } catch (error) {
        console.error(error)
    }       
}

async function eliminarArticulo(){
    try{
        let inputId = document.getElementById('consultarId').value;

        axios.delete(`https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/${inputId}`)
        .then(res => {
            document.getElementById("consultarName").value = "";
            document.getElementById("consultarModelo").value = "";
            document.getElementById("consultarColor").value = "";
            document.getElementById("consultarAlmacenamiento").value = "";
            document.getElementById("consultarProcesador").value = "";
            alert(`Articulo con id ${inputId} elimindao`);           


            consultarInventario();            
        })
        .catch(error => { throw new Error("Error en la solicitud: " + error) })
    } catch (error) {
        console.error(error)
    }
}

async function agregarArticulo(){
    try{

        axios.post(`https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/`)
        .then(res => {
            res.data.marca = document.getElementById("iputMarca").value 
            res.data.modelo = document.getElementById("inputModelo").value 
            res.data.color = document.getElementById("inputColor").value 
            res.data.almacenamiento = document.getElementById("inputAlmacenamiento").value 
            res.data.procesador = document.getElementById("inputProcesador").value
            alert(`Se ha agregado un nuevo archivo:\nMarca: ${res.data.marca}\nModelo: ${res.data.modelo}\nColor: ${res.data.color}\nAlmacenamiento: ${res.data.almacenamiento}\nProcesador: ${res.data.procesador}`);
            consultarInventario();            
        })
        .catch(error => { throw new Error("Error en la solicitud: " + error) })
    } catch (error) {
        console.error(error)          
    }

}