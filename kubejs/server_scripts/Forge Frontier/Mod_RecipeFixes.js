// Mod Recipe Fixes
ServerEvents.recipes(event => {

    // Removes Duplicate Recipes
    event.remove({ id: 'extrastorage:storage_block/block_256k'});
    event.remove({ id: 'extrastorage:storage_block/block_1024k'});
    event.remove({ id: 'extrastorage:storage_block/block_4096k'});
    event.remove({ id: 'extrastorage:storage_block/block_16384k'});
    event.remove({ id: 'extrastorage:storage_block/block_16384k_fluid'});
    event.remove({ id: 'extrastorage:storage_block/block_65536k_fluid'});
    event.remove({ id: 'extrastorage:storage_block/block_262144k_fluid'});
    event.remove({ id: 'extrastorage:storage_block/block_1048576k_fluid'});
    event.remove({ id: 'extrastorage:part/storagepart_256k'});
    event.remove({ id: 'extrastorage:part/storagepart_1024k'});
    event.remove({ id: 'extrastorage:part/storagepart_4096k'});
    event.remove({ id: 'extrastorage:part/storagepart_16384k'});
    event.remove({ id: 'extrastorage:part/storagepart_16384k_fluid'});
    event.remove({ id: 'extrastorage:part/storagepart_65536k_fluid'});
    event.remove({ id: 'extrastorage:part/storagepart_262144k_fluid'});
    event.remove({ id: 'extrastorage:part/storagepart_1048576k_fluid'});
    event.remove({ id: 'extrastorage:disk/shapeless/disk_256k'});
    event.remove({ id: 'extrastorage:disk/shapeless/disk_1024k'});
    event.remove({ id: 'extrastorage:disk/shapeless/disk_4096k'});
    event.remove({ id: 'extrastorage:disk/shapeless/disk_16384k'});
    event.remove({ id: 'extrastorage:disk/shapeless/disk_16384k_fluid'});
    event.remove({ id: 'extrastorage:disk/shapeless/disk_65536k_fluid'});
    event.remove({ id: 'extrastorage:disk/shapeless/disk_262144k_fluid'});
    event.remove({ id: 'extrastorage:disk/shapeless/disk_1048576k_fluid'});
    event.remove({ id: 'extrastorage:disk/shaped/disk_256k'});
    event.remove({ id: 'extrastorage:disk/shaped/disk_1024k'});
    event.remove({ id: 'extrastorage:disk/shaped/disk_4096k'});
    event.remove({ id: 'extrastorage:disk/shaped/disk_16384k'});
    event.remove({ id: 'extrastorage:disk/shaped/disk_16384k_fluid'});
    event.remove({ id: 'extrastorage:disk/shaped/disk_65536k_fluid'});
    event.remove({ id: 'extrastorage:disk/shaped/disk_262144k_fluid'});
    event.remove({ id: 'extrastorage:disk/shaped/disk_1048576k_fluid'});
    event.remove({ id: 'extrastorage:advanced_importer'});
    event.remove({ id: 'extrastorage:advanced_exporter'});

    // Removes Broken Recipes
    event.remove({ id: 'supplementaries:integration/ash_bricks_fd' });
    event.remove({ id: 'supplementaries:integration/lapis_bricks_fd' });
    event.remove({ id: 'createdieselgenerators:crafting/engine_piston'});
    event.remove({ id: 'createdieselgenerators:mechanical_crafting/diesel_engine'});
    event.remove({ id: 'createdieselgenerators:mechanical_crafting/large_diesel_engine'});
    event.remove({ id: 'createdieselgenerators:compacting/plant_oil'})
    event.remove({ id: 'sliceanddice:sprinkler'});
    event.remove({ id: 'create_confectionery:ruby_chocolate_recipe_6' });
    event.remove({ id: 'create_confectionery:white_chocolate_recipe_6' });
    event.remove({ id: 'create_confectionery:chocolate_recipe_6' });
    event.remove({ id: 'create_confectionery:black_chocolate_recipe_6' });
    event.remove({ id: 'enlightened_end:cerulean_planks'});

    // Removes Broken/Missing MCTB Recipes
    event.remove({ id: 'mctb:blossom_crafting_table' });
    event.remove({ id: 'mctb:mining_crafting_table' });
    event.remove({ id: 'mctb:wigglewood_crafting_table' });
    event.remove({ id: 'mctb:archwood_planks_crafting_table' });
    event.remove({ id: 'mctb:demonic_planks_crafting_table' });
    event.remove({ id: 'mctb:grongle_crafting_table' });
    event.remove({ id: 'mctb:menril_planks_crafting_table' });
    event.remove({ id: 'mctb:bop_cherry_crafting_table' });
    event.remove({ id: 'mctb:walnut_planks_crafting_table' });
    event.remove({ id: 'mctb:soul_planks_crafting_table' });
    event.remove({ id: 'mctb:rubber_planks_crafting_table' });
    event.remove({ id: 'mctb:ancient_planks_crafting_table' });
    event.remove({ id: 'mctb:smogstem_crafting_table' });
    event.remove({ id: 'mctb:ad_ancient_crafting_table' });

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
    event.remove({ id: 'create:cutting/compat/biomesoplenty/cherry_log' });
    event.remove({ id: 'tfmg:colored_concrete/full_block/yellow_concrete_q' });
    event.remove({ id: 'tfmg:colored_concrete/full_block/red_concrete_q' });
    event.remove({ id: 'tfmg:colored_concrete/full_block/lime_concrete_q' });
    event.remove({ id: 'tfmg:colored_concrete/full_block/pink_concrete_q' });
    event.remove({ id: 'tfmg:colored_concrete/full_block/black_concrete_q' });
    event.remove({ id: 'railways:sequenced_assembly/track_biomesoplenty_cherry_narrow' });
    event.remove({ id: 'create:cutting/compat/biomesoplenty/stripped_cherry_wood' });
    event.remove({ id: 'tfmg:colored_concrete/full_block/light_gray_concrete_q' });
    event.remove({ id: 'tfmg:colored_concrete/full_block/cyan_concrete_q' });
    event.remove({ id: 'tfmg:colored_concrete/full_block/purple_concrete_q' });
    event.remove({ id: 'design_decor:item_application/crushing_wheels/special_aluminum_cylinder' });
    event.remove({ id: 'tfmg:colored_concrete/full_block/light_blue_concrete_q' });
    event.remove({ id: 'tfmg:colored_concrete/full_block/green_concrete_q' });
    event.remove({ id: 'railways:sequenced_assembly/track_biomesoplenty_cherry' });
    event.remove({ id: 'tfmg:colored_concrete/full_block/magenta_concrete_q' });
    event.remove({ id: 'tfmg:colored_concrete/full_block/blue_concrete_q' });
    event.remove({ id: 'create:cutting/compat/biomesoplenty/cherry_wood' });
    event.remove({ id: 'tfmg:colored_concrete/full_block/white_concrete_q' });
    event.remove({ id: 'tfmg:colored_concrete/full_block/gray_concrete_q' });
    event.remove({ id: 'tfmg:colored_concrete/full_block/brown_concrete_q' });
    event.remove({ id: 'tfmg:colored_concrete/full_block/pink_concrete' });
    event.remove({ id: 'create_things_and_misc:schematic_chair' });
    event.remove({ id: 'create:filling/chocolate_bagutte' });
    event.remove({ id: 'create_things_and_misc:copper_scaffolding_craft' });
    event.remove({ id: 'tfmg:colored_concrete/full_block/orange_concrete_q' });
    event.remove({ id: 'create:cutting/compat/biomesoplenty/stripped_cherry_log' });
    event.remove({ id: 'design_decor:item_application/millstones/special_aluminum_cylinder' });
    event.remove({ id: 'railways:sequenced_assembly/track_biomesoplenty_cherry_wide' });


    // Removes Failed Compatibility Related Recipes
    event.remove({ id: 'railways:sequenced_assembly/track_tieless_narrow'});

    // Replaces Recipe for Narrow Tieless Tracks
        event.custom({
            type:'create:sequenced_assembly',
            ingredient: {
                item: 'railways:track_tieless'
            },
            loops: 1,
            results: [
                {
                    item: 'railways:track_tieless_narrow'
                }
            ],
            sequence: [
                {
                    type:'create:cutting',
                    ingredients: [
                        {
                            item: 'railways:track_incomplete_tieless_narrow'
                        },
                    ],
                    results: [
                        {
                            item: 'railways:track_incomplete_tieless_narrow'
                        }
                    ]
                },
                {
                    type: 'create:deploying',
                    ingredients: [
                        {
                            item: 'railways:track_incomplete_tieless_narrow'
                        },
                        [                
                            {
                            tag: 'railways:internal/nuggets/iron_nuggets'
                            },
                            {
                            tag: 'railways:internal/nuggets/zinc_nuggets'
                            }
                        ]
                    ],
                    results: [
                        {
                            item: 'railways:track_incomplete_tieless_narrow'
                        }
                    ]
                },
                {
                    type: 'create:pressing',
                    ingredients: [
                        {
                            item: 'railways:track_incomplete_tieless_narrow'
                        }
                    ],
                    results: [
                        {
                            item: 'railways:track_incomplete_tieless_narrow'
                        }
                    ]
                }
            ],
            transitionalItem: {
                item: 'railways:track_incomplete_tieless_narrow'
            }
        });
  
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
