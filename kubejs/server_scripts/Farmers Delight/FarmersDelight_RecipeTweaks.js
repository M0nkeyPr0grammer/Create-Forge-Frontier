ServerEvents.recipes(event => {

//Creates New Recipes for Farmers Delight items/recipes
    event.shaped(
        Item.of('create_central_kitchen:miners_cooking_guide',1),
        [
            'AB ',
            'C  ',
            '   '
        ],
        {
            A: 'create:sturdy_sheet',
            B: 'farmersdelight:canvas',
            C: 'miners_delight:cave_carrot'
        }
    )

    // Create Compat Rich Soil Recipe
    event.custom({
        type: "create:mixing",
        ingredients: [
            { item: 'farmersdelight:organic_compost' },
            { fluid: 'minecraft:water', amount: 1000 },
            [
                { tag: 'chipped:brown_mushroom' }, 
                { tag: 'chipped:red_mushroom' }
            ] 
        ],
        results: [
            { item: 'farmersdelight:rich_soil' }
        ],
        heatRequirement: "heated"
    }).id('forge_frontier:mixing/rich_soil');

    // Create Compat Rich Soul Soil Recipe
    event.custom({
        type: "create:mixing",
        ingredients: [
            { item: 'nethersdelight:soul_compost' },
            { fluid: 'minecraft:lava', amount: 1000 },
            [
                { tag: 'chipped:warped_fungus' },
                { tag: 'chipped:crimson_fungus' }
            ] 
        ],
        results: [
            { item: 'nethersdelight:rich_soul_soil' }
        ],
        heatRequirement: "heated"
    }).id('forge_frontier:mixing/rich_soul_soil');

})