ServerEvents.recipes(event => {
// Crushed Ore Stone Recipes  
    // Washing Recipes
    const washingRecipes = [
        {
            name: 'crushed_verdantine',
            input: 'forge_frontier:crushed_verdantine',
            results: [
                { chance: 0.25, item: 'minecraft:emerald' },
                { chance: 0.01, item: 'totemfactory:inactive_totem' }
            ]
        },
        {
            name: 'crushed_glacium',
            input: 'forge_frontier:crushed_glacium',
            results: [
                { count: 4, item: 'create_dd:diamond_shard' },
                { chance: 0.05, item: 'aquaculture:neptunium_nugget' }
            ]
        },
        {
            name: 'crushed_debris',
            input: 'forge_frontier:crushed_debris',
            results: [
                { chance: 0.25, item: 'minecraft:netherite_scrap' },
                { chance: 0.50, item: 'create:cinder_flour' }
            ]
        },
        {
            name: 'crushed_resonite',
            input: 'forge_frontier:crushed_resonite',
            results: [
                { chance: 0.15, item: 'minecraft:echo_shard' },
                { chance: 0.02, item: 'deeperdarker:warden_carapace' }
            ]
        },
        {
            name: 'crushed_aubrum',
            input: 'forge_frontier:crushed_aubrum',
            results: [
                { count: 9, item: 'ad_astra:desh_nugget' },
                { chance: 0.50, item: 'ad_astra:cheese' },
                { chance: 0.20, item: 'create_dd:industrial_iron_nugget' }
            ]
        },
        {
            name: 'crushed_pyroclast',
            input: 'forge_frontier:crushed_pyroclast',
            results: [
                { count: 9, item: 'ad_astra:calorite_nugget' },
                { chance: 0.20, item: 'create_dd:bronze_nugget' }
            ]
        },
        {
            name: 'crushed_frostite',
            input: 'forge_frontier:crushed_frostite',
            results: [
                { chance: 0.25, item: 'ad_astra:ice_shard' },
                { chance: 0.50, item: 'minecraft:blue_ice' }
            ]
        },
        {
            name: 'crushed_stellaris',
            input: 'forge_frontier:crushed_stellaris',
            results: [
                { count: 9, item: 'ad_astra:ostrum_nugget' },
                { chance: 0.20, item: 'create_dd:steel_nugget' }
            ]
        },
        {
            name: 'crushed_radiantite',
            input: 'forge_frontier:crushed_radiantite',
            results: [
                { chance: 0.20, item: 'enlightened_end:irradium_bar' },
                { chance: 0.25, item: 'create_dd:mithril_nugget' }
            ]
        },
        {
            name: 'crushed_shale',
            input: 'forge_frontier:crushed_shale',
            results: [
                { chance: 0.25, item: 'enlightened_end:malachite' },
                { chance: 0.25, item: 'create_dd:mithril_nugget' }
            ]
        },
        {
            name: 'crushed_palerock',
            input: 'forge_frontier:crushed_palerock',
            results: [
                { count: 4, item: 'enlightened_end:bismuth_nugget' },
                { chance: 0.25, item: 'create_dd:mithril_nugget' }
            ]
        },
        {
            name: 'crushed_guanite',
            input: 'forge_frontier:crushed_guanite',
            results: [
                { chance: 0.25, item: 'alexscaves:guano' },
                { chance: 0.30, item: 'minecraft:bone_meal' }
            ]
        },
        {
            name: 'crushed_urnaniumite',
            input: 'forge_frontier:crushed_uraniumnite',
            results: [
                { count: 9, item: 'alexscaves:uranium_shard' },
                { chance: 0.20, item: 'create_new_age:radioactive_thorium' }
            ]
        },
        {
            name: 'crushed_sulphite',
            input: 'forge_frontier:crushed_sulphite',
            results: [
                { chance: 0.20, item: 'alexscaves:sulfur_dust' },
                { chance: 0.20, item: 'tfmg:sulfur_dust' }
            ]
        }
    ];
        // Loop to generate washing recipes dynamically
        washingRecipes.forEach(recipe => {
            event.custom({
                type: "create:splashing",
                ingredients: [
                    { item: recipe.input }
                ],
                results: recipe.results
            }).id(`forge_frontier:washing/${recipe.name}`);
        });

// Crushed Ore Pile Recipes
    // Washing Recipes
    const washingPileRecipes = [
        {
            name: 'crushed_verdantine',
            input: 'forge_frontier:crushed_verdantine_pile',
            results: [
                { chance: 0.25, item: 'minecraft:emerald_block', count: 1 },
                { chance: 0.09, item: 'totemfactory:inactive_totem', count: 1 }
            ]
        },
        {
            name: 'crushed_glacium',
            input: 'forge_frontier:crushed_glacium_pile',
            results: [
                { count: 36, item: 'create_dd:diamond_shard' }, // 4 * 9
                { chance: 0.05, item: 'aquaculture:neptunium_nugget', count: 9 }
            ]
        },
        {
            name: 'crushed_aubrum',
            input: 'forge_frontier:crushed_aubrum_pile',
            results: [
                { count: 81, item: 'ad_astra:desh_nugget' }, // 9 * 9
                { chance: 0.50, item: 'ad_astra:cheese', count: 9 },
                { chance: 0.20, item: 'create_dd:industrial_iron_nugget', count: 9 }
            ]
        },
        {
            name: 'crushed_pyroclast',
            input: 'forge_frontier:crushed_pyroclast_pile',
            results: [
                { count: 81, item: 'ad_astra:calorite_nugget' }, // 9 * 9
                { chance: 0.20, item: 'create_dd:bronze_nugget', count: 9 }
            ]
        },
        {
            name: 'crushed_frostite',
            input: 'forge_frontier:crushed_frostite_pile',
            results: [
                { chance: 0.25, item: 'ad_astra:ice_shard', count: 9 },
                { chance: 0.50, item: 'minecraft:blue_ice', count: 9 }
            ]
        },
        {
            name: 'crushed_stellaris',
            input: 'forge_frontier:crushed_stellaris_pile',
            results: [
                { count: 81, item: 'ad_astra:ostrum_nugget' }, // 9 * 9
                { chance: 0.20, item: 'create_dd:steel_nugget', count: 9 }
            ]
        },
        {
            name: 'crushed_radiantite',
            input: 'forge_frontier:crushed_radiantite_pile',
            results: [
                { chance: 0.20, item: 'enlightened_end:irradium_bar', count: 9 },
                { chance: 0.25, item: 'create_dd:mithril_nugget', count: 9 }
            ]
        },
        {
            name: 'crushed_shale',
            input: 'forge_frontier:crushed_shale_pile',
            results: [
                { chance: 0.25, item: 'enlightened_end:malachite', count: 9 },
                { chance: 0.25, item: 'create_dd:mithril_nugget', count: 9 }
            ]
        },
        {
            name: 'crushed_palerock',
            input: 'forge_frontier:crushed_palerock_pile',
            results: [
                { count: 36, item: 'enlightened_end:bismuth_nugget' }, // 4 * 9
                { chance: 0.25, item: 'create_dd:mithril_nugget', count: 9 }
            ]
        },
        {
            name: 'crushed_guanite',
            input: 'forge_frontier:crushed_guanite_pile',
            results: [
                { chance: 0.25, item: 'alexscaves:guano', count: 9 },
                { chance: 0.30, item: 'minecraft:bone_meal', count: 9 }
            ]
        },
        {
            name: 'crushed_urnaniumite',
            input: 'forge_frontier:crushed_uraniumnite_pile',
            results: [
                { count: 81, item: 'alexscaves:uranium_shard' }, // 9 * 9
                { chance: 0.20, item: 'create_new_age:radioactive_thorium', count: 9 }
            ]
        },
        {
            name: 'crushed_sulphite',
            input: 'forge_frontier:crushed_sulphite_pile',
            results: [
                { chance: 0.20, item: 'alexscaves:sulfur', count: 1 },
                { chance: 0.20, item: 'tfmg:sulfur_dust', count: 9 }
            ]
        }
    ];

    washingPileRecipes.forEach(recipe => {
        event.custom({
            type: "create:splashing",
            ingredients: [
                { item: recipe.input }
            ],
            results: recipe.results
        }).id(`forge_frontier:washing/${recipe.name}_pile`);
    });        
})