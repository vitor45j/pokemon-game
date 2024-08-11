import { generateRandomRarity, getRandomPokemonByRarity } from './utils.js'

export function generateRandomEncounter() {
    const rarity = generateRandomRarity()
    const pokemon = getRandomPokemonByRarity(rarity.name)
    return pokemon
}