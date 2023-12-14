// Create Foundry Tweaks
ServerEvents.recipes(event => {

    // Removes Broken Recipes
    event.remove({ id: 'createfoundry:mixing/melting/ore/zinc_from_ore' });
    event.remove({ id: 'createfoundry:mixing/melting/ore/redstone_from_ore' });
    event.remove({ id: 'createfoundry:mixing/melting/ore/lapis_from_ore' });
    event.remove({ id: 'createfoundry:mixing/molten_netherite_from_ancient_debris_gold'})

    // Creates Lapis to Molten Mixing Recipe
    event.custom({
        type: "create:mixing",
        ingredients: [
            {
                tag: 'forge:ores/lapis',
                nbt: {},
                amount: 1
            }
        ],
        results: [
            {
                fluid: 'createfoundry:molten_lapis',
                amount: 1500
            },
            {
                fluid: 'minecraft:lava',
                amount: 50
            },
        ],
        heatRequirement: "superheated"
    }).id('kubejs:mixing/lapis_ore');

    // Creates Redstone to Molten Mixing Recipe
    event.custom({
        type: "create:mixing",
        ingredients: [
            {
                tag: 'forge:ores/redstone',
                nbt: {},
                amount: 1
            }
        ],
        results: [
            {
                fluid: 'createfoundry:molten_redstone',
                amount: 1500
            },
            {
                fluid: 'minecraft:lava',
                amount: 50
            },
        ],
        heatRequirement: "superheated"
    }).id('kubejs:mixing/redstone_ore');

    // Creates Zinc to Molten Mixing Recipe
    event.custom({
        type: "create:mixing",
        ingredients: [
            {
                tag: 'forge:ores/zinc',
                nbt: {},
                amount: 1
            }
        ],
        results: [
            {
                fluid: 'createfoundry:molten_zinc',
                amount: 500
            },
            {
                fluid: 'minecraft:lava',
                amount: 50
            },
        ],
        heatRequirement: "superheated"
    }).id('kubejs:mixing/zinc_ore');

    // Create Copper Block Compacting Recipe
    event.custom({
        type: "create:compacting",
        ingredients: [
            {
                fluid: 'createfoundry:molten_copper',
                nbt: {},
                amount: 900
            }
        ],
        results: [
            {
                item: 'minecraft:copper_block',
                amount: 1
            }
        ]
    }).id('kubejs:compacting/molten_copper');

    // Create Iron Block Compacting Recipe
    event.custom({
        type: "create:compacting",
        ingredients: [
            {
                fluid: 'createfoundry:molten_iron',
                nbt: {},
                amount: 900 
            }
        ],
        results: [
            {
                item: 'minecraft:iron_block', 
                amount: 1 
            }
        ]
    }).id('kubejs:compacting/molten_iron');

    // Create Gold Block Compacting Recipe
    event.custom({
        type: "create:compacting",
        ingredients: [
            {
                fluid: 'createfoundry:molten_gold',
                nbt: {},
                amount: 900
            }
        ],
        results: [
            {
                item: 'minecraft:gold_block',
                amount: 1
            }
        ]
    }).id('kubejs:compacting/molten_gold');

    // Create Coal Block Compacting Recipe
    event.custom({
        type: "create:compacting",
        ingredients: [
            {
                fluid: 'createfoundry:molten_carbon',
                nbt: {},
                amount: 900
            }
        ],
        results: [
            {
                item: 'minecraft:coal_block',
                amount: 1
            }
        ]
    }).id('kubejs:compacting/molten_carbon');

    // Create Diamond Block Compacting Recipe
    event.custom({
        type: "create:compacting",
        ingredients: [
            {
                fluid: 'createfoundry:molten_diamond',
                nbt: {},
                amount: 900
            }
        ],
        results: [
            {
                item: 'minecraft:diamond_block',
                amount: 1
            }
        ]
    }).id('kubejs:compacting/molten_diamond');

    // Create Zinc Block Compacting Recipe
    event.custom({
        type: "create:compacting",
        ingredients: [
            {
                fluid: 'createfoundry:molten_zinc',
                nbt: {},
                amount: 900
            }
        ],
        results: [
            {
                item: 'create:zinc_block',
                amount: 1
            }
        ]
    }).id('kubejs:compacting/molten_zinc');

    // Create Brass Block Compacting Recipe
    event.custom({
        type: "create:compacting",
        ingredients: [
            {
                fluid: 'createfoundry:molten_brass',
                nbt: {},
                amount: 900
            }
        ],
        results: [
            {
                item: 'create:brass_block',
                amount: 1
            }
        ]
    }).id('kubejs:compacting/molten_brass');

    // Create Emerald Block Compacting Recipe
    event.custom({
        type: "create:compacting",
        ingredients: [
            {
                fluid: 'createfoundry:molten_emerald',
                nbt: {},
                amount: 900
            }
        ],
        results: [
            {
                item: 'minecraft:emerald_block',
                amount: 1
            }
        ]
    }).id('kubejs:compacting/molten_emerald');

    // Create Redstone Block Compacting Recipe
    event.custom({
        type: "create:compacting",
        ingredients: [
            {
                fluid: 'createfoundry:molten_redstone',
                nbt: {},
                amount: 900
            }
        ],
        results: [
            {
                item: 'minecraft:redstone_block',
                amount: 1
            }
        ]
    }).id('kubejs:compacting/molten_redstone');

    // Create Lapis Block Compacting Recipe
    event.custom({
        type: "create:compacting",
        ingredients: [
            {
                fluid: 'createfoundry:molten_lapis',
                nbt: {},
                amount: 900
            }
        ],
        results: [
            {
                item: 'minecraft:lapis_block',
                amount: 1
            }
        ]
    }).id('kubejs:compacting/molten_lapis');

    // Create Ancient Debris Compacting Recipe
    event.custom({
        type: "create:compacting",
        ingredients: [
            {
                fluid: 'createfoundry:molten_ancient_debris',
                nbt: {},
                amount: 900
            }
        ],
        results: [
            {
                item: 'minecraft:ancient_debris',
                amount: 1
            }
        ]
    }).id('kubejs:compacting/molten_ancient_debris');

    // Create Netherite Block Compacting Recipe
    event.custom({
        type: "create:compacting",
        ingredients: [
            {
                fluid: 'createfoundry:molten_netherite',
                nbt: {},
                amount: 900
            }
        ],
        results: [
            {
                item: 'minecraft:netherite_block',
                amount: 1
            }
        ]
    }).id('kubejs:compacting/molten_netherite');

    // Modded Ore Mixing Recipes
    // Spelunkery Ores
    
    // Coal Ore to Molten Mixing Recipe
    event.custom({
        type: "create:mixing",
        ingredients: [
            {
                tag: 'spelunkery:coal_ores',
                nbt: {},
                amount: 1
            }
        ],
        results: [
            {
                fluid: 'createfoundry:molten_carbon',
                amount: 500
            },
            {
                fluid: 'minecraft:lava',
                amount: 50
            },
        ],
        heatRequirement: "superheated"
    }).id('kubejs:mixing/s_coal_ore');

    // Iron Ore to Molten Mixing Recipe
    event.custom({
        type: "create:mixing",
        ingredients: [
            {
                tag: 'spelunkery:iron_ores',
                nbt: {},
                amount: 1
            }
        ],
        results: [
            {
                fluid: 'createfoundry:molten_iron',
                amount: 500
            },
            {
                fluid: 'minecraft:lava',
                amount: 50
            },
        ],
        heatRequirement: "superheated"
    }).id('kubejs:mixing/s_iron_ore');
    
    // Copper Ore to Molten Mixing Recipe
    event.custom({
        type: "create:mixing",
        ingredients: [
            {
                tag: 'spelunkery:copper_ores',
                nbt: {},
                amount: 1
            }
        ],
        results: [
            {
                fluid: 'createfoundry:molten_copper',
                amount: 500
            },
            {
                fluid: 'minecraft:lava',
                amount: 50
            },
        ],
        heatRequirement: "superheated"
    }).id('kubejs:mixing/s_copper_ore');

    // Gold Ore to Molten Mixing Recipe
    event.custom({
        type: "create:mixing",
        ingredients: [
            {
                tag: 'spelunkery:gold_ores',
                nbt: {},
                amount: 1
            }
        ],
        results: [
            {
                fluid: 'createfoundry:molten_gold',
                amount: 500
            },
            {
                fluid: 'minecraft:lava',
                amount: 50
            },
        ],
        heatRequirement: "superheated"
    }).id('kubejs:mixing/s_gold_ore');

    // Redstone Ore to Molten Mixing Recipe
    event.custom({
        type: "create:mixing",
        ingredients: [
            {
                tag: 'spelunkery:redstone_ores',
                nbt: {},
                amount: 1
            }
        ],
        results: [
            {
                fluid: 'createfoundry:molten_redstone',
                amount: 1500
            },
            {
                fluid: 'minecraft:lava',
                amount: 50
            },
        ],
        heatRequirement: "superheated"
    }).id('kubejs:mixing/s_redstone_ore');

    // Emerald Ore to Molten Mixing Recipe
    event.custom({
        type: "create:mixing",
        ingredients: [
            {
                tag: 'spelunkery:emerald_ores',
                nbt: {},
                amount: 1
            }
        ],
        results: [
            {
                fluid: 'createfoundry:molten_emerald',
                amount: 500
            },
            {
                fluid: 'minecraft:lava',
                amount: 50
            },
        ],
        heatRequirement: "superheated"
    }).id('kubejs:mixing/s_emerald_ore');

    // Lapis Ore to Molten Mixing Recipe
    event.custom({
        type: "create:mixing",
        ingredients: [
            {
                tag: 'spelunkery:lapis_ores',
                nbt: {},
                amount: 1
            }
        ],
        results: [
            {
                fluid: 'createfoundry:molten_lapis',
                amount: 1500
            },
            {
                fluid: 'minecraft:lava',
                amount: 50
            },
        ],
        heatRequirement: "superheated"
    }).id('kubejs:mixing/s_lapis_ore');

    // Diamond Ore to Molten Mixing Recipe
    event.custom({
        type: "create:mixing",
        ingredients: [
            {
                tag: 'spelunkery:diamond_ores',
                nbt: {},
                amount: 1
            }
        ],
        results: [
            {
                fluid: 'createfoundry:molten_diamond',
                amount: 500
            },
            {
                fluid: 'minecraft:lava',
                amount: 50
            },
        ],
        heatRequirement: "superheated"
    }).id('kubejs:mixing/s_diamond_ore');

    // Alex Caves Ores
    // Redstone Ore to Molten Mixing Recipe
    event.custom({
        type: "create:mixing",
        ingredients: [
            {
                item: 'alexscaves:guanostone_redstone_ore',
                nbt: {},
                amount: 1
            }
        ],
        results: [
            {
                fluid: 'createfoundry:molten_redstone',
                amount: 1500
            },
            {
                fluid: 'minecraft:lava',
                amount: 50
            },
        ],
        heatRequirement: "superheated"
    }).id('kubejs:mixing/ac_redstone_ore');

    // Coal Ore to Molten Mixing Recipe
    event.custom({
        type: "create:mixing",
        ingredients: [
            {
                item: 'alexscaves:coprolith_coal_ore',
                nbt: {},
                amount: 1
            }
        ],
        results: [
            {
                fluid: 'createfoundry:molten_carbon',
                amount: 500
            },
            {
                fluid: 'minecraft:lava',
                amount: 50
            },
        ],
        heatRequirement: "superheated"
    }).id('kubejs:mixing/ac_coal_ore');

    // Cut Copper Mixing Recipe
    event.custom({
        type: "create:mixing",
        ingredients: [
            {
                item: 'minecraft:cut_copper',
                nbt: {},
                amount: 1
            }
        ],
        results: [
            {
                fluid: 'createfoundry:molten_copper',
                amount: 900
            }
        ],
        heatRequirement: "superheated"
    }).id('kubejs:mixing/cut_copper');

    // Creates Mixing Recipe for Molten Netherite
    event.custom({
        type: "create:mixing",
        ingredients: [
            { fluid: 'createfoundry:molten_ancient_debris', amount: 100 },
            { fluid: 'createfoundry:molten_gold', amount: 100 }
        ],
        results: [
            { fluid: 'createfoundry:molten_netherite', amount: 100 }
        ],
        heatRequirement: 'superheated'
    }).id('kubejs:mixing/molten_netherite');

    // Molten Brass
    event.custom({
        type: "create:mixing",
        ingredients: [
            { fluid: 'createfoundry:molten_zinc', amount: 1000 },
            { fluid: 'createfoundry:molten_copper', amount: 1000 }
        ],
        results: [
            { fluid: 'createfoundry:molten_brass', amount: 1000 }
        ],
        heatRequirement: 'superheated'
    }).id('kubejs:mixing/molten_brass');

    // Crushed Ore to Moltem Ore
        // Crushed Iron Ore
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'create:crushed_raw_iron',
                    nbt: {},
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'createfoundry:molten_iron',
                    amount: 200
                }
            ],
            heatRequirement: "superheated"
        }).id('kubejs:mixing/crushed_iron');


        // Crushed Gold Ore
    event.custom({
        type: "create:mixing",
        ingredients: [
            {
                item: 'create:crushed_raw_gold',
                nbt: {},
                amount: 1
            }
        ],
        results: [
            {
                fluid: 'createfoundry:molten_gold',
                amount: 200
            }
        ],
        heatRequirement: "superheated"
    }).id('kubejs:mixing/crushed_gold');


        // Crushed Copper Ore
    event.custom({
        type: "create:mixing",
        ingredients: [
            {
                item: 'create:crushed_raw_copper',
                nbt: {},
                amount: 1
            }
        ],
        results: [
            {
                fluid: 'createfoundry:molten_copper',
                amount: 200
            }
        ],
        heatRequirement: "superheated"
    }).id('kubejs:mixing/crushed_copper');

        // Crushed Zinc Ore
    event.custom({
        type: "create:mixing",
        ingredients: [
            {
                item: 'create:crushed_raw_zinc',
                nbt: {},
                amount: 1
            }
        ],
        results: [
            {
                fluid: 'createfoundry:molten_zinc',
                amount: 200
            }
        ],
        heatRequirement: "superheated"
    }).id('kubejs:mixing/crushed_zinc');

    // Raw Emerald Ore
    event.custom({
        type: "create:mixing",
        ingredients: [
            {
                item: 'createoreexcavation:raw_emerald',
                nbt: {},
                amount: 1
            }
        ],
        results: [
            {
                fluid: 'createfoundry:molten_emerald',
                amount: 200
            }
        ],
        heatRequirement: "superheated"
    }).id('kubejs:mixing/raw_emerald');
    
    // Raw Diamond Ore
    event.custom({
        type: "create:mixing",
        ingredients: [
            {
                item: 'createoreexcavation:raw_diamond',
                nbt: {},
                amount: 1
            }
        ],
        results: [
            {
                fluid: 'createfoundry:molten_diamond',
                amount: 200
            }
        ],
        heatRequirement: "superheated"
    }).id('kubejs:mixing/raw_diamond');
    
    // Raw Redstone Ore
    event.custom({
        type: "create:mixing",
        ingredients: [
            {
                item: 'createoreexcavation:raw_redstone',
                nbt: {},
                amount: 1
            }
        ],
        results: [
            {
                fluid: 'createfoundry:molten_redstone',
                amount: 200
            }
        ],
        heatRequirement: "superheated"
    }).id('kubejs:mixing/raw_redstone');

})