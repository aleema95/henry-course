var lista = document.getElementById('lista');

$('#boton').click(function(){
    $.get('http://localhost:5000/amigos/', function(response){
        console.log(response);
        lista.innerHTML = "";
        response.forEach(element => {
            $(`<li id="${element.id}">
                    <p>Nombre: ${element.name}</p> 
                    <p>Edad: ${element.age}</p>
               </li>`).appendTo('#lista')
        });
    })
});

var input = document.querySelector('#input');
var amigo = document.getElementById('amigo');

$('#search').click(function(){ 
    $.get(`http://localhost:5000/amigos/${input.value}`, function(response){
        console.log(response);
        amigo.innerHTML = "";
        $(` <div>
                <p>Nombre: ${response.name}</p>
                <p>Edad: ${response.age}</p>
            </div>`).appendTo('#amigo')
    })
});

var inputDel = document.querySelector('#inputDelete');


$('#delete').click(function(){
    $.delete(`http://localhost:5000/amigos/${inputDel.value}`, function(response){
        console.log(response);
    })
});