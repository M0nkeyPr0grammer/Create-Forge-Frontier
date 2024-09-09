ServerEvents.recipes(event => {

    // Reusable function for ingot mold recipes
    const createIngotMoldRecipe = (fluid, resultItem, resultCount, recipeName) => {
        event.custom({
            type: 'create:compacting',
            ingredients: [
                {
                    fluid: fluid,
                    amount: 100
                },
                {
                    item: 'forge_frontier:ingot_mold',
                    count: 1
                }
            ],
            results: [
                {
                    item: resultItem,
                    count: resultCount
                },
                {
                    item: 'forge_frontier:ingot_mold'
                }
            ],
            heatRequirement: 'superheated'
        }).id(`forge_frontier:compacting/${recipeName}`);
    };

    // Ingot Mold Recipes
    createIngotMoldRecipe('forge_frontier:molten_lead', 'tfmg:lead_ingot', 1, 'lead_ingot');
    createIngotMoldRecipe('forge_frontier:molten_aluminum', 'tfmg:aluminum_ingot', 1, 'aluminum_ingot');
    createIngotMoldRecipe('forge_frontier:molten_iron', 'minecraft:iron_ingot', 1, 'iron_ingot');
    createIngotMoldRecipe('forge_frontier:molten_copper', 'minecraft:copper_ingot', 1, 'copper_ingot');
    createIngotMoldRecipe('forge_frontier:molten_gold', 'minecraft:gold_ingot', 1, 'gold_ingot');
    createIngotMoldRecipe('forge_frontier:molten_netherite', 'minecraft:netherite_ingot', 1, 'netherite_ingot');
    createIngotMoldRecipe('forge_frontier:molten_netherite_iron', 'advancednetherite:netherite_iron_ingot', 1, 'netherite_iron_ingot');
    createIngotMoldRecipe('forge_frontier:molten_netherite_gold', 'advancednetherite:netherite_gold_ingot', 1, 'netherite_gold_ingot');
    createIngotMoldRecipe('forge_frontier:molten_netherite_emerald', 'advancednetherite:netherite_emerald_ingot', 1, 'netherite_emerald_ingot');
    createIngotMoldRecipe('forge_frontier:molten_netherite_diamond', 'advancednetherite:netherite_diamond_ingot', 1, 'netherite_diamond_ingot');
    createIngotMoldRecipe('forge_frontier:molten_steel', 'ad_astra:steel_ingot', 1, 'steel_ingot');
    createIngotMoldRecipe('forge_frontier:molten_bronze', 'create_dd:bronze_ingot', 1, 'bronze_ingot');
    createIngotMoldRecipe('forge_frontier:molten_tin', 'create_dd:tin_ingot', 1, 'tin_ingot');
    createIngotMoldRecipe('forge_frontier:molten_zinc', 'create:zinc_ingot', 1, 'zinc_ingot');
    createIngotMoldRecipe('forge_frontier:molten_brass', 'create:brass_ingot', 1, 'brass_ingot');
    createIngotMoldRecipe('forge_frontier:molten_ice_shard', 'ad_astra:ice_shard', 1, 'ice_shard');
    createIngotMoldRecipe('forge_frontier:molten_uranium', 'alexscaves:uranium', 1, 'uranium');
    createIngotMoldRecipe('forge_frontier:molten_bismuth', 'enlightened_end:bismuth_ingot', 1, 'bismuth_ingot');
    createIngotMoldRecipe('forge_frontier:molten_irradium', 'enlightened_end:irradium_bar', 1, 'irradium_bar');
    createIngotMoldRecipe('forge_frontier:molten_malachite', 'enlightened_end:malachite', 1, 'malachite');
    createIngotMoldRecipe('forge_frontier:molten_desh', 'ad_astra:desh_ingot', 1, 'desh_ingot');
    createIngotMoldRecipe('forge_frontier:molten_ostrum', 'ad_astra:ostrum_ingot', 1, 'ostrum_ingot');
    createIngotMoldRecipe('forge_frontier:molten_calorite', 'ad_astra:calorite_ingot', 1, 'calorite_ingot');
    createIngotMoldRecipe('forge_frontier:molten_guano','alexscaves:guano', 1, 'guano');
    createIngotMoldRecipe('forge_frontier:molten_scarlet_neodymium','alexscaves:scarlet_neodymium_ingot', 1, 'scarlet_neodymium');
    createIngotMoldRecipe('forge_frontier:molten_azure_neodymium','alexscaves:azure_neodymium_ingot', 1, 'azure_neodymium');
    createIngotMoldRecipe('forge_frontier:molten_pearl','alexscaves:pearl', 1, 'pearl');
    createIngotMoldRecipe('forge_frontier:molten_amber','alexscaves:amber', 1, 'amber');
    createIngotMoldRecipe('forge_frontier:molten_sulfur','alexscaves:sulfur_dust', 1, 'sulfur_dust');
    createIngotMoldRecipe('forge_frontier:molten_echo_shard','minecraft:echo_shard', 1, 'echo_shard');

});
