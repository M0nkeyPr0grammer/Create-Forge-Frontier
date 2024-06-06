ServerEvents.recipes(event => {

// Charcoal Mold Recipe
event.custom({
    type: 'create:compacting',
    ingredients: [
        {
            fluid: 'forge_frontier:molten_carbon',
            amount: 100
        },
        {
            item: 'forge_frontier:coal_mold',
            count: 1
        },
        {
            tag: 'minecraft:logs',
            count: 1
        }
    ],
    results: [
        {
            item: 'minecraft:charcoal',
            count: 1
        },
        {
            item: 'forge_frontier:coal_mold'
        }
    ],
    heatRequirement: 'superheated'
}).id('forge_frontier:compacting/charcoal')

// Coal Mold Recipe
event.custom({
    type: 'create:compacting',
    ingredients: [
        {
            fluid: 'forge_frontier:molten_carbon',
            amount: 100
        },
        {
            item: 'forge_frontier:coal_mold',
            count: 1
        }
    ],
    results: [
        {
            item: 'minecraft:coal',
            count: 1
        },
        {
            item: 'forge_frontier:coal_mold'
        }
    ],
    heatRequirement: 'superheated'
}).id('forge_frontier:compacting/coal')

})