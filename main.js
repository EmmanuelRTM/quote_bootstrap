(function(){
    'use strict'
/*
function addImages(num){
  for(var i=0; i<num; i++){
    const container = document.querySelector(".container")
    const imageDiv = document.createElement('div')
    imageDiv.className = "card"
    const imgElement = document.createElement('img')
    imgElement.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+(i+1)+".png"
    //codigo a prueba
    const textDiv = document.createElement('div')
    const textElement = document.createElement('p')
    textElement.innerHTML = pokemons[i].name.english + "<br>" + "Tipo: " + pokemons[i].type +
    "<br>" + "Ataque: " + pokemons[i].base.Attack + "<br>" + "Defensa: " + pokemons[i].base.Defense +
    "<br>" + "Velocidad: " + pokemons[i].base.Speed
    textDiv.append(textElement)
    imageDiv.append(textDiv)
    imageDiv.append(imgElement)
    container.append(imageDiv)
}
}
addImages(pokemons.length)
*/
// Vincula la variable 'botonBuscar' con el elemento que tenga el id='button-addon1'
var botonSubmit = document.getElementById('button-addon1')
//console.log(botonSubmit)
function obtenerId(marca,modelo,presupuesto_val,caja){
    var arrayAutos=[];
    for (var i=0;i<autos.length;i++){
        var multiplicacion= autos[i].make/(0.2);
        if( modelo==autos[i].year || caja ==autos[i].transmision || presupuesto_val <= multiplicacion ){// dado a que es una base datos pequeñas optamos por solo mostrar estos or's si se cumplen y solo forzar la marca
                if( marca==autos[i].make ){
                    arrayAutos.push(i);//onsole.log(i);//arrayAutos.push=4//agregar el id
                }
        }
    }
    return arrayAutos;
}
function add(pokemons,arraId){
    //console.log(arraId)
    var i=0;
    var container = document.querySelector(".cartas")
    for(arraId[i]; i<arraId.length; i++){
        console.log(pokemons[arraId[i]].model);
        /*console.log(autos[i].year);//modelo 3, , , colores, precio, caja
        console.log(autos[i].make);//marca 2
        console.log(autos[i].model);//nombre1
        console.log(autos[i].price);//budget 5
        console.log(autos[i].transmision);//caja
        console.log(autos[i].colors[0])//colores 4
*/
        var card= document.createElement('div')
        card.className = "card col-4 mb-3 d-none d-md-none d-xs-none d-lg-block d-xl-block"
/*
        var img = document.createElement('img')
        img.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+(i+1)+".png"
*/
        var texto = document.createElement('div')
        texto.className = "texto"
        var nombre = document.createElement('p')
        nombre.className = "nombre"
        nombre.innerHTML = "Nombre: " + pokemons[arraId[i]].model
        var tipo = document.createElement('p')
        tipo.className = "marca"
        tipo.innerHTML = "\n Marca: " + pokemons[arraId[i]].make
        console.log(tipo);
        var ataque = document.createElement('p')
        ataque.className = "modelo"
        ataque.innerHTML = "\n Modelo: " + pokemons[arraId[i]].year
        console.log(pokemons[arraId[i]].year)
        var colores_bonitos="";
        for(var k=0;k<pokemons[arraId[i]].colors.length;k++){
            colores_bonitos=colores_bonitos+pokemons[arraId[i]].colors[k]+", "
        }
        console.log(colores_bonitos)
        var defensa = document.createElement ('p')
        defensa.className = "colores"
        defensa.innerHTML = "\n Colores: " + colores_bonitos
        //console.log(pokemons[arraId[i]].colors[0]);
        var velocidad = document.createElement ('p')
        velocidad.className = "precio"
        velocidad.innerHTML = "\n Precio: " + pokemons[arraId[i]].price+"\n"
        console.log(pokemons[arraId[i]].price+"\n")
        //console.log(velocidad);
        texto.appendChild(nombre)
        texto.appendChild(tipo)
        texto.appendChild(ataque)
        texto.appendChild(defensa)
        texto.appendChild(velocidad)
        card.appendChild(texto)
        //console.log(card)
        //card.append(img)
        container.appendChild(card)
    }


//Cartas chicas

    var i=0;
    var container = document.querySelector(".cartas")
    for(arraId[i]; i<arraId.length; i++){
        console.log(pokemons[arraId[i]].model);
        /*console.log(autos[i].year);//modelo 3, , , colores, precio, caja
        console.log(autos[i].make);//marca 2
        console.log(autos[i].model);//nombre1
        console.log(autos[i].price);//budget 5
        console.log(autos[i].transmision);//caja
        console.log(autos[i].colors[0])//colores 4
*/
        var card= document.createElement('div')
        card.className = "card col-7 mb-3 d-lg-none d-xl-none  d-xs-block d-sm-block d-md-block"
/*
        var img = document.createElement('img')
        img.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+(i+1)+".png"
*/
        var texto = document.createElement('div')
        texto.className = "texto"
        var nombre = document.createElement('p')
        nombre.className = "nombre"
        nombre.innerHTML = "Nombre: " + pokemons[arraId[i]].model
        var tipo = document.createElement('p')
        tipo.className = "marca"
        tipo.innerHTML = "\n Marca: " + pokemons[arraId[i]].make
        console.log(tipo);
        var ataque = document.createElement('p')
        ataque.className = "modelo"
        ataque.innerHTML = "\n Modelo: " + pokemons[arraId[i]].year
        console.log(pokemons[arraId[i]].year)
        var colores_bonitos="";
        for(var k=0;k<pokemons[arraId[i]].colors.length;k++){
            colores_bonitos=colores_bonitos+pokemons[arraId[i]].colors[k]+", "
        }
        console.log(colores_bonitos)
        var defensa = document.createElement ('p')
        defensa.className = "colores"
        defensa.innerHTML = "\n Colores: " + colores_bonitos
        //console.log(pokemons[arraId[i]].colors[0]);
        var velocidad = document.createElement ('p')
        velocidad.className = "precio"
        velocidad.innerHTML = "\n Precio: " + pokemons[arraId[i]].price+"\n"
        console.log(pokemons[arraId[i]].price+"\n")
        //console.log(velocidad);
        texto.appendChild(nombre)
        texto.appendChild(tipo)
        texto.appendChild(ataque)
        texto.appendChild(defensa)
        texto.appendChild(velocidad)
        card.appendChild(texto)
        //console.log(card)
        //card.append(img)
        container.appendChild(card)
    }

    // console.log(container);
}
function mensaje_restrictivo(){
    var modal= document.getElementById('modal-login-success');
    var text= document.getElementById('mi');
    //Mandar a llamar al modal y activarlo
    text.innerHTML="Lamentamos informarle que por el momento no tenemos autos con más de $150,000.00 MXN de presupuesto. Sin embargo, le presentamos los disponibles.";
    $('#modal-login-success').modal('show');
}
botonSubmit.addEventListener('click', function(){
//Obtener valores del formulario.
    var marca = document.getElementById('Marca')//Marca
    var marca_val=marca.value;
    console.log(marca_val)
    var modelo = document.getElementById('Modelo')//Modelo
    var modelo_val=modelo.value;
    console.log(modelo_val)
    var presupuesto = document.getElementById('Budget')//Marca
    var presupuesto_val=parseFloat(presupuesto.value);
    // var descuento_aplicado=Math.round(presupuesto_val*0.8);
    console.log(presupuesto_val);
    var caja = document.getElementById('Caja')//Marca
    var caja_val=caja.value;
    console.log(caja_val)
    console.log(autos);
    if(presupuesto_val>150000){
        //arrojara un mensaje de checa el modelo que te guste, todos estos solamente estan a tu disposicion
        mensaje_restrictivo();
        presupuesto_val=150000;
    }
    var idAutos=obtenerId(marca_val,modelo_val, presupuesto_val, caja_val);
    add(autos, idAutos)
    //
    //funcion que hace llamar a las cartas(todas las variables)
//las cartas
    //
    /*
        for(var i=0; i<pokemons.length; i++){
            if(pokeSearch.value === pokemons[i].name.english){
            console.log(pokemons[i].name.english)
            window.open("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+(i)+".png", 'pokeSearch', 'width=200,height=150')
        
            } else {
    
            }
        }*/
        })
})()