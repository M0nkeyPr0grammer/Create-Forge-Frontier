ServerEvents.recipes(event => {
    // Remove Vanilla Smithing Template Recipe
    event.remove({ id: 'minecraft:netherite_upgrade_smithing_template'})
    
    // Netherite Upgrade Template Recipe
    event.custom({
        type:"create:compacting",
        ingredients: [
            {
                item: 'forge_frontier:upgrade_mold',
                amount: 1
            },
            {
                fluid: 'forge_frontier:molten_diamond',
                amount: 400
            },
            {
                item: 'minecraft:netherrack',
                amount: 1
            }
        ],
        results: [
            {
                item: 'forge_frontier:upgrade_mold',
                amount: 1
            },
            {
                item: 'minecraft:netherite_upgrade_smithing_template'
            }
        ], 
        heatRequirement: 'superheated'
    }).id('forge_frontier:compacting/netherite_upgrade')

    // Netherite-Iron Upgrade Template
    event.custom({
        type:"create:compacting",
        ingredients: [
            {
                item: 'forge_frontier:upgrade_mold',
                amount: 1
            },
            {
                fluid: 'forge_frontier:molten_iron',
                amount: 400
            },
            {
                item: 'minecraft:netherite_ingot',
                amount: 1
            }
        ],
        results: [
            {
                item: 'forge_frontier:upgrade_mold',
                amount: 1
            },
            {
                item: 'forge_frontier:netherite_iron_upgrade'
            }
        ], 
        heatRequirement: 'superheated'
    }).id('forge_frontier:compacting/netherite_iron_upgrade')

    // Netherite-Gold Upgrade Template
    event.custom({
        type:"create:compacting",
        ingredients: [
            {
                item: 'forge_frontier:upgrade_mold',
                amount: 1
            },
            {
                fluid: 'forge_frontier:molten_gold',
                amount: 400
            },
            {
                item: 'advancednetherite:netherite_iron_ingot',
                amount: 1
            }
        ],
        results: [
            {
                item: 'forge_frontier:upgrade_mold',
                amount: 1
            },
            {
                item: 'forge_frontier:netherite_gold_upgrade'
            }
        ], 
        heatRequirement: 'superheated'
    }).id('forge_frontier:compacting/netherite_gold_upgrade')

    // Netherite-Emerald Template
    event.custom({
        type:"create:compacting",
        ingredients: [
            {
                item: 'forge_frontier:upgrade_mold',
                amount: 1
            },
            {
                fluid: 'forge_frontier:molten_emerald',
                amount: 400
            },
            {
                item: 'advancednetherite:netherite_gold_ingot',
                amount: 1
            }
        ],
        results: [
            {
                item: 'forge_frontier:upgrade_mold',
                amount: 1
            },
            {
                item: 'forge_frontier:netherite_emerald_upgrade'
            }
        ], 
        heatRequirement: 'superheated'
    }).id('forge_frontier:compacting/netherite_emerald_upgrade')

    // Netherite-Diamond Upgrade
    event.custom({
        type:"create:compacting",
        ingredients: [
            {
                item: 'forge_frontier:upgrade_mold',
                amount: 1
            },
            {
                fluid: 'forge_frontier:molten_diamond',
                amount: 400
            },
            {
                item: 'advancednetherite:netherite_emerald_ingot',
                amount: 1
            }
        ],
        results: [
            {
                item: 'forge_frontier:upgrade_mold',
                amount: 1
            },
            {
                item: 'forge_frontier:netherite_diamond_upgrade'
            }
        ], 
        heatRequirement: 'superheated'
    }).id('forge_frontier:compacting/netherite_diamond_upgrade')


})