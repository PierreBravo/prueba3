//alert("funcionando")

document.querySelector('#producto').addEventListener('click', function(){
    obtenerDatos();
});

function obtenerDatos(){
    let url = `http://127.0.0.1:8000/api`;

    const api = new XMLHttpRequest();
    api.open('GET', url, true);
    api.send();

    api.onreadystatechange = function(){
        if(this.status == 200 && this.readyState == 4){
            let datos = JSON.parse(this.responseText);
            console.log(datos);
            let resultado = document.querySelector('#resultado');
            resultado.innerHTML = '';

            for(let item of datos){
                console.log(item.nombre);
            resultado.innerHTML += `<li>Nombre Producto: ${item.nombre} |Cantidad: ${item.cantidad}|Fecha de venta: ${item.fecha_venta}|Hora de venta: ${item.hora_venta}</li>` ;
            }
        }


    }
}

 	


