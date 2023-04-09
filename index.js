//First method
const button=document.querySelector('button')
const joketext=document.querySelector(' p')

addEventListener('click',getjoke)

        
    function getjoke() {
        const response=fetch("https://icanhazdadjoke.com/",{
            headers:{
                'Accept':'application/json'
            }
        }).then(data=> data.json())
        .then(obj=> joketext.innerHTML= obj.joke)

    }


//another method
// const button=document.querySelector('.container button')
// const joketext=document.querySelector('.container p')
// document.addEventListener('DOMContentLaoded',getjoke)
// button.addEventListener('click',getjoke)

//  async function getjoke(){
//     const jokedata= await fetch("https://icanhazdadjoke.com/",{
//         headers:{
//             'Accept' : 'application/json'
//         }
//     })
//     const jokeobj=  await jokedata.json();
   
//     joketext.innerHTML=jokeobj.joke;
// }

