ServerEvents.recipes(event => {

    // Molten Desh to Desh Block
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {
                fluid: 'forge_frontier:molten_desh',
                amount: 900
            },
            {
                item: 'forge_frontier:block_mold',
                count: 1
            }
        ],
        results: [
            {
                item: 'ad_astra:desh_block',
                count: 1
            },
            {
                item: 'forge_frontier:block_mold'
            }
        ],
        heatRequirement: 'superheated'
    }).id('forge_frontier:compacting/desh_block')

    // Molten Calorite to Desh Block
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {
                fluid: 'forge_frontier:molten_calorite',
                amount: 900
            },
            {
                item: 'forge_frontier:block_mold',
                count: 1
            }
        ],
        results: [
            {
                item: 'ad_astra:calorite_block',
                count: 1
            },
            {
                item: 'forge_frontier:block_mold'
            }
        ],
        heatRequirement: 'superheated'
    }).id('forge_frontier:compacting/calorite_block')

    // Molten Ostrum to Ostrum Block
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {
                fluid: 'forge_frontier:molten_ostrum',
                amount: 900
            },
            {
                item: 'forge_frontier:block_mold',
                count: 1
            }
        ],
        results: [
            {
                item: 'ad_astra:ostrum_block',
                count: 1
            },
            {
                item: 'forge_frontier:block_mold'
            }
        ],
        heatRequirement: 'superheated'
    }).id('forge_frontier:compacting/ostrum_block')

    // Molten Copper to Copper Block
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {
                fluid: 'forge_frontier:molten_copper',
                amount: 900
            },
            {
                item: 'forge_frontier:block_mold',
                count: 1
            }
        ],
        results: [
            {
                item: 'minecraft:copper_block',
                count: 1
            },
            {
                item: 'forge_frontier:block_mold'
            }
        ],
        heatRequirement: 'superheated'
    }).id('forge_frontier:compacting/copper_block')

    // Molten Iron to Iron Block
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {
                fluid: 'forge_frontier:molten_iron',
                amount: 900
            },
            {
                item: 'forge_frontier:block_mold',
                count: 1
            }
        ],
        results: [
            {
                item: 'minecraft:iron_block',
                count: 1
            },
            {
                item: 'forge_frontier:block_mold'
            }
        ],
        heatRequirement: 'superheated'
    }).id('forge_frontier:compacting/iron_block')

    // Molten Gold to Gold Block
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {
                fluid: 'forge_frontier:molten_gold',
                amount: 900
            },
            {
                item: 'forge_frontier:block_mold',
                count: 1
            }
        ],
        results: [
            {
                item: 'minecraft:gold_block',
                count: 1
            },
            {
                item: 'forge_frontier:block_mold'
            }
        ],
        heatRequirement: 'superheated'
    }).id('forge_frontier:compacting/gold_block')

    // Molten Carbon to Charcoal Block
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {
                fluid: 'forge_frontier:molten_carbon',
                amount: 900
            },
            {
                item: 'forge_frontier:block_mold',
                count: 1
            },
            {
                tag: 'minecraft:logs',
                count: 1
            }
        ],
        results: [
            {
                item: 'quark:charcoal_block',
                count: 1
            },
            {
                item: 'forge_frontier:block_mold'
            }
        ],
        heatRequirement: 'superheated'
    }).id('forge_frontier:compacting/charcoal_block')

    // Molten Carbon to Coal Block
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {
                fluid: 'forge_frontier:molten_carbon',
                amount: 900
            },
            {
                item: 'forge_frontier:block_mold',
                count: 1
            }
        ],
        results: [
            {
                item: 'minecraft:coal_block',
                count: 1
            },
            {
                item: 'forge_frontier:block_mold'
            }
        ],
        heatRequirement: 'superheated'
    }).id('forge_frontier:compacting/coal_block')

    // Molten Diamond to Diamond Block
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {
                fluid: 'forge_frontier:molten_diamond',
                amount: 900
            },
            {
                item: 'forge_frontier:block_mold',
                count: 1
            }
        ],
        results: [
            {
                item: 'minecraft:diamond_block',
                count: 1
            },
            {
                item: 'forge_frontier:block_mold'
            }
        ],
        heatRequirement: 'superheated'
    }).id('forge_frontier:compacting/diamond_block')

    // Molten Zinc to Zinc Block
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {
                fluid: 'forge_frontier:molten_zinc',
                amount: 900
            },
            {
                item: 'forge_frontier:block_mold',
                count: 1
            }
        ],
        results: [
            {
                item: 'create:zinc_block',
                count: 1
            },
            {
                item: 'forge_frontier:block_mold'
            }
        ],
        heatRequirement: 'superheated'
    }).id('forge_frontier:compacting/zinc_block')

    // Molten Brass to Brass Block
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {
                fluid: 'forge_frontier:molten_brass',
                amount: 900
            },
            {
                item: 'forge_frontier:block_mold',
                count: 1
            }
        ],
        results: [
            {
                item: 'create:brass_block',
                count: 1
            },
            {
                item: 'forge_frontier:block_mold'
            }
        ],
        heatRequirement: 'superheated'
    }).id('forge_frontier:compacting/brass_block')

    // Molten Emerald to Emerald Block
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {
                fluid: 'forge_frontier:molten_emerald',
                amount: 900
            },
            {
                item: 'forge_frontier:block_mold',
                count: 1
            }
        ],
        results: [
            {
                item: 'minecraft:emerald_block',
                count: 1
            },
            {
                item: 'forge_frontier:block_mold'
            }
        ],
        heatRequirement: 'superheated'
    }).id('forge_frontier:compacting/emerald_block')

    // Molten Redstone to Redstone Block
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {
                fluid: 'forge_frontier:molten_redstone',
                amount: 900
            },
            {
                item: 'forge_frontier:block_mold',
                count: 1
            }
        ],
        results: [
            {
                item: 'minecraft:redstone_block',
                count: 1
            },
            {
                item: 'forge_frontier:block_mold'
            }
        ],
        heatRequirement: 'superheated'
    }).id('forge_frontier:compacting/redstone_block')

    // Molten Lapis to Lapis Block
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {
                fluid: 'forge_frontier:molten_lapis',
                amount: 900
            },
            {
                item: 'forge_frontier:block_mold',
                count: 1
            }
        ],
        results: [
            {
                item: 'minecraft:lapis_block',
                count: 1
            },
            {
                item: 'forge_frontier:block_mold'
            }
        ],
        heatRequirement: 'superheated'
    }).id('forge_frontier:compacting/lapis_block')

    // Molten Ancient Debris to Ancient Debris
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {
                fluid: 'forge_frontier:molten_ancient_debris',
                amount: 150
            },
            {
                item: 'forge_frontier:block_mold',
                count: 1
            }
        ],
        results: [
            {
                item: 'minecraft:ancient_debris',
                count: 1
            },
            {
                item: 'forge_frontier:block_mold'
            }
        ],
        heatRequirement: 'superheated'
    }).id('forge_frontier:compacting/ancient_debris')

    // Molten Netherite to Netherite Block
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {
                fluid: 'forge_frontier:molten_netherite',
                amount: 900
            },
            {
                item: 'forge_frontier:block_mold',
                count: 1
            }
        ],
        results: [
            {
                item: 'minecraft:netherite_block',
                count: 1
            },
            {
                item: 'forge_frontier:block_mold'
            }
        ],
        heatRequirement: 'superheated'
    }).id('forge_frontier:compacting/netherite_block')

    // Molten Bone Marrow to Bone Block
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {
                fluid: 'forge_frontier:molten_bone_marrow',
                amount: 900
            },
            {
                item: 'forge_frontier:block_mold',
                count: 1
            }
        ],
        results: [
            {
                item: 'minecraft:bone_block',
                count: 1
            },
            {
                item: 'forge_frontier:block_mold'
            }
        ],
        heatRequirement: 'superheated'
    }).id('forge_frontier:compacting/bone_block')

    // Molten Netherite-Iron to Netherite-Iron Block
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {
                fluid: 'forge_frontier:molten_netherite_iron',
                amount: 900
            },
            {
                item: 'forge_frontier:block_mold',
                count: 1
            }
        ],
        results: [
            {
                item: 'advancednetherite:netherite_iron_block',
                count: 1
            },
            {
                item: 'forge_frontier:block_mold'
            }
        ],
        heatRequirement: 'superheated'
    }).id('forge_frontier:compacting/netherite_iron_block')

    // Molten Netherite-Gold to Netherite-Gold Block
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {
                fluid: 'forge_frontier:molten_netherite_gold',
                amount: 900
            },
            {
                item: 'forge_frontier:block_mold',
                count: 1
            }
        ],
        results: [
            {
                item: 'advancednetherite:netherite_gold_block',
                count: 1
            },
            {
                item: 'forge_frontier:block_mold'
            }
        ],
        heatRequirement: 'superheated'
    }).id('forge_frontier:compacting/netherite_gold_block')

    // Molten Netherite-Emerald to Netherite-Emerald Block
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {
                fluid: 'forge_frontier:molten_netherite_emerald',
                amount: 900
            },
            {
                item: 'forge_frontier:block_mold',
                count: 1
            }
        ],
        results: [
            {
                item: 'advancednetherite:netherite_emerald_block',
                count: 1
            },
            {
                item: 'forge_frontier:block_mold'
            }
        ],
        heatRequirement: 'superheated'
    }).id('forge_frontier:compacting/netherite_emerald_block')

    // Molten Netherite-Diamond to Netherite-Diamond Block
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {
                fluid: 'forge_frontier:molten_netherite_diamond',
                amount: 900
            },
            {
                item: 'forge_frontier:block_mold',
                count: 1
            }
        ],
        results: [
            {
                item: 'advancednetherite:netherite_diamond_block',
                count: 1
            },
            {
                item: 'forge_frontier:block_mold'
            }
        ],
        heatRequirement: 'superheated'
    }).id('forge_frontier:compacting/netherite_diamond_block')

    // Molten Bronze to Bronze Block
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {
                fluid: 'forge_frontier:molten_bronze',
                amount: 900
            },
            {
                item: 'forge_frontier:block_mold',
                count: 1
            }
        ],
        results: [
            {
                item: 'create_dd:bronze_block',
                count: 1
            },
            {
                item: 'forge_frontier:block_mold'
            }
        ],
        heatRequirement: 'superheated'
    }).id('forge_frontier:compacting/bronze_block')

    // Molten Tin to Tin Block
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {
                fluid: 'forge_frontier:molten_tin',
                amount: 900
            },
            {
                item: 'forge_frontier:block_mold',
                count: 1
            }
        ],
        results: [
            {
                item: 'create_dd:tin_block',
                count: 1
            },
            {
                item: 'forge_frontier:block_mold'
            }
        ],
        heatRequirement: 'superheated'
    }).id('forge_frontier:compacting/tin_block')

    // Molten Quartz to Quartz Block
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {
                fluid: 'forge_frontier:molten_quartz',
                amount: 400
            },
            {
                item: 'forge_frontier:block_mold',
                count: 1
            }
        ],
        results: [
            {
                item: 'minecraft:quartz_block',
                count: 1
            },
            {
                item: 'forge_frontier:block_mold'
            }
        ],
        heatRequirement: 'superheated'
    }).id('forge_frontier:compacting/quartz_block')

    // Molten Uranium to Uranium Block
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {
                fluid: 'forge_frontier:molten_uranium',
                amount: 900
            },
            {
                item: 'forge_frontier:block_mold',
                count: 1
            }
        ],
        results: [
            {
                item: 'alexcaves:block_of_uranium',
                count: 1
            },
            {
                item: 'forge_frontier:block_mold'
            }
        ],
        heatRequirement: 'superheated'
    }).id('forge_frontier:compacting/uranium_block')

    // Molten Bismuth to Bismuth Block
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {
                fluid: 'forge_frontier:molten_bismuth',
                amount: 900
            },
            {
                item: 'forge_frontier:block_mold',
                count: 1
            }
        ],
        results: [
            {
                item: 'enlightened_end:bismuth_block',
                count: 1
            },
            {
                item: 'forge_frontier:block_mold'
            }
        ],
        heatRequirement: 'superheated'
    }).id('forge_frontier:compacting/bismuth_block')

    // Molten Irradium to Irradium Block
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {
                fluid: 'forge_frontier:molten_irradium',
                amount: 900
            },
            {
                item: 'forge_frontier:block_mold',
                count: 1
            }
        ],
        results: [
            {
                item: 'enlightened_end:irradium_block',
                count: 1
            },
            {
                item: 'forge_frontier:block_mold'
            }
        ],
        heatRequirement: 'superheated'
    }).id('forge_frontier:compacting/irradium_block')

    // Molten Malachite to Malachite Block
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {
                fluid: 'forge_frontier:molten_malachite',
                amount: 400
            },
            {
                item: 'forge_frontier:block_mold',
                count: 1
            }
        ],
        results: [
            {
                item: 'enlightened_end:malachite_block',
                count: 1
            },
            {
                item: 'forge_frontier:block_mold'
            }
        ],
        heatRequirement: 'superheated'
    }).id('forge_frontier:compacting/malachite_block')

    // Molten Steel to Steel Block
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {
                fluid: 'forge_frontier:molten_steel',
                amount: 900
            },
            {
                item: 'forge_frontier:block_mold',
                count: 1
            }
        ],
        results: [
            {
                item: 'ad_astra:steel_block',
                count: 1
            },
            {
                item: 'forge_frontier:block_mold'
            }
        ],
        heatRequirement: 'superheated'
    }).id('forge_frontier:compacting/steel_block')
})