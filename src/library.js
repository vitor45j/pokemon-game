export const rarity = {
    COMMON: {
        name: 'common',
        spawnRate: {
            from: 0,
            to: 70
        }
    },
    RARE: {
        name: 'rare',
        spawnRate: {
            from: 70,
            to: 99.5
        }
    },
    LEGENDARY: {
        name: 'legendary',
        spawnRate: {
            from: 99.5,
            to: 100 
        }
    }
}

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
        type: ['Phisyic'],
        rarity: rarity.LEGENDARY
    }
]

export const items = [
    {
        id: 1,
        name: 'Pokeball',
        type: 'Pokeball'
    }
]