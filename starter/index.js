document.querySelector("button").addEventListener("click", () => {
  const input = document.querySelector("#input")
  const id = input.value

  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => response.json())
    .then(pokemon => {
      renderPokemon(pokemon)
    })
})

function renderPokemon(pokemon) {
  console.log(pokemon.name)
  const name = document.querySelector("#name")
  name.textContent = pokemon.name
}
