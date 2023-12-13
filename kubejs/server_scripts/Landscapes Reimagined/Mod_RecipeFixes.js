// Mod Recipe Fixes
ServerEvents.recipes(event => {

    // Removes Broken Recipes
    event.remove({ id: 'supplementaries:integration/ash_bricks_fd' });
    event.remove({ id: 'supplementaries:integration/lapis_bricks_fd' });
    event.remove({ id: 'createdieselgenerators:crafting/engine_piston'});
    event.remove({ id: 'createdieselgenerators:mechanical_crafting/diesel_engine'});
    event.remove({ id: 'createdieselgenerators:mechanical_crafting/large_diesel_engine'});
    event.remove({ id: 'createdieselgenerators:mixing/biodiesel'});
    event.remove({ id: 'createdieselgenerators:basin_fermenting/fermentable'});
    event.remove({ id: 'createdieselgenerators:compat/farmers_delight/basin_fermenting/fermentable'});
    event.remove({ id: 'createdieselgenerators:compacting/plant_oil'})
    event.remove({ id: 'sliceanddice:sprinkler'});
    event.remove({ id: 'create_confectionery:ruby_chocolate_recipe_6' });
    event.remove({ id: 'create_confectionery:white_chocolate_recipe_6' });
    event.remove({ id: 'create_confectionery:chocolate_recipe_6' });
    event.remove({ id: 'create_confectionery:black_chocolate_recipe_6' });
   
    
    // Removes Missing Item Related Recipes
    event.remove({ id: 'create:cutting/stripped_cherry_log' });
    event.remove({ id: 'create:cutting/stripped_cherry_wood' });
    event.remove({ id: 'create:cutting/cherry_log' });
    event.remove({ id: 'create:cutting/cherry_wood' });
    event.remove({ id: 'create:pressing/plains_path' });
    event.remove({ id: 'create:pressing/forest_path' });
    event.remove({ id: 'create:filling/plain_grass_block' });
    event.remove({ id: 'create:filling/forest_grass_block' });
    event.remove({ id: 'create:milling/white_trilium' });
    event.remove({ id: 'create:milling/wilting_trilium' });
    event.remove({ id: 'createaddition:compat/ae2/charged_certus_quartz' });
    event.remove({ id: 'mctb:archwood_planks_crafting_table' });
    event.remove({ id: 'mctb:dark_crafting_table' });
    event.remove({ id: 'create:cutting/compat/biomesoplenty/cherry_log' });
    event.remove({ id: 'tfmg:colored_concrete/full_block/yellow_concrete_q' });
    event.remove({ id: 'mctb:soul_planks_crafting_table' });
    event.remove({ id: 'mctb:mining_crafting_table' });
    event.remove({ id: 'tfmg:colored_concrete/full_block/red_concrete_q' });
    event.remove({ id: 'tfmg:colored_concrete/full_block/lime_concrete_q' });
    event.remove({ id: 'mctb:twilight_oak_crafting_table' });
    event.remove({ id: 'tfmg:colored_concrete/full_block/pink_concrete_q' });
    event.remove({ id: 'tfmg:colored_concrete/full_block/black_concrete_q' });
    event.remove({ id: 'mctb:rubber_planks_crafting_table' });
    event.remove({ id: 'mctb:transformation_crafting_table' });
    event.remove({ id: 'railways:sequenced_assembly/track_biomesoplenty_cherry_narrow' });
    event.remove({ id: 'mctb:ad_ancient_crafting_table' });
    event.remove({ id: 'mctb:demonic_planks_crafting_table' });
    event.remove({ id: 'mctb:grongle_crafting_table' });
    event.remove({ id: 'mctb:menril_planks_crafting_table' });
    event.remove({ id: 'create:cutting/compat/biomesoplenty/stripped_cherry_wood' });
    event.remove({ id: 'mctb:wigglewood_crafting_table' });
    event.remove({ id: 'tfmg:colored_concrete/full_block/light_gray_concrete_q' });
    event.remove({ id: 'tfmg:colored_concrete/full_block/cyan_concrete_q' });
    event.remove({ id: 'tfmg:colored_concrete/full_block/purple_concrete_q' });
    event.remove({ id: 'mctb:sorting_crafting_table' });
    event.remove({ id: 'mctb:canopy_crafting_table' });
    event.remove({ id: 'mctb:azalea_crafting_table' });
    event.remove({ id: 'design_decor:item_application/crushing_wheels/special_aluminum_cylinder' });
    event.remove({ id: 'tfmg:colored_concrete/full_block/light_blue_concrete_q' });
    event.remove({ id: 'mctb:walnut_planks_crafting_table' });
    event.remove({ id: 'tfmg:colored_concrete/full_block/green_concrete_q' });
    event.remove({ id: 'railways:sequenced_assembly/track_biomesoplenty_cherry' });
    event.remove({ id: 'tfmg:colored_concrete/full_block/magenta_concrete_q' });
    event.remove({ id: 'tfmg:colored_concrete/full_block/blue_concrete_q' });
    event.remove({ id: 'create:cutting/compat/biomesoplenty/cherry_wood' });
    event.remove({ id: 'mctb:ancient_crafting_table' });
    event.remove({ id: 'tfmg:colored_concrete/full_block/white_concrete_q' });
    event.remove({ id: 'tfmg:colored_concrete/full_block/gray_concrete_q' });
    event.remove({ id: 'mctb:ancient_planks_crafting_table' });
    event.remove({ id: 'tfmg:colored_concrete/full_block/brown_concrete_q' });
    event.remove({ id: 'tfmg:colored_concrete/full_block/pink_concrete' });
    event.remove({ id: 'create_things_and_misc:schematic_chair' });
    event.remove({ id: 'mctb:time_crafting_table' });
    event.remove({ id: 'create:filling/chocolate_bagutte' });
    event.remove({ id: 'create_things_and_misc:copper_scaffolding_craft' });
    event.remove({ id: 'tfmg:colored_concrete/full_block/orange_concrete_q' });
    event.remove({ id: 'mctb:twilight_mangrove_crafting_table' });
    event.remove({ id: 'mctb:bop_cherry_crafting_table' });
    event.remove({ id: 'mctb:blossom_crafting_table' });
    event.remove({ id: 'create:cutting/compat/biomesoplenty/stripped_cherry_log' });
    event.remove({ id: 'design_decor:item_application/millstones/special_aluminum_cylinder' });
    event.remove({ id: 'railways:sequenced_assembly/track_biomesoplenty_cherry_wide' });
    event.remove({ id: 'mctb:smogstem_crafting_table' });

        // All the Compressed Decompressed Recipes
        event.remove({ id: 'allthecompressed:decompress/bronze_block_1x' });
        event.remove({ id: 'allthecompressed:decompress/vibrant_alloy_block_1x' });
        event.remove({ id: 'allthecompressed:decompress/vibranium_allthemodium_alloy_block_1x' });
        event.remove({ id: 'allthecompressed:decompress/platinum_block_1x' });
        event.remove({ id: 'allthecompressed:decompress/conductive_alloy_block_1x' });
        event.remove({ id: 'allthecompressed:decompress/unobtainium_block_1x' });
        event.remove({ id: 'allthecompressed:decompress/zinc_block_1x' });
        event.remove({ id: 'allthecompressed:decompress/uraninite_block_1x' });
        event.remove({ id: 'allthecompressed:decompress/invar_block_1x' });
        event.remove({ id: 'allthecompressed:decompress/redstone_alloy_block_1x' });
        event.remove({ id: 'allthecompressed:decompress/nickel_block_1x' });
        event.remove({ id: 'allthecompressed:decompress/blazing_crystal_block_1x' });
        event.remove({ id: 'allthecompressed:decompress/ruby_block_1x' });
        event.remove({ id: 'allthecompressed:decompress/silver_block_1x' });
        event.remove({ id: 'allthecompressed:decompress/tin_block_1x' });
        event.remove({ id: 'allthecompressed:decompress/spirited_crystal_block_1x' });
        event.remove({ id: 'allthecompressed:decompress/constantan_block_1x' });
        event.remove({ id: 'allthecompressed:decompress/peridot_block_1x' });
        event.remove({ id: 'allthecompressed:decompress/ender_pearl_block_1x' });
        event.remove({ id: 'allthecompressed:decompress/copper_alloy_block_1x' });
        event.remove({ id: 'allthecompressed:decompress/dark_steel_block_1x' });
        event.remove({ id: 'allthecompressed:decompress/sapphire_block_1x' });
        event.remove({ id: 'allthecompressed:decompress/uranium_block_1x' });
        event.remove({ id: 'allthecompressed:decompress/enderium_block_1x' });
        event.remove({ id: 'allthecompressed:decompress/nether_star_block_1x' });
        event.remove({ id: 'allthecompressed:decompress/osmium_block_1x' });
        event.remove({ id: 'allthecompressed:decompress/energetic_alloy_block_1x' });
        event.remove({ id: 'allthecompressed:decompress/soularium_block_1x' });
        event.remove({ id: 'allthecompressed:decompress/energized_steel_block_1x' });
        event.remove({ id: 'allthecompressed:decompress/unobtainium_vibranium_alloy_block_1x' });
        event.remove({ id: 'allthecompressed:decompress/lead_block_1x' });
        event.remove({ id: 'allthecompressed:decompress/allthemodium_block_1x' });
        event.remove({ id: 'allthecompressed:decompress/lumium_block_1x' });
        event.remove({ id: 'allthecompressed:decompress/atm_star_block_1x' });
        event.remove({ id: 'allthecompressed:decompress/steel_block_1x' });
        event.remove({ id: 'allthecompressed:decompress/blaze_block_1x' });
        event.remove({ id: 'allthecompressed:decompress/wax_block_1x' });
        event.remove({ id: 'allthecompressed:decompress/ancient_log_0_1x' });
        event.remove({ id: 'allthecompressed:decompress/unobtainium_allthemodium_alloy_block_1x' });
        event.remove({ id: 'allthecompressed:decompress/signalum_block_1x' });
        event.remove({ id: 'allthecompressed:decompress/electrum_block_1x' });
        event.remove({ id: 'allthecompressed:decompress/nitro_crystal_block_1x' });
        event.remove({ id: 'allthecompressed:decompress/pulsating_alloy_block_1x' });
        event.remove({ id: 'allthecompressed:decompress/aluminum_block_1x' });
        event.remove({ id: 'allthecompressed:decompress/ancient_stone_1x' });
        event.remove({ id: 'allthecompressed:decompress/end_steel_block_1x' });
        event.remove({ id: 'allthecompressed:decompress/niotic_crystal_block_1x' });
        event.remove({ id: 'allthecompressed:decompress/iridium_block_1x' });
        event.remove({ id: 'allthecompressed:decompress/vibranium_block_1x' });

        // All the Compressed Compressed Recipes
        event.remove({ id: 'allthecompressed:compress/bronze_block_1x' });
        event.remove({ id: 'allthecompressed:compress/vibrant_alloy_block_1x' });
        event.remove({ id: 'allthecompressed:compress/vibranium_allthemodium_alloy_block_1x' });
        event.remove({ id: 'allthecompressed:compress/platinum_block_1x' });
        event.remove({ id: 'allthecompressed:compress/conductive_alloy_block_1x' });
        event.remove({ id: 'allthecompressed:compress/unobtainium_block_1x' });
        event.remove({ id: 'allthecompressed:compress/zinc_block_1x' });
        event.remove({ id: 'allthecompressed:compress/uraninite_block_1x' });
        event.remove({ id: 'allthecompressed:compress/invar_block_1x' });
        event.remove({ id: 'allthecompressed:compress/redstone_alloy_block_1x' });
        event.remove({ id: 'allthecompressed:compress/nickel_block_1x' });
        event.remove({ id: 'allthecompressed:compress/blazing_crystal_block_1x' });
        event.remove({ id: 'allthecompressed:compress/ruby_block_1x' });
        event.remove({ id: 'allthecompressed:compress/silver_block_1x' });
        event.remove({ id: 'allthecompressed:compress/tin_block_1x' });
        event.remove({ id: 'allthecompressed:compress/spirited_crystal_block_1x' });
        event.remove({ id: 'allthecompressed:compress/constantan_block_1x' });
        event.remove({ id: 'allthecompressed:compress/peridot_block_1x' });
        event.remove({ id: 'allthecompressed:compress/ender_pearl_block_1x' });
        event.remove({ id: 'allthecompressed:compress/copper_alloy_block_1x' });
        event.remove({ id: 'allthecompressed:compress/dark_steel_block_1x' });
        event.remove({ id: 'allthecompressed:compress/sapphire_block_1x' });
        event.remove({ id: 'allthecompressed:compress/uranium_block_1x' });
        event.remove({ id: 'allthecompressed:compress/enderium_block_1x' });
        event.remove({ id: 'allthecompressed:compress/nether_star_block_1x' });
        event.remove({ id: 'allthecompressed:compress/osmium_block_1x' });
        event.remove({ id: 'allthecompressed:compress/energetic_alloy_block_1x' });
        event.remove({ id: 'allthecompressed:compress/soularium_block_1x' });
        event.remove({ id: 'allthecompressed:compress/energized_steel_block_1x' });
        event.remove({ id: 'allthecompressed:compress/unobtainium_vibranium_alloy_block_1x' });
        event.remove({ id: 'allthecompressed:compress/lead_block_1x' });
        event.remove({ id: 'allthecompressed:compress/allthemodium_block_1x' });
        event.remove({ id: 'allthecompressed:compress/lumium_block_1x' });
        event.remove({ id: 'allthecompressed:compress/atm_star_block_1x' });
        event.remove({ id: 'allthecompressed:compress/steel_block_1x' });
        event.remove({ id: 'allthecompressed:compress/blaze_block_1x' });
        event.remove({ id: 'allthecompressed:compress/wax_block_1x' });
        event.remove({ id: 'allthecompressed:compress/ancient_log_0_1x' });
        event.remove({ id: 'allthecompressed:compress/unobtainium_allthemodium_alloy_block_1x' });
        event.remove({ id: 'allthecompressed:compress/signalum_block_1x' });
        event.remove({ id: 'allthecompressed:compress/electrum_block_1x' });
        event.remove({ id: 'allthecompressed:compress/nitro_crystal_block_1x' });
        event.remove({ id: 'allthecompressed:compress/pulsating_alloy_block_1x' });
        event.remove({ id: 'allthecompressed:compress/aluminum_block_1x' });
        event.remove({ id: 'allthecompressed:compress/ancient_stone_1x' });
        event.remove({ id: 'allthecompressed:compress/end_steel_block_1x' });
        event.remove({ id: 'allthecompressed:compress/niotic_crystal_block_1x' });
        event.remove({ id: 'allthecompressed:compress/iridium_block_1x' });
        event.remove({ id: 'allthecompressed:compress/vibranium_block_1x' });

// Fixes Farmer's Delight Ethonal Fermenting Recipe
event.custom({
    type: "createdieselgenerators:basin_fermenting",
    ingredients: [
        {
            tag: 'createdieselgenerators:fd_fermentable'
        },
        {
            item: 'minecraft:bone_meal'
        }
    ],
    processingTime: 400,
    results: [
        {
            fluid: 'createdieselgenerators:ethanol',
            amount: 4050
        },
    ],
}).id('kubejs:fd_basin_fermenting/ethanol');

    // Fixes Ethonal Fermenting Recipe
    event.custom({
        type: "createdieselgenerators:basin_fermenting",
        ingredients: [
            {
                tag: 'c:fermentable'
            },
            {
                item: 'minecraft:bone_meal'
            }
        ],
        processingTime: 400,
        results: [
            {
                fluid: 'createdieselgenerators:ethanol',
                amount: 4050
            },
        ],
    }).id('kubejs:basin_fermenting/ethanol');

    // Fixes Create Biodiesel Mixing Recipe
    event.custom({
        type: "create:mixing",
        ingredients: [
            {
                fluid: 'createaddition:seed_oil',
                amount: 8100
            },
            {
                fluid: 'createdieselgenerators:ethanol',
                amount: 8100

            }
        ],
        results: [
            {
                fluid: 'createdieselgenerators:biodiesel',
                amount: 16200
            },
        ],
        heatRequirement: "heated"
    }).id('kubejs:mixing/biodiesel');
    
        // Fixes Create Diesel Engine Recipe
    event.custom({
        type: "create:mechanical_crafting",
        pattern: [
            'ABA',
            'ACA',
            ' D ',
            'EFE'
        ],
        key: {
            A: Ingredient.of('createdieselgenerators:engine_piston').toJson(),
            B: Ingredient.of('minecraft:flint_and_steel').toJson(),
            C: Ingredient.of('create:brass_block').toJson(),
            D: Ingredient.of('create:fluid_tank').toJson(),
            E: Ingredient.of('create:sturdy_sheet').toJson(),
            F: Ingredient.of('create:fluid_pipe').toJson()
        },
        result: Ingredient.of('createdieselgenerators:diesel_engine').toJson(),
        acceptMirrored: false
    }).id('kubejs:create/diesel_engine');

    // Fixes Create Modular Diesel Engine Recipe
    event.custom({
        type: "create:mechanical_crafting",
        pattern: [
            'ABA',
            ' C ',
            'DED'
        ],
        key: {
            A: Ingredient.of('create:andesite_alloy').toJson(),
            B: Ingredient.of('minecraft:flint_and_steel').toJson(),
            C: Ingredient.of('createdieselgenerators:diesel_engine').toJson(),
            D: Ingredient.of('create:sturdy_sheet').toJson(),
            E: Ingredient.of('create:precision_mechanism').toJson()
        },
        result: Ingredient.of('createdieselgenerators:large_diesel_engine').toJson(),
        acceptMirrored: false
    }).id('kubejs:create/modular_diesel_engine');
    
    // Fixes Create Diesel Engine Piston Recipe
    event.shaped(
        Item.of('createdieselgenerators:engine_piston', 2),
        [
            'A ',
            ' B'
        ],
        {
            A: 'create:andesite_alloy',
            B: 'create:shaft'
        }
    );
    
    // Fixes Slice and Dice Sprinkler Recipe
    event.shaped(
        Item.of('sliceanddice:sprinkler', 3),
        [
            ' A',
            ' B'
        ],
        {
            A: 'create:fluid_pipe',
            B: 'minecraft:iron_bars'
        }
    );

    })
