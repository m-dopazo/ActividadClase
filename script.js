
function enviarForm(){
    
    //Tomar cada valor de los input
    let nombre = document.getElementById("formNombre").value;
    let apellido = document.getElementById("formApellido").value;
    let fecha = document.getElementById("formFecha").value;

    //Fetch de metodo POST que envia un JSON al "sv"
    fetch("https://jsonplaceholder.typicode.com/users",{
        method: "POST",
        body: JSON.stringify({
            nombre: nombre,
            apellido: apellido,
            fechaNacimiento: fecha
        }),
        //Header aparentenmente no TAN necesario
        headers: {"Content-type": "application/json; charset=UTF-8"}     
    })
    .then((response) => response.json())
    .then((data) => alert(JSON.stringify(data)))
}