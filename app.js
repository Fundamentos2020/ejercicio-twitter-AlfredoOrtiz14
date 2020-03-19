//--Variables
const listaTweets = document.getElementById('lista-tweets');

//--Event Listeners
eventListeners();

function eventListeners(){
    document.querySelector('#formulario').addEventListener("submit", agregarTweet);

    //Borrar tweet
    listaTweets.addEventListener('click', borrarTweet);

    //Contenido Cargado
    document.addEventListener('DOMContentLoaded', localStorageListo);
}

//--Funciones


//Añadir el tweet al formulario
function agregarTweet(e){
    e.preventDefault();
    //console.log("Formulario enviado");

    const tweet = document.getElementById('tweet').value;

    //Crear div padre
    const padre = document.createElement('div');
    padre.classList = 'm-top-10';

    //Crear boton de eliminar
    /*const div_3 = document.createElement('div');
    div_3.classList = 'borde';*/
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';
    //div_3.appendChild(botonBorrar);


    //Crear el borde
    const borde = document.createElement('div');
    borde.classList = 'm-bot-15 border-up';

    //Crear la imagen
    const div_1 = document.createElement('div');
    div_1.classList = 'm-top-10 divFoto';
    const imagen = document.createElement('img');
    imagen.src = "https://picsum.photos/60/60?grayscale";
    div_1.appendChild(imagen);

    //Crear elemento
    const div_2 = document.createElement('div');
    div_2.classList = 'tweet';
    const li = document.createElement('li');
    li.innerText = tweet;
    div_2.appendChild(li);

    //Lo agrega a la lista
    li.appendChild(botonBorrar);
    //listaTweets.appendChild(borde);
    listaTweets.appendChild(padre);
    padre.appendChild(borde);
    padre.appendChild(div_1);
    padre.appendChild(div_2);
    //div_2.appendChild(div_3);

    agregarTweetLocalStorage(tweet);

    //Limpia el texto
    document.getElementById('tweet').value = '';
}

//Funcion que borra el tweet
function borrarTweet(e){
    e.preventDefault();

    if(e.target.className === 'borrar-tweet')
    {
        /*console.log(e.target.parentElement.value);
        console.log(e.target.value);*/
        //e.target.parentElement.remove();
        //Borra todos los elementos que conforman el tweet
        const div_2 = e.target.parentElement;
        const div_1 = div_2.parentElement;
        div_1.parentElement.remove();
        borrarTweetLocalStorage(e.target.parentElement.innerText);
        //alert('Tweet eliminado');
    }

    //console.log("Click en la lista");
}

//Funcion que agrega el tweet al local storage
function agregarTweetLocalStorage(tweet){
    let tweets;
    tweets = obtenerTweetsLocalStorage();

    //Añadir el nuevo tweet
    tweets.push(tweet);

    //Convertir en string a arreglo para local storage
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

//Funcion que obtiene los tweets almacenados en el local storage
function obtenerTweetsLocalStorage(){
    let tweets;
    //Checar valores de local storage
    if(localStorage.getItem('tweets') === null)
    {
        tweets = [];
    }
    else
    {
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }
    return tweets;
}

//Funcion que carga el local storage
function localStorageListo(){
    let tweets;

    tweets = obtenerTweetsLocalStorage();

    tweets.forEach(function(tweet){
    //Crear div padre
    const padre = document.createElement('div');
    padre.classList = 'm-top-10';

    //Crear boton de eliminar
    /*const div_3 = document.createElement('div');
    div_3.classList = 'borde';*/
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';
    //div_3.appendChild(botonBorrar);


    //Crear el borde
    const borde = document.createElement('div');
    borde.classList = 'm-bot-15 border-up';

    //Crear la imagen
    const div_1 = document.createElement('div');
    div_1.classList = 'm-top-10 divFoto';
    const imagen = document.createElement('img');
    imagen.src = "https://picsum.photos/60/60?grayscale";
    div_1.appendChild(imagen);

    //Crear elemento
    const div_2 = document.createElement('div');
    div_2.classList = 'tweet';
    const li = document.createElement('li');
    li.innerText = tweet;
    div_2.appendChild(li);

    //Lo agrega a la lista
    li.appendChild(botonBorrar);
    //listaTweets.appendChild(borde);
    listaTweets.appendChild(padre);
    padre.appendChild(borde);
    padre.appendChild(div_1);
    padre.appendChild(div_2);
    //div_2.appendChild(div_3);
    });
}

//Funcion que borra el tweet del local storage
function borrarTweetLocalStorage(tweet){
    let tweets, tweetaBorrar;

    tweets = obtenerTweetsLocalStorage();

    tweetaBorrar = tweet.substring(0, tweet.length - 1);

    tweets.forEach(function(tweet, index){
        if(tweetaBorrar === tweet){
            tweets.splice(index, 1);
        }
    });
    localStorage.setItem('tweets', JSON.stringify(tweets));
    //localStorage.removeItem('tweets', 'tweetaBorrar');
}