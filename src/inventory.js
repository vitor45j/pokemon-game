import { items, pokemons as libraryPokemons } from './library.js'

export let pokemons = []
export let inventory = []

export function addItem(itemId) {
    const item = items.find(item => item.id === itemId)

    if (!item) {
        throw new Error('Invalid item')
    }

    inventory.push(item)
}

export function addPokemon(pokemonId) {
    const pokemon = libraryPokemons.find(pokemon => pokemon.id === pokemonId)

    if (!pokemon) {
        throw new Error('Invalid pokemon')
    }

    pokemons.push(pokemon)
}

export function bootstrapInventory() {
    addItem(1)
    addItem(1)
    addItem(1)

    addPokemon(1)
}