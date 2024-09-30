ServerEvents.recipes(event => {
    // Reusable function for gem mold recipes
    function createGemMoldRecipe(fluid, resultItem, recipeName, fluidAmount) {
        if (fluidAmount === undefined) {
            fluidAmount = 100; // Set default value if not provided
        }

        event.custom({
            type: 'create:compacting',
            ingredients: [
                { fluid: fluid, amount: fluidAmount },
                { item: 'forge_frontier:gem_mold', count: 1 }
            ],
            results: [
                { item: resultItem, count: 1 },
                { item: 'forge_frontier:gem_mold' }
            ],
            heatRequirement: 'superheated'
        }).id(`forge_frontier:compacting/${recipeName}`);
    }

    // Array of gem recipes with respective parameters
    const gemRecipes = [
        { fluid: 'forge_frontier:molten_emerald', result: 'minecraft:emerald', name: 'emerald' },
        { fluid: 'forge_frontier:molten_lapis', result: 'minecraft:lapis_lazuli', name: 'lapis' },
        { fluid: 'forge_frontier:molten_diamond', result: 'minecraft:diamond', name: 'diamond' },
        { fluid: 'forge_frontier:molten_quartz', result: 'minecraft:quartz', name: 'quartz' },
        { fluid: 'forge_frontier:molten_redstone', result: 'minecraft:redstone', name: 'redstone' },
        { fluid: 'forge_frontier:molten_ancient_debris', result: 'minecraft:netherite_scrap', name: 'netherite_scrap' }
    ];

    // Loop through each gem recipe and create the corresponding compacting recipe
    gemRecipes.forEach(recipe => {
        createGemMoldRecipe(recipe.fluid, recipe.result, recipe.name);
    });
});
