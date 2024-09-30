ServerEvents.recipes(event => {
// Ore Seething Recipes
    // Crushed Lead Pile
    event.custom({
        type: "create_dd:superheating",
        ingredients: [
            {
                item: 'forge_frontier:crushed_lead_pile'
            }
        ],
        results: [
            {
                item: 'tfmg:lead_block'
            },
            {
                chance: 0.60,
                item: 'tfmg:lead_block'
            }
        ]
    }).id('forge_frontier:seething/crushed_lead_pile')    

    // Crushed Aluminum Pile
    event.custom({
        type: "create_dd:superheating",
        ingredients: [
            {
                item: 'forge_frontier:crushed_aluminum_pile'
            }
        ],
        results: [
            {
                item: 'tfmg:aluminum_block'
            },
            {
                chance: 0.60,
                item: 'tfmg:aluminum_block'
            }
        ]
    }).id('forge_frontier:seething/crushed_aluminum_pile')       

    // Crushed Raw Redstone
    event.custom({
        type: "create_dd:superheating",
        ingredients: [
            {
                item: 'forge_frontier:crushed_redstone'
            }
        ],
        results: [
            {
                item: 'minecraft:redstone'
            },
            {
                chance: 0.75,
                item: 'minecraft:redstone'
            }
        ]
    }).id('forge_frontier:seething/crushed_redstone')

    // Crushed Bismuth Pile
    event.custom({
        type: "create_dd:superheating",
        ingredients: [
            {
                item: 'forge_frontier:crushed_bismuth_pile'
            }
        ],
        results: [
            {
                item: 'enlightened_end:bismuth_block'
            },
            {
                chance: 0.60,
                item: 'enlightened_end:bismuth_block'
            }
        ]
    }).id('forge_frontier:seething/crushed_bismuth_pile')

    // Crushed Calorite Pile
    event.custom({
        type: "create_dd:superheating",
        ingredients: [
            {
                item: 'forge_frontier:crushed_calorite_pile'
            }
        ],
        results: [
            {
                item: 'ad_astra:calorite_block'
            },
            {
                chance: 0.60,
                item: 'ad_astra:calorite_block'
            }
        ]
    }).id('forge_frontier:seething/crushed_calorite_pile')

    // Crushed Desh Pile
    event.custom({
        type: "create_dd:superheating",
        ingredients: [
            {
                item: 'forge_frontier:crushed_desh_pile'
            }
        ],
        results: [
            {
                item: 'ad_astra:desh_block'
            },
            {
                chance: 0.60,
                item: 'ad_astra:desh_block'
            }
        ]
    }).id('forge_frontier:seething/crushed_desh_pile')

    // Crushed Irradium Pile
    event.custom({
        type: "create_dd:superheating",
        ingredients: [
            {
                item: 'forge_frontier:crushed_irradium_pile'
            }
        ],
        results: [
            {
                item: 'enlightened_end:irradium_block'
            },
            {
                chance: 0.60,
                item: 'enlightened_end:irradium_block'
            }
        ]
    }).id('forge_frontier:seething/crushed_irradium_pile')

    // Crushed Malachite Pile
    event.custom({
        type: "create_dd:superheating",
        ingredients: [
            {
                item: 'forge_frontier:crushed_malachite_pile'
            }
        ],
        results: [
            {
                item: 'enlightened_end:malachite_block'
            },
            {
                chance: 0.60,
                item: 'enlightened_end:malachite_block'
            }
        ]
    }).id('forge_frontier:seething/crushed_malachite_pile')

    // Crushed Ostrum Pile
    event.custom({
        type: "create_dd:superheating",
        ingredients: [
            {
                item: 'forge_frontier:crushed_ostrum_pile'
            }
        ],
        results: [
            {
                item: 'ad_astra:ostrum_block'
            },
            {
                chance: 0.60,
                item: 'ad_astra:ostrum_block'
            }
        ]
    }).id('forge_frontier:seething/crushed_ostrum_pile')

    // Crushed Tin Pile
    event.custom({
        type: "create_dd:superheating",
        ingredients: [
            {
                item: 'forge_frontier:crushed_tin_pile'
            }
        ],
        results: [
            {
                item: 'create_dd:tin_block'
            },
            {
                chance: 0.60,
                item: 'create_dd:tin_block'
            }
        ]
    }).id('forge_frontier:seething/crushed_tin_pile')

    // Crushed Uranium Pile
    event.custom({
        type: "create_dd:superheating",
        ingredients: [
            {
                item: 'forge_frontier:crushed_uranium_pile'
            }
        ],
        results: [
            {
                item: 'alexscaves:block_of_uranium'
            },
            {
                chance: 0.60,
                item: 'alexscaves:block_of_uranium'
            }
        ]
    }).id('forge_frontier:seething/crushed_uranium_pile')

    // Crushed Iron Pile
    event.custom({
        type: "create_dd:superheating",
        ingredients: [
            {
                item: 'create_compressed:crushed_iron_pile'
            }
        ],
        results: [
            {
                item: 'minecraft:iron_block'
            },
            {
                chance: 0.60,
                item: 'minecraft:iron_block'
            }
        ]
    }).id('forge_frontier:seething/crushed_iron_pile')

    // Crushed Gold Pile
    event.custom({
        type: "create_dd:superheating",
        ingredients: [
            {
                item: 'create_compressed:crushed_gold_pile'
            }
        ],
        results: [
            {
                item: 'minecraft:gold_block'
            },
            {
                chance: 0.60,
                item: 'minecraft:gold_block'
            }
        ]
    }).id('forge_frontier:seething/crushed_gold_pile')

    // Crushed Copper Pile
    event.custom({
        type: "create_dd:superheating",
        ingredients: [
            {
                item: 'create_compressed:crushed_copper_pile'
            }
        ],
        results: [
            {
                item: 'minecraft:copper_block'
            },
            {
                chance: 0.60,
                item: 'minecraft:copper_block'
            }
        ]
    }).id('forge_frontier:seething/crushed_copper_pile')

    // Crushed Zinc Pile
    event.custom({
        type: "create_dd:superheating",
        ingredients: [
            {
                item: 'create_compressed:crushed_zinc_pile'
            }
        ],
        results: [
            {
                item: 'create:zinc_block'
            },
            {
                chance: 0.60,
                item: 'create:zinc_block'
            }
        ]
    }).id('forge_frontier:seething/crushed_zinc_pile')

})