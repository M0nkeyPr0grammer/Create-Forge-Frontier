ServerEvents.recipes(event => {
    // Reusable function for armor mold recipes
    const createArmorMoldRecipe = (fluid, resultItem, upgradeItem, recipeName, armorType, fluidAmount) => {
        const ingredients = [
            { fluid: fluid, amount: fluidAmount },
            { item: `forge_frontier:${armorType}_mold`, count: 1 }
        ];

        if (upgradeItem) {
            ingredients.push({ item: upgradeItem, count: 1 });
        }

        event.custom({
            type: 'create:compacting',
            ingredients: ingredients,
            results: [
                { item: resultItem, count: 1 },
                { item: `forge_frontier:${armorType}_mold` }
            ],
            heatRequirement: 'superheated'
        }).id(`forge_frontier:compacting/${recipeName}_${armorType}`);
    };

    // Armor Recipes
    const armorTypes = ['helmet', 'chestplate', 'leggings', 'boots'];
    const fluidAmounts = { helmet: 250, chestplate: 400, leggings: 350, boots: 200 };

    // Helmets
    createArmorMoldRecipe('forge_frontier:molten_iron', 'minecraft:iron_helmet', null, 'iron', 'helmet', fluidAmounts.helmet);
    createArmorMoldRecipe('forge_frontier:molten_gold', 'minecraft:golden_helmet', null, 'golden', 'helmet', fluidAmounts.helmet);
    createArmorMoldRecipe('forge_frontier:molten_diamond', 'minecraft:diamond_helmet', null, 'diamond', 'helmet', fluidAmounts.helmet);
    createArmorMoldRecipe('forge_frontier:molten_copper', 'create_sa:copper_helmet', null, 'copper', 'helmet', fluidAmounts.helmet);
    createArmorMoldRecipe('forge_frontier:molten_zinc', 'create_sa:zinc_helmet', null, 'zinc', 'helmet', fluidAmounts.helmet);
    createArmorMoldRecipe('forge_frontier:molten_brass', 'create_sa:brass_helmet', null, 'brass', 'helmet', fluidAmounts.helmet);
    createArmorMoldRecipe('forge_frontier:molten_netherite', 'minecraft:netherite_helmet', 'minecraft:netherite_upgrade_smithing_template', 'netherite', 'helmet', fluidAmounts.helmet);
    createArmorMoldRecipe('forge_frontier:molten_netherite_iron', 'advancednetherite:netherite_iron_helmet', 'forge_frontier:netherite_iron_upgrade', 'netherite_iron', 'helmet', fluidAmounts.helmet);
    createArmorMoldRecipe('forge_frontier:molten_netherite_gold', 'advancednetherite:netherite_gold_helmet', 'forge_frontier:netherite_gold_upgrade', 'netherite_gold', 'helmet', fluidAmounts.helmet);
    createArmorMoldRecipe('forge_frontier:molten_netherite_emerald', 'advancednetherite:netherite_emerald_helmet', 'forge_frontier:netherite_emerald_upgrade', 'netherite_emerald', 'helmet', fluidAmounts.helmet);
    createArmorMoldRecipe('forge_frontier:molten_netherite_diamond', 'advancednetherite:netherite_diamond_helmet', 'forge_frontier:netherite_diamond_upgrade', 'netherite_diamond', 'helmet', fluidAmounts.helmet);

    // Chestplates
    createArmorMoldRecipe('forge_frontier:molten_iron', 'minecraft:iron_chestplate', null, 'iron', 'chestplate', fluidAmounts.chestplate);
    createArmorMoldRecipe('forge_frontier:molten_gold', 'minecraft:golden_chestplate', null, 'golden', 'chestplate', fluidAmounts.chestplate);
    createArmorMoldRecipe('forge_frontier:molten_diamond', 'minecraft:diamond_chestplate', null, 'diamond', 'chestplate', fluidAmounts.chestplate);
    createArmorMoldRecipe('forge_frontier:molten_copper', 'create_sa:copper_chestplate', null, 'copper', 'chestplate', fluidAmounts.chestplate);
    createArmorMoldRecipe('forge_frontier:molten_zinc', 'create_sa:zinc_chestplate', null, 'zinc', 'chestplate', fluidAmounts.chestplate);
    createArmorMoldRecipe('forge_frontier:molten_brass', 'create_sa:brass_chestplate', null, 'brass', 'chestplate', fluidAmounts.chestplate);
    createArmorMoldRecipe('forge_frontier:molten_netherite', 'minecraft:netherite_chestplate', 'minecraft:netherite_upgrade_smithing_template', 'netherite', 'chestplate', fluidAmounts.chestplate);
    createArmorMoldRecipe('forge_frontier:molten_netherite_iron', 'advancednetherite:netherite_iron_chestplate', 'forge_frontier:netherite_iron_upgrade', 'netherite_iron', 'chestplate', fluidAmounts.chestplate);
    createArmorMoldRecipe('forge_frontier:molten_netherite_gold', 'advancednetherite:netherite_gold_chestplate', 'forge_frontier:netherite_gold_upgrade', 'netherite_gold', 'chestplate', fluidAmounts.chestplate);
    createArmorMoldRecipe('forge_frontier:molten_netherite_emerald', 'advancednetherite:netherite_emerald_chestplate', 'forge_frontier:netherite_emerald_upgrade', 'netherite_emerald', 'chestplate', fluidAmounts.chestplate);
    createArmorMoldRecipe('forge_frontier:molten_netherite_diamond', 'advancednetherite:netherite_diamond_chestplate', 'forge_frontier:netherite_diamond_upgrade', 'netherite_diamond', 'chestplate', fluidAmounts.chestplate);

    // Leggings
    createArmorMoldRecipe('forge_frontier:molten_iron', 'minecraft:iron_leggings', null, 'iron', 'leggings', fluidAmounts.leggings);
    createArmorMoldRecipe('forge_frontier:molten_gold', 'minecraft:golden_leggings', null, 'golden', 'leggings', fluidAmounts.leggings);
    createArmorMoldRecipe('forge_frontier:molten_diamond', 'minecraft:diamond_leggings', null, 'diamond', 'leggings', fluidAmounts.leggings);
    createArmorMoldRecipe('forge_frontier:molten_copper', 'create_sa:copper_leggings', null, 'copper', 'leggings', fluidAmounts.leggings);
    createArmorMoldRecipe('forge_frontier:molten_zinc', 'create_sa:zinc_leggings', null, 'zinc', 'leggings', fluidAmounts.leggings);
    createArmorMoldRecipe('forge_frontier:molten_brass', 'create_sa:brass_leggings', null, 'brass', 'leggings', fluidAmounts.leggings);
    createArmorMoldRecipe('forge_frontier:molten_netherite', 'minecraft:netherite_leggings', 'minecraft:netherite_upgrade_smithing_template', 'netherite', 'leggings', fluidAmounts.leggings);
    createArmorMoldRecipe('forge_frontier:molten_netherite_iron', 'advancednetherite:netherite_iron_leggings', 'forge_frontier:netherite_iron_upgrade', 'netherite_iron', 'leggings', fluidAmounts.leggings);
    createArmorMoldRecipe('forge_frontier:molten_netherite_gold', 'advancednetherite:netherite_gold_leggings', 'forge_frontier:netherite_gold_upgrade', 'netherite_gold', 'leggings', fluidAmounts.leggings);
    createArmorMoldRecipe('forge_frontier:molten_netherite_emerald', 'advancednetherite:netherite_emerald_leggings', 'forge_frontier:netherite_emerald_upgrade', 'netherite_emerald', 'leggings', fluidAmounts.leggings);
    createArmorMoldRecipe('forge_frontier:molten_netherite_diamond', 'advancednetherite:netherite_diamond_leggings', 'forge_frontier:netherite_diamond_upgrade', 'netherite_diamond', 'leggings', fluidAmounts.leggings);

    // Boots
    createArmorMoldRecipe('forge_frontier:molten_iron', 'minecraft:iron_boots', null, 'iron', 'boots', fluidAmounts.boots);
    createArmorMoldRecipe('forge_frontier:molten_gold', 'minecraft:golden_boots', null, 'golden', 'boots', fluidAmounts.boots);
    createArmorMoldRecipe('forge_frontier:molten_diamond', 'minecraft:diamond_boots', null, 'diamond', 'boots', fluidAmounts.boots);
    createArmorMoldRecipe('forge_frontier:molten_copper', 'create_sa:copper_boots', null, 'copper', 'boots', fluidAmounts.boots);
    createArmorMoldRecipe('forge_frontier:molten_zinc', 'create_sa:zinc_boots', null, 'zinc', 'boots', fluidAmounts.boots);
    createArmorMoldRecipe('forge_frontier:molten_brass', 'create_sa:brass_boots', null, 'brass', 'boots', fluidAmounts.boots);
    createArmorMoldRecipe('forge_frontier:molten_netherite', 'minecraft:netherite_boots', 'minecraft:netherite_upgrade_smithing_template', 'netherite', 'boots', fluidAmounts.boots);
    createArmorMoldRecipe('forge_frontier:molten_netherite_iron', 'advancednetherite:netherite_iron_boots', 'forge_frontier:netherite_iron_upgrade', 'netherite_iron', 'boots', fluidAmounts.boots);
    createArmorMoldRecipe('forge_frontier:molten_netherite_gold', 'advancednetherite:netherite_gold_boots', 'forge_frontier:netherite_gold_upgrade', 'netherite_gold', 'boots', fluidAmounts.boots);
    createArmorMoldRecipe('forge_frontier:molten_netherite_emerald', 'advancednetherite:netherite_emerald_boots', 'forge_frontier:netherite_emerald_upgrade', 'netherite_emerald', 'boots', fluidAmounts.boots);
    createArmorMoldRecipe('forge_frontier:molten_netherite_diamond', 'advancednetherite:netherite_diamond_boots', 'forge_frontier:netherite_diamond_upgrade', 'netherite_diamond', 'boots', fluidAmounts.boots);
});
