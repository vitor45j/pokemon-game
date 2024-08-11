import { generateRandomEncounter } from "./encounter.js";
import { bootstrapInventory } from "./inventory.js";

class Game {
    constructor() {
        this.startGame()
    }

    startGame() {
        bootstrapInventory()
        generateRandomEncounter()
    }
}

new Game()