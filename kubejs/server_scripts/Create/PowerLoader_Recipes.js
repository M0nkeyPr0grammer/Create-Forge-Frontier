ServerEvents.recipes(event => {
event.remove({ id: 'create_power_loader:crafting/empty_andesite_chunk_loader'})
event.remove({ id: 'create_power_loader:crafting/empty_brass_chunk_loader'})

    // Creates Empty Andesite Chunk Loader
	event.custom({
		type: 'create:mechanical_crafting',
		pattern: [
			'RRR',
			'RQR',
			'CCC'
		],
		key: {
			R: Ingredient.of('create_new_age:reactor_glass').toJson(),
			Q: Ingredient.of('createteleporters:quantum_mechanism').toJson(),
			C: Ingredient.of('create_dd:netherite_casing').toJson()
		},
		result: Ingredient.of('create_power_loader:empty_andesite_chunk_loader').toJson(),
		acceptMirrored: false
	}).id('forge_frontier:mechancial_crafting/empty_andesite_chunk_loader');

// Creates Sequenced Assembly Recipe for Empty Andesite Chunk Loader
    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: {
        item: 'create_power_loader:empty_andesite_chunk_loader'
        },
        loops: 5,
        results: [
        {
            chance: 100,
            item: 'create_power_loader:empty_brass_chunk_loader'
        }
        ],
        sequence: [
        {
            type: 'create:deploying',
            ingredients: [
            {
                item: 'create_power_loader:empty_andesite_chunk_loader'
            },
            {
                item: 'create_dd:blaze_gold'
            }
            ],
            results: [
            {
                item: 'create_power_loader:empty_andesite_chunk_loader'
            }
            ]
        },
        {
            type: 'create:deploying',
            ingredients: [
            {
                item: 'create_power_loader:empty_andesite_chunk_loader'
            },
            {
                item: 'ad_astra:calorite_ingot'
            }
            ],
            results: [
            {
                item: 'create_power_loader:empty_andesite_chunk_loader'
            }
            ]
        },
        {
            type: 'create:deploying',
            ingredients: [
            {
                item: 'create_power_loader:empty_andesite_chunk_loader'
            },
            {
                item: 'create_dd:mithril_ingot'
            }
            ],
            results: [
            {
                item: 'create_power_loader:empty_andesite_chunk_loader'
            }
            ]
        },
        {
            type: 'create:pressing',
            ingredients: [
            {
                item: 'create_power_loader:empty_andesite_chunk_loader'
            }
            ],
            results: [
            {
                item: 'create_power_loader:empty_andesite_chunk_loader'
            }
            ]
        }
        ],
        transitionalItem: {
        item: 'create_power_loader:empty_andesite_chunk_loader'
        }
    }).id('forge_frontier:sequenced_assembly/empty_brass_chunk_loader');

// Creates Sequenced Assembly Recipe for Brass Chunk Loader
event.custom({
    type: 'create:sequenced_assembly',
    ingredient: {
    item: 'create_power_loader:andesite_chunk_loader'
    },
    loops: 5,
    results: [
    {
        chance: 100,
        item: 'create_power_loader:brass_chunk_loader'
    }
    ],
    sequence: [
    {
        type: 'create:deploying',
        ingredients: [
        {
            item: 'create_power_loader:andesite_chunk_loader'
        },
        {
            item: 'create_dd:blaze_gold'
        }
        ],
        results: [
        {
            item: 'create_power_loader:andesite_chunk_loader'
        }
        ]
    },
    {
        type: 'create:deploying',
        ingredients: [
        {
            item: 'create_power_loader:andesite_chunk_loader'
        },
        {
            item: 'ad_astra:calorite_ingot'
        }
        ],
        results: [
        {
            item: 'create_power_loader:andesite_chunk_loader'
        }
        ]
    },
    {
        type: 'create:deploying',
        ingredients: [
        {
            item: 'create_power_loader:andesite_chunk_loader'
        },
        {
            item: 'create_dd:mithril_ingot'
        }
        ],
        results: [
        {
            item: 'create_power_loader:andesite_chunk_loader'
        }
        ]
    },
    {
        type: 'create:pressing',
        ingredients: [
        {
            item: 'create_power_loader:andesite_chunk_loader'
        }
        ],
        results: [
        {
            item: 'create_power_loader:andesite_chunk_loader'
        }
        ]
    }
    ],
    transitionalItem: {
    item: 'create_power_loader:andesite_chunk_loader'
    }
}).id('forge_frontier:sequenced_assembly/brass_chunk_loader');
    
})