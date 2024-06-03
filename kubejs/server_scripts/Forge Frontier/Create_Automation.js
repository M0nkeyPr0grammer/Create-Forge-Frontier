ServerEvents.recipes(event => {

    event.custom({
        type: "create:mixing",
        ingredients: [
            {
                item: 'create:powdered_obsidian',
                amount: 1
            },
            {
                item: 'create:cinder_flour',
                amount: 1
            }
        ],
        results: [
            {
                item: 'forge_frontier:netherite_specks',
                amount: 2
            }
        ],
        heatRequirement: "superheated"
    }).id('forge_frontier:mixing/netherite_specks');

    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: {
            item: 'forge_frontier:netherite_specks'
        },
        loops: 3,
        results: [
            {
                item: 'forge_frontier:netherite_dust'
            }
        ],
        sequence: [
            {
                type: 'create:filling',
                ingredients: [
                    {
                        item: 'forge_frontier:incomplete_netherite_dust',

                    }, 
                    {
                        fluid: 'minecraft:lava',
                        amount: 200,
                        nbt: {}
                    }
                ],
                results: [ 
                    {
                        item: 'forge_frontier:incomplete_netherite_dust'
                    }
                ]
            },
            {
                type: 'create:pressing',
                ingredients: [ 
                    {
                        item: 'forge_frontier:incomplete_netherite_dust'
                    }
                ],
                results: [ 
                    {
                        item: 'forge_frontier:incomplete_netherite_dust'
                    }
                ]
            }
        ],
        transitionalItem: {
            item: 'forge_frontier:incomplete_netherite_dust'
        }
    });

    event.custom({
		type: "create:mechanical_crafting",
		pattern: [
			'AAA',
			'ABA',
			'CCC'
		],
		key: {
			A: Ingredient.of('forge_frontier:netherite_dust').toJson(),
			B: Ingredient.of('minecraft:wither_skeleton_skull').toJson(),
			C: Ingredient.of('create_dd:chromatic_compound').toJson()
		},
		result: Ingredient.of('minecraft:netherite_ingot').toJson(),
		acceptMirrored: false
	}).id('forge_frontier:create/netherite_ingot');

})