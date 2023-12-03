// Create Foundry Tweaks
ServerEvents.recipes(event => {

    // Create Copper Block Compacting Recipe
    event.custom({
        type: "create:compacting",
        ingredients: [
            {
                fluid: 'createfoundry:molten_copper',
                nbt: {},
                amount: 72900
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
                amount: 72900 
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
                amount: 72900
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
                amount: 72900
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
                amount: 72900
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
                amount: 72900
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
                amount: 72900
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
                amount: 72900
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
                amount: 72900
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
                amount: 72900
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
                amount: 72900
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
                amount: 72900
            }
        ],
        results: [
            {
                item: 'minecraft:netherite_block',
                amount: 1
            }
        ]
    }).id('kubejs:compacting/molten_netherite');

    // Create Molten Diamond Compacting Recipe
    event.custom({
        type: "create:compacting",
        ingredients: [
            {
                fluid: 'createfoundry:molten_carbon',
                nbt: {},
                amount: 8100
            }
        ],
        results: [
            {
                fluid: 'createfoundry:molten_diamond',
                amount: 8100
            }
        ],
        heatRequirement: "superheated"
    }).id('kubejs:compacting/molten_diamond_carbon');

    // Modded Ore Mixing Recipes
    // Universal Ores
        // Granite Redstone Ore
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'universal_ores:granite_redstone_ore',
                    nbt: {},
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'createfoundry:molten_redstone',
                    amount: 121500
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 4050
                },
            ],
            heatRequirement: "superheated"
        }).id('kubejs:mixing/granite_redstone_ore');

        // Diorite Redstone Ore
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'universal_ores:diorite_redstone_ore',
                    nbt: {},
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'createfoundry:molten_redstone',
                    amount: 121500
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 4050
                },
            ],
            heatRequirement: "superheated"
        }).id('kubejs:mixing/diorite_redstone_ore');

        // Andesite Redstone Ore
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'universal_ores:andesite_redstone_ore',
                    nbt: {},
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'createfoundry:molten_redstone',
                    amount: 121500
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 4050
                },
            ],
            heatRequirement: "superheated"
        }).id('kubejs:mixing/andesite_redstone_ore');

        // Tuff Redstone Ore
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'universal_ores:tuff_redstone_ore',
                    nbt: {},
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'createfoundry:molten_redstone',
                    amount: 121500
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 4050
                },
            ],
            heatRequirement: "superheated"
        }).id('kubejs:mixing/tuff_redstone_ore');

        // Calcite Redstone Ore
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'universal_ores:calcite_redstone_ore',
                    nbt: {},
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'createfoundry:molten_redstone',
                    amount: 121500
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 4050
                },
            ],
            heatRequirement: "superheated"
        }).id('kubejs:mixing/calcite_redstone_ore');

    // Spelunkery Ores
        // Calcite Redstone Ore
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'spelunkery:calcite_redstone_ore',
                    nbt: {},
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'createfoundry:molten_redstone',
                    amount: 121500
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 4050
                },
            ],
            heatRequirement: "superheated"
        }).id('kubejs:mixing/s_calcite_redstone_ore');

        // Sandstone Lapis Ore
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'spelunkery:sandstone_lapis_ore',
                    nbt: {},
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'createfoundry:molten_lapis',
                    amount: 121500
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 4050
                },
            ],
            heatRequirement: "superheated"
        }).id('kubejs:mixing/s_sandstone_lapis_ore');

        // Smooth Basalt Diamond Ore
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'spelunkery:smooth_basalt_diamond_ore',
                    nbt: {},
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'createfoundry:molten_diamond',
                    amount: 40500
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 4050
                },
            ],
            heatRequirement: "superheated"
        }).id('kubejs:mixing/s_basalt_diamond_ore');

        // Granite Ores
            // Coal Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:granite_coal_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_carbon',
                        amount: 40500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('kubejs:mixing/s_g_coal_ore');

            // Iron Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:granite_iron_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_iron',
                        amount: 40500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('kubejs:mixing/s_g_iron_ore');

            // Copper Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:granite_copper_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_copper',
                        amount: 40500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('kubejs:mixing/s_g_copper_ore');

            // Gold Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:granite_gold_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_gold',
                        amount: 40500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('kubejs:mixing/s_g_gold_ore');

            // Redstone Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:granite_redstone_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_redstone',
                        amount: 121500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('kubejs:mixing/s_g_redstone_ore');

            // Emerald Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:granite_emerald_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_emerald',
                        amount: 40500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('kubejs:mixing/s_g_emerald_ore');

            // Lapis Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:granite_lapis_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_lapis',
                        amount: 121500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('kubejs:mixing/s_g_lapis_ore');

            // Diamond Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:granite_diamond_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_diamond',
                        amount: 40500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('kubejs:mixing/s_g_diamond_ore');

            // Zinc Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:granite_zinc_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_zinc',
                        amount: 40500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('kubejs:mixing/s_g_zinc_ore');

        // Diorite Ores
            // Coal Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:diorite_coal_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_carbon',
                        amount: 40500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('kubejs:mixing/s_d_coal_ore');

            // Iron Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:diorite_iron_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_iron',
                        amount: 40500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('kubejs:mixing/s_d_iron_ore');

            // Copper Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:diorite_copper_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_copper',
                        amount: 40500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('kubejs:mixing/s_d_copper_ore');

            // Gold Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:diorite_gold_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_gold',
                        amount: 40500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('kubejs:mixing/s_d_gold_ore');

            // Redstone Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:diorite_redstone_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_redstone',
                        amount: 121500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('kubejs:mixing/s_d_redstone_ore');

            // Emerald Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:diorite_emerald_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_emerald',
                        amount: 40500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('kubejs:mixing/s_d_emerald_ore');

            // Lapis Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:diorite_lapis_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_lapis',
                        amount: 121500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('kubejs:mixing/s_d_lapis_ore');

            // Diamond Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:diorite_diamond_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_diamond',
                        amount: 40500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('kubejs:mixing/s_d_diamond_ore');

            // Zinc Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:diorite_zinc_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_zinc',
                        amount: 40500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('kubejs:mixing/s_d_zinc_ore');

        // Tuff Ores
            // Coal Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:tuff_coal_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_carbon',
                        amount: 40500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('kubejs:mixing/s_t_coal_ore');

            // Iron Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:tuff_iron_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_iron',
                        amount: 40500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('kubejs:mixing/s_t_iron_ore');

            // Copper Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:tuff_copper_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_copper',
                        amount: 40500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('kubejs:mixing/s_t_copper_ore');

            // Gold Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:tuff_gold_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_gold',
                        amount: 40500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('kubejs:mixing/s_t_gold_ore');

            // Redstone Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:tuff_redstone_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_redstone',
                        amount: 121500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('kubejs:mixing/s_t_redstone_ore');

            // Emerald Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:tuff_emerald_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_emerald',
                        amount: 40500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('kubejs:mixing/s_t_emerald_ore');

            // Lapis Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:tuff_lapis_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_lapis',
                        amount: 121500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('kubejs:mixing/s_t_lapis_ore');

            // Diamond Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:tuff_diamond_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_diamond',
                        amount: 40500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('kubejs:mixing/s_t_diamond_ore');

            // Zinc Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:tuff_zinc_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_zinc',
                        amount: 40500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('kubejs:mixing/s_t_zinc_ore');

        // Andesite Ores
            // Coal Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:andesite_coal_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_carbon',
                        amount: 40500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('kubejs:mixing/s_a_coal_ore');

            // Iron Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:andesite_iron_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_iron',
                        amount: 40500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('kubejs:mixing/s_a_iron_ore');

            // Copper Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:andesite_copper_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_copper',
                        amount: 40500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('kubejs:mixing/s_a_copper_ore');

            // Gold Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:andesite_gold_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_gold',
                        amount: 40500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('kubejs:mixing/s_a_gold_ore');

            // Redstone Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:andesite_redstone_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_redstone',
                        amount: 121500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('kubejs:mixing/s_a_redstone_ore');

            // Emerald Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:andesite_emerald_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_emerald',
                        amount: 40500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('kubejs:mixing/s_a_emerald_ore');

            // Lapis Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:andesite_lapis_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_lapis',
                        amount: 121500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('kubejs:mixing/s_a_lapis_ore');

            // Diamond Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:andesite_diamond_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_diamond',
                        amount: 40500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('kubejs:mixing/s_a_diamond_ore');

            // Zinc Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:andesite_zinc_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_zinc',
                        amount: 40500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('kubejs:mixing/s_a_zinc_ore');

        // Better Nether Ores
            // Redstone Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'betternether:nether_redstone_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_redstone',
                        amount: 121500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('kubejs:mixing/b_redstone_ore');

            // Lapis Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'betternether:nether_lapis_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_lapis',
                        amount: 121500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('kubejs:mixing/b_lapis_ore');

    // Andesite Cut Copper Mixing Recipe
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
                amount: 72900
            }
        ],
        heatRequirement: "superheated"
    }).id('kubejs:mixing/cut_copper');

    // Creates Mixing Recipe for Molten Netherite
    event.custom({
        type: "create:mixing",
        ingredients: [
            { fluid: 'createfoundry:molten_ancient_debris', amount: 8100 },
            { fluid: 'createfoundry:molten_gold', amount: 8100 }
        ],
        results: [
            { fluid: 'createfoundry:molten_netherite', amount: 8100 }
        ],
        heatRequirement: 'superheated'
    }).id('kubejs:mixing/molten_netherite');

    // Molten Brass
    event.custom({
        type: "create:mixing",
        ingredients: [
            { fluid: 'createfoundry:molten_zinc', amount: 81000 },
            { fluid: 'createfoundry:molten_copper', amount: 81000 }
        ],
        results: [
            { fluid: 'createfoundry:molten_brass', amount: 81000 }
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
                    amount: 16200
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
                amount: 16200
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
                amount: 16200
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
                amount: 16200
            }
        ],
        heatRequirement: "superheated"
    }).id('kubejs:mixing/crushed_zinc');

    // Redstone Ore Fix
    event.custom({
        type: "create:mixing",
        ingredients: [
            {
                tag: "minecraft:redstone_ores"
            }
        ],
        results: [
            {
                fluid: "createfoundry:molten_redstone",
                amount: 81000
            },
            {
                item: "minecraft:redstone",
                count: 5
            },
            {
                fluid: "minecraft:lava",
                amount: 4050
            }
        ],
        heatRequirement: "superheated"
    }).id('kubejs:mixing/redstone_ores')

    // Lapis Ore Fix
    event.custom({
        type: "create:mixing",
        ingredients: [
            {
                tag: "minecraft:lapis_ores"
            }
        ],
        results: [
            {
                fluid: "createfoundry:molten_lapis",
                amount: 81000
            },
            {
                item: "minecraft:lapis_lazuli",
                count: 5
            },
            {
                fluid: "minecraft:lava",
                amount: 4050
            }
        ],
        heatRequirement: "superheated"
    }).id('kubejs:mixing/lapis_ores')

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
                amount: 16200
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
                amount: 16200
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
                amount: 16200
            }
        ],
        heatRequirement: "superheated"
    }).id('kubejs:mixing/raw_redstone');

})