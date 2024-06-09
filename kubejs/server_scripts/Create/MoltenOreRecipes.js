// Create Foundry Tweaks
ServerEvents.recipes(event => {

    // Removes Broken Recipes
    event.remove({ id: 'createfoundry:mixing/melting/ore/zinc_from_ore' });
    event.remove({ id: 'createfoundry:mixing/melting/ore/redstone_from_ore' });
    event.remove({ id: 'createfoundry:mixing/melting/ore/lapis_from_ore' });
    event.remove({ id: 'createfoundry:mixing/molten_netherite_from_ancient_debris_gold'})
    event.remove({ id: 'createfoundry:compacting/diamond_from_carbon'})

    // New Diamond Recipe
    event.custom({
        type:"create:compacting",
        ingredients: [
            {
                fluid: 'createfoundry:molten_carbon',
                nbt: {},
                amount: 1000
            },
        ],
        results: [
            {
                fluid: 'createfoundry:molten_diamond',
                nbt: {},
                amount: 125
            },
        ],
        heatRequirement: "superheated"
    }).id('forge_frontier:compacting/carbon_molten_diamond')

    // Ingot/Block to Molten Recipes
        // Creates Molten Netherite Iron Mixing from Ingot
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'advancednetherite:netherite_iron_ingot',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_netherite_iron',
                    amount: 100
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/molten_netherite_iron_from_ingot');

        // Creates Molten Netherite Iron Mixing from Block
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'advancednetherite:netherite_iron_block',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_netherite_iron',
                    amount: 900
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/molten_netherite_iron_from_block');

        // Creates Molten Netherite Gold Mixing from Ingot
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'advancednetherite:netherite_gold_ingot',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_netherite_gold',
                    amount: 100
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/molten_netherite_gold_from_ingot');

        // Creates Molten Netherite Gold Mixing from Block
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'advancednetherite:netherite_gold_block',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_netherite_gold',
                    amount: 900
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/molten_netherite_gold_from_block');

        // Creates Molten Netherite Emerald Mixing from Ingot
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'advancednetherite:netherite_emerald_ingot',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_netherite_emerald',
                    amount: 100
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/molten_netherite_emerald_from_ingot');

        // Creates Molten Netherite Emerald Mixing from Block
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'advancednetherite:netherite_emerald_block',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_netherite_emerald',
                    amount: 900
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/molten_netherite_emerald_from_block');

        // Creates Molten Netherite Diamond Mixing from Ingot
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'advancednetherite:netherite_diamond_ingot',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_netherite_diamond',
                    amount: 100
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/molten_netherite_diamond_from_ingot');

        // Creates Molten Netherite Diamond Mixing from Block
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'advancednetherite:netherite_diamond_block',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_netherite_diamond',
                    amount: 900
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/molten_netherite_diamond_from_block');


    // Creates Molten Netherite Iron Mixing Recipe
    event.custom({
        type: "create:mixing",
        ingredients: [
            {
                fluid: 'createfoundry:molten_netherite',
                amount: 700
            },
            {
                fluid: 'createfoundry:molten_iron',
                amount: 900
            }
        ],
        results: [
            {
                fluid: 'forge_frontier:molten_netherite_iron',
                amount: 100
            }
        ],
        heatRequirement: "superheated"
    }).id('forge_frontier:mixing/molten_netherite_iron');

    // Creates Molten Netherite Gold Mixing Recipe
    event.custom({
        type: "create:mixing",
        ingredients: [
            {
                fluid: 'createfoundry:molten_netherite',
                amount: 700
            },
            {
                fluid: 'createfoundry:molten_gold',
                amount: 900
            }
        ],
        results: [
            {
                fluid: 'forge_frontier:molten_netherite_gold',
                amount: 100
            }
        ],
        heatRequirement: "superheated"
    }).id('forge_frontier:mixing/molten_netherite_gold');

    // Creates Molten Netherite Emerald Mixing Recipe
    event.custom({
        type: "create:mixing",
        ingredients: [
            {
                fluid: 'createfoundry:molten_netherite',
                amount: 700
            },
            {
                fluid: 'createfoundry:molten_emerald',
                amount: 900
            }
        ],
        results: [
            {
                fluid: 'forge_frontier:molten_netherite_emerald',
                amount: 100
            }
        ],
        heatRequirement: "superheated"
    }).id('forge_frontier:mixing/molten_netherite_emerald');

    // Creates Molten Netherite Diamond Mixing Recipe
    event.custom({
        type: "create:mixing",
        ingredients: [
            {
                fluid: 'createfoundry:molten_netherite',
                amount: 700
            },
            {
                fluid: 'createfoundry:molten_diamond',
                amount: 900
            }
        ],
        results: [
            {
                fluid: 'forge_frontier:molten_netherite_diamond',
                amount: 100
            }
        ],
        heatRequirement: "superheated"
    }).id('forge_frontier:mixing/molten_netherite_diamond');

    
    // Creates Polished Zinc to Molten Zinc Recipe
    event.custom({
        type: "create:mixing",
        ingredients: [
            {
                item: 'create_dd:zinc_tiled_block',
                nbt: {},
                amount: 1
            }
        ],
        results: [
            {
                fluid: 'createfoundry:molten_zinc',
                amount: 225
            }
        ],
        heatRequirement: "superheated"
    }).id('forge_frontier:mixing/tiled_zinc');

    // Creates Polished Zinc to Molten Zinc Recipe
    event.custom({
        type: "create:mixing",
        ingredients: [
            {
                item: 'create_dd:zinc_polished_block',
                nbt: {},
                amount: 1
            }
        ],
        results: [
            {
                fluid: 'createfoundry:molten_zinc',
                amount: 225
            }
        ],
        heatRequirement: "superheated"
    }).id('forge_frontier:mixing/polished_zinc');

// Molten Steel Compacting Recipe
    event.custom({
        type:"create:compacting",
        ingredients: [
            {
                fluid: 'forge_frontier:molten_steel',
                nbt: {},
                amount: 900
            },
        ],
        results: [
            {
                item: 'ad_astra:steel_block',
                nbt: {},
                amount: 1
            },
        ]
    }).id('forge_frontier:compacting/steel_block_old')

// Molten Steel Mixing Recipe
    event.custom({
        type: "create:mixing",
        ingredients: [
            {
                fluid: 'createfoundry:molten_carbon',
                nbt: {},
                amount: 100
            },
            {
                fluid: 'createfoundry:molten_iron',
                nbt: {},
                amount: 200
            }
        ],
        results: [
            {
            fluid: 'forge_frontier:molten_steel',
            amount: 300
            },
        ],
        heatRequirement: "superheated"
    }).id('forge_frontier:mixing/molten_steel');   

 // Bronze Compacting Recipe
    event.custom({
        type:"create:compacting",
        ingredients: [
            {
                fluid: 'forge_frontier:molten_bronze',
                nbt: {},
                amount: 900
            },
        ],
        results: [
            {
                item: 'create_dd:bronze_block',
                nbt: {},
                amount: 1
            },
        ]
    }).id('forge_frontier:compacting/bronze_block_old')

// Realistic Bronze Mixing Recipe
    event.custom({
        type: "create:mixing",
        ingredients: [
            {
                fluid: 'createfoundry:molten_copper',
                nbt: {},
                amount: 300
            },
            {
                fluid: 'forge_frontier:molten_tin',
                nbt: {},
                amount: 100
            },
            {
                fluid: 'createfoundry:molten_zinc',
                nbt: {},
                amount: 100
            },
        ],
        results: [
            {
            fluid: 'forge_frontier:molten_bronze',
            amount: 500
            },
        ],
        heatRequirement: "superheated"
    }).id('forge_frontier:mixing/molten_bronze');


    // Crushed Copper Pile
    event.custom({
        type: "create:mixing",
        ingredients: [
            {
                item: 'create_compressed:crushed_copper_pile',
                nbt: {},
                amount: 1
            }
        ],
        results: [
            {
                fluid: 'createfoundry:molten_copper',
                amount: 1800
            }
        ],
        heatRequirement: "superheated"
    }).id('forge_frontier:mixing/crushed_copper_pile');

    // Crushed Zinc Pile
    event.custom({
        type: "create:mixing",
        ingredients: [
            {
                item: 'create_compressed:crushed_zinc_pile',
                nbt: {},
                amount: 1
            }
        ],
        results: [
            {
                fluid: 'createfoundry:molten_zinc',
                amount: 1800
            }
        ],
        heatRequirement: "superheated"
    }).id('forge_frontier:mixing/crushed_zinc_pile');

    // Crushed Iron Pile
    event.custom({
        type: "create:mixing",
        ingredients: [
            {
                item: 'create_compressed:crushed_iron_pile',
                nbt: {},
                amount: 1
            }
        ],
        results: [
            {
                fluid: 'createfoundry:molten_iron',
                amount: 1800
            }
        ],
        heatRequirement: "superheated"
    }).id('forge_frontier:mixing/crushed_iron_pile');

    // Crushed Gold Pile
    event.custom({
        type: "create:mixing",
        ingredients: [
            {
                item: 'create_compressed:crushed_gold_pile',
                nbt: {},
                amount: 1
            }
        ],
        results: [
            {
                fluid: 'createfoundry:molten_gold',
                amount: 1800
            }
        ],
        heatRequirement: "superheated"
    }).id('forge_frontier:mixing/crushed_gold_pile');

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
    }).id('forge_frontier:mixing/lapis_ore');

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
    }).id('forge_frontier:mixing/redstone_ore');

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
    }).id('forge_frontier:mixing/zinc_ore');

    // Molten Tin to Tin Compacting Recipe
    event.custom({
        type: "create:compacting",
        ingredients: [
            {
                fluid: 'forge_frontier:molten_tin',
                nbt: {},
                amount: 900
            }
        ],
        results: [
            {
                item: 'create_dd:tin_block',
                amount: 1
            }
        ]
    }).id('forge_frontier:compacting/molten_tin');

    // Molten Quartz to Quartz Compacting Recipe
    event.custom({
        type: "create:compacting",
        ingredients: [
            {
                fluid: 'forge_frontier:molten_quartz',
                nbt: {},
                amount: 800
            }
        ],
        results: [
            {
                item: 'minecraft:quartz_block',
                amount: 1
            }
        ]
    }).id('forge_frontier:compacting/molten_quartz');

    // Molten Ice Shard to Ice Compacting Recipe
    event.custom({
        type: "create:compacting",
        ingredients: [
            {
                fluid: 'forge_frontier:molten_ice_shard',
                nbt: {},
                amount: 900
            }
        ],
        results: [
            {
                item: 'minecraft:ice',
                amount: 1
            }
        ]
    }).id('forge_frontier:compacting/molten_ice');

    // Molten Uranium to Uranium Compacting Recipe
    event.custom({
        type: "create:compacting",
        ingredients: [
            {
                fluid: 'forge_frontier:molten_uranium',
                nbt: {},
                amount: 900
            }
        ],
        results: [
            {
                item: 'alexscaves:block_of_uranium',
                amount: 1
            }
        ]
    }).id('forge_frontier:compacting/molten_uranium');

    // Molten Bismuth to Bismuth Compacting Recipe
    event.custom({
        type: "create:compacting",
        ingredients: [
            {
                fluid: 'forge_frontier:molten_bismuth',
                nbt: {},
                amount: 900
            }
        ],
        results: [
            {
                item: 'enlightened_end:bismuth_block',
                amount: 1
            }
        ]
    }).id('forge_frontier:compacting/molten_bismuth');

    // Molten Irradium to Irradium Compacting Recipe
    event.custom({
        type: "create:compacting",
        ingredients: [
            {
                fluid: 'forge_frontier:molten_irradium',
                nbt: {},
                amount: 900
            }
        ],
        results: [
            {
                item: 'enlightened_end:irradium_block',
                amount: 1
            }
        ]
    }).id('forge_frontier:compacting/molten_irradium');

    // Molten Malachite to Malachite Compacting Recipe
    event.custom({
        type: "create:compacting",
        ingredients: [
            {
                fluid: 'forge_frontier:molten_malachite',
                nbt: {},
                amount: 900
            }
        ],
        results: [
            {
                item: 'enlightened_end:malachite_block',
                amount: 1
            }
        ]
    }).id('forge_frontier:compacting/molten_malachite');

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
    }).id('forge_frontier:compacting/molten_copper');

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
    }).id('forge_frontier:compacting/molten_iron');

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
    }).id('forge_frontier:compacting/molten_gold');

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
    }).id('forge_frontier:compacting/molten_carbon');

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
    }).id('forge_frontier:compacting/molten_diamond');

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
    }).id('forge_frontier:compacting/molten_zinc');

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
    }).id('forge_frontier:compacting/molten_brass');

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
    }).id('forge_frontier:compacting/molten_emerald');

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
    }).id('forge_frontier:compacting/molten_redstone');

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
    }).id('forge_frontier:compacting/molten_lapis');

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
    }).id('forge_frontier:compacting/molten_netherite');

    // Modded Ore Mixing Recipes
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
    }).id('forge_frontier:mixing/ac_redstone_ore');

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
    }).id('forge_frontier:mixing/ac_coal_ore');

    // Create Dreams and Desires
        // Crushed Tin to Molten Mixing Recipe
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'create:crushed_raw_tin',
                    nbt: {},
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_tin',
                    amount: 200
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/dd_crushed_tin');

        // Tin Ingot to Molten Mixing Recipe
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'create_dd:tin_ingot',
                    nbt: {},
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_tin',
                    amount: 100
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/dd_tin_ingot');

        // Raw Tin to Molten Mixing Recipe
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'create_dd:raw_tin',
                    nbt: {},
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_tin',
                    amount: 200
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/dd_raw_tin');

        // Tin Ore to Molten Mixing Recipe
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    tag: 'forge:ores/tin',
                    nbt: {},
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_tin',
                    amount: 500
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 50
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/dd_tin_ore');

        // Raw Tin Block to Molten Mixing Recipe
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'create_dd:raw_tin_block',
                    nbt: {},
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_tin',
                    amount: 1800
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/dd_raw_tin_block');

        // Tin Block to Molten Mixing Recipe
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'create_dd:tin_block',
                    nbt: {},
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_tin',
                    amount: 900
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/dd_tin_block');

        // Enlightened End

        // Crushed Bismuth to Molten Mixing Recipe
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'forge_frontier:crushed_bismuth',
                    nbt: {},
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_bismuth',
                    amount: 200
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/crushed_bismuth');

        // Bismuth Ingot to Molten Mixing Recipe
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'enlightened_end:bismuth_ingot',
                    nbt: {},
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_bismuth',
                    amount: 100
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/bismuth_ingot_molten');

        // Raw Bismuth to Molten Mixing Recipe
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'enlightened_end:raw_bismuth',
                    nbt: {},
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_bismuth',
                    amount: 200
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/raw_bismuth');

        // Bismuth Ore to Molten Mixing Recipe
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'enlightened_end:bismuth_ore',
                    nbt: {},
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_bismuth',
                    amount: 500
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 50
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/bismuth_ore');

        // Raw Bismuth Block to Molten Mixing Recipe
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'enlightened_end:raw_bismuth_block',
                    nbt: {},
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_bismuth',
                    amount: 1800
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/raw_bismuth_block');

        // Bismuth Block to Molten Mixing Recipe
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'enlightened_end:bismuth_block',
                    nbt: {},
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_bismuth',
                    amount: 900
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/bismuth_block');

        // Crushed Malachite to Molten Mixing Recipe
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'forge_frontier:crushed_malachite',
                    nbt: {},
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_malachite',
                    amount: 200
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/crushed_malachite');

        // Malachite to Molten Mixing Recipe
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'enlightened_end:malachite',
                    nbt: {},
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_malachite',
                    amount: 100
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/malachite_ingot');

        // Malachite Ore to Molten Mixing Recipe
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'enlightened_end:malachite_ore',
                    nbt: {},
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_malachite',
                    amount: 500
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 50
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/malachite_ore');

        // Malachite Block to Molten Mixing Recipe
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'enlightened_end:malachite_block',
                    nbt: {},
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_malachite',
                    amount: 900
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/malachite_block');

    // Crushed Irradium to Molten Mixing Recipe
    event.custom({
        type: "create:mixing",
        ingredients: [
            {
                item: 'forge_frontier:crushed_irradium',
                nbt: {},
                amount: 1
            }
        ],
        results: [
            {
                fluid: 'forge_frontier:molten_irradium',
                amount: 200
            }
        ],
        heatRequirement: "superheated"
    }).id('forge_frontier:mixing/crushed_irradium');

    // Irradium Bar to Molten Mixing Recipe
    event.custom({
        type: "create:mixing",
        ingredients: [
            {
                item: 'enlightened_end:irradium_bar',
                nbt: {},
                amount: 1
            }
        ],
        results: [
            {
                fluid: 'forge_frontier:molten_irradium',
                amount: 100
            }
        ],
        heatRequirement: "superheated"
    }).id('forge_frontier:mixing/irradium_ingot');

    // Raw Irradium to Molten Mixing Recipe
    event.custom({
        type: "create:mixing",
        ingredients: [
            {
                item: 'enlightened_end:raw_irradium',
                nbt: {},
                amount: 1
            }
        ],
        results: [
            {
                fluid: 'forge_frontier:molten_irradium',
                amount: 200
            }
        ],
        heatRequirement: "superheated"
    }).id('forge_frontier:mixing/raw_irradium');

    // Irradium Ore to Molten Mixing Recipe
    event.custom({
        type: "create:mixing",
        ingredients: [
            {
                item: 'enlightened_end:irradium_ore',
                nbt: {},
                amount: 1
            }
        ],
        results: [
            {
                fluid: 'forge_frontier:molten_irradium',
                amount: 500
            },
            {
                fluid: 'minecraft:lava',
                amount: 50
            }
        ],
        heatRequirement: "superheated"
    }).id('forge_frontier:mixing/irradium_ore');

    // Raw Irradium Block to Molten Mixing Recipe
    event.custom({
        type: "create:mixing",
        ingredients: [
            {
                item: 'enlightened_end:raw_irradium_block',
                nbt: {},
                amount: 1
            }
        ],
        results: [
            {
                fluid: 'forge_frontier:molten_irradium',
                amount: 1800
            }
        ],
        heatRequirement: "superheated"
    }).id('forge_frontier:mixing/raw_irradium_block');

    // Irradium Block to Molten Mixing Recipe
    event.custom({
        type: "create:mixing",
        ingredients: [
            {
                item: 'enlightened_end:irradium_block',
                nbt: {},
                amount: 1
            }
        ],
        results: [
            {
                fluid: 'forge_frontier:molten_irradium',
                amount: 900
            }
        ],
        heatRequirement: "superheated"
    }).id('forge_frontier:mixing/irradium_block'); 
    
    // Alex Caves

    // Crushed Uranium to Molten Mixing Recipe
    event.custom({
        type: "create:mixing",
        ingredients: [
            {
                item: 'create:crushed_raw_uranium',
                nbt: {},
                amount: 1
            }
        ],
        results: [
            {
                fluid: 'forge_frontier:molten_uranium',
                amount: 200
            }
        ],
        heatRequirement: "superheated"
    }).id('forge_frontier:mixing/crushed_uranium');

    // Uranium to Molten Mixing Recipe
    event.custom({
        type: "create:mixing",
        ingredients: [
            {
                item: 'alexscaves:uranium',
                nbt: {},
                amount: 1
            }
        ],
        results: [
            {
                fluid: 'forge_frontier:molten_uranium',
                amount: 100
            }
        ],
        heatRequirement: "superheated"
    }).id('forge_frontier:mixing/uranium_ingot');

    // Uranium Ore to Molten Mixing Recipe
    event.custom({
        type: "create:mixing",
        ingredients: [
            {
                item: 'alexscaves:radrock_uranium_ore',
                nbt: {},
                amount: 1
            }
        ],
        results: [
            {
                fluid: 'forge_frontier:molten_uranium',
                amount: 500
            },
            {
                fluid: 'minecraft:lava',
                amount: 50
            }
        ],
        heatRequirement: "superheated"
    }).id('forge_frontier:mixing/uranium_ore');

    // Uranium Block to Molten Mixing Recipe
    event.custom({
        type: "create:mixing",
        ingredients: [
            {
                item: 'alexscaves:block_of_uranium',
                nbt: {},
                amount: 1
            }
        ],
        results: [
            {
                fluid: 'forge_frontier:molten_uranium',
                amount: 900
            }
        ],
        heatRequirement: "superheated"
    }).id('forge_frontier:mixing/uranium_block');

    // Quartz to Molten Mixing Recipe
    event.custom({
        type: "create:mixing",
        ingredients: [
            {
                item: 'minecraft:quartz',
                nbt: {},
                amount: 1
            }
        ],
        results: [
            {
                fluid: 'forge_frontier:molten_quartz',
                amount: 200
            }
        ],
        heatRequirement: "superheated"
    }).id('forge_frontier:mixing/old_quartz_molten');

    // Quartz Ore to Molten Mixing Recipe
    event.custom({
        type: "create:mixing",
        ingredients: [
            {
                tag: 'forge:ores/quartz',
                nbt: {},
                amount: 1
            }
        ],
        results: [
            {
                fluid: 'forge_frontier:molten_quartz',
                amount: 600
            },
            {
                fluid: 'minecraft:lava',
                amount: 50
            }
        ],
        heatRequirement: "superheated"
    }).id('forge_frontier:mixing/quartz_ore');

    // Quartz Block to Molten Mixing Recipe
    event.custom({
        type: "create:mixing",
        ingredients: [
            {
                item: 'minecraft:quartz_block',
                nbt: {},
                amount: 1
            }
        ],
        results: [
            {
                fluid: 'forge_frontier:molten_quartz',
                amount: 800
            }
        ],
        heatRequirement: "superheated"
    }).id('forge_frontier:mixing/quartz_block');

    
        // Ice Shard to Molten Mixing Recipe
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'ad_astra:ice_shard',
                    nbt: {},
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_ice_shard',
                    amount: 200
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/old_ice_shard_molten');

        // Ice Shard Ore to Molten Mixing Recipe
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    tag: 'forge:ores/ice_shard',
                    nbt: {},
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_ice_shard',
                    amount: 500
                },
                {
                    fluid: 'minecraft:water',
                    amount: 50
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/ice_shard_ore');


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
    }).id('forge_frontier:mixing/cut_copper');


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
    }).id('forge_frontier:mixing/molten_netherite');

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
    }).id('forge_frontier:mixing/molten_brass');

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
        }).id('forge_frontier:mixing/crushed_iron');


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
    }).id('forge_frontier:mixing/crushed_gold');


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
    }).id('forge_frontier:mixing/crushed_copper');

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
    }).id('forge_frontier:mixing/crushed_zinc');

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
    }).id('forge_frontier:mixing/raw_emerald');
    
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
    }).id('forge_frontier:mixing/raw_diamond');
    
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
    }).id('forge_frontier:mixing/raw_redstone');

})