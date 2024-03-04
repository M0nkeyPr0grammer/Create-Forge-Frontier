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
                item: 'kubejs:netherite_specks',
                amount: 2
            }
        ],
        heatRequirement: "superheated"
    }).id('kubejs:mixing/netherite_specks');

    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: {
            item: 'kubejs:netherite_specks'
        },
        loops: 3,
        results: [
            {
                item: 'kubejs:netherite_dust'
            }
        ],
        sequence: [
            {
                type: 'create:filling',
                ingredients: [
                    {
                        item: 'kubejs:incomplete_netherite_dust',

                    }, 
                    {
                        fluid: 'minecraft:lava',
                        amount: 200,
                        nbt: {}
                    }
                ],
                results: [ 
                    {
                        item: 'kubejs:incomplete_netherite_dust'
                    }
                ]
            },
            {
                type: 'create:pressing',
                ingredients: [ 
                    {
                        item: 'kubejs:incomplete_netherite_dust'
                    }
                ],
                results: [ 
                    {
                        item: 'kubejs:incomplete_netherite_dust'
                    }
                ]
            }
        ],
        transitionalItem: {
            item: 'kubejs:incomplete_netherite_dust'
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
			A: Ingredient.of('kubejs:netherite_dust').toJson(),
			B: Ingredient.of('minecraft:wither_skeleton_skull').toJson(),
			C: Ingredient.of('create_dd:chromatic_compound').toJson()
		},
		result: Ingredient.of('minecraft:netherite_ingot').toJson(),
		acceptMirrored: false
	}).id('kubejs:create/netherite_ingot');

})