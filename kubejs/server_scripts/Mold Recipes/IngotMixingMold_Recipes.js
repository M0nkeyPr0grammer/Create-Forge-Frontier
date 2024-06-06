ServerEvents.recipes(event => {

    // Iron Ingot Mold Recipe
    event.custom({
        type: 'create:mixing',
        ingredients: [
            {
                fluid: 'forge_frontier:molten_iron',
                amount: 100
            },
            {
                item: 'forge_frontier:ingot_mold',
                count: 1
            }
        ],
        results: [
            {
                item: 'minecraft:iron_ingot',
                count: 1
            },
            {
                item: 'forge_frontier:ingot_mold'
            }
        ],
        heatRequirement: 'superheated'
    }).id('forge_frontier:mixing/iron_ingot')

    // Copper Ingot Mold Recipe
    event.custom({
        type: 'create:mixing',
        ingredients: [
            {
                fluid: 'forge_frontier:molten_copper',
                amount: 100
            },
            {
                item: 'forge_frontier:ingot_mold',
                count: 1
            }
        ],
        results: [
            {
                item: 'minecraft:copper_ingot',
                count: 1
            },
            {
                item: 'forge_frontier:ingot_mold'
            }
        ],
        heatRequirement: 'superheated'
    }).id('forge_frontier:mixing/copper_ingot')

    // Gold Ingot Mold Recipe
    event.custom({
        type: 'create:mixing',
        ingredients: [
            {
                fluid: 'forge_frontier:molten_gold',
                amount: 100
            },
            {
                item: 'forge_frontier:ingot_mold',
                count: 1
            }
        ],
        results: [
            {
                item: 'minecraft:gold_ingot',
                count: 1
            },
            {
                item: 'forge_frontier:ingot_mold'
            }
        ],
        heatRequirement: 'superheated'
    }).id('forge_frontier:mixing/gold_ingot')

    // Netherite Ingot Mold Recipe
    event.custom({
        type: 'create:mixing',
        ingredients: [
            {
                fluid: 'forge_frontier:molten_netherite',
                amount: 100
            },
            {
                item: 'forge_frontier:ingot_mold',
                count: 1
            }
        ],
        results: [
            {
                item: 'minecraft:netherite_ingot',
                count: 1
            },
            {
                item: 'forge_frontier:ingot_mold'
            }
        ],
        heatRequirement: 'superheated'
    }).id('forge_frontier:mixing/netherite_ingot')

    // Netherite-Iron Ingot Mold Recipe
    event.custom({
        type: 'create:mixing',
        ingredients: [
            {
                fluid: 'forge_frontier:molten_netherite_iron',
                amount: 100
            },
            {
                item: 'forge_frontier:ingot_mold',
                count: 1
            }
        ],
        results: [
            {
                item: 'advancednetherite:netherite_iron_ingot',
                count: 1
            },
            {
                item: 'forge_frontier:ingot_mold'
            }
        ],
        heatRequirement: 'superheated'
    }).id('forge_frontier:mixing/netherite_iron_ingot')

    // Netherite-Gold Ingot Mold Recipe
    event.custom({
        type: 'create:mixing',
        ingredients: [
            {
                fluid: 'forge_frontier:molten_netherite_gold',
                amount: 100
            },
            {
                item: 'forge_frontier:ingot_mold',
                count: 1
            }
        ],
        results: [
            {
                item: 'advancednetherite:netherite_gold_ingot',
                count: 1
            },
            {
                item: 'forge_frontier:ingot_mold'
            }
        ],
        heatRequirement: 'superheated'
    }).id('forge_frontier:mixing/netherite_gold_ingot')

    // Netherite-Emerald Ingot Mold Recipe
    event.custom({
        type: 'create:mixing',
        ingredients: [
            {
                fluid: 'forge_frontier:molten_netherite_emerald',
                amount: 100
            },
            {
                item: 'forge_frontier:ingot_mold',
                count: 1
            }
        ],
        results: [
            {
                item: 'advancednetherite:netherite_emerald_ingot',
                count: 1
            },
            {
                item: 'forge_frontier:ingot_mold'
            }
        ],
        heatRequirement: 'superheated'
    }).id('forge_frontier:mixing/netherite_emerald_ingot')

    // Netherite-Diamond Ingot Mold Recipe
    event.custom({
        type: 'create:mixing',
        ingredients: [
            {
                fluid: 'forge_frontier:molten_netherite_diamond',
                amount: 100
            },
            {
                item: 'forge_frontier:ingot_mold',
                count: 1
            }
        ],
        results: [
            {
                item: 'advancednetherite:netherite_diamond_ingot',
                count: 1
            },
            {
                item: 'forge_frontier:ingot_mold'
            }
        ],
        heatRequirement: 'superheated'
    }).id('forge_frontier:mixing/netherite_diamond_ingot')

    // Steel Ingot Mold Recipe
    event.custom({
        type: 'create:mixing',
        ingredients: [
            {
                fluid: 'forge_frontier:molten_steel',
                amount: 100
            },
            {
                item: 'forge_frontier:ingot_mold',
                count: 1
            }
        ],
        results: [
            {
                item: 'ad_astra:steel_ingot',
                count: 1
            },
            {
                item: 'forge_frontier:ingot_mold'
            }
        ],
        heatRequirement: 'superheated'
    }).id('forge_frontier:mixing/steel_ingot')

    // Bronze Ingot Mold Recipe
    event.custom({
        type: 'create:mixing',
        ingredients: [
            {
                fluid: 'forge_frontier:molten_bronze',
                amount: 100
            },
            {
                item: 'forge_frontier:ingot_mold',
                count: 1
            }
        ],
        results: [
            {
                item: 'create_dd:bronze_ingot',
                count: 1
            },
            {
                item: 'forge_frontier:ingot_mold'
            }
        ],
        heatRequirement: 'superheated'
    }).id('forge_frontier:mixing/bronze_ingot')

    // Tin Ingot Mold Recipe
    event.custom({
        type: 'create:mixing',
        ingredients: [
            {
                fluid: 'forge_frontier:molten_tin',
                amount: 100
            },
            {
                item: 'forge_frontier:ingot_mold',
                count: 1
            }
        ],
        results: [
            {
                item: 'create_dd:tin_ingot',
                count: 1
            },
            {
                item: 'forge_frontier:ingot_mold'
            }
        ],
        heatRequirement: 'superheated'
    }).id('forge_frontier:mixing/tin_ingot')

    // Zinc Ingot Mold Recipe
    event.custom({
        type: 'create:mixing',
        ingredients: [
            {
                fluid: 'forge_frontier:molten_zinc',
                amount: 100
            },
            {
                item: 'forge_frontier:ingot_mold',
                count: 1
            }
        ],
        results: [
            {
                item: 'create:zinc_ingot',
                count: 1
            },
            {
                item: 'forge_frontier:ingot_mold'
            }
        ],
        heatRequirement: 'superheated'
    }).id('forge_frontier:mixing/zinc_ingot')

    // Brass Ingot Mold Recipe
    event.custom({
        type: 'create:mixing',
        ingredients: [
            {
                fluid: 'forge_frontier:molten_brass',
                amount: 100
            },
            {
                item: 'forge_frontier:ingot_mold',
                count: 1
            }
        ],
        results: [
            {
                item: 'create:brass_ingot',
                count: 1
            },
            {
                item: 'forge_frontier:ingot_mold'
            }
        ],
        heatRequirement: 'superheated'
    }).id('forge_frontier:mixing/brass_ingot')

    // Ice Shard Mold Recipe
    event.custom({
        type: 'create:mixing',
        ingredients: [
            {
                fluid: 'forge_frontier:molten_ice_shard',
                amount: 100
            },
            {
                item: 'forge_frontier:ingot_mold',
                count: 1
            }
        ],
        results: [
            {
                item: 'ad_astra:ice_shard',
                count: 1
            },
            {
                item: 'forge_frontier:ingot_mold'
            }
        ],
        heatRequirement: 'superheated'
    }).id('forge_frontier:mixing/ice_shard')

    // Uranium Mold Recipe
    event.custom({
        type: 'create:mixing',
        ingredients: [
            {
                fluid: 'forge_frontier:molten_uranium',
                amount: 100
            },
            {
                item: 'forge_frontier:ingot_mold',
                count: 1
            }
        ],
        results: [
            {
                item: 'alexcaves:uranium',
                count: 1
            },
            {
                item: 'forge_frontier:ingot_mold'
            }
        ],
        heatRequirement: 'superheated'
    }).id('forge_frontier:mixing/uranium')

    // Bismuth Ingot Mold Recipe
    event.custom({
        type: 'create:mixing',
        ingredients: [
            {
                fluid: 'forge_frontier:molten_bismuth',
                amount: 100
            },
            {
                item: 'forge_frontier:ingot_mold',
                count: 1
            }
        ],
        results: [
            {
                item: 'enlightened_end:bismuth_ingot',
                count: 1
            },
            {
                item: 'forge_frontier:ingot_mold'
            }
        ],
        heatRequirement: 'superheated'
    }).id('forge_frontier:mixing/bismuth_ingot')

    // Irradium Bar Mold Recipe
    event.custom({
        type: 'create:mixing',
        ingredients: [
            {
                fluid: 'forge_frontier:molten_irradium',
                amount: 100
            },
            {
                item: 'forge_frontier:ingot_mold',
                count: 1
            }
        ],
        results: [
            {
                item: 'enlightened_end:irradium_bar',
                count: 1
            },
            {
                item: 'forge_frontier:ingot_mold'
            }
        ],
        heatRequirement: 'superheated'
    }).id('forge_frontier:mixing/irradium_bar')

    // Malachite Mold Recipe
    event.custom({
        type: 'create:mixing',
        ingredients: [
            {
                fluid: 'forge_frontier:molten_malachite',
                amount: 100
            },
            {
                item: 'forge_frontier:ingot_mold',
                count: 1
            }
        ],
        results: [
            {
                item: 'enlightened_end:malachite',
                count: 1
            },
            {
                item: 'forge_frontier:ingot_mold'
            }
        ],
        heatRequirement: 'superheated'
    }).id('forge_frontier:mixing/malachite')

    // Desh Ingot Mold Recipe

    // Ostrum Ingot Mold Recipe

    // Calorite Ingot Mold Recipe

})