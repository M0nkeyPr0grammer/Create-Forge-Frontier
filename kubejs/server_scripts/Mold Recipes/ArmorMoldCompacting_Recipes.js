ServerEvents.recipes(event => {

    // Helmets

        // Iron
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_iron',
                    amount: 250
                },
                {
                    item: 'forge_frontier:helmet_mold',
                    count: 1
                }
            ],
            results: [
                {
                    item: 'minecraft:iron_helmet',
                    count: 1
                },
                {
                    item: 'forge_frontier:helmet_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/iron_helmet')

        // Gold
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_gold',
                    amount: 250
                },
                {
                    item: 'forge_frontier:helmet_mold',
                    count: 1
                }
            ],
            results: [
                {
                    item: 'minecraft:golden_helmet',
                    count: 1
                },
                {
                    item: 'forge_frontier:helmet_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/golden_helmet')

        // Diamond
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_diamond',
                    amount: 250
                },
                {
                    item: 'forge_frontier:helmet_mold',
                    count: 1
                }
            ],
            results: [
                {
                    item: 'minecraft:diamond_helmet',
                    count: 1
                },
                {
                    item: 'forge_frontier:helmet_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/diamond_helmet')

        // Netherite
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_netherite',
                    amount: 250
                },
                {
                    item: 'forge_frontier:helmet_mold',
                    count: 1
                }
            ],
            results: [
                {
                    item: 'minecraft:netherite_helmet',
                    count: 1
                },
                {
                    item: 'forge_frontier:helmet_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/netherite_helmet')

        // Netherite-Iron
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_netherite_iron',
                    amount: 250
                },
                {
                    item: 'forge_frontier:helmet_mold',
                    count: 1
                }
            ],
            results: [
                {
                    item: 'advancednetherite:netherite_iron_helmet',
                    count: 1
                },
                {
                    item: 'forge_frontier:helmet_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/netherite_iron_helmet')

        // Netherite-Gold
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_netherite_gold',
                    amount: 250
                },
                {
                    item: 'forge_frontier:helmet_mold',
                    count: 1
                }
            ],
            results: [
                {
                    item: 'advancednetherite:netherite_gold_helmet',
                    count: 1
                },
                {
                    item: 'forge_frontier:helmet_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/netherite_gold_helmet')

        // Netherite-Emerald
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_netherite_emerald',
                    amount: 250
                },
                {
                    item: 'forge_frontier:helmet_mold',
                    count: 1
                }
            ],
            results: [
                {
                    item: 'advancednetherite:netherite_emerald_helmet',
                    count: 1
                },
                {
                    item: 'forge_frontier:helmet_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/netherite_emerald_helmet')

        // Netherite-Diamond
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_netherite_diamond',
                    amount: 250
                },
                {
                    item: 'forge_frontier:helmet_mold',
                    count: 1
                }
            ],
            results: [
                {
                    item: 'advancednetherite:netherite_diamond_helmet',
                    count: 1
                },
                {
                    item: 'forge_frontier:helmet_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/netherite_diamond_helmet')


    // Chestplates

        // Iron
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_iron',
                    amount: 400
                },
                {
                    item: 'forge_frontier:chestplate_mold',
                    count: 1
                }
            ],
            results: [
                {
                    item: 'minecraft:iron_chestplate',
                    count: 1
                },
                {
                    item: 'forge_frontier:chestplate_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/iron_chestplate')

        // Gold
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_gold',
                    amount: 400
                },
                {
                    item: 'forge_frontier:chestplate_mold',
                    count: 1
                }
            ],
            results: [
                {
                    item: 'minecraft:golden_chestplate',
                    count: 1
                },
                {
                    item: 'forge_frontier:chestplate_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/golden_chestplate')

        // Diamond
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_diamond',
                    amount: 400
                },
                {
                    item: 'forge_frontier:chestplate_mold',
                    count: 1
                }
            ],
            results: [
                {
                    item: 'minecraft:diamond_chestplate',
                    count: 1
                },
                {
                    item: 'forge_frontier:chestplate_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/diamond_chestplate')

        // Netherite
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_netherite',
                    amount: 400
                },
                {
                    item: 'forge_frontier:chestplate_mold',
                    count: 1
                }
            ],
            results: [
                {
                    item: 'minecraft:netherite_chestplate',
                    count: 1
                },
                {
                    item: 'forge_frontier:chestplate_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/netherite_chestplate')

        // Netherite-Iron
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_netherite_iron',
                    amount: 400
                },
                {
                    item: 'forge_frontier:chestplate_mold',
                    count: 1
                }
            ],
            results: [
                {
                    item: 'advancednetherite:netherite_iron_chestplate',
                    count: 1
                },
                {
                    item: 'forge_frontier:chestplate_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/netherite_iron_chestplate')

        // Netherite-Gold
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_netherite_gold',
                    amount: 400
                },
                {
                    item: 'forge_frontier:chestplate_mold',
                    count: 1
                }
            ],
            results: [
                {
                    item: 'advancednetherite:netherite_gold_chestplate',
                    count: 1
                },
                {
                    item: 'forge_frontier:chestplate_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/netherite_gold_chestplate')

        // Netherite-Emerald
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_netherite_emerald',
                    amount: 400
                },
                {
                    item: 'forge_frontier:chestplate_mold',
                    count: 1
                }
            ],
            results: [
                {
                    item: 'advancednetherite:netherite_emerald_chestplate',
                    count: 1
                },
                {
                    item: 'forge_frontier:chestplate_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/netherite_emerald_chestplate')

        // Netherite-Diamond
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_netherite_diamond',
                    amount: 400
                },
                {
                    item: 'forge_frontier:chestplate_mold',
                    count: 1
                }
            ],
            results: [
                {
                    item: 'advancednetherite:netherite_diamond_chestplate',
                    count: 1
                },
                {
                    item: 'forge_frontier:chestplate_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/netherite_diamond_chestplate')

    // Leggings

        // Iron
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_iron',
                    amount: 350
                },
                {
                    item: 'forge_frontier:leggings_mold',
                    count: 1
                }
            ],
            results: [
                {
                    item: 'minecraft:iron_leggings',
                    count: 1
                },
                {
                    item: 'forge_frontier:leggings_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/iron_leggings')

        // Gold
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_gold',
                    amount: 350
                },
                {
                    item: 'forge_frontier:leggings_mold',
                    count: 1
                }
            ],
            results: [
                {
                    item: 'minecraft:golden_leggings',
                    count: 1
                },
                {
                    item: 'forge_frontier:leggings_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/golden_leggings')

        // Diamond
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_diamond',
                    amount: 350
                },
                {
                    item: 'forge_frontier:leggings_mold',
                    count: 1
                }
            ],
            results: [
                {
                    item: 'minecraft:diamond_leggings',
                    count: 1
                },
                {
                    item: 'forge_frontier:leggings_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/diamond_leggings')

        // Netherite
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_netherite',
                    amount: 350
                },
                {
                    item: 'forge_frontier:leggings_mold',
                    count: 1
                }
            ],
            results: [
                {
                    item: 'minecraft:netherite_leggings',
                    count: 1
                },
                {
                    item: 'forge_frontier:leggings_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/netherite_leggings')

        // Netherite-Iron
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_netherite_iron',
                    amount: 350
                },
                {
                    item: 'forge_frontier:leggings_mold',
                    count: 1
                }
            ],
            results: [
                {
                    item: 'advancednetherite:netherite_iron_leggings',
                    count: 1
                },
                {
                    item: 'forge_frontier:leggings_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/netherite_iron_leggings')

        // Netherite-Gold
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_netherite_gold',
                    amount: 350
                },
                {
                    item: 'forge_frontier:leggings_mold',
                    count: 1
                }
            ],
            results: [
                {
                    item: 'advancednetherite:netherite_gold_leggings',
                    count: 1
                },
                {
                    item: 'forge_frontier:leggings_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/netherite_gold_leggings')

        // Netherite-Emerald
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_netherite_emerald',
                    amount: 350
                },
                {
                    item: 'forge_frontier:leggings_mold',
                    count: 1
                }
            ],
            results: [
                {
                    item: 'advancednetherite:netherite_emerald_leggings',
                    count: 1
                },
                {
                    item: 'forge_frontier:leggings_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/netherite_emerald_leggings')

        // Netherite-Diamond
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_netherite_diamond',
                    amount: 350
                },
                {
                    item: 'forge_frontier:leggings_mold',
                    count: 1
                }
            ],
            results: [
                {
                    item: 'advancednetherite:netherite_diamond_leggings',
                    count: 1
                },
                {
                    item: 'forge_frontier:leggings_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/netherite_diamond_leggings')

    // Boots

        // Iron
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_iron',
                    amount: 200
                },
                {
                    item: 'forge_frontier:boots_mold',
                    count: 1
                }
            ],
            results: [
                {
                    item: 'minecraft:iron_boots',
                    count: 1
                },
                {
                    item: 'forge_frontier:boots_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/iron_boots')

        // Gold
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_gold',
                    amount: 200
                },
                {
                    item: 'forge_frontier:boots_mold',
                    count: 1
                }
            ],
            results: [
                {
                    item: 'minecraft:golden_boots',
                    count: 1
                },
                {
                    item: 'forge_frontier:boots_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/golden_boots')

        // Diamond
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_diamond',
                    amount: 200
                },
                {
                    item: 'forge_frontier:boots_mold',
                    count: 1
                }
            ],
            results: [
                {
                    item: 'minecraft:diamond_boots',
                    count: 1
                },
                {
                    item: 'forge_frontier:boots_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/diamond_boots')

        // Netherite
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_netherite',
                    amount: 200
                },
                {
                    item: 'forge_frontier:boots_mold',
                    count: 1
                }
            ],
            results: [
                {
                    item: 'minecraft:netherite_boots',
                    count: 1
                },
                {
                    item: 'forge_frontier:boots_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/netherite_boots')

        // Netherite-Iron
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_netherite_iron',
                    amount: 200
                },
                {
                    item: 'forge_frontier:boots_mold',
                    count: 1
                }
            ],
            results: [
                {
                    item: 'advancednetherite:netherite_iron_boots',
                    count: 1
                },
                {
                    item: 'forge_frontier:boots_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/netherite_iron_boots')

        // Netherite-Gold
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_netherite_gold',
                    amount: 200
                },
                {
                    item: 'forge_frontier:boots_mold',
                    count: 1
                }
            ],
            results: [
                {
                    item: 'advancednetherite:netherite_gold_boots',
                    count: 1
                },
                {
                    item: 'forge_frontier:boots_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/netherite_gold_boots')

        // Netherite-Emerald
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_netherite_emerald',
                    amount: 200
                },
                {
                    item: 'forge_frontier:boots_mold',
                    count: 1
                }
            ],
            results: [
                {
                    item: 'advancednetherite:netherite_emerald_boots',
                    count: 1
                },
                {
                    item: 'forge_frontier:boots_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/netherite_emerald_boots')

        // Netherite-Diamond
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_netherite_diamond',
                    amount: 200
                },
                {
                    item: 'forge_frontier:boots_mold',
                    count: 1
                }
            ],
            results: [
                {
                    item: 'advancednetherite:netherite_diamond_boots',
                    count: 1
                },
                {
                    item: 'forge_frontier:boots_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/netherite_diamond_boots')

})