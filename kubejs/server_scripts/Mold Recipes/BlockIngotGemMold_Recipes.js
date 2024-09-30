ServerEvents.recipes(event => {

    // Block Mold Recipe
    event.custom({
        type:"create:compacting",
        ingredients: [
            {
                item: 'forge_frontier:mold_template',
                amount: 1
            },
            {
                item: 'minecraft:iron_block'
            }
        ],
        results: [
            {
                item: 'forge_frontier:block_mold',
                amount: 1
            },
            {
                item: 'minecraft:iron_block'
            }
        ],
    }).id('forge_frontier:compacting/block_mold')

    // Ingot Mold Recipe
    event.custom({
        type:"create:compacting",
        ingredients: [
            {
                item: 'forge_frontier:mold_template',
                amount: 1
            },
            {
                item: 'minecraft:iron_ingot'
            }
        ],
        results: [
            {
                item: 'forge_frontier:ingot_mold',
                amount: 1
            },
            {
                item: 'minecraft:iron_ingot'
            }
        ],
    }).id('forge_frontier:compacting/ingot_mold')

    // Gem Mold Recipe
    event.custom({
        type:"create:compacting",
        ingredients: [
            {
                item: 'forge_frontier:mold_template',
                amount: 1
            },
            {
                item: 'minecraft:diamond'
            }
        ],
        results: [
            {
                item: 'forge_frontier:gem_mold',
                amount: 1
            },
            {
                item: 'minecraft:diamond'
            }
        ],
    }).id('forge_frontier:compacting/gem_mold')

    // Coal Mold Recipe
    event.custom({
        type:"create:compacting",
        ingredients: [
            {
                item: 'forge_frontier:mold_template',
                amount: 1
            },
            {
                item: 'minecraft:coal'
            }
        ],
        results: [
            {
                item: 'forge_frontier:coal_mold',
                amount: 1
            },
            {
                item: 'minecraft:coal'
            }
        ],
    }).id('forge_frontier:compacting/coal_mold')

})