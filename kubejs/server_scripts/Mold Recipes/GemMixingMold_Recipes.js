ServerEvents.recipes(event => {

// Emerald Mold Recipe
event.custom({
    type: 'create:compacting',
    ingredients: [
        {
            fluid: 'forge_frontier:molten_emerald',
            amount: 100
        },
        {
            item: 'forge_frontier:gem_mold',
            count: 1
        }
    ],
    results: [
        {
            item: 'minecraft:emerald',
            count: 1
        },
        {
            item: 'forge_frontier:gem_mold'
        }
    ],
    heatRequirement: 'superheated'
}).id('forge_frontier:compacting/emerald')

// Lapis Mold Recipe
event.custom({
    type: 'create:compacting',
    ingredients: [
        {
            fluid: 'forge_frontier:molten_lapis',
            amount: 100
        },
        {
            item: 'forge_frontier:gem_mold',
            count: 1
        }
    ],
    results: [
        {
            item: 'minecraft:lapis_lazuli',
            count: 1
        },
        {
            item: 'forge_frontier:gem_mold'
        }
    ],
    heatRequirement: 'superheated'
}).id('forge_frontier:compacting/lapis')

// Diamond Mold Recipe
event.custom({
    type: 'create:compacting',
    ingredients: [
        {
            fluid: 'forge_frontier:molten_diamond',
            amount: 100
        },
        {
            item: 'forge_frontier:gem_mold',
            count: 1
        }
    ],
    results: [
        {
            item: 'minecraft:diamond',
            count: 1
        },
        {
            item: 'forge_frontier:gem_mold'
        }
    ],
    heatRequirement: 'superheated'
}).id('forge_frontier:compacting/diamond')

// Quartz Mold Recipe
event.custom({
    type: 'create:compacting',
    ingredients: [
        {
            fluid: 'forge_frontier:molten_quartz',
            amount: 100
        },
        {
            item: 'forge_frontier:gem_mold',
            count: 1
        }
    ],
    results: [
        {
            item: 'minecraft:quartz',
            count: 1
        },
        {
            item: 'forge_frontier:gem_mold'
        }
    ],
    heatRequirement: 'superheated'
}).id('forge_frontier:compacting/quartz')

// Redstone Mold Recipe
event.custom({
    type: 'create:compacting',
    ingredients: [
        {
            fluid: 'forge_frontier:molten_redstone',
            amount: 100
        },
        {
            item: 'forge_frontier:gem_mold',
            count: 1
        }
    ],
    results: [
        {
            item: 'minecraft:redstone',
            count: 1
        },
        {
            item: 'forge_frontier:gem_mold'
        }
    ],
    heatRequirement: 'superheated'
}).id('forge_frontier:compacting/redstone')

// Netherite Scrap Mold Recipe
event.custom({
    type: 'create:compacting',
    ingredients: [
        {
            fluid: 'forge_frontier:molten_ancient_debris',
            amount: 100
        },
        {
            item: 'forge_frontier:gem_mold',
            count: 1
        }
    ],
    results: [
        {
            item: 'minecraft:netherite_scrap',
            count: 1
        },
        {
            item: 'forge_frontier:gem_mold'
        }
    ],
    heatRequirement: 'superheated'
}).id('forge_frontier:compacting/netherite_scrap')

})