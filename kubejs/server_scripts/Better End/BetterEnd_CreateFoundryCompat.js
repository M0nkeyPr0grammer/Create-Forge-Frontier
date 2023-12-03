ServerEvents.recipes(event => {

    // Creates Molten Steel Recipe
    event.custom({
        type: "create:mixing",
        ingredients: [
            {
                fluid: 'createfoundry:molten_iron',
                amount: 8100
            },
            {
                fluid: 'kubejs:molten_thallasium',
                amount: 8100
            }
        ],
        results: [
            {
                fluid: 'kubejs:molten_steel',
                amount: 8100
            }
        ],
        heatRequirement: "superheated"
    }).id('kubejs:mixing/molten_steel');

    // Block and Ingot to Molten Ore Mixing Recipes

         // Amber Gem
         event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'betterend:amber_gem',
                    nbt: {},
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'kubejs:molten_amber',
                    amount: 64800
                }
            ],
            heatRequirement: "superheated"
        }).id('kubejs:mixing/amber_gem');

        // Amber Gem Block
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'betterend:amber_block',
                    nbt: {},
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'kubejs:molten_amber',
                    amount: 259200
                }
            ],
            heatRequirement: "superheated"
        }).id('kubejs:mixing/amber_block');

        // Thallasium Ingot
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'betterend:thallasium_ingot',
                    nbt: {},
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'kubejs:molten_thallasium',
                    amount: 8100
                }
            ],
            heatRequirement: "superheated"
        }).id('kubejs:mixing/thallasium_ingot');

        // Thallasium Block
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'betterend:thallasium_block',
                    nbt: {},
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'kubejs:molten_thallasium',
                    amount: 72900
                }
            ],
            heatRequirement: "superheated"
        }).id('kubejs:mixing/thallasium_block');

        // Thallasium Tile
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'betterend:thallasium_tile',
                    nbt: {},
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'kubejs:molten_thallasium',
                    amount: 72900
                }
            ],
            heatRequirement: "superheated"
        }).id('kubejs:mixing/thallasium_tile');

        // Raw Ore to Molten Ore Mixing Recipes

        // Raw Amber
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'betterend:raw_amber',
                    nbt: {},
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'kubejs:molten_amber',
                    amount: 16200
                }
            ],
            heatRequirement: "superheated"
        }).id('kubejs:mixing/raw_amber');

        // Crushed Amber
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'kubejs:crushed_amber_ore',
                    nbt: {},
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'kubejs:molten_amber',
                    amount: 16200
                }
            ],
            heatRequirement: "superheated"
        }).id('kubejs:mixing/crushed_amber');

        // Raw Thallasium
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'betterend:thallasium_raw',
                    nbt: {},
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'kubejs:molten_thallasium',
                    amount: 16200
                }
            ],
            heatRequirement: "superheated"
        }).id('kubejs:mixing/raw_thallasium');

        // Crushed Thallasium
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'kubejs:crushed_thallasium_ore',
                    nbt: {},
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'kubejs:molten_thallasium',
                    amount: 16200
                }
            ],
            heatRequirement: "superheated"
        }).id('kubejs:mixing/crushed_thallasium');

        // Ore to Molten Ore Mixing Recipes

        // Amber Ore
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'betterend:amber_ore',
                    nbt: {},
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'kubejs:molten_amber',
                    amount: 40500
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 4050
                }
            ],
            heatRequirement: "superheated"
        }).id('kubejs:mixing/amber_ore');

        // Thallasium Ore
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'betterend:thallasium_ore',
                    nbt: {},
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'kubejs:molten_thallasium',
                    amount: 40500
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 4050
                }
            ],
            heatRequirement: "superheated"
        }).id('kubejs:mixing/thallasium_ore');

    // Creates Compacting Recipes

        // Molten Amber
        event.custom({
            type: "create:compacting",
            ingredients: [
                {
                    fluid: 'kubejs:molten_amber',
                    nbt: {},
                    amount: 259200
                }
            ],
            results: [
                {
                    item: 'betterend:amber_block', 
                    amount: 1 
                }
            ]
        }).id('kubejs:compacting/molten_amber');

        // Molten Thallasium
        event.custom({
            type: "create:compacting",
            ingredients: [
                {
                    fluid: 'kubejs:molten_thallasium',
                    nbt: {},
                    amount: 72900 
                }
            ],
            results: [
                {
                    item: 'betterend:thallasium_block', 
                    amount: 1 
                }
            ]
        }).id('kubejs:compacting/molten_thallasium');

        // Molten Steel
        event.custom({
            type: "create:compacting",
            ingredients: [
                {
                    fluid: 'kubejs:molten_steel',
                    nbt: {},
                    amount: 72900 
                }
            ],
            results: [
                {
                    item: 'ad_astra:steel_block', 
                    amount: 1 
                }
            ]
        }).id('kubejs:compacting/molten_steel');
})