ServerEvents.recipes(event => {

    // Compressed Sand to Mold Template
    event.custom({
        type:"create:compacting",
        ingredients: [
            {
                item: 'createcompression:compressed_sand_2x',
                amount: 1
            },
        ],
        results: [
            {
                item: 'forge_frontier:mold_template',
                amount: 1
            },
        ],
        heatRequirement: "superheated"
    }).id('forge_frontier:compacting/mold_template')

    // Upgrade Mold
    event.custom({
        type:"create:compacting",
        ingredients: [
            {
                item: 'forge_frontier:mold_template',
                amount: 1
            },
            {
                item: 'minecraft:netherite_upgrade_smithing_template'
            }
        ],
        results: [
            {
                item: 'forge_frontier:upgrade_mold',
                amount: 1
            },
            {
                item: 'minecraft:netherite_upgrade_smithing_template'
            }
        ],
    }).id('forge_frontier:compacting/upgrade_mold')

    // Mold Template to Skull Mold Recipe 1
    event.custom({
        type:"create:compacting",
        ingredients: [
            {
                item: 'forge_frontier:mold_template',
                amount: 1
            },
            {
                item: 'minecraft:skeleton_skull'
            }
        ],
        results: [
            {
                item: 'forge_frontier:skull_mold',
                amount: 1
            },
            {
                item: 'minecraft:skeleton_skull'
            }
        ],
    }).id('forge_frontier:compacting/skull_mold_1')

    // Mold Template to Skull Mold Recipe 2
    event.custom({
        type:"create:compacting",
        ingredients: [
            {
                item: 'forge_frontier:mold_template',
                amount: 1
            },
            {
                item: 'minecraft:wither_skeleton_skull'
            }
        ],
        results: [
            {
                item: 'forge_frontier:skull_mold',
                amount: 1
            },
            {
                item: 'minecraft:wither_skeleton_skull'
            }
        ],
    }).id('forge_frontier:compacting/skull_mold_2')

    // Mold Template to Skull Mold Recipe 3
    event.custom({
        type:"create:compacting",
        ingredients: [
            {
                item: 'forge_frontier:mold_template',
                amount: 1
            },
            {
                item: 'minecraft:player_head'
            }
        ],
        results: [
            {
                item: 'forge_frontier:skull_mold',
                amount: 1
            },
            {
                item: 'minecraft:player_head'
            }
        ],
    }).id('forge_frontier:compacting/skull_mold_3')

    // Mold Template to Skull Mold Recipe 4
    event.custom({
        type:"create:compacting",
        ingredients: [
            {
                item: 'forge_frontier:mold_template',
                amount: 1
            },
            {
                item: 'minecraft:zombie_head'
            }
        ],
        results: [
            {
                item: 'forge_frontier:skull_mold',
                amount: 1
            },
            {
                item: 'minecraft:zombie_head'
            }
        ],
    }).id('forge_frontier:compacting/skull_mold_4')

    // Mold Template to Skull Mold Recipe 5
    event.custom({
        type:"create:compacting",
        ingredients: [
            {
                item: 'forge_frontier:mold_template',
                amount: 1
            },
            {
                item: 'minecraft:creeper_head'
            }
        ],
        results: [
            {
                item: 'forge_frontier:skull_mold',
                amount: 1
            },
            {
                item: 'minecraft:creeper_head'
            }
        ],
    }).id('forge_frontier:compacting/skull_mold_5')

    // Mold Template to Head Mold
    event.custom({
        type:"create:compacting",
        ingredients: [
            {
                item: 'forge_frontier:mold_template',
                amount: 1
            },
            {
                item: 'minecraft:dragon_head'
            }
        ],
        results: [
            {
                item: 'forge_frontier:head_mold',
                amount: 1
            },
            {
                item: 'minecraft:dragon_head'
            }
        ],
    }).id('forge_frontier:compacting/head_mold')

    // Skeleton Skull Recipe
	event.custom({
		type: 'create:compacting',
		ingredients: [
			{
				fluid: 'forge_frontier:molten_bone_marrow',
				amount: 1000
			},
			{
				item: 'forge_frontier:skull_mold',
				count: 1
			}
		],
		results: [
			{
				item: 'minecraft:skeleton_skull',
				count: 1
			},
            {
                item: 'forge_frontier:skull_mold'
            }
		],
        heatRequirement: 'superheated'
	}).id('forge_frontier:compacting/skeleton_skull')

    // Wither Skeleton Skull Recipe
	event.custom({
		type: 'create:compacting',
		ingredients: [
			{
				fluid: 'forge_frontier:molten_bone_marrow',
				amount: 1000
			},
            {
                fluid: 'forge_frontier:molten_carbon',
                amount: 1000
            },
            {
                item: 'createcompression:compressed_experience_2x',
                amount: 1
            },
			{
				item: 'forge_frontier:skull_mold',
				count: 1
			}
		],
		results: [
			{
				item: 'minecraft:wither_skeleton_skull',
				count: 1
			},
            {
                item: 'forge_frontier:skull_mold'
            }
		],
        heatRequirement: 'superheated'
	}).id('forge_frontier:compacting/wither_skeleton_skull')

    // Dragon Head Recipe
	event.custom({
		type: 'create:compacting',
		ingredients: [
			{
				fluid: 'forge_frontier:liquid_dragons_breath',
				amount: 1000
			},
            {
                item: 'createcompression:compressed_experience_2x',
                amount: 1
            },
			{
				item: 'forge_frontier:head_mold',
				count: 1
			}
		],
		results: [
			{
				item: 'minecraft:dragon_head',
				count: 1
			},
            {
                item: 'forge_frontier:head_mold'
            }
		],
        heatRequirement: 'superheated'
	}).id('forge_frontier:compacting/dragon_head')
})
