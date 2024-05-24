ServerEvents.recipes(event => {

    // Crushed Bismuth Pile
    event.custom({
        type: "minecraft:smelting",
        cookingtime: 200,
        experience: 0.1,
        ingredient: {
            item: 'kubejs:crushed_bismuth_pile'
        },
        result: 'enlightened_end:bismuth_block'
    })

    // Crushed Calorite Pile
    event.custom({
        type: "minecraft:smelting",
        cookingtime: 200,
        experience: 0.1,
        ingredient: {
            item: 'kubejs:crushed_calorite_pile'
        },
        result: 'ad_astra:calorite_block'
    })

    // Crushed Desh Pile
    event.custom({
        type: "minecraft:smelting",
        cookingtime: 200,
        experience: 0.1,
        ingredient: {
            item: 'kubejs:crushed_desh_pile'
        },
        result: 'ad_astra:desh_block'
    })

    // Crushed Irradium Pile
    event.custom({
        type: "minecraft:smelting",
        cookingtime: 200,
        experience: 0.1,
        ingredient: {
            item: 'kubejs:crushed_irradium_pile'
        },
        result: 'enlightened_end:irradium_block'
    })

    // Crushed Malachite Pile
    event.custom({
        type: "minecraft:smelting",
        cookingtime: 200,
        experience: 0.1,
        ingredient: {
            item: 'kubejs:crushed_malachite_pile'
        },
        result: 'enlightened_end:malachite_block'
    })

    // Crushed Ostrum Pile
    event.custom({
        type: "minecraft:smelting",
        cookingtime: 200,
        experience: 0.1,
        ingredient: {
            item: 'kubejs:crushed_ostrum_pile'
        },
        result: 'ad_astra:ostrum_block'
    })

    // Crushed Tin Pile
    event.custom({
        type: "minecraft:smelting",
        cookingtime: 200,
        experience: 0.1,
        ingredient: {
            item: 'kubejs:crushed_tin_pile'
        },
        result: 'create_dd:tin_block'
    })

    // Crushed Uranium Pile
    event.custom({
        type: "minecraft:smelting",
        cookingtime: 200,
        experience: 0.1,
        ingredient: {
            item: 'kubejs:crushed_uranium_pile'
        },
        result: 'alexscaves:block_of_uranium'
    })

    // Crushed Uranium Pile
    event.custom({
        type: "minecraft:smelting",
        cookingtime: 200,
        experience: 0.1,
        ingredient: {
            item: 'create:crushed_raw_uranium'
        },
        result: 'alexscaves:uranium'
    })

    // Crushed Iron Pile
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
        type: "minecraft:smelting",
        cookingtime: 200,
        experience: 0.1,
        ingredient: {
            item: 'create_compressed:crushed_zinc_pile'
        },
        result: 'create:zinc_block'

    })

})