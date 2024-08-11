export const pokemons = [
    {
        id: 1,
        name: 'Bulbasaur',
        type: ['Grass'],
        rarity: rarity.RARE
    },
    {
        id: 4,
        name: 'Squirtle',
        type: ['Water'],
        rarity: rarity.RARE
    },
    {
        id: 7,
        name: 'Charmander',
        type: ['Fire'],
        rarity: rarity.RARE
    },
    {
        id: 150,
        name: 'Mewtwo',
        type: ['Phisyic']
    }
]

export const items = [
    {
        id: 1,
        name: 'Pokeball',
        type: 'Pokeball'
    }
]

export const rarity = {
    COMMON: {
        name: 'common',
        spawnRate: 70,
    },
    RARE: {
        name: 'rare',
        spawnRate: 29.9
    },
    LEGENDARY: {
        name: 'legendary',
        spawnRate: 0.1
    }
}