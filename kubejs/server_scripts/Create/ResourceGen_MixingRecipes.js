ServerEvents.recipes(event => {
// Crushed Ore Stone Recipes      
    // Mixing Recipes
    const mixings = [
        { name: 'crushed_verdantine', input: 'forge_frontier:crushed_verdantine', fluid: 'forge_frontier:molten_emerald' },
        { name: 'crushed_glacium', input: 'forge_frontier:crushed_glacium', fluid: 'forge_frontier:molten_diamond' },
        { name: 'crushed_debris', input: 'forge_frontier:crushed_debris', fluid: 'forge_frontier:molten_ancient_debris', additional: { fluid: 'minecraft:lava', amount: 10 } },
        { name: 'crushed_resonite', input: 'forge_frontier:crushed_resonite', fluid: 'forge_frontier:molten_echo_shard' },
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

// Crushed Ore Pile Recipes
    // Mixing Recipes
    const mixingPileRecipes = [
        { name: 'crushed_verdantine', input: 'forge_frontier:crushed_verdantine_pile', fluid: 'forge_frontier:molten_emerald' },
        { name: 'crushed_glacium', input: 'forge_frontier:crushed_glacium_pile', fluid: 'forge_frontier:molten_diamond' },
        { name: 'crushed_debris', input: 'forge_frontier:crushed_debris_pile', fluid: 'forge_frontier:molten_ancient_debris', additional: { fluid: 'minecraft:lava', amount: 90 } },
        { name: 'crushed_resonite', input: 'forge_frontier:crushed_resonite_pile', fluid: 'forge_frontier:molten_echo_shard' },
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
        const results = [{ fluid: mixing.fluid, amount: 1800 }];
        
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
})