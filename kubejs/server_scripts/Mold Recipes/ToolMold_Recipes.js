ServerEvents.recipes(event => {

    // Sword Mold Recipe
    event.custom({
        type:"create:compacting",
        ingredients: [
            {
                item: 'forge_frontier:mold_template',
                amount: 1
            },
            {
                item: 'minecraft:wooden_sword'
            }
        ],
        results: [
            {
                item: 'forge_frontier:sword_mold',
                amount: 1
            },
            {
                item: 'minecraft:wooden_sword'
            }
        ],
    }).id('forge_frontier:compacting/sword_mold')

    // Pickaxe Mold Recipe
    event.custom({
        type:"create:compacting",
        ingredients: [
            {
                item: 'forge_frontier:mold_template',
                amount: 1
            },
            {
                item: 'minecraft:wooden_pickaxe'
            }
        ],
        results: [
            {
                item: 'forge_frontier:pickaxe_mold',
                amount: 1
            },
            {
                item: 'minecraft:wooden_pickaxe'
            }
        ],
    }).id('forge_frontier:compacting/pickaxe_mold')

    // Shovel Mold Recipe
    event.custom({
        type:"create:compacting",
        ingredients: [
            {
                item: 'forge_frontier:mold_template',
                amount: 1
            },
            {
                item: 'minecraft:wooden_shovel'
            }
        ],
        results: [
            {
                item: 'forge_frontier:shovel_mold',
                amount: 1
            },
            {
                item: 'minecraft:wooden_shovel'
            }
        ],
    }).id('forge_frontier:compacting/shovel_mold')

    // Axe Mold Recipe
    event.custom({
        type:"create:compacting",
        ingredients: [
            {
                item: 'forge_frontier:mold_template',
                amount: 1
            },
            {
                item: 'minecraft:wooden_axe'
            }
        ],
        results: [
            {
                item: 'forge_frontier:axe_mold',
                amount: 1
            },
            {
                item: 'minecraft:wooden_axe'
            }
        ],
    }).id('forge_frontier:compacting/axe_mold')

    // Hoe Mold Recipe
    event.custom({
        type:"create:compacting",
        ingredients: [
            {
                item: 'forge_frontier:mold_template',
                amount: 1
            },
            {
                item: 'minecraft:wooden_hoe'
            }
        ],
        results: [
            {
                item: 'forge_frontier:hoe_mold',
                amount: 1
            },
            {
                item: 'minecraft:wooden_hoe'
            }
        ],
    }).id('forge_frontier:compacting/hoe_mold')

})