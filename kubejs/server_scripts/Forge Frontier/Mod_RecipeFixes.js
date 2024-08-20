// Mod Recipe Fixes
ServerEvents.recipes(event => {
    
    // Removed Pocket Dimension Remote Recipe
    event.remove({ id: 'createteleporters:pocket_dimension_recipe'})

    // Botany Pots
    event.remove({ id: "botanypots:enlightend/soil/chorloam" })
    event.custom({
        type:"botanypots:soil",
        input:
        {
            item: "enlightened_end:chorloam"
        },
        display:
        {
            block: "enlightened_end:chorloam"
        },
        categories:
        [
            "chorloam"
        ],
        growthModifier:1
    }).id('botanypots:enlightend/soil/chorloam')

    // Fixes Aluminum Boiler Recipe
    event.remove({ id: 'design_decor:stonecutting/cyllinder/aluminum_cyllinder' })
    event.custom({
        type:'minecraft:stonecutting',
        ingredient: 
        {
            tag: 'forge:storage_blocks/aluminum'
        },
        result: 'design_decor:aluminium_boiler',
        count: 4
    }).id( 'forge_frontier:stonecutting/aluminium_boiler' )

    // Fixes Large Aluminium Boiler
    event.remove({ id: 'design_decor:stonecutting/cyllinder/aluminium_boiler_large' })
    event.custom({
        type:'minecraft:stonecutting',
        ingredient: 
        {
            tag: 'forge:storage_blocks/aluminum'
        },
        result: 'design_decor:aluminium_boiler_large',
        count: 1
    }).id( 'forge_frontier:stonecutting/aluminium_boiler_large' )

    // Fixes Large Aluminium Chain
    event.remove({ id: 'design_decor:stonecutting/chain/aluminium_large_chain' })
    event.custom({
        type: 'minecraft:stonecutting',
        ingredient: {
          tag: 'forge:ingots/aluminum'
        },
        result: 'design_decor:aluminium_large_chain',
        count: 4
      }).id( 'forge_frontier:stonecutting/aluminium_large_chain' )

    // Removes Conflicting Recipes
    event.remove({ id: 'quark:building/crafting/compressed/cocoa_beans_sack'})
    event.remove({ id: 'quark:building/crafting/compressed/gunpowder_sack'})
    event.remove({ id: 'quark:building/crafting/compressed/berry_sack'})
    event.remove({ id: 'quark:building/crafting/compressed/glowberry_sack'})
    event.remove({ id: 'cratedelight:minecraft/crafting/wheat_flour_bag'})
    event.remove({ id: 'cratedelight:minecraft/crafting/cinder_flour_bag'})
    event.remove({ id: 'cratedelight:minecraft/crafting/powdered_obsidian_bag'})

    // Removes Broken Recipes
    event.remove({ id: 'create_confectionery:ruby_chocolate_recipe_6' });
    event.remove({ id: 'create_confectionery:white_chocolate_recipe_6' });
    event.remove({ id: 'create_confectionery:chocolate_recipe_6' });
    event.remove({ id: 'create_confectionery:black_chocolate_recipe_6' });
    event.remove({ id: 'tfmg:crafting/glass_cable_connector'})

    // Removes Missing Item Related Recipes
    event.remove({ id: 'createappliedkinetics:throw_in_water/fluix_seed/normal'})
    event.remove({ id: 'createappliedkinetics:throw_in_water/certus_seed/catalyzed'})
    event.remove({ id: 'createappliedkinetics:throw_in_water/certus_seed/normal'})
    event.remove({ id: 'ae2:inscriber/calculation_processor_press'})
    event.remove({ id: 'ae2:inscriber/logic_processor_press'})
    event.remove({ id: 'ae2:inscriber/logic_processor_print'})
    event.remove({ id: 'ae2:inscriber/engineering_processor_print'})
    event.remove({ id: 'ae2:inscriber/calculation_processor'})
    event.remove({ id: 'ae2:inscriber/silicon_print'})
    event.remove({ id: 'ae2:inscriber/certus_quartz_dust'})
    event.remove({ id: 'ae2:inscriber/calculation_processor_print'})
    event.remove({ id: 'ae2:inscriber/logic_processor'})
    event.remove({ id: 'ae2:inscriber/fluix_dust'})
    event.remove({ id: 'ae2:inscriber/engineering_processor_press'})
    event.remove({ id: 'ae2:inscriber/silicon_press'})
    event.remove({ id: 'ae2:network/blocks/inscribers'})
    event.remove({ id: 'ae2:inscriber/sky_stone_dust'})
    event.remove({ id: 'ae2:inscriber/engineering_processor'})
    event.remove({ id: 'ae2:inscriber/ender_dust'})
    event.remove({ id: 'alexsdelight:barbecue_on_a_stick'})
    event.remove({ id: 'collectorsreap:food/lime_green_tea'})
    event.remove({ id: 'collectorsreap:food/pomegranate_black_tea'})
    event.remove({ id: 'tfmg:mechanical_crafting/cast_iron_distillation_controller'})

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
    event.remove({ id: 'create:filling/chocolate_bagutte' }); 
    event.remove({ id: 'tfmg:colored_concrete/full_block/orange_concrete_q' });
    event.remove({ id: 'create:cutting/compat/biomesoplenty/stripped_cherry_log' });
    event.remove({ id: 'design_decor:item_application/millstones/special_aluminum_cylinder' });
    event.remove({ id: 'railways:sequenced_assembly/track_biomesoplenty_cherry_wide' });

    // Broken Recipe Removals
    event.remove({ id:'create:crushing/sandstone/2x_to_2x_sand' });
    event.remove({ id:'cp_tweaks:rockets/tier_6_rocket' });
    event.remove({ id:'create:milling/sandstone/7x_to_7x_sand' });
    event.remove({ id:'tfmg:mechanical_crafting/pumpjack_hammer_holder' });
    event.remove({ id:'create:milling/sandstone/2x_to_2x_sand' });
    event.remove({ id:'create:milling/sandstone/8x_to_8x_sand' });
    event.remove({ id:'create:crushing/sandstone/6x_to_6x_sand' });
    event.remove({ id:'create:crushing/sandstone/8x_to_8x_sand' });
    event.remove({ id:'create:crushing/dripstone/1x_to_9x_clay_ball' });
    event.remove({ id:'create:crushing/sandstone/4x_to_4x_sand' });
    event.remove({ id:'create:milling/sandstone/4x_to_4x_sand' });
    event.remove({ id:'create:milling/sandstone/6x_to_6x_sand' });
    event.remove({ id:'create:crushing/sandstone/5x_to_5x_sand' });
    event.remove({ id:'quark:entities/frog' });
    event.remove({ id:'create:crushing/sandstone/3x_to_3x_sand' });
    event.remove({ id:'create:crushing/sandstone/1x_to_1x_sand' });
    event.remove({ id:'quark:entities/pig_tallow' });
    event.remove({ id:'create:milling/dripstone/1x_to_9x_clay_ball' });
    event.remove({ id:'create:milling/sandstone/5x_to_5x_sand' });
    event.remove({ id:'create:crushing/sandstone/9x_to_9x_sand' });
    event.remove({ id:'quark:entities/wrapped' });
    event.remove({ id:'create:milling/sandstone/1x_to_1x_sand' });
    event.remove({ id:'create:milling/sandstone/3x_to_3x_sand' });
    event.remove({ id:'create:crushing/sandstone/7x_to_7x_sand' });
    event.remove({ id:'create:milling/sandstone/9x_to_9x_sand'});
    

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
        }).id( 'forge_frontier:sequenced_assembly/tieless_narrow_track' );
  

    })
