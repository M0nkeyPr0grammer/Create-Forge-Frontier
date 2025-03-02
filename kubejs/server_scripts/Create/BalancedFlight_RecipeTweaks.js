// Create: Balanced Flight Recipe Tweaks
ServerEvents.recipes(event => {

    // Sequenced Assembly
        // New Recipe for Flight Anchor
        event.remove({ id: 'balancedflight:sequenced_assembly/flight_anchor'})
        event.custom({
            type: 'create:sequenced_assembly',
            ingredient: {
            item: 'minecraft:beacon'
            },
            loops: 1,
            results: [
            {
                chance: 100.0,
                item: 'balancedflight:flight_anchor'
            }
            ],
            sequence: [
            {
                type: 'create:deploying',
                ingredients: [
                {
                    item: 'minecraft:beacon'
                },
                {
                    item: 'createteleporters:quantum_mechanism'
                }
                ],
                results: [
                {
                    item: 'minecraft:beacon'
                }
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                {
                    item: 'minecraft:beacon'
                },
                {
                    item: 'create_dd:blaze_gold_casing'
                }
                ],
                results: [
                {
                    item: 'minecraft:beacon'
                }
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                {
                    item: 'minecraft:beacon'
                },
                {
                    item: 'create_dd:bronze_block'
                }
                ],
                results: [
                {
                    item: 'minecraft:beacon'
                }
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                {
                    item: 'minecraft:beacon'
                },
                {
                    item: 'minecraft:glass'
                }
                ],
                results: [
                {
                    item: 'minecraft:beacon'
                }
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                {
                    item: 'minecraft:beacon'
                },
                {
                    item: 'minecraft:feather'
                }
                ],
                results: [
                {
                    item: 'minecraft:beacon'
                }
                ]
            }
            ],
            transitionalItem: {
            item: 'minecraft:beacon'
            }
        })

    // Mechanical Crafting
        // Ascended Flight Ring
        event.remove({ id: 'create:mechanical_crafting/ascended_flight_ring'})
        event.custom({
            type: "create:mechanical_crafting",
            pattern: [
                ' CCCCC ',
                'CCCNCCC',
                'CCOSOCC',
                'CNSESNC',
                'CCOSOCC',
                'CCCNCCC',
                ' CCCCC '
            ],
            key: {
                C: Ingredient.of('ad_astra:calorite_block').toJson(),
                O: Ingredient.of('forge_frontier:overcharged_netherite_block').toJson(),
                N: Ingredient.of('minecraft:nether_star').toJson(),
                E: Ingredient.of('create_sa:netherite_jetpack_chestplate').toJson(),
                S: Ingredient.of('forge_frontier:overcharged_netherite_ingot').toJson()
            },
            result: Ingredient.of('balancedflight:ascended_flight_ring').toJson(),
            acceptMirrored: false
        }).id('forge_frontier:mechanical_crafting/ascended_flight_ring'); 

})