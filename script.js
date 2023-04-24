const jokeEl = document.getElementById('jokes')
const jokeBth = document.getElementById('jokebtn')

jokeBth.addEventListener('click', generateJoke)

generateJoke()

//using async
async function generateJoke() {
    const config = {
       headers: {
           'Accept': 'application/json'
       }
   }
 
   const res = await fetch('https://icanhazdadjoke.com', config) 

   const data = await res.json()

   jokeEl.innerHTML = data.joke
}



// Using .Then
//function generateJoke() {
//     const config = {
//        headers: {
//            'Accept': 'application/json'
//        }
//    }
//  
//    fetch('https://icanhazdadjoke.com', config)./then(res => res.json())
//    .then((data) => {
//        jokeEl.innerHTML = data.joke
//    })
//}