ServerEvents.recipes(event => {

    // Helmet Mold Recipe
    event.custom({
        type:"create:compacting",
        ingredients: [
            {
                item: 'forge_frontier:mold_template',
                amount: 1
            },
            {
                item: 'minecraft:leather_helmet'
            }
        ],
        results: [
            {
                item: 'forge_frontier:helmet_mold',
                amount: 1
            },
            {
                item: 'minecraft:leather_helmet'
            }
        ],
    }).id('forge_frontier:compacting/helmet_mold')

    // Chestplate Mold Recipe
    event.custom({
        type:"create:compacting",
        ingredients: [
            {
                item: 'forge_frontier:mold_template',
                amount: 1
            },
            {
                item: 'minecraft:leather_chestplate'
            }
        ],
        results: [
            {
                item: 'forge_frontier:chestplate_mold',
                amount: 1
            },
            {
                item: 'minecraft:leather_chestplate'
            }
        ],
    }).id('forge_frontier:compacting/chestplate_mold')

    // Leggings Mold Recipe
    event.custom({
        type:"create:compacting",
        ingredients: [
            {
                item: 'forge_frontier:mold_template',
                amount: 1
            },
            {
                item: 'minecraft:leather_leggings'
            }
        ],
        results: [
            {
                item: 'forge_frontier:leggings_mold',
                amount: 1
            },
            {
                item: 'minecraft:leather_leggings'
            }
        ],
    }).id('forge_frontier:compacting/leggings_mold')

    // Boots Mold Recipe
    event.custom({
        type:"create:compacting",
        ingredients: [
            {
                item: 'forge_frontier:mold_template',
                amount: 1
            },
            {
                item: 'minecraft:leather_boots'
            }
        ],
        results: [
            {
                item: 'forge_frontier:boots_mold',
                amount: 1
            },
            {
                item: 'minecraft:leather_boots'
            }
        ],
    }).id('forge_frontier:compacting/boots_mold')
})