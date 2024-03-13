ServerEvents.recipes(event => {

    // Crushed Iron Pile
    event.custom({
        type: "create_dd:superheating",
        ingredients: [
            {
                item: 'create_compressed:crushed_iron_pile'
            }
        ],
        results: [
            {
                item: 'minecraft:iron_block'
            },
            {
                chance: 0.75,
                item: 'minecraft:iron_block'
            }
        ]
    })

    event.custom({
        type: "minecraft:smelting",
        cookingtime: 200,
        experience: 0.1,
        ingredient: {
            item: 'create_compressed:crushed_iron_pile'
        },
        result: 'minecraft:iron_block'

    })

    // Crushed Gold Pile
    event.custom({
        type: "create_dd:superheating",
        ingredients: [
            {
                item: 'create_compressed:crushed_gold_pile'
            }
        ],
        results: [
            {
                item: 'minecraft:gold_block'
            },
            {
                chance: 0.75,
                item: 'minecraft:gold_block'
            }
        ]
    })

    event.custom({
        type: "minecraft:smelting",
        cookingtime: 200,
        experience: 0.1,
        ingredient: {
            item: 'create_compressed:crushed_gold_pile'
        },
        result: 'minecraft:gold_block'

    })

    // Crushed Copper Pile
    event.custom({
        type: "create_dd:superheating",
        ingredients: [
            {
                item: 'create_compressed:crushed_copper_pile'
            }
        ],
        results: [
            {
                item: 'minecraft:copper_block'
            },
            {
                chance: 0.75,
                item: 'minecraft:copper_block'
            }
        ]
    })

    event.custom({
        type: "minecraft:smelting",
        cookingtime: 200,
        experience: 0.1,
        ingredient: {
            item: 'create_compressed:crushed_copper_pile'
        },
        result: 'minecraft:copper_block'

    })

    // Crushed Zinc Pile
    event.custom({
        type: "create_dd:superheating",
        ingredients: [
            {
                item: 'create_compressed:crushed_zinc_pile'
            }
        ],
        results: [
            {
                item: 'create:zinc_block'
            },
            {
                chance: 0.75,
                item: 'create:zinc_block'
            }
        ]
    })

    event.custom({
        type: "minecraft:smelting",
        cookingtime: 200,
        experience: 0.1,
        ingredient: {
            item: 'create_compressed:crushed_zinc_pile'
        },
        result: 'create:zinc_block'

    })
})