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
    // console.log(jokeObj.joke);
    contener.innerHTML = jokeObj.joke;
}