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
            fluid: 'kubejs:molten_bone_marrow',
            amount: 100
        }
    ],
    heatRequirement: 'superheated'
}).id('kubejs:mixing/meal_marrow')

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
            fluid: 'kubejs:molten_bone_marrow',
            amount: 900
        }
    ],
    heatRequirement: 'superheated'
}).id('kubejs:mixing/block_marrow')

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
            fluid: 'kubejs:molten_bone_marrow',
            amount: 300
        }
    ],
    heatRequirement: 'superheated'
}).id('kubejs:mixing/bone_marrow')
})