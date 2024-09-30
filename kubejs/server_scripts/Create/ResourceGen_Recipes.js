   ServerEvents.recipes(event => {

// Resource Stone Recipes

    // Crushing Recipes
    const stones = [
        { name: 'verdantine', input: 'forge_frontier:verdantine', output: 'forge_frontier:crushed_verdantine', additional: null },
        { name: 'glacium', input: 'forge_frontier:glacium', output: 'forge_frontier:crushed_glacium', additional: 'create_dd:diamond_shard' },
        { name: 'aubrum', input: 'forge_frontier:aubrum', output: 'forge_frontier:crushed_aubrum', additional: 'ad_astra:desh_nugget' },
        { name: 'pyroclast', input: 'forge_frontier:pyroclast', output: 'forge_frontier:crushed_pyroclast', additional: 'ad_astra:calorite_nugget' },
        { name: 'stellaris', input: 'forge_frontier:stellaris', output: 'forge_frontier:crushed_stellaris', additional: 'ad_astra:ostrum_nugget' },
        { name: 'radiantite', input: 'forge_frontier:radiantite', output: 'forge_frontier:crushed_radiantite', additional: null },
        { name: 'pearlyte', input: 'forge_frontier:pearlyte', output: 'forge_frontier:crushed_pearlyte', additional: null },
        { name: 'frostite', input: 'forge_frontier:frostite', output: 'forge_frontier:crushed_frostite', additional: null },
        { name: 'guanite', input: 'forge_frontier:guanite', output: 'forge_frontier:crushed_guanite', additional: null },
        { name: 'amberlite', input: 'forge_frontier:amberlite', output: 'forge_frontier:crushed_amberlite', additional: null },
        { name: 'sulphite', input: 'forge_frontier:sulphite', output: 'forge_frontier:crushed_sulphite', additional: 'tfmg:sulfur_dust' },
        { name: 'neodymrium', input: 'forge_frontier:neodymrium', output: 'forge_frontier:crushed_neodymrium', additional: 'alexscaves:raw_scarlet_neodymium' },
        { name: 'azurnium', input: 'forge_frontier:azurnium', output: 'forge_frontier:crushed_azurnium', additional: 'alexscaves:raw_azure_neodymium' },
        { name: 'urnaniumite', input: 'forge_frontier:uraniumnite', output: 'forge_frontier:crushed_uraniumnite', additional: 'alexscaves:uranium_shard' },
        { name: 'ancient_debris', input: 'minecraft:ancient_debris', output: 'forge_frontier:crushed_debris', additional: null },
        { name: 'palerock', input: 'enlightened_end:palerock', output: 'forge_frontier:crushed_palerock', additional: 'enlightened_end:bismuth_nugget' },
        { name: 'sculk_grime', input: 'deeperdarker:sculk_grime', output: 'forge_frontier:crushed_grime', additional: null },
        { name: 'void_shale', input: 'enlightened_end:void_shale', output: 'forge_frontier:crushed_shale', additional: null }
    ];

    // Loop through materials and create the crushing recipes
    stones.forEach(stone => {
        const results = [{ chance: 0.35, item: stone.output }];
        if (stone.additional) {
            results.push({ chance: 0.35, item: stone.additional });
        }

        event.custom({
            type: "create:crushing",
            ingredients: [{ item: stone.input }],
            processingTime: 250,
            results: results
        }).id(`forge_frontier:crushing/${stone.name}`);
    });

// Crushed Ore Recipes

    // Blasting Recipes
        const blastingRecipes = [
            { name: 'crushed_verdantine', input: 'forge_frontier:crushed_verdantine', result: 'minecraft:emerald' },
            { name: 'crushed_glacium', input: 'forge_frontier:crushed_glacium', result: 'minecraft:diamond' },
            { name: 'crushed_debris', input: 'forge_frontier:crushed_debris', result: 'minecraft:netherite_scrap' },
            { name: 'crushed_grime', input: 'forge_frontier:crushed_grime', result: 'minecraft:echo_shard'},
            { name: 'crushed_aubrum', input: 'forge_frontier:crushed_aubrum', result: 'ad_astra:desh_ingot' },
            { name: 'crushed_pyroclast', input: 'forge_frontier:crushed_pyroclast', result: 'ad_astra:calorite_ingot' },
            { name: 'crushed_frostite', input: 'forge_frontier:crushed_frostite', result: 'ad_astra:ice_shard' },
            { name: 'crushed_stellaris', input: 'forge_frontier:crushed_stellaris', result: 'ad_astra:ostrum_ingot' },
            { name: 'crushed_radiantite', input: 'forge_frontier:crushed_radiantite', result: 'enlightened_end:irradium_bar' },
            { name: 'crushed_shale', input: 'forge_frontier:crushed_shale', result: 'enlightened_end:malachite' },
            { name: 'crushed_palerock', input: 'forge_frontier:crushed_palerock', result: 'enlightened_end:bismuth_ingot' },
            { name: 'crushed_guanite', input: 'forge_frontier:crushed_guanite', result: 'alexscaves:guano' },
            { name: 'crushed_pearlyte', input: 'forge_frontier:crushed_pearlyte', result: 'alexscaves:pearl' },
            { name: 'crushed_amberlite', input: 'forge_frontier:crushed_amberlite', result: 'alexscaves:amber' },
            { name: 'crushed_azurnium', input: 'forge_frontier:crushed_azurnium', result: 'alexscaves:azure_neodymium_ingot' },
            { name: 'crushed_neodymrium', input: 'forge_frontier:crushed_neodymrium', result: 'alexscaves:scarlet_neodymium_ingot' },
            { name: 'crushed_uraniumnite', input: 'forge_frontier:crushed_uraniumnite', result: 'alexscaves:uranium' },
            { name: 'crushed_sulphite', input: 'forge_frontier:crushed_sulphite', result: 'alexscaves:sulfur_dust' }
        ];
    
        // Loop to create the blasting recipes
        blastingRecipes.forEach(recipe => {
            event.custom({
                type: "minecraft:smelting",
                cookingtime: 200, // Time in ticks
                experience: 0.1,  // Experience amount
                ingredient: {
                    item: recipe.input
                },
                result: recipe.result
            }).id(`forge_frontier:blasting/${recipe.name}`);
        });

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
                { chance: 0.50, item: 'aquaculture:neptunium_nugget' }
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
            name: 'crushed_grime',
            input: 'forge_frontier:crushed_grime',
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

    // Seething Recipes
        const seethingRecipes = [
            {
                name: 'crushed_verdantine',
                input: 'forge_frontier:crushed_verdantine',
                results: [
                    { item: 'minecraft:emerald' },
                    { chance: 0.5, item: 'minecraft:emerald' }
                ]
            },
            {
                name: 'crushed_glacium',
                input: 'forge_frontier:crushed_glacium',
                results: [
                    { item: 'minecraft:diamond' },
                    { chance: 0.5, item: 'minecraft:diamond' }
                ]
            },
            {
                name: 'crushed_debris',
                input: 'forge_frontier:crushed_debris',
                results: [
                    { item: 'minecraft:netherite_scrap' },
                    { chance: 0.45, item: 'minecraft:netherite_scrap' },
                    { chance: 0.15, item: 'minecraft:netherite_scrap' }
                ]
            },
            {
                name: 'crushed_grime',
                input: 'forge_frontier:crushed_grime',
                results: [
                    { chance: 0.20, item: 'minecraft:echo_shard' },
                    { chance: 0.10, item: 'minecraft:echo_shard' }
                ]
            },
            {
                name: 'crushed_aubrum',
                input: 'forge_frontier:crushed_aubrum',
                results: [
                    { item: 'ad_astra:desh_ingot' },
                    { chance: 0.50, item: 'ad_astra:desh_ingot' }
                ]
            },
            {
                name: 'crushed_pyroclast',
                input: 'forge_frontier:crushed_pyroclast',
                results: [
                    { item: 'ad_astra:calorite_ingot' },
                    { chance: 0.50, item: 'ad_astra:calorite_ingot' }
                ]
            },
            {
                name: 'crushed_frostite',
                input: 'forge_frontier:crushed_frostite',
                results: [
                    { item: 'ad_astra:ice_shard' },
                    { chance: 0.50, item: 'ad_astra:ice_shard' }
                ]
            },
            {
                name: 'crushed_stellaris',
                input: 'forge_frontier:crushed_stellaris',
                results: [
                    { item: 'ad_astra:ostrum_ingot' },
                    { chance: 0.50, item: 'ad_astra:ostrum_ingot' }
                ]
            },
            {
                name: 'crushed_radiantite',
                input: 'forge_frontier:crushed_radiantite',
                results: [
                    { item: 'enlightened_end:irradium_bar' },
                    { chance: 0.50, item: 'enlightened_end:irradium_bar' }
                ]
            },
            {
                name: 'crushed_shale',
                input: 'forge_frontier:crushed_shale',
                results: [
                    { item: 'enlightened_end:malachite' },
                    { chance: 0.50, item: 'enlightened_end:malachite' }
                ]
            },
            {
                name: 'crushed_palerock',
                input: 'forge_frontier:crushed_palerock',
                results: [
                    { item: 'enlightened_end:bismuth_ingot' },
                    { chance: 0.50, item: 'enlightened_end:bismuth_ingot' }
                ]
            },
            {
                name: 'crushed_guanite',
                input: 'forge_frontier:crushed_guanite',
                results: [
                    { item: 'alexscaves:guano' },
                    { chance: 0.50, item: 'alexscaves:guano' }
                ]
            },
            {
                name: 'crushed_pearlyte',
                input: 'forge_frontier:crushed_pearlyte',
                results: [
                    { item: 'alexscaves:pearl' },
                    { chance: 0.50, item: 'alexscaves:pearl' }
                ]
            },
            {
                name: 'crushed_amberlite',
                input: 'forge_frontier:crushed_amberlite',
                results: [
                    { item: 'alexscaves:amber' },
                    { chance: 0.50, item: 'alexscaves:amber' }
                ]
            },
            {
                name: 'crushed_azurnium',
                input: 'forge_frontier:crushed_azurnium',
                results: [
                    { item: 'alexscaves:azure_neodymium_ingot' },
                    { chance: 0.50, item: 'alexscaves:azure_neodymium_ingot' }
                ]
            },
            {
                name: 'crushed_neodymrium',
                input: 'forge_frontier:crushed_neodymrium',
                results: [
                    { item: 'alexscaves:scarlet_neodymium_ingot' },
                    { chance: 0.50, item: 'alexscaves:scarlet_neodymium_ingot' }
                ]
            },
            {
                name: 'crushed_uraniumnite',
                input: 'forge_frontier:crushed_uraniumnite',
                results: [
                    { item: 'alexscaves:uranium' },
                    { chance: 0.50, item: 'alexscaves:uranium' }
                ]
            },
            {
                name: 'crushed_sulphite',
                input: 'forge_frontier:crushed_sulphite',
                results: [
                    { chance: 0.25, item: 'alexscaves:sulfur_dust' },
                    { chance: 0.15, item: 'alexscaves:sulfur_dust' }
                ]
            }
        ];
    
        // Loop through the recipes and dynamically generate the custom events
        seethingRecipes.forEach(recipe => {
            event.custom({
                type: "create_dd:superheating",
                ingredients: [
                    { item: recipe.input }
                ],
                results: recipe.results
            }).id(`forge_frontier:seething/${recipe.name}`);
        });
    
    // Mixing Recipes
    const mixings = [
        { name: 'crushed_verdantine', input: 'forge_frontier:crushed_verdantine', fluid: 'forge_frontier:molten_emerald' },
        { name: 'crushed_glacium', input: 'forge_frontier:crushed_glacium', fluid: 'forge_frontier:molten_diamond' },
        { name: 'crushed_debris', input: 'forge_frontier:crushed_debris', fluid: 'forge_frontier:molten_ancient_debris', additional: { fluid: 'minecraft:lava', amount: 10 } },
        { name: 'crushed_grime', input: 'forge_frontier:crushed_grime', fluid: 'forge_frontier:molten_echo_shard' },
        { name: 'crushed_aubrum', input: 'forge_frontier:crushed_aubrum', fluid: 'forge_frontier:molten_desh' },
        { name: 'crushed_pyroclast', input: 'forge_frontier:crushed_pyroclast', fluid: 'forge_frontier:molten_calorite' },
        { name: 'crushed_frostite', input: 'forge_frontier:crushed_frostite', fluid: 'forge_frontier:molten_ice_shard'},
        { name: 'crushed_stellaris', input: 'forge_frontier:crushed_stellaris', fluid: 'forge_frontier:molten_ostrum' },
        { name: 'crushed_radiantite', input: 'forge_frontier:crushed_radiantite', fluid: 'forge_frontier:molten_irradium' },
        { name: 'crushed_shale', input: 'forge_frontier:crushed_shale', fluid: 'forge_frontier:molten_malachite' },
        { name: 'crushed_palerock', input: 'forge_frontier:crushed_palerock', fluid: 'forge_frontier:molten_bismuth' },
        { name: 'crushed_guanite', input: 'forge_frontier:crushed_guanite', fluid: 'forge_frontier:molten_guano' },
        { name: 'crushed_pearlyte', input: 'forge_frontier:crushed_pearlyte', fluid: 'forge_frontier:molten_pearl' },
        { name: 'crushed_amberlite', input: 'forge_frontier:crushed_amberlite', fluid: 'forge_frontier:molten_amber' },
        { name: 'crushed_azurnium', input: 'forge_frontier:crushed_azurnium', fluid: 'forge_frontier:molten_azure_neodymium' },
        { name: 'crushed_neodymrium', input: 'forge_frontier:crushed_neodymrium', fluid: 'forge_frontier:molten_scarlet_neodymium' },
        { name: 'crushed_urnaniumite', input: 'forge_frontier:crushed_uraniumnite', fluid: 'forge_frontier:molten_uranium' },
        { name: 'crushed_sulphite', input: 'forge_frontier:crushed_sulphite', fluid: 'forge_frontier:molten_sulfur' }
    ];

    // Loop through the materials and create the mixing recipes
    mixings.forEach(mixing => {
        const results = [{ fluid: mixing.fluid, amount: 200 }];
        
        // If there's an additional result (for netherite scrap), add it
        if (mixing.additional) {
            results.push(mixing.additional);
        }

        event.custom({
            type: "create:mixing",
            ingredients: [
                { item: mixing.input, count: 1 }
            ],
            results: results,
            heatRequirement: "superheated"
        }).id(`forge_frontier:mixing/${mixing.name}`);
    });

    // Crushed Ore Piles
        // Blasting Recipes
        const blastingPileRecipes = [
            { name: 'crushed_verdantine', input: 'forge_frontier:crushed_verdantine_pile', result: 'minecraft:emerald_block' },
            { name: 'crushed_glacium', input: 'forge_frontier:crushed_glacium_pile', result: 'minecraft:diamond_block' },
            { name: 'crushed_aubrum', input: 'forge_frontier:crushed_aubrum_pile', result: 'ad_astra:desh_block' },
            { name: 'crushed_pyroclast', input: 'forge_frontier:crushed_pyroclast_pile', result: 'ad_astra:calorite_block' },
            { name: 'crushed_stellaris', input: 'forge_frontier:crushed_stellaris_pile', result: 'ad_astra:ostrum_block' },
            { name: 'crushed_radiantite', input: 'forge_frontier:crushed_radiantite_pile', result: 'enlightened_end:irradium_block' },
            { name: 'crushed_shale', input: 'forge_frontier:crushed_shale_pile', result: 'enlightened_end:malachite_block' },
            { name: 'crushed_palerock', input: 'forge_frontier:crushed_palerock_pile', result: 'enlightened_end:bismuth_block' },
            { name: 'crushed_guanite', input: 'forge_frontier:crushed_guanite_pile', result: 'alexscaves:guano_block' },
            { name: 'crushed_pearlyte', input: 'forge_frontier:crushed_pearlyte_pile', result: 'alexscaves:block_of_pearl' },
            { name: 'crushed_azurnium', input: 'forge_frontier:crushed_azurnium_pile', result: 'alexscaves:block_of_azure_neodymium' },
            { name: 'crushed_neodymrium', input: 'forge_frontier:crushed_neodymrium_pile', result: 'alexscaves:block_of_scarlet_neodymium' },
            { name: 'crushed_uraniumnite', input: 'forge_frontier:crushed_uraniumnite_pile', result: 'alexscaves:block_of_uranium' },
            { name: 'crushed_sulphite', input: 'forge_frontier:crushed_sulphite_pile', result: 'alexscaves:sulfur' }
        ];
    
        // Loop to create the blasting recipes
        blastingPileRecipes.forEach(recipe => {
            event.custom({
                type: "minecraft:smelting",
                cookingtime: 200,
                experience: 0.1,
                ingredient: {
                    item: recipe.input
                },
                result: {
                    item: recipe.result,
                    count: 1
                }
            }).id(`forge_frontier:blasting/${recipe.name}_pile`);
        });
    
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
                    { chance: 0.50, item: 'aquaculture:neptunium_nugget', count: 9 }
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
    
        // Seething Recipes
        const seethingPileRecipes = [
            {
                name: 'crushed_verdantine',
                input: 'forge_frontier:crushed_verdantine_pile',
                results: [
                    { item: 'minecraft:emerald_block', count: 1 },
                    { chance: 0.5, item: 'minecraft:emerald_block', count: 1 }
                ]
            },
            {
                name: 'crushed_glacium',
                input: 'forge_frontier:crushed_glacium_pile',
                results: [
                    { item: 'minecraft:diamond_block', count: 1 },
                    { chance: 0.5, item: 'minecraft:diamond_block', count: 1 }
                ]
            },
            {
                name: 'crushed_aubrum',
                input: 'forge_frontier:crushed_aubrum_pile',
                results: [
                    { item: 'ad_astra:desh_block', count: 1 },
                    { chance: 0.50, item: 'ad_astra:desh_block', count: 1 }
                ]
            },
            {
                name: 'crushed_pyroclast',
                input: 'forge_frontier:crushed_pyroclast_pile',
                results: [
                    { item: 'ad_astra:calorite_block', count: 1 },
                    { chance: 0.50, item: 'ad_astra:calorite_block', count: 1 }
                ]
            },
            {
                name: 'crushed_frostite',
                input: 'forge_frontier:crushed_frostite_pile',
                results: [
                    { item: 'ad_astra:ice_shard', count: 9 },
                    { chance: 0.50, item: 'ad_astra:ice_shard', count: 9 }
                ]
            },
            {
                name: 'crushed_stellaris',
                input: 'forge_frontier:crushed_stellaris_pile',
                results: [
                    { item: 'ad_astra:ostrum_block', count: 1 },
                    { chance: 0.50, item: 'ad_astra:ostrum_block', count: 1 }
                ]
            },
            {
                name: 'crushed_radiantite',
                input: 'forge_frontier:crushed_radiantite_pile',
                results: [
                    { item: 'enlightened_end:irradium_block', count: 1 },
                    { chance: 0.50, item: 'enlightened_end:irradium_block', count: 1 }
                ]
            },
            {
                name: 'crushed_shale',
                input: 'forge_frontier:crushed_shale_pile',
                results: [
                    { item: 'enlightened_end:malachite_block', count: 1 },
                    { chance: 0.50, item: 'enlightened_end:malachite_block', count: 1 }
                ]
            },
            {
                name: 'crushed_palerock',
                input: 'forge_frontier:crushed_palerock_pile',
                results: [
                    { item: 'enlightened_end:bismuth_block', count: 1 },
                    { chance: 0.50, item: 'enlightened_end:bismuth_block', count: 1 }
                ]
            },
            {
                name: 'crushed_guanite',
                input: 'forge_frontier:crushed_guanite_pile',
                results: [
                    { item: 'alexscaves:guano_block', count: 1 },
                    { chance: 0.50, item: 'alexscaves:guano_block', count: 1 }
                ]
            },
            {
                name: 'crushed_pearlyte',
                input: 'forge_frontier:crushed_pearlyte_pile',
                results: [
                    { item: 'alexscaves:pearl_block', count: 1 },
                    { chance: 0.50, item: 'alexscaves:pearl_block', count: 1 }
                ]
            },
            {
                name: 'crushed_amberlite',
                input: 'forge_frontier:crushed_amberlite_pile',
                results: [
                    { item: 'alexscaves:amber', count: 9 },
                    { chance: 0.50, item: 'alexscaves:amber', count: 9 }
                ]
            },
            {
                name: 'crushed_azurnium',
                input: 'forge_frontier:crushed_azurnium_pile',
                results: [
                    { item: 'alexscaves:block_of_azure_neodymium', count: 1 },
                    { chance: 0.50, item: 'alexscaves:block_of_azure_neodymium', count: 1 }
                ]
            },
            {
                name: 'crushed_neodymrium',
                input: 'forge_frontier:crushed_neodymrium_pile',
                results: [
                    { item: 'alexscaves:block_of_scarlet_neodymium', count: 1 },
                    { chance: 0.50, item: 'alexscaves:block_of_scarlet_neodymium', count: 1 }
                ]
            },
            {
                name: 'crushed_uraniumnite',
                input: 'forge_frontier:crushed_uraniumnite_pile',
                results: [
                    { item: 'alexscaves:block_of_uranium', count: 1 },
                    { chance: 0.50, item: 'alexscaves:block_of_uranium', count: 1 }
                ]
            },
            {
                name: 'crushed_sulphite',
                input: 'forge_frontier:crushed_sulphite_pile',
                results: [
                    { chance: 1.0, item: 'alexscaves:sulfur', count: 1 },
                    { chance: 1.0, item: 'alexscaves:sulfur', count: 1 }
                ]
            }
        ];
    
        seethingPileRecipes.forEach(recipe => {
            event.custom({
                type: "create_dd:superheating",
                ingredients: [
                    { item: recipe.input }
                ],
                results: recipe.results
            }).id(`forge_frontier:seething/${recipe.name}_pile`);
        });
    
        // Mixing Recipes
        const mixingPileRecipes = [
            { name: 'crushed_verdantine', input: 'forge_frontier:crushed_verdantine_pile', fluid: 'forge_frontier:molten_emerald' },
            { name: 'crushed_glacium', input: 'forge_frontier:crushed_glacium_pile', fluid: 'forge_frontier:molten_diamond' },
            { name: 'crushed_debris', input: 'forge_frontier:crushed_debris_pile', fluid: 'forge_frontier:molten_ancient_debris', additional: { fluid: 'minecraft:lava', amount: 90 } }, // 10 * 9
            { name: 'crushed_grime', input: 'forge_frontier:crushed_grime_pile', fluid: 'forge_frontier:molten_echo_shard' },
            { name: 'crushed_aubrum', input: 'forge_frontier:crushed_aubrum_pile', fluid: 'forge_frontier:molten_desh' },
            { name: 'crushed_pyroclast', input: 'forge_frontier:crushed_pyroclast_pile', fluid: 'forge_frontier:molten_calorite' },
            { name: 'crushed_frostite', input: 'forge_frontier:crushed_frostite_pile', fluid: 'forge_frontier:molten_ice_shard'},
            { name: 'crushed_stellaris', input: 'forge_frontier:crushed_stellaris_pile', fluid: 'forge_frontier:molten_ostrum' },
            { name: 'crushed_radiantite', input: 'forge_frontier:crushed_radiantite_pile', fluid: 'forge_frontier:molten_irradium' },
            { name: 'crushed_shale', input: 'forge_frontier:crushed_shale_pile', fluid: 'forge_frontier:molten_malachite' },
            { name: 'crushed_palerock', input: 'forge_frontier:crushed_palerock_pile', fluid: 'forge_frontier:molten_bismuth' },
            { name: 'crushed_guanite', input: 'forge_frontier:crushed_guanite_pile', fluid: 'forge_frontier:molten_guano' },
            { name: 'crushed_pearlyte', input: 'forge_frontier:crushed_pearlyte_pile', fluid: 'forge_frontier:molten_pearl' },
            { name: 'crushed_amberlite', input: 'forge_frontier:crushed_amberlite_pile', fluid: 'forge_frontier:molten_amber' },
            { name: 'crushed_azurnium', input: 'forge_frontier:crushed_azurnium_pile', fluid: 'forge_frontier:molten_azure_neodymium' },
            { name: 'crushed_neodymrium', input: 'forge_frontier:crushed_neodymrium_pile', fluid: 'forge_frontier:molten_scarlet_neodymium' },
            { name: 'crushed_urnaniumite', input: 'forge_frontier:crushed_uraniumnite_pile', fluid: 'forge_frontier:molten_uranium' },
            { name: 'crushed_sulphite', input: 'forge_frontier:crushed_sulphite_pile', fluid: 'forge_frontier:molten_sulfur' }
        ];
    
        mixingPileRecipes.forEach(mixing => {
            const results = [{ fluid: mixing.fluid, amount: 1800 }];  // 200 * 9 for the fluid output
            
            if (mixing.additional) {
                results.push(mixing.additional);
            }
    
            event.custom({
                type: "create:mixing",
                ingredients: [
                    { item: mixing.input, count: 9 }
                ],
                results: results,
                heatRequirement: "superheated"
            }).id(`forge_frontier:mixing/${mixing.name}_pile`);
        });
    });
