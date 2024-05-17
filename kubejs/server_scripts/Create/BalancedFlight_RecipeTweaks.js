ServerEvents.recipes(event => {

    // Removes old recipe
    event.remove({ id: 'balancedflight:sequenced_assembly/flight_anchor'})

    // New Recipe for Flight Anchor
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
})