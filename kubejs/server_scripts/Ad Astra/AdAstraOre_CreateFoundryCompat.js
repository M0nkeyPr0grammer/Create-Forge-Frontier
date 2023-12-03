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
                    fluid: 'kubejs:molten_desh',
                    amount: 40500
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 4050
                },
            ],
            heatRequirement: "superheated"
        }).id('kubejs:mixing/deepslate_desh_ore');

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
                    fluid: 'kubejs:molten_desh',
                    amount: 40500
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 4050
                },
            ],
            heatRequirement: "superheated"
        }).id('kubejs:mixing/moon_desh_ore');

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
                    fluid: 'kubejs:molten_ostrum',
                    amount: 40500
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 4050
                },
            ],
            heatRequirement: "superheated"
        }).id('kubejs:mixing/deepslate_ostrum_ore');

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
                    fluid: 'kubejs:molten_ostrum',
                    amount: 40500
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 4050
                },
            ],
            heatRequirement: "superheated"
        }).id('kubejs:mixing/mars_ostrum_ore');

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
                    fluid: 'kubejs:molten_calorite',
                    amount: 40500
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 4050
                },
            ],
            heatRequirement: "superheated"
        }).id('kubejs:mixing/deepslate_calorite_ore');

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
                    fluid: 'kubejs:molten_calorite',
                    amount: 40500
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 4050
                },
            ],
            heatRequirement: "superheated"
        }).id('kubejs:mixing/venus_calorite_ore');

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
                    fluid: 'kubejs:molten_desh',
                    amount: 16200
                }
            ],
            heatRequirement: "superheated"
        }).id('kubejs:mixing/raw_desh');

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
                    fluid: 'kubejs:molten_ostrum',
                    amount: 16200
                }
            ],
            heatRequirement: "superheated"
        }).id('kubejs:mixing/raw_ostrum');

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
                    fluid: 'kubejs:molten_calorite',
                    amount: 16200
                }
            ],
            heatRequirement: "superheated"
        }).id('kubejs:mixing/raw_calorite');

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
                    fluid: 'kubejs:molten_desh',
                    amount: 145800
                }
            ],
            heatRequirement: "superheated"
        }).id('kubejs:mixing/raw_desh_block');

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
                    fluid: 'kubejs:molten_ostrum',
                    amount: 145800
                }
            ],
            heatRequirement: "superheated"
        }).id('kubejs:mixing/raw_ostrum_block');

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
                    fluid: 'kubejs:molten_calorite',
                    amount: 145800
                }
            ],
            heatRequirement: "superheated"
        }).id('kubejs:mixing/raw_calorite_block');
    
    // Crushed Raw Ore to Molten Ore Mixing Recipes

        // Crushed Desh Ore
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'kubejs:crushed_desh_ore',
                    nbt: {},
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'kubejs:molten_desh',
                    amount: 16200
                }
            ],
            heatRequirement: "superheated"
        }).id('kubejs:mixing/crushed_desh');

        // Crushed Ostrum Ore
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'kubejs:crushed_ostrum_ore',
                    nbt: {},
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'kubejs:molten_ostrum',
                    amount: 16200
                }
            ],
            heatRequirement: "superheated"
        }).id('kubejs:mixing/crushed_ostrum');

        // Crushed Calorite Ore
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'kubejs:crushed_calorite_ore',
                    nbt: {},
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'kubejs:molten_calorite',
                    amount: 16200
                }
            ],
            heatRequirement: "superheated"
        }).id('kubejs:mixing/crushed_calorite');

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
                    fluid: 'kubejs:molten_desh',
                    amount: 8100
                }
            ],
            heatRequirement: "superheated"
        }).id('kubejs:mixing/desh_ingot');

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
                    fluid: 'kubejs:molten_ostrum',
                    amount: 8100
                }
            ],
            heatRequirement: "superheated"
        }).id('kubejs:mixing/ostrum_ingot');

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
                    fluid: 'kubejs:molten_calorite',
                    amount: 8100
                }
            ],
            heatRequirement: "superheated"
        }).id('kubejs:mixing/calorite_ingot');

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
                    fluid: 'kubejs:molten_desh',
                    amount: 72900 
                }
            ],
            heatRequirement: "superheated"
        }).id('kubejs:mixing/desh_block');

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
                    fluid: 'kubejs:molten_ostrum',
                    amount: 72900 
                }
            ],
            heatRequirement: "superheated"
        }).id('kubejs:mixing/ostrum_block');

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
                    fluid: 'kubejs:molten_calorite',
                    amount: 72900 
                }
            ],
            heatRequirement: "superheated"
        }).id('kubejs:mixing/calorite_block');
    
    // Molten Ore to Block Compacting Recipes
        // Create Desh Block Compacting Recipe
        event.custom({
            type: "create:compacting",
            ingredients: [
                {
                    fluid: 'kubejs:molten_desh',
                    nbt: {},
                    amount: 72900 
                }
            ],
            results: [
                {
                    item: 'ad_astra:desh_block', 
                    amount: 1 
                }
            ]
        }).id('kubejs:compacting/molten_desh');

        // Create Ostrum Block Compacting Recipe
        event.custom({
            type: "create:compacting",
            ingredients: [
                {
                    fluid: 'kubejs:molten_ostrum',
                    nbt: {},
                    amount: 72900 
                }
            ],
            results: [
                {
                    item: 'ad_astra:ostrum_block', 
                    amount: 1 
                }
            ]
        }).id('kubejs:compacting/molten_ostrum');

        // Create Calorite Block Compacting Recipe
        event.custom({
            type: "create:compacting",
            ingredients: [
                {
                    fluid: 'kubejs:molten_calorite',
                    nbt: {},
                    amount: 72900 
                }
            ],
            results: [
                {
                    item: 'ad_astra:calorite_block', 
                    amount: 1 
                }
            ]
        }).id('kubejs:compacting/molten_calorite');

})