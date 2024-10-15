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

});