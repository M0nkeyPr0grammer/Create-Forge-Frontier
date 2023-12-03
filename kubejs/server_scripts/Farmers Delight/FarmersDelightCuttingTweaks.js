// Farmer's Delight Cutting, Modded Tree Compatibility

ServerEvents.recipes(event => {

    // Vanilla, Terrestria, Deeper and Darker, Promenade, and Regions Unexplored Compatibility
    var modded_logs = [
        // Vanilla Logs
        'minecraft:cherry_log', 
        'minecraft:cherry_wood', 
        'minecraft:bamboo_block', 
        // Terrestria Wood and Logs
        'terrestria:redwood_log',
        'terrestria:redwood_wood',
        'terrestria:redwood_quarter_log',
        'terrestria:hemlock_log',
        'terrestria:hemlock_wood',
        'terrestria:hemlock_quarter_log',
        'terrestria:rubber_log',
        'terrestria:rubber_wood',
        'terrestria:cypress_log',
        'terrestria:rainbow_eucalyptus_quarter_log',
        'terrestria:rainbow_eucalyptus_wood',
        'terrestria:rainbow_eucalyptus_log',
        'terrestria:japanese_maple_wood',
        'terrestria:japanese_maple_log',
        'terrestria:willow_wood',
        'terrestria:willow_log',
        'terrestria:cypress_quarter_log',
        'terrestria:cypress_wood',
        'terrestria:sakura_log',
        'terrestria:yucca_palm_log',
        'terrestria:small_oak_log',
        // Deeper and Darker Wood and Log
        'deeperdarker:echo_wood',
        'deeperdarker:echo_log',
        // Promenade Wood and Logs
        'promenade:sakura_log',
        'promenade:palm_wood',
        'promenade:palm_log',
        'promenade:maple_wood',
        'promenade:maple_log',
        'promenade:dark_amaranth_stem',
        'promenade:dark_amaranth_hyphae',
        'promenade:sakura_wood',
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
        event.custom({
            type: "farmersdelight:cutting",
            ingredients: [
                {
                    item: log
                }
            ],
            tool: {
                type: "farmersdelight:tool",
                tag: "c:tools/axes"
            },
            result: [
                {
                    item: log.replace(":", ":stripped_")
                },
                {
                    item: "farmersdelight:tree_bark"
                }
            ],
            sound: "minecraft:item.axe.strip"
        }).id("kubejs:cutting/" + log.replace(":", "_bark"));
    });

    // Better Nether and End Log Compatibility
    var more_modded_logs = [
        'betternether:stalagnate_log',
        'betternether:willow_log',
        'betternether:wart_log',
        'betternether:rubeus_log',
        'betternether:mushroom_fir_log',
        'betternether:anchor_tree_log',
        'betternether:nether_sakura_log',
        'betterend:mossy_glowshroom_log',
        'betterend:pythadendron_log',
        'betterend:end_lotus_log',
        'betterend:lacugrove_log',
        'betterend:dragon_tree_log',
        'betterend:tenanea_log',
        'betterend:helix_tree_log',
        'betterend:lucernia_log',
        'betterend:umbrella_tree_log',
        'betterend:jellyshroom_log'
    ];

    more_modded_logs.forEach(log => {
        event.custom({
            type: "farmersdelight:cutting",
            ingredients: [
                {
                    item: log
                }
            ],
            tool: {
                type: "farmersdelight:tool",
                tag: "c:tools/axes"
            },
            result: [
                {
                    item: log.replace("log", "stripped_log")
                },
                {
                    item: "farmersdelight:tree_bark"
                }
            ],
            sound: "minecraft:item.axe.strip"
        }).id("kubejs:cutting/" + log.replace(":", "_bark"));
    });

    // Better Nether and End Bark Compatibility
    var modded_bark = [
        'betternether:stalagnate_bark',
        'betternether:willow_bark',
        'betternether:wart_bark',
        'betternether:rubeus_bark',
        'betternether:mushroom_fir_bark',
        'betternether:anchor_tree_bark',
        'betternether:nether_sakura_bark',
        'betterend:mossy_glowshroom_bark',
        'betterend:pythadendron_bark',
        'betterend:end_lotus_bark',
        'betterend:lacugrove_bark',
        'betterend:dragon_tree_bark',
        'betterend:tenanea_bark',
        'betterend:helix_tree_bark',
        'betterend:lucernia_bark',
        'betterend:umbrella_tree_bark',
        'betterend:jellyshroom_bark'
    ];

    modded_bark.forEach(bark => {
        event.custom({
            type: "farmersdelight:cutting",
            ingredients: [
                {
                    item: bark
                }
            ],
            tool: {
                type: "farmersdelight:tool",
                tag: "c:tools/axes"
            },
            result: [
                {
                    item: bark.replace("bark", "stripped_bark")
                },
                {
                    item: "farmersdelight:tree_bark"
                }
            ],
            sound: "minecraft:item.axe.strip"
        }).id("kubejs:cutting/" + bark.replace(":", "_bark"));
    });

})