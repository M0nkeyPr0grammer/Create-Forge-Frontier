ServerEvents.recipes(event => {
// Bonemeal to Molten Bone Marrow Recipe
event.custom({
    type: 'create:mixing',
    ingredients: [
        {
            item: 'minecraft:bone_meal',
            amount: 1
        }
    ],
    results: [
        {
            fluid: 'forge_frontier:molten_bone_marrow',
            amount: 100
        }
    ],
    heatRequirement: 'superheated'
}).id('forge_frontier:mixing/meal_marrow')

// Bone Block to Molten Bone Marrow Recipe
event.custom({
    type: 'create:mixing',
    ingredients: [
        {
            item: 'minecraft:bone_block',
            amount: 1
        }
    ],
    results: [
        {
            fluid: 'forge_frontier:molten_bone_marrow',
            amount: 900
        }
    ],
    heatRequirement: 'superheated'
}).id('forge_frontier:mixing/block_marrow')

// Bone to Molten Bone Marrow Recipe
event.custom({
    type: 'create:mixing',
    ingredients: [
        {
            item: 'minecraft:bone',
            amount: 1
        }
    ],
    results: [
        {
            fluid: 'forge_frontier:molten_bone_marrow',
            amount: 300
        }
    ],
    heatRequirement: 'superheated'
}).id('forge_frontier:mixing/bone_marrow')
})