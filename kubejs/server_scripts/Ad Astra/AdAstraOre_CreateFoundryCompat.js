// Ad Astra Ore Create Foundry Compat
ServerEvents.recipes(event => {

    // Ore to Molten Ore Mixing Recipes
    
    // Desh Ore
        // Deepslate Desh Ore
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'ad_astra:deepslate_desh_ore',
                    nbt: {},
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_desh',
                    amount: 500
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 50
                },
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/deepslate_desh_ore');

        // Moon Desh Ore
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'ad_astra:moon_desh_ore',
                    nbt: {},
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_desh',
                    amount: 500
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 50
                },
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/moon_desh_ore');

    // Ostrum Ore
        // Deepslate Ostrum Ore
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'ad_astra:deepslate_ostrum_ore',
                    nbt: {},
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_ostrum',
                    amount: 500
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 50
                },
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/deepslate_ostrum_ore');

        // Mars Ostrum Ore
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'ad_astra:mars_ostrum_ore',
                    nbt: {},
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_ostrum',
                    amount: 500
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 50
                },
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/mars_ostrum_ore');

    // Calorite Ore
        // Deepslate Calorite Ore
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'ad_astra:deepslate_calorite_ore',
                    nbt: {},
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_calorite',
                    amount: 500
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 50
                },
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/deepslate_calorite_ore');

        // Venus Calorite Ore
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'ad_astra:venus_calorite_ore',
                    nbt: {},
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_calorite',
                    amount: 500
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 50
                },
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/venus_calorite_ore');

    // Raw Ore to Molten Ore Mixing Recipes

        // Raw Desh Ore
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'ad_astra:raw_desh',
                    nbt: {},
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_desh',
                    amount: 200
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/raw_desh');

        // Raw Ostrum Ore
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'ad_astra:raw_ostrum',
                    nbt: {},
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_ostrum',
                    amount: 200
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/raw_ostrum');

        // Raw Calorite Ore
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'ad_astra:raw_calorite',
                    nbt: {},
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_calorite',
                    amount: 200
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/raw_calorite');

    // Raw Ore Block to Molten Ore Mixing Recipes

        // Raw Desh Ore Block
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'ad_astra:raw_desh_block',
                    nbt: {},
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_desh',
                    amount: 1800
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/raw_desh_block');

        // Raw Ostrum Ore Block
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'ad_astra:raw_ostrum_block',
                    nbt: {},
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_ostrum',
                    amount: 1800
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/raw_ostrum_block');

        // Raw Calorite Ore Block
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'ad_astra:raw_calorite_block',
                    nbt: {},
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_calorite',
                    amount: 1800
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/raw_calorite_block');
    
    // Crushed Raw Ore to Molten Ore Mixing Recipes

        // Crushed Desh Ore
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'forge_frontier:crushed_desh_ore',
                    nbt: {},
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_desh',
                    amount: 200
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/crushed_desh');

        // Crushed Ostrum Ore
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'forge_frontier:crushed_ostrum_ore',
                    nbt: {},
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_ostrum',
                    amount: 200
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/crushed_ostrum');

        // Crushed Calorite Ore
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'forge_frontier:crushed_calorite_ore',
                    nbt: {},
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_calorite',
                    amount: 200
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/crushed_calorite');

    // Block and Ingot to Molten Ore
        // Desh Ingot
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'ad_astra:desh_ingot',
                    nbt: {},
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_desh',
                    amount: 100
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/desh_ingot_molten');

        // Ostrum Ingot
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'ad_astra:ostrum_ingot',
                    nbt: {},
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_ostrum',
                    amount: 100
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/ostrum_ingot_molten');

        // Calorite Ingot
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'ad_astra:calorite_ingot',
                    nbt: {},
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_calorite',
                    amount: 100
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/calorite_ingot_molten');

        // Desh Block
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'ad_astra:desh_block',
                    nbt: {},
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_desh',
                    amount: 900 
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/desh_block');

        // Ostrum Block
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'ad_astra:ostrum_block',
                    nbt: {},
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_ostrum',
                    amount: 900 
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/ostrum_block');

        // Calorite Block
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'ad_astra:calorite_block',
                    nbt: {},
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_calorite',
                    amount: 900 
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/calorite_block');
    
    // Molten Ore to Block Compacting Recipes
        // Create Desh Block Compacting Recipe
        event.custom({
            type: "create:compacting",
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_desh',
                    nbt: {},
                    amount: 900 
                }
            ],
            results: [
                {
                    item: 'ad_astra:desh_block', 
                    amount: 1 
                }
            ]
        }).id('forge_frontier:compacting/molten_desh');

        // Create Ostrum Block Compacting Recipe
        event.custom({
            type: "create:compacting",
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_ostrum',
                    nbt: {},
                    amount: 900 
                }
            ],
            results: [
                {
                    item: 'ad_astra:ostrum_block', 
                    amount: 1 
                }
            ]
        }).id('forge_frontier:compacting/molten_ostrum');

        // Create Calorite Block Compacting Recipe
        event.custom({
            type: "create:compacting",
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_calorite',
                    nbt: {},
                    amount: 900 
                }
            ],
            results: [
                {
                    item: 'ad_astra:calorite_block', 
                    amount: 1 
                }
            ]
        }).id('forge_frontier:compacting/molten_calorite');

})