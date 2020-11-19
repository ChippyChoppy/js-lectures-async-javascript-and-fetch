document.querySelector("button").addEventListener("click", () => {
  const input = document.querySelector("input")
  const id = input.value 

  console.log("before")
  
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  .then(response => response.json())
  .then(pokemon => {
    console.log("inside")
    renderPokemon(pokemon)
    // console.log(pokemon.name)
    // const name = document.querySelector("#name")
    // name.textContent = pokemon.name // we don't have access to pokemon.name until after the fetch has run, so we move it into the fetch event to gain access to pokemon.name, organizationally making a helper function would prob be better, but this works too.
  })

  console.log("after")
  
  function renderPokemon(pokemon) {
    console.log(pokemon.name)
    const name = document.querySelector("#name")
    name.textContent = pokemon.name 
  }

})

// function sleep(time) {
//   const start = new Date()
//   while (new Date() - start < time * 1000) {
//     // do nothing && block the main thread 😈
//   }
// }

// console.log("BEFORE fetch")
// JS is treating this code as async. It's registering the callback functions to run at some point in the future.

// this is a whole bunch of extra bullshit, don't worry about this, but worry about the fetch method below
// const promise = fetch('https://pokeapi.co/api/v2/pokemon/1')
//   console.log(promise)

//   promise.then(function(response) { //callback function response --> parameter in this function; this function is like getting the coffee from the barista, but it's in a locked box.
//     const anotherPromise = response.json()
//     anotherPromise.then(function(data) {
//       console.log(data)
//     })  
  
//   })

//this is the syntax to memorize when working with fetch and JS
// fetch('https://pokeapi.co/api/v2/pokemon/1') // <= this is making the network request (get)
//   .then(response => response.json()) // <= we get the response back, we know it's in this JSON format, and if we want to use the data as a JS object, then we call response.json to parse the object; without curly bois after arrow is implicit return.
//   .then(data => { // then we actually get our data here in our second callback, whatever you return from the first promise gets passed into the next .then
//     console.log(data)
//     console.log("INSIDE fetch") // even if this was the fastest response ever fetch will always run after. 
//   });

  // THIS IS WHAT IS ABOVE, BUT CLEAN AND WITHOUT A MILLION NOTES, FETCH SYNTAX
  fetch('https://pokeapi.co/api/v2/pokemon/1')
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })

  // console.log("AFTER fetch")
  //console
  // BEFORE fetch
  // AFTER fetch
  // pokemon object
  // INSIDE fetch

  

