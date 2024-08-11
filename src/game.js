import { generateRandomEncounter } from "./encounter.js";
import { addItem, bootstrapInventory, inventory, pokemons } from "./inventory.js";

class Game {
    constructor() {
        this.startGame()
    }

    startGame() {
        bootstrapInventory()
        console.log(pokemons, inventory)
        generateRandomEncounter()
    }
}

new Game()