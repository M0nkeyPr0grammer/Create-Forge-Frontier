ServerEvents.recipes(event => {
    // Remove Vanilla Smithing Template Recipe
    event.remove({ id: 'minecraft:netherite_upgrade_smithing_template' });

    // Reusable function for compacting upgrade template recipes
    const createUpgradeCompactingRecipe = (moldItem, fluid, fluidAmount, additionalItem, resultItem, recipeName) => {
        event.custom({
            type: 'create:compacting',
            ingredients: [
                { item: moldItem, amount: 1 },
                { fluid: fluid, amount: fluidAmount },
                { item: additionalItem, amount: 1 }
            ],
            results: [
                { item: moldItem, amount: 1 },
                { item: resultItem }
            ],
            heatRequirement: 'superheated'
        }).id(`forge_frontier:compacting/${recipeName}`);
    };

    // Recipes
    createUpgradeCompactingRecipe('forge_frontier:upgrade_mold', 'forge_frontier:molten_diamond', 400, 'minecraft:netherrack', 'minecraft:netherite_upgrade_smithing_template', 'netherite_upgrade');
    createUpgradeCompactingRecipe('forge_frontier:upgrade_mold', 'forge_frontier:molten_iron', 400, 'minecraft:netherite_ingot', 'forge_frontier:netherite_iron_upgrade', 'netherite_iron_upgrade');
    createUpgradeCompactingRecipe('forge_frontier:upgrade_mold', 'forge_frontier:molten_gold', 400, 'advancednetherite:netherite_iron_ingot', 'forge_frontier:netherite_gold_upgrade', 'netherite_gold_upgrade');
    createUpgradeCompactingRecipe('forge_frontier:upgrade_mold', 'forge_frontier:molten_emerald', 400, 'advancednetherite:netherite_gold_ingot', 'forge_frontier:netherite_emerald_upgrade', 'netherite_emerald_upgrade');
    createUpgradeCompactingRecipe('forge_frontier:upgrade_mold', 'forge_frontier:molten_diamond', 400, 'advancednetherite:netherite_emerald_ingot', 'forge_frontier:netherite_diamond_upgrade', 'netherite_diamond_upgrade');
});
