const btn = document.querySelector("#btn");
const contener = document.querySelector("#contener");

document.addEventListener("DOMContentLoaded",joks);
btn.addEventListener("click",joks);

async function joks(){
    const jokeData = await fetch("https://icanhazdadjoke.com/",{
        headers:{
            'Accept':'application/json'
        }
    })
    const jokeObj = await jokeData.json();
    contener.innerHTML = jokeObj.joke;
    let audio = new Audio("/audio/WhatsApp Audio 2024-04-28 at 12.41.34 PM.mpeg");
    audio.play();
}

