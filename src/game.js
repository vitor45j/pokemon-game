import { encounterState, generateRandomEncounter } from "./encounter.js";
import { bootstrapInventory } from "./inventory.js";


export class Game {
    constructor() {
        this.startGame()
    }

    startGame() {
        bootstrapInventory()
        generateRandomEncounter()
        document.getElementById('encounter-image').setAttribute('src', `/assets/pokemons/${encounterState.pokemon.id}.png`)
    }
}