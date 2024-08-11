import { generateRandomRarity, getRandomPokemonByRarity } from './utils.js'

export let encounterState = {
    pokemon: null,
    hp: null
}

export function generateRandomEncounter() {
    const rarity = generateRandomRarity()
    const pokemon = getRandomPokemonByRarity(rarity.name)
    encounterState.pokemon = pokemon
    encounterState.hp = 100
}