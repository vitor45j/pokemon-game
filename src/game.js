import { addItem, bootstrapInventory, inventory, pokemons } from "./inventory.js";

class Game {
    constructor() {
        this.startGame()
    }

    startGame() {
        bootstrapInventory()
        console.log(pokemons, inventory)
    }
}

new Game()