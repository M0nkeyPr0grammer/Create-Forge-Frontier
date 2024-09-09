ServerEvents.recipes(event => {

    // Reusable function for compacting recipes
    function createCompactingRecipe(fluid, resultItem, recipeName, additionalIngredient, fluidAmount) {
        if (fluidAmount === undefined) {
            fluidAmount = 100; // Default fluid amount
        }

        const ingredients = [
            { fluid: fluid, amount: fluidAmount },
            { item: 'forge_frontier:coal_mold', count: 1 }
        ];

        // Add additional ingredient if provided
        if (additionalIngredient) {
            ingredients.push(additionalIngredient);
        }

        event.custom({
            type: 'create:compacting',
            ingredients: ingredients,
            results: [
                { item: resultItem, count: 1 },
                { item: 'forge_frontier:coal_mold' }
            ],
            heatRequirement: 'superheated'
        }).id(`forge_frontier:compacting/${recipeName}`);
    }

    // Create charcoal mold recipe with an additional ingredient
    createCompactingRecipe(
        'forge_frontier:molten_carbon', 
        'minecraft:charcoal', 
        'charcoal', 
        { tag: 'minecraft:logs', count: 1 }
    );

    // Create coal mold recipe without an additional ingredient
    createCompactingRecipe(
        'forge_frontier:molten_carbon', 
        'minecraft:coal', 
        'coal', 
        null
    );

});
