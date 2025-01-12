ServerEvents.recipes(event => {
    // Reusable function for block mold recipes
    function createBlockMoldRecipe(fluid, resultItem, recipeName, fluidAmount, additionalIngredient) {
        // Set default values inside the function
        fluidAmount = fluidAmount || 900;
        additionalIngredient = additionalIngredient || null;

        const ingredients = [
            { fluid: fluid, amount: fluidAmount },
            { item: 'forge_frontier:block_mold', count: 1 }
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
                { item: 'forge_frontier:block_mold' }
            ],
            heatRequirement: 'superheated'
        }).id(`forge_frontier:compacting/${recipeName}`);
    }

    // Block Mold Recipes array
    const blockRecipes = [
        { fluid: 'forge_frontier:molten_lead', result: 'tfmg:lead_block', name: 'lead_block' },
        { fluid: 'forge_frontier:molten_aluminum', result: 'tfmg:aluminum_block', name: 'aluminum_block' },
        { fluid: 'forge_frontier:molten_desh', result: 'ad_astra:desh_block', name: 'desh_block' },
        { fluid: 'forge_frontier:molten_calorite', result: 'ad_astra:calorite_block', name: 'calorite_block' },
        { fluid: 'forge_frontier:molten_ostrum', result: 'ad_astra:ostrum_block', name: 'ostrum_block' },
        { fluid: 'forge_frontier:molten_copper', result: 'minecraft:copper_block', name: 'copper_block' },
        { fluid: 'forge_frontier:molten_iron', result: 'minecraft:iron_block', name: 'iron_block' },
        { fluid: 'forge_frontier:molten_gold', result: 'minecraft:gold_block', name: 'gold_block' },
        { fluid: 'forge_frontier:molten_carbon', result: 'quark:charcoal_block', name: 'charcoal_block', additional: { tag: 'minecraft:logs', count: 1 } },
        { fluid: 'forge_frontier:molten_carbon', result: 'minecraft:coal_block', name: 'coal_block' },
        { fluid: 'forge_frontier:molten_diamond', result: 'minecraft:diamond_block', name: 'diamond_block' },
        { fluid: 'forge_frontier:molten_zinc', result: 'create:zinc_block', name: 'zinc_block' },
        { fluid: 'forge_frontier:molten_brass', result: 'create:brass_block', name: 'brass_block' },
        { fluid: 'forge_frontier:molten_emerald', result: 'minecraft:emerald_block', name: 'emerald_block' },
        { fluid: 'forge_frontier:molten_redstone', result: 'minecraft:redstone_block', name: 'redstone_block' },
        { fluid: 'forge_frontier:molten_lapis', result: 'minecraft:lapis_block', name: 'lapis_block' },
        { fluid: 'forge_frontier:molten_netherite', result: 'minecraft:netherite_block', name: 'netherite_block' },
        { fluid: 'forge_frontier:molten_bone_marrow', result: 'minecraft:bone_block', name: 'bone_block' },
        { fluid: 'forge_frontier:molten_netherite_iron', result: 'advancednetherite:netherite_iron_block', name: 'netherite_iron_block' },
        { fluid: 'forge_frontier:molten_netherite_gold', result: 'advancednetherite:netherite_gold_block', name: 'netherite_gold_block' },
        { fluid: 'forge_frontier:molten_netherite_emerald', result: 'advancednetherite:netherite_emerald_block', name: 'netherite_emerald_block' },
        { fluid: 'forge_frontier:molten_netherite_diamond', result: 'advancednetherite:netherite_diamond_block', name: 'netherite_diamond_block' },
        { fluid: 'forge_frontier:molten_bronze', result: 'create_dd:bronze_block', name: 'bronze_block' },
        { fluid: 'forge_frontier:molten_tin', result: 'create_dd:tin_block', name: 'tin_block' },
        { fluid: 'forge_frontier:molten_quartz', result: 'minecraft:quartz_block', name: 'quartz_block', fluidAmount: 400 },
        { fluid: 'forge_frontier:molten_uranium', result: 'alexscaves:block_of_uranium', name: 'uranium_block' },
        { fluid: 'forge_frontier:molten_bismuth', result: 'enlightened_end:bismuth_block', name: 'bismuth_block' },
        { fluid: 'forge_frontier:molten_irradium', result: 'enlightened_end:irradium_block', name: 'irradium_block' },
        { fluid: 'forge_frontier:molten_malachite', result: 'enlightened_end:malachite_block', name: 'malachite_block', fluidAmount: 400 },
        { fluid: 'forge_frontier:molten_steel', result: 'ad_astra:steel_block', name: 'steel_block' },
        { fluid: 'forge_frontier:molten_guano', result: 'alexscaves:guano_block', name: 'guano_block'},
        { fluid: 'forge_frontier:molten_scarlet_neodymium', result: 'alexscaves:block_of_scarlet_neodymium', name: 'scarlet_neodymium_block'},
        { fluid: 'forge_frontier:molten_azure_neodymium', result: 'alexscaves:block_of_azure_neodymium', name: 'azure_neodymium_block'},
        { fluid: 'forge_frontier:molten_pearl', result: 'alexscaves:block_of_pearl', name: 'pearl_block'},
        { fluid: 'forge_frontier:molten_sulfur', result: 'alexscaves:sulfur', name: 'sulfur'}
    ];

    // Loop through the block recipes and create compacting recipes
    blockRecipes.forEach(recipe => {
        createBlockMoldRecipe(
            recipe.fluid,
            recipe.result,
            recipe.name,
            recipe.fluidAmount || 900,
            recipe.additional || null
        );
    });
});
