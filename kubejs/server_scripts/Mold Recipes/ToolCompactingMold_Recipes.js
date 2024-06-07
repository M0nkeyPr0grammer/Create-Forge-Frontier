ServerEvents.recipes(event => {

    // Swords
        // Iron
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_iron',
                    amount: 100
                },
                {
                    item: 'forge_frontier:sword_mold',
                    count: 1
                },
                {
                    item: 'minecraft:stick',
                    count: 1
                }
            ],
            results: [
                {
                    item: 'minecraft:iron_sword',
                    count: 1
                },
                {
                    item: 'forge_frontier:sword_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/iron_sword')

        // Gold
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_gold',
                    amount: 100
                },
                {
                    item: 'forge_frontier:sword_mold',
                    count: 1
                },
                {
                    item: 'minecraft:stick',
                    count: 1
                }
            ],
            results: [
                {
                    item: 'minecraft:golden_sword',
                    count: 1
                },
                {
                    item: 'forge_frontier:sword_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/golden_sword')

        // Diamond
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_diamond',
                    amount: 100
                },
                {
                    item: 'forge_frontier:sword_mold',
                    count: 1
                },
                {
                    item: 'minecraft:stick',
                    count: 1
                }
            ],
            results: [
                {
                    item: 'minecraft:diamond_sword',
                    count: 1
                },
                {
                    item: 'forge_frontier:sword_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/diamond_sword')

        // Copper
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_copper',
                    amount: 100
                },
                {
                    item: 'forge_frontier:sword_mold',
                    count: 1
                },
                {
                    item: 'minecraft:stick',
                    count: 1
                }
            ],
            results: [
                {
                    item: 'create_sa:copper_sword',
                    count: 1
                },
                {
                    item: 'forge_frontier:sword_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/copper_sword')

        // Zinc
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_zinc',
                    amount: 100
                },
                {
                    item: 'forge_frontier:sword_mold',
                    count: 1
                },
                {
                    item: 'minecraft:stick',
                    count: 1
                }
            ],
            results: [
                {
                    item: 'create_sa:zinc_sword',
                    count: 1
                },
                {
                    item: 'forge_frontier:sword_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/zinc_sword')

        // Brass
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_brass',
                    amount: 100
                },
                {
                    item: 'forge_frontier:sword_mold',
                    count: 1
                },
                {
                    item: 'minecraft:stick',
                    count: 1
                }
            ],
            results: [
                {
                    item: 'create_sa:brass_sword',
                    count: 1
                },
                {
                    item: 'forge_frontier:sword_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/brass_sword')

        // Netherite
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_netherite',
                    amount: 100
                },
                {
                    item: 'forge_frontier:sword_mold',
                    count: 1
                },
                {
                    item: 'minecraft:stick',
                    count: 1
                }
            ],
            results: [
                {
                    item: 'minecraft:netherite_sword',
                    count: 1
                },
                {
                    item: 'forge_frontier:sword_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/netherite_sword')

        // Netherite-Iron
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_netherite_iron',
                    amount: 100
                },
                {
                    item: 'forge_frontier:sword_mold',
                    count: 1
                },
                {
                    item: 'minecraft:stick',
                    count: 1
                }
            ],
            results: [
                {
                    item: 'advancednetherite:netherite_iron_sword',
                    count: 1
                },
                {
                    item: 'forge_frontier:sword_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/netherite_iron_sword')

        // Netherite-Gold
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_netherite_gold',
                    amount: 100
                },
                {
                    item: 'forge_frontier:sword_mold',
                    count: 1
                },
                {
                    item: 'minecraft:stick',
                    count: 1
                }
            ],
            results: [
                {
                    item: 'advancednetherite:netherite_gold_sword',
                    count: 1
                },
                {
                    item: 'forge_frontier:sword_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/netherite_gold_sword')

        // Netherite-Emerald
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_netherite_emerald',
                    amount: 100
                },
                {
                    item: 'forge_frontier:sword_mold',
                    count: 1
                },
                {
                    item: 'minecraft:stick',
                    count: 1
                }
            ],
            results: [
                {
                    item: 'advancednetherite:netherite_emerald_sword',
                    count: 1
                },
                {
                    item: 'forge_frontier:sword_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/netherite_emerald_sword')

        // Netherite-Diamond
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_netherite_diamond',
                    amount: 100
                },
                {
                    item: 'forge_frontier:sword_mold',
                    count: 1
                },
                {
                    item: 'minecraft:stick',
                    count: 1
                }
            ],
            results: [
                {
                    item: 'advancednetherite:netherite_diamond_sword',
                    count: 1
                },
                {
                    item: 'forge_frontier:sword_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/netherite_diamond_sword')

    // Axes
        // Iron
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_iron',
                    amount: 150
                },
                {
                    item: 'forge_frontier:axe_mold',
                    count: 1
                },
                {
                    item: 'minecraft:stick',
                    count: 2
                }
            ],
            results: [
                {
                    item: 'minecraft:iron_axe',
                    count: 1
                },
                {
                    item: 'forge_frontier:axe_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/iron_axe')

        // Gold
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_gold',
                    amount: 150
                },
                {
                    item: 'forge_frontier:axe_mold',
                    count: 1
                },
                {
                    item: 'minecraft:stick',
                    count: 2
                }
            ],
            results: [
                {
                    item: 'minecraft:golden_axe',
                    count: 1
                },
                {
                    item: 'forge_frontier:axe_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/golden_axe')

        // Diamond
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_diamond',
                    amount: 150
                },
                {
                    item: 'forge_frontier:axe_mold',
                    count: 1
                },
                {
                    item: 'minecraft:stick',
                    count: 2
                }
            ],
            results: [
                {
                    item: 'minecraft:diamond_axe',
                    count: 1
                },
                {
                    item: 'forge_frontier:axe_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/diamond_axe')

        // Copper
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_copper',
                    amount: 150
                },
                {
                    item: 'forge_frontier:axe_mold',
                    count: 1
                },
                {
                    item: 'minecraft:stick',
                    count: 1
                }
            ],
            results: [
                {
                    item: 'create_sa:copper_axe',
                    count: 1
                },
                {
                    item: 'forge_frontier:axe_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/copper_axe')

        // Zinc
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_zinc',
                    amount: 150
                },
                {
                    item: 'forge_frontier:axe_mold',
                    count: 1
                },
                {
                    item: 'minecraft:stick',
                    count: 1
                }
            ],
            results: [
                {
                    item: 'create_sa:zinc_axe',
                    count: 1
                },
                {
                    item: 'forge_frontier:axe_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/zinc_axe')

        // Brass
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_brass',
                    amount: 150
                },
                {
                    item: 'forge_frontier:axe_mold',
                    count: 1
                },
                {
                    item: 'minecraft:stick',
                    count: 1
                }
            ],
            results: [
                {
                    item: 'create_sa:brass_axe',
                    count: 1
                },
                {
                    item: 'forge_frontier:axe_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/brass_axe')

        // Netherite
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_netherite',
                    amount: 150
                },
                {
                    item: 'forge_frontier:axe_mold',
                    count: 1
                },
                {
                    item: 'minecraft:stick',
                    count: 2
                }
            ],
            results: [
                {
                    item: 'minecraft:netherite_axe',
                    count: 1
                },
                {
                    item: 'forge_frontier:axe_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/netherite_axe')

        // Netherite-Iron
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_netherite_iron',
                    amount: 150
                },
                {
                    item: 'forge_frontier:axe_mold',
                    count: 1
                },
                {
                    item: 'minecraft:stick',
                    count: 2
                }
            ],
            results: [
                {
                    item: 'advancednetherite:netherite_iron_axe',
                    count: 1
                },
                {
                    item: 'forge_frontier:axe_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/netherite_iron_axe')

        // Netherite-Gold
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_netherite_gold',
                    amount: 150
                },
                {
                    item: 'forge_frontier:axe_mold',
                    count: 1
                },
                {
                    item: 'minecraft:stick',
                    count: 2
                }
            ],
            results: [
                {
                    item: 'advancednetherite:netherite_gold_axe',
                    count: 1
                },
                {
                    item: 'forge_frontier:axe_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/netherite_gold_axe')

        // Netherite-Emerald
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_netherite_emerald',
                    amount: 150
                },
                {
                    item: 'forge_frontier:axe_mold',
                    count: 1
                },
                {
                    item: 'minecraft:stick',
                    count: 2
                }
            ],
            results: [
                {
                    item: 'advancednetherite:netherite_emerald_axe',
                    count: 1
                },
                {
                    item: 'forge_frontier:axe_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/netherite_emerald_axe')

        // Netherite-Diamond
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_netherite_diamond',
                    amount: 150
                },
                {
                    item: 'forge_frontier:axe_mold',
                    count: 1
                },
                {
                    item: 'minecraft:stick',
                    count: 2
                }
            ],
            results: [
                {
                    item: 'advancednetherite:netherite_diamond_axe',
                    count: 1
                },
                {
                    item: 'forge_frontier:axe_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/netherite_diamond_axe')

    // Pickaxes
        // Iron
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_iron',
                    amount: 150
                },
                {
                    item: 'forge_frontier:pickaxe_mold',
                    count: 1
                },
                {
                    item: 'minecraft:stick',
                    count: 2
                }
            ],
            results: [
                {
                    item: 'minecraft:iron_pickaxe',
                    count: 1
                },
                {
                    item: 'forge_frontier:pickaxe_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/iron_pickaxe')

        // Gold
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_gold',
                    amount: 150
                },
                {
                    item: 'forge_frontier:pickaxe_mold',
                    count: 1
                },
                {
                    item: 'minecraft:stick',
                    count: 2
                }
            ],
            results: [
                {
                    item: 'minecraft:golden_pickaxe',
                    count: 1
                },
                {
                    item: 'forge_frontier:pickaxe_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/golden_pickaxe')

        // Diamond
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_diamond',
                    amount: 150
                },
                {
                    item: 'forge_frontier:pickaxe_mold',
                    count: 1
                },
                {
                    item: 'minecraft:stick',
                    count: 2
                }
            ],
            results: [
                {
                    item: 'minecraft:diamond_pickaxe',
                    count: 1
                },
                {
                    item: 'forge_frontier:pickaxe_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/diamond_pickaxe')

        // Copper
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_copper',
                    amount: 150
                },
                {
                    item: 'forge_frontier:pickaxe_mold',
                    count: 1
                },
                {
                    item: 'minecraft:stick',
                    count: 1
                }
            ],
            results: [
                {
                    item: 'create_sa:copper_pickaxe',
                    count: 1
                },
                {
                    item: 'forge_frontier:pickaxe_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/copper_pickaxe')

        // Zinc
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_zinc',
                    amount: 150
                },
                {
                    item: 'forge_frontier:pickaxe_mold',
                    count: 1
                },
                {
                    item: 'minecraft:stick',
                    count: 1
                }
            ],
            results: [
                {
                    item: 'create_sa:zinc_pickaxe',
                    count: 1
                },
                {
                    item: 'forge_frontier:pickaxe_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/zinc_pickaxe')

        // Brass
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_brass',
                    amount: 150
                },
                {
                    item: 'forge_frontier:pickaxe_mold',
                    count: 1
                },
                {
                    item: 'minecraft:stick',
                    count: 1
                }
            ],
            results: [
                {
                    item: 'create_sa:brass_pickaxe',
                    count: 1
                },
                {
                    item: 'forge_frontier:pickaxe_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/brass_pickaxe')

        // Netherite
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_netherite',
                    amount: 150
                },
                {
                    item: 'forge_frontier:pickaxe_mold',
                    count: 1
                },
                {
                    item: 'minecraft:stick',
                    count: 2
                }
            ],
            results: [
                {
                    item: 'minecraft:netherite_pickaxe',
                    count: 1
                },
                {
                    item: 'forge_frontier:pickaxe_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/netherite_pickaxe')

        // Netherite-Iron
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_netherite_iron',
                    amount: 150
                },
                {
                    item: 'forge_frontier:pickaxe_mold',
                    count: 1
                },
                {
                    item: 'minecraft:stick',
                    count: 2
                }
            ],
            results: [
                {
                    item: 'advancednetherite:netherite_iron_pickaxe',
                    count: 1
                },
                {
                    item: 'forge_frontier:pickaxe_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/netherite_iron_pickaxe')

        // Netherite-Gold
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_netherite_gold',
                    amount: 150
                },
                {
                    item: 'forge_frontier:pickaxe_mold',
                    count: 1
                },
                {
                    item: 'minecraft:stick',
                    count: 2
                }
            ],
            results: [
                {
                    item: 'advancednetherite:netherite_gold_pickaxe',
                    count: 1
                },
                {
                    item: 'forge_frontier:pickaxe_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/netherite_gold_pickaxe')

        // Netherite-Emerald
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_netherite_emerald',
                    amount: 150
                },
                {
                    item: 'forge_frontier:pickaxe_mold',
                    count: 1
                },
                {
                    item: 'minecraft:stick',
                    count: 2
                }
            ],
            results: [
                {
                    item: 'advancednetherite:netherite_emerald_pickaxe',
                    count: 1
                },
                {
                    item: 'forge_frontier:pickaxe_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/netherite_emerald_pickaxe')

        // Netherite-Diamond
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_netherite_diamond',
                    amount: 150
                },
                {
                    item: 'forge_frontier:pickaxe_mold',
                    count: 1
                },
                {
                    item: 'minecraft:stick',
                    count: 2
                }
            ],
            results: [
                {
                    item: 'advancednetherite:netherite_diamond_pickaxe',
                    count: 1
                },
                {
                    item: 'forge_frontier:pickaxe_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/netherite_diamond_pickaxe')

    // Shovels
        // Iron
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_iron',
                    amount: 50
                },
                {
                    item: 'forge_frontier:shovel_mold',
                    count: 1
                },
                {
                    item: 'minecraft:stick',
                    count: 2
                }
            ],
            results: [
                {
                    item: 'minecraft:iron_shovel',
                    count: 1
                },
                {
                    item: 'forge_frontier:shovel_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/iron_shovel')

        // Gold
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_gold',
                    amount: 50
                },
                {
                    item: 'forge_frontier:shovel_mold',
                    count: 1
                },
                {
                    item: 'minecraft:stick',
                    count: 2
                }
            ],
            results: [
                {
                    item: 'minecraft:golden_shovel',
                    count: 1
                },
                {
                    item: 'forge_frontier:shovel_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/golden_shovel')

        // Diamond
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_diamond',
                    amount: 50
                },
                {
                    item: 'forge_frontier:shovel_mold',
                    count: 1
                },
                {
                    item: 'minecraft:stick',
                    count: 2
                }
            ],
            results: [
                {
                    item: 'minecraft:diamond_shovel',
                    count: 1
                },
                {
                    item: 'forge_frontier:shovel_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/diamond_shovel')

        // Copper
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_copper',
                    amount: 50
                },
                {
                    item: 'forge_frontier:shovel_mold',
                    count: 1
                },
                {
                    item: 'minecraft:stick',
                    count: 1
                }
            ],
            results: [
                {
                    item: 'create_sa:copper_shovel',
                    count: 1
                },
                {
                    item: 'forge_frontier:shovel_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/copper_shovel')

        // Zinc
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_zinc',
                    amount: 50
                },
                {
                    item: 'forge_frontier:shovel_mold',
                    count: 1
                },
                {
                    item: 'minecraft:stick',
                    count: 1
                }
            ],
            results: [
                {
                    item: 'create_sa:zinc_shovel',
                    count: 1
                },
                {
                    item: 'forge_frontier:shovel_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/zinc_shovel')

        // Brass
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_brass',
                    amount: 50
                },
                {
                    item: 'forge_frontier:shovel_mold',
                    count: 1
                },
                {
                    item: 'minecraft:stick',
                    count: 1
                }
            ],
            results: [
                {
                    item: 'create_sa:brass_shovel',
                    count: 1
                },
                {
                    item: 'forge_frontier:shovel_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/brass_shovel')

        // Netherite
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_netherite',
                    amount: 50
                },
                {
                    item: 'forge_frontier:shovel_mold',
                    count: 1
                },
                {
                    item: 'minecraft:stick',
                    count: 2
                }
            ],
            results: [
                {
                    item: 'minecraft:netherite_shovel',
                    count: 1
                },
                {
                    item: 'forge_frontier:shovel_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/netherite_shovel')

        // Netherite-Iron
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_netherite_iron',
                    amount: 50
                },
                {
                    item: 'forge_frontier:shovel_mold',
                    count: 1
                },
                {
                    item: 'minecraft:stick',
                    count: 2
                }
            ],
            results: [
                {
                    item: 'advancednetherite:netherite_iron_shovel',
                    count: 1
                },
                {
                    item: 'forge_frontier:shovel_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/netherite_iron_shovel')

        // Netherite-Gold
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_netherite_gold',
                    amount: 50
                },
                {
                    item: 'forge_frontier:shovel_mold',
                    count: 1
                },
                {
                    item: 'minecraft:stick',
                    count: 2
                }
            ],
            results: [
                {
                    item: 'advancednetherite:netherite_gold_shovel',
                    count: 1
                },
                {
                    item: 'forge_frontier:shovel_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/netherite_gold_shovel')

        // Netherite-Emerald
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_netherite_emerald',
                    amount: 50
                },
                {
                    item: 'forge_frontier:shovel_mold',
                    count: 1
                },
                {
                    item: 'minecraft:stick',
                    count: 2
                }
            ],
            results: [
                {
                    item: 'advancednetherite:netherite_emerald_shovel',
                    count: 1
                },
                {
                    item: 'forge_frontier:shovel_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/netherite_emerald_shovel')

        // Netherite-Diamond
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_netherite_diamond',
                    amount: 50
                },
                {
                    item: 'forge_frontier:shovel_mold',
                    count: 1
                },
                {
                    item: 'minecraft:stick',
                    count: 2
                }
            ],
            results: [
                {
                    item: 'advancednetherite:netherite_diamond_shovel',
                    count: 1
                },
                {
                    item: 'forge_frontier:shovel_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/netherite_diamond_shovel')

    // Hoes
        // Iron
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_iron',
                    amount: 100
                },
                {
                    item: 'forge_frontier:hoe_mold',
                    count: 1
                },
                {
                    item: 'minecraft:stick',
                    count: 2
                }
            ],
            results: [
                {
                    item: 'minecraft:iron_hoe',
                    count: 1
                },
                {
                    item: 'forge_frontier:hoe_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/iron_hoe')

        // Gold
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_gold',
                    amount: 100
                },
                {
                    item: 'forge_frontier:hoe_mold',
                    count: 1
                },
                {
                    item: 'minecraft:stick',
                    count: 2
                }
            ],
            results: [
                {
                    item: 'minecraft:golden_hoe',
                    count: 1
                },
                {
                    item: 'forge_frontier:hoe_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/golden_hoe')

        // Diamond
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_diamond',
                    amount: 100
                },
                {
                    item: 'forge_frontier:hoe_mold',
                    count: 1
                },
                {
                    item: 'minecraft:stick',
                    count: 2
                }
            ],
            results: [
                {
                    item: 'minecraft:diamond_hoe',
                    count: 1
                },
                {
                    item: 'forge_frontier:hoe_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/diamond_hoe')

        // Copper
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_copper',
                    amount: 100
                },
                {
                    item: 'forge_frontier:hoe_mold',
                    count: 1
                },
                {
                    item: 'minecraft:stick',
                    count: 1
                }
            ],
            results: [
                {
                    item: 'create_sa:copper_hoe',
                    count: 1
                },
                {
                    item: 'forge_frontier:hoe_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/copper_hoe')

        // Zinc
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_zinc',
                    amount: 100
                },
                {
                    item: 'forge_frontier:hoe_mold',
                    count: 1
                },
                {
                    item: 'minecraft:stick',
                    count: 1
                }
            ],
            results: [
                {
                    item: 'create_sa:zinc_hoe',
                    count: 1
                },
                {
                    item: 'forge_frontier:hoe_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/zinc_hoe')

        // Brass
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_brass',
                    amount: 100
                },
                {
                    item: 'forge_frontier:hoe_mold',
                    count: 1
                },
                {
                    item: 'minecraft:stick',
                    count: 1
                }
            ],
            results: [
                {
                    item: 'create_sa:brass_hoe',
                    count: 1
                },
                {
                    item: 'forge_frontier:hoe_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/brass_hoe')

        // Netherite
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_netherite',
                    amount: 100
                },
                {
                    item: 'forge_frontier:hoe_mold',
                    count: 1
                },
                {
                    item: 'minecraft:stick',
                    count: 2
                }
            ],
            results: [
                {
                    item: 'minecraft:netherite_hoe',
                    count: 1
                },
                {
                    item: 'forge_frontier:hoe_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/netherite_hoe')

        // Netherite-Iron
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_netherite_iron',
                    amount: 100
                },
                {
                    item: 'forge_frontier:hoe_mold',
                    count: 1
                },
                {
                    item: 'minecraft:stick',
                    count: 2
                }
            ],
            results: [
                {
                    item: 'advancednetherite:netherite_iron_hoe',
                    count: 1
                },
                {
                    item: 'forge_frontier:hoe_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/netherite_iron_hoe')

        // Netherite-Gold
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_netherite_gold',
                    amount: 100
                },
                {
                    item: 'forge_frontier:hoe_mold',
                    count: 1
                },
                {
                    item: 'minecraft:stick',
                    count: 2
                }
            ],
            results: [
                {
                    item: 'advancednetherite:netherite_gold_hoe',
                    count: 1
                },
                {
                    item: 'forge_frontier:hoe_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/netherite_gold_hoe')

        // Netherite-Emerald
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_netherite_emerald',
                    amount: 100
                },
                {
                    item: 'forge_frontier:hoe_mold',
                    count: 1
                },
                {
                    item: 'minecraft:stick',
                    count: 2
                }
            ],
            results: [
                {
                    item: 'advancednetherite:netherite_emerald_hoe',
                    count: 1
                },
                {
                    item: 'forge_frontier:hoe_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/netherite_emerald_hoe')

        // Netherite-Diamond
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_netherite_diamond',
                    amount: 100
                },
                {
                    item: 'forge_frontier:hoe_mold',
                    count: 1
                },
                {
                    item: 'minecraft:stick',
                    count: 2
                }
            ],
            results: [
                {
                    item: 'advancednetherite:netherite_diamond_hoe',
                    count: 1
                },
                {
                    item: 'forge_frontier:hoe_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:compacting/netherite_diamond_hoe')

})