import { rarity } from "./library";

export function generateLuckyNumber() {
    return Math.random() * 100;
}

export function generateRandomRarity() {
    const luckyNumber = generateLuckyNumber()

    if (luckyNumber >= rarity.COMMON.spawnRate.from && luckyNumber < rarity.COMMON.spawnRate.to) {
        return rarity.COMMON
    } else if (luckyNumber >= rarity.RARE.spawnRate.from && luckyNumber < rarity.RARE.spawnRate.to) {
        return rarity.RARE
    } else {
        return rarity.LEGENDARY
    }
}