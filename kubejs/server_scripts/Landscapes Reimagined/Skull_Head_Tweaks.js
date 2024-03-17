ServerEvents.recipes(event => {

    // Compressed Bone to Mold Template
    event.custom({
        type:"create:compacting",
        ingredients: [
            {
                item: 'allthecompressed:bone_block_3x',
                amount: 1
            },
        ],
        results: [
            {
                item: 'kubejs:mold_template',
                amount: 1
            },
        ],
        heatRequirement: "superheated"
    }).id('kubejs:compacting/mold_template')

    // Mold Template to Skull Mold Recipe 1
    event.custom({
        type:"create:compacting",
        ingredients: [
            {
                item: 'kubejs:mold_template',
                amount: 1
            },
            {
                item: 'minecraft:skeleton_skull'
            }
        ],
        results: [
            {
                item: 'kubejs:skull_mold',
                amount: 1
            },
            {
                item: 'minecraft:skeleton_skull'
            }
        ],
        heatRequirement: "superheated"
    }).id('kubejs:compacting/skull_mold_1')

    // Mold Template to Skull Mold Recipe 2
    event.custom({
        type:"create:compacting",
        ingredients: [
            {
                item: 'kubejs:mold_template',
                amount: 1
            },
            {
                item: 'minecraft:wither_skeleton_skull'
            }
        ],
        results: [
            {
                item: 'kubejs:skull_mold',
                amount: 1
            },
            {
                item: 'minecraft:wither_skeleton_skull'
            }
        ],
        heatRequirement: "superheated"
    }).id('kubejs:compacting/skull_mold_2')

    // Mold Template to Skull Mold Recipe 3
    event.custom({
        type:"create:compacting",
        ingredients: [
            {
                item: 'kubejs:mold_template',
                amount: 1
            },
            {
                item: 'minecraft:player_head'
            }
        ],
        results: [
            {
                item: 'kubejs:skull_mold',
                amount: 1
            },
            {
                item: 'minecraft:player_head'
            }
        ],
        heatRequirement: "superheated"
    }).id('kubejs:compacting/skull_mold_3')

    // Mold Template to Skull Mold Recipe 4
    event.custom({
        type:"create:compacting",
        ingredients: [
            {
                item: 'kubejs:mold_template',
                amount: 1
            },
            {
                item: 'minecraft:zombie_head'
            }
        ],
        results: [
            {
                item: 'kubejs:skull_mold',
                amount: 1
            },
            {
                item: 'minecraft:zombie_head'
            }
        ],
        heatRequirement: "superheated"
    }).id('kubejs:compacting/skull_mold_4')

    // Mold Template to Skull Mold Recipe 5
    event.custom({
        type:"create:compacting",
        ingredients: [
            {
                item: 'kubejs:mold_template',
                amount: 1
            },
            {
                item: 'minecraft:creeper_head'
            }
        ],
        results: [
            {
                item: 'kubejs:skull_mold',
                amount: 1
            },
            {
                item: 'minecraft:creeper_head'
            }
        ],
        heatRequirement: "superheated"
    }).id('kubejs:compacting/skull_mold_5')

    // Mold Template to Head Mold
    event.custom({
        type:"create:compacting",
        ingredients: [
            {
                item: 'kubejs:mold_template',
                amount: 1
            },
            {
                item: 'minecraft:dragon_head'
            }
        ],
        results: [
            {
                item: 'kubejs:head_mold',
                amount: 1
            },
            {
                item: 'minecraft:dragon_head'
            }
        ],
        heatRequirement: "superheated"
    }).id('kubejs:compacting/head_mold')

    // Skeleton Skull Recipe
	event.custom({
		type: 'create:mixing',
		ingredients: [
			{
				fluid: 'kubejs:molten_bone_marrow',
				amount: 1000
			},
			{
				item: 'kubejs:skull_mold',
				count: 1
			}
		],
		results: [
			{
				item: 'minecraft:skeleton_skull',
				count: 1
			},
            {
                item: 'kubejs:skull_mold'
            }
		],
        heatRequirement: 'superheated'
	}).id('kubejs:mixing/skeleton_skull')

    // Wither Skeleton Skull Recipe
	event.custom({
		type: 'create:mixing',
		ingredients: [
			{
				fluid: 'kubejs:molten_bone_marrow',
				amount: 1000
			},
            {
                fluid: 'createfoundry:molten_carbon',
                amount: 1000
            },
            {
                item: 'createcompression:compressed_experience_2x',
                amount: 1
            },
			{
				item: 'kubejs:skull_mold',
				count: 1
			}
		],
		results: [
			{
				item: 'minecraft:wither_skeleton_skull',
				count: 1
			},
            {
                item: 'kubejs:skull_mold'
            }
		],
        heatRequirement: 'superheated'
	}).id('kubejs:mixing/wither_skeleton_skull')

    // Dragon Head Recipe
	event.custom({
		type: 'create:mixing',
		ingredients: [
			{
				fluid: 'kubejs:liquid_dragons_breath',
				amount: 1000
			},
            {
                item: 'createcompression:compressed_experience_2x',
                amount: 1
            },
			{
				item: 'kubejs:head_mold',
				count: 1
			}
		],
		results: [
			{
				item: 'minecraft:dragon_head',
				count: 1
			},
            {
                item: 'kubejs:head_mold'
            }
		],
        heatRequirement: 'superheated'
	}).id('kubejs:mixing/dragon_head')

    // Bonemeal to Molten Bone Marrow Recipe
	event.custom({
		type: 'create:mixing',
		ingredients: [
			{
				item: 'minecraft:bone_meal',
				amount: 1
			}
		],
		results: [
			{
				fluid: 'kubejs:molten_bone_marrow',
				amount: 100
			}
		],
        heatRequirement: 'superheated'
	}).id('kubejs:mixing/meal_marrow')

    // Bone Block to Molten Bone Marrow Recipe
	event.custom({
		type: 'create:mixing',
		ingredients: [
			{
				item: 'minecraft:bone_block',
				amount: 1
			}
		],
		results: [
			{
				fluid: 'kubejs:molten_bone_marrow',
				amount: 900
			}
		],
        heatRequirement: 'superheated'
	}).id('kubejs:mixing/block_marrow')

    // Bone to Molten Bone Marrow Recipe
	event.custom({
		type: 'create:mixing',
		ingredients: [
			{
				item: 'minecraft:bone',
				amount: 1
			}
		],
		results: [
			{
				fluid: 'kubejs:molten_bone_marrow',
				amount: 300
			}
		],
        heatRequirement: 'superheated'
	}).id('kubejs:mixing/bone_marrow')


})
