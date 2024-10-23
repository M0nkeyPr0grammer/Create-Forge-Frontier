ServerEvents.recipes(event => { 
    // Normal Recipe Removals
    event.remove({ id: 'create:crushing/asurine' });
    event.remove({ id: 'create:crushing/crimsite' });
    event.remove({ id: 'create:crushing/ochrum' });
    event.remove({ id: 'create_dd:crushing/scorchia' });
    event.remove({ id: 'create:crushing/veridium' });
    event.remove({ id: 'create_dd:crushing/potassic' });

    // Recycling Recipe Removals
    event.remove({ id: 'create:crushing/asurine_recycling' });
    event.remove({ id: 'create:crushing/crimsite_recycling' });
    event.remove({ id: 'create:crushing/ochrum_recycling' });
    event.remove({ id: 'create_dd:crushing/scorchia_recycling' });
    event.remove({ id: 'create:crushing/veridium_recycling' });
    event.remove({ id: 'create_dd:crushing/potassic_recycling' });

    // Resource Stone Recipes
    const stones = [
        { name: 'asurine', input: 'create:asurine', output: 'create:crushed_raw_zinc', additional: 'create:zinc_nugget' },
        { name: 'crimsite', input: 'create:crimsite', output: 'create:crushed_raw_iron', additional: 'minecraft:iron_nugget' },
        { name: 'ochrum', input: 'create:ochrum', output: 'create:crushed_raw_gold', additional: 'minecraft:gold_nugget' },
        { name: 'scoria', input: 'create:scoria', output: 'minecraft:lapis_lazuli', additional: null },
        { name: 'scorchia', input: 'create:scorchia', output: 'minecraft:coal', additional: 'create:cinder_flour' },
        { name: 'veridium', input: 'create:veridium', output: 'create:crushed_raw_copper', additional: 'create:copper_nugget' },
        { name: 'potassic', input: 'create_dd:potassic', output: 'create:crushed_raw_tin', additional: 'create_dd:tin_nugget' },
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
        { name: 'palerock', input: 'enlightened_end:palerock', output: 'forge_frontier:crushed_palerock', additional: 'enlightened_end:bismuth_nugget' },
        { name: 'sculk_grime', input: 'deeperdarker:sculk_grime', output: 'forge_frontier:crushed_grime', additional: null },
        { name: 'void_shale', input: 'enlightened_end:void_shale', output: 'forge_frontier:crushed_shale', additional: null }
    ];

    // Loop through materials and create the crushing recipes
    stones.forEach(stone => {
        const results = [{ count: 9, item: stone.output }];
        // Ensure additional item has a count of 1 if it exists
        if (stone.additional) {
            results.push({ count: 1, item: stone.additional });
        }

        // Crushing Recipes
        event.custom({
            type: "create:crushing",
            ingredients: [{ item: stone.input }],
            processingTime: 250,
            results: results
        }).id(`forge_frontier:crushing/${stone.name}`);
        
        // Recycling Recipes
        const recyclingResults = results.map(result => ({
            count: result.count, // Keep the same count
            item: result.item
        }));

        event.custom({
            type: "create:crushing",
            ingredients: [
                { tag: `create:stone_types/${stone.name}` }
            ].filter(Boolean), // Filter out null values
            processingTime: 250,
            results: recyclingResults // Same results as crushing recipes
        }).id(`forge_frontier:recycling/${stone.name}`);
    });
    
    // Potassic Recycling Recipe
    event.custom({
        type: "create:crushing",
        ingredients: [
            { tag: `create_dd:stone_types/potassic` }
        ],
        processingTime: 250,
        results: [
            { count: 9, item: 'create:crushed_raw_tin' }, // Same output as crushing
            { count: 1, item: 'create_dd:tin_nugget' } // Ensure a count of 1 for additional
        ]
    }).id(`forge_frontier:recycling/potassic_tag`);

    // Ancient Debris Crushing Recipe
    event.custom({
        type: "create:crushing",
        ingredients: [{ item: 'minecraft:ancient_debris' }],
        processingTime: 250,
        results: [
            { count: 2, item: 'forge_frontier:crushed_debris' }, // Result with count set to 2
            { chance: .05, item: 'create:crushed_raw_gold' } // Optional additional result
        ]
    }).id('forge_frontier:crushing/ancient_debris');
});
