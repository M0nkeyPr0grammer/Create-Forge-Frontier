// Farmer's Delight Cutting, Modded Tree Compatibility

import { ShapelessRecipeBuilder } from 'forge';

ServerEvents.recipes(event => {

    // Vanilla, Terrestria, Deeper and Darker, Promenade, and Regions Unexplored Compatibility
    var modded_logs = [
        // Vanilla Logs
        'minecraft:cherry_log', 
        'minecraft:cherry_wood', 
        'minecraft:bamboo_block', 
        // Deeper and Darker Wood and Log
        'deeperdarker:echo_wood',
        'deeperdarker:echo_log',
        // Regions Unexplored Wood and Logs
        'regions_unexplored:bamboo_log',
        'regions_unexplored:baobab_log',
        'regions_unexplored:baobab_wood',
        'regions_unexplored:blackwood_log',
        'regions_unexplored:blackwood_wood',
        'regions_unexplored:blue_bioshroom_hyphae',
        'regions_unexplored:blue_bioshroom_stem',
        'regions_unexplored:brimwood_log',
        'regions_unexplored:brimwood_wood',
        'regions_unexplored:cobalt_log',
        'regions_unexplored:cobalt_wood',
        'regions_unexplored:cypress_log',
        'regions_unexplored:cypress_wood',
        'regions_unexplored:dead_log',
        'regions_unexplored:dead_wood',
        'regions_unexplored:eucalyptus_log',
        'regions_unexplored:eucalyptus_wood',
        'regions_unexplored:green_bioshroom_hyphae',
        'regions_unexplored:green_bioshroom_stem',
        'regions_unexplored:joshua_log',
        'regions_unexplored:joshua_wood',
        'regions_unexplored:kapok_log',
        'regions_unexplored:kapok_wood',
        'regions_unexplored:larch_log',
        'regions_unexplored:larch_wood',
        'regions_unexplored:magnolia_log',
        'regions_unexplored:magnolia_wood',
        'regions_unexplored:maple_log',
        'regions_unexplored:maple_wood',
        'regions_unexplored:mauve_log',
        'regions_unexplored:mauve_wood',
        'regions_unexplored:palm_log',
        'regions_unexplored:palm_wood',
        'regions_unexplored:pine_log',
        'regions_unexplored:pine_wood',
        'regions_unexplored:pink_bioshroom_hyphae',
        'regions_unexplored:pink_bioshroom_stem',
        'regions_unexplored:redwood_log',
        'regions_unexplored:redwood_wood',
        'regions_unexplored:small_oak_log',
        'regions_unexplored:socotra_log',
        'regions_unexplored:socotra_wood',
        'regions_unexplored:willow_log',
        'regions_unexplored:willow_wood',
        'regions_unexplored:yellow_bioshroom_hyphae',
        'regions_unexplored:yellow_bioshroom_stem'
    ];

    modded_logs.forEach(log => {
        const strippedLog = log.replace(":", ":stripped_");
        const bark = 'farmersdelight:tree_bark';
    
        // Define the custom recipe in JSON format
        const customRecipe = {
            "type": "farmersdelight:cutting",
            "ingredients": [
                { "item": log }
            ],
            "result": [
                { "item": strippedLog },
                { "item": bark }
            ],
            "sound": "minecraft:item.axe.strip",
            "tool": {
                "type": "farmersdelight:tool_action",
                "action": "axe_strip"
            }
        };
    
        // Register the custom recipe with KubeJS
        event.custom(customRecipe).id('forge_frontier:cutting/' + log.replace(":", "_bark"));
    });

    

})