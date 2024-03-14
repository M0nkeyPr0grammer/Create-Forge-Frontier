// priority: 0

ServerEvents.recipes(event => {
	// Remove recipes here
	event.remove({ id: 'chipped:benches/mechanist_workbench' }) // Removes Recipe, fixed below
	event.remove({ id: 'createaddition:crafting/diamond_grit_sandpaper' }) // Removes Broken Recipe
	event.remove({ id: 'createfoundry:mixing/melting/ore/redstone_from_ore' })
	event.remove({ id: 'createfoundry:mixing/melting/ore/lapis_from_ore' })
	event.remove({ id: 'create:crushing/nether_wart_block' })
	event.remove({ id: 'explorerscompass:explorers_compass' })
	event.remove({ id: 'shrink:shrinking_device' })
	event.remove({ id: 'waystones:warp_stone' })
	event.remove({ id: 'waystones:warp_dust' })
	event.remove({ id: 'angelblockrenewed:angel_block'})
	event.remove({ id: 'cagedmobs:crafting/hopping_mob_cage'})
	event.remove({ id: 'cagedmobs:crafting/mob_cage'})
	event.remove({ id: 'endrem:undead_eye'})
	event.remove({ id: 'create_power_loader:crafting/empty_andesite_chunk_loader'})
	event.remove({ id: 'create_power_loader:crafting/empty_brass_chunk_loader'})
	event.remove({ id: 'create_dd:crafting/coal_piece_from_decompacting'})
	event.remove({ id: 'create_dd:crafting/coal_piece_compacting'})
	event.remove({ id: 'tiab:time_in_a_bottle'})


	// Bookstack to Shapeless Recipe
	event.custom({
		type: "minecraft:crafting_shapeless",
		ingredients: [
			{
				item: 'beautify:bookstack'
			}
		],
		result: {
			item: 'minecraft:book',
			count: 3
		  }

	})

	// Nether Star Crushing Recipe
	event.custom({
        type: 'create:crushing',
        ingredients: [
            { item: 'minecraft:nether_star' },
        ],
        processingTime: 400,
        results: [
            { item: 'cagedmobs:nether_star_fragment', count: 4 },
			{ item: 'cagedmobs:nether_star_fragment', chance: 0.10}
        ],
    }).id('kubejs:crushing/netherstar');

	// Netherite Crushing Recipe
	event.custom({
        type: 'create:crushing',
        ingredients: [
            { item: 'minecraft:netherite_ingot' },
        ],
        processingTime: 400,
        results: [
            { item: 'minecraft:netherite_scrap', count: 4 },
			{ item: 'minecraft:netherite_scrap', chance: 0.10}
        ],
    }).id('kubejs:crushing/netherite');

	// Time in A Bottle Crafting Recipe
	event.custom({
		type: "create:mechanical_crafting",
		pattern: [
			'AAA',
			'BCB',
			'DED'
		],
		key: {
			A: Ingredient.of('create:brass_ingot').toJson(),
			B: Ingredient.of('advancednetherite:netherite_diamond_ingot').toJson(),
			C: Ingredient.of('minecraft:clock').toJson(),
			D: Ingredient.of('create_dd:overcharge_alloy').toJson(),
			E: Ingredient.of('apotheosis:infused_breath').toJson()
		},
		result: Ingredient.of('tiab:time_in_a_bottle').toJson(),
		acceptMirrored: false
	}).id('kubejs:tiab/time_in_a_bottle');

	// Adjust Coal Recipe
	event.custom({
		type: "minecraft:crafting_shapeless",
		ingredients: [
		  {
			"tag": "forge:nuggets/coal"
		  },
		  {
			"tag": "forge:nuggets/coal"
		  },
		  {
			"tag": "forge:nuggets/coal"
		  },
		  {
			"tag": "forge:nuggets/coal"
		  },
		  {
			"tag": "forge:nuggets/coal"
		  },
		  {
			"tag": "forge:nuggets/coal"
		  },
		  {
			"tag": "forge:nuggets/coal"
		  },
		  {
			"tag": "forge:nuggets/coal"
		  },
		  {
			"tag": "forge:nuggets/coal"
		  }
		],
		result: {
		  item: "minecraft:coal",
		  count: 1
		}
	  })

	// Adjust Coal Piece Recipe
	event.custom({
		type: "minecraft:crafting_shapeless",
		ingredients: [
			{
				item: 'minecraft:coal'
			}
		],
		result: {
			item: 'create_dd:coal_piece',
			count: 9
		  }

	})

	// Creates Andesite Chunk Loader
	event.custom({
		type: "create:mechanical_crafting",
		pattern: [
			'AAA',
			'ABA',
			'CDC'
		],
		key: {
			A: Ingredient.of('allthecompressed:glass_3x').toJson(),
			B: Ingredient.of('advancednetherite:netherite_diamond_block').toJson(),
			C: Ingredient.of('create:andesite_casing').toJson(),
			D: Ingredient.of('create_compressed:shaft_bundle').toJson()
		},
		result: Ingredient.of('create_power_loader:empty_andesite_chunk_loader').toJson(),
		acceptMirrored: false
	}).id('kubejs:powerloaders/andesitechunkloader');

	// Creates Brass Chunk Loader
	event.custom({
		type: "create:mechanical_crafting",
		pattern: [
			'AAAAA',
			'A F A',
			'A B A',
			'CDDDC',
			'CCECC'
		],
		key: {
			A: Ingredient.of('allthecompressed:glass_1x').toJson(),
			B: Ingredient.of('create_power_loader:empty_andesite_chunk_loader').toJson(),
			C: Ingredient.of('create:brass_casing').toJson(),
			D: Ingredient.of('create_compressed:mechanism_block').toJson(),
			E: Ingredient.of('create_compressed:shaft_bundle').toJson(),
			F: Ingredient.of('advancednetherite:netherite_diamond_block').toJson()
		},
		result: Ingredient.of('create_power_loader:empty_brass_chunk_loader').toJson(),
		acceptMirrored: false
	}).id('kubejs:powerloaders/brasschunkloader');


	// Creates Undead Soul Recipe
	event.shaped(
		Item.of('endrem:undead_soul'),
		[
			' A ',
			'BEC',
			' D '
		],
		{
			A: 'minecraft:phantom_membrane',
			B: 'minecraft:bone',
			C: 'minecraft:rotten_flesh',
			D: 'minecraft:ghast_tear',
			E: 'minecraft:cobweb' 
		}
	)

	// Creates Warden Eye Recipe
	event.shaped(
		Item.of('endrem:undead_eye'),
		[
			' A ',
			'BCB',
			' D '
		],
		{
			A: 'deeperdarker:heart_of_the_deep',
			B: 'deeperdarker:sculk_tendrils',
			C: 'endrem:undead_soul',
			D: 'minecraft:ender_eye',
			
		}
	)

	// Creates Ash Recipe
	event.custom({
		type: 'minecraft:smoking',
		cookingtime: 100,
		ingredient: {
		  item: 'minecraft:charcoal'
		},
		result: 'supplementaries:ash'
	  })

	// Creates Modded Crafting Table Recipe
	event.shapeless(
		Item.of('minecraft:crafting_table'),
		[
			'#minecraft:planks',
			'#minecraft:planks',
			'#minecraft:planks',
			'#minecraft:planks'
		]
	)

	// Create Magnetite Recipe
	event.custom({
		type: "create_new_age:energising",
		energy_needed: 1000,
		ingredients: [
		  {
			item: 'allthecompressed:stone_2x'
		  }
		],
		results: [
		  {
			item: 'create_new_age:magnetite_block'
		  }
		]
	  })

	// Creates Dragon Egg Recipe
	event.custom({
		type: "create:mixing",
		ingredients: [
			{
				item: 'minecraft:nether_star',
				amount: 1
			},
			{
				item: 'ends_delight:non_hatchable_dragon_egg',
				amount: 1
			},
			{
				fluid: 'kubejs:liquid_dragons_breath',
				amount: 1000
			}
		],
		results: [
			{
				item: 'minecraft:dragon_egg',
				amount: 1
			}
		],
		heatRequirement: "superheated"
	}).id('kubejs:mixing/dragon_egg');


	// Creates New Mob Cage Recipe
	event.shaped(
		Item.of('cagedmobs:mob_cage'),
		[
			' A ',
			'B B',
			'CCC'
		],
		{
			A: 'minecraft:chain',
			B: 'createaddition:iron_rod',
			C: 'minecraft:iron_block'
		}
	)

	// Creates New Hopping Mob Cage Recipe
	event.shaped(
		Item.of('cagedmobs:hopping_mob_cage'),
		[
			'   ',
			'ABA',
			' C '
		],
		{
			A: 'minecraft:redstone',
			B: 'cagedmobs:mob_cage',
			C: 'create:chute'
		}
	)

	// Creates New Angel Block Recipe
	event.shaped(
		Item.of('angelblockrenewed:angel_block', 1),
		[
			'ABA',
			'B B',
			'ABA'
		],
		{
			A: 'minecraft:feather',
			B: 'createaddition:brass_rod'
		}
	)

	// Creates New Warp Stone Recipe
	event.shaped(
		Item.of('waystones:warp_stone', 1),
		[
			'ABA',
			'BCB',
			'ABA'
		],
		{
			A: 'create:polished_rose_quartz',
			B: '#forge:ender_pearls',
			C: 'minecraft:emerald'
		}
	)

	// Creates New Warp Dust Recipe
	event.shapeless(
		Item.of('waystones:warp_dust'),
		[
			'create:polished_rose_quartz',
			'#forge:ender_pearls'
		]
	)

	// Creates Structure Compass Recipe
	event.shaped(
		Item.of('explorerscompass:explorerscompass', 1),
		[
			'ACA',
			'CBC',
			'ACA'
		],
		{
			A: 'advancednetherite:netherite_iron_ingot',
			B: 'naturescompass:naturescompass',
			C: 'create_dd:blaze_gold_block'
		}
	)

	// Creates Nether Eye Crafting Recipe
	event.shaped(
		Item.of('endrem:nether_eye', 1),
		[
			'AAA',
			'BCB',
			'AAA'
		],
		{
			A: 'minecraft:fire_charge',
			B: 'minecraft:blaze_rod',
			C: 'minecraft:ender_eye'
		}
	)

	// Any Dirt to Vanilla Dirt
	event.shapeless(
		Item.of('minecraft:dirt'),
		[
			'#minecraft:dirt'
		]
	)

	// Creates Deeper and Darker Patchouli Guide
	event.shapeless(
		Item.of('patchouli:guide_book', '{"patchouli:book":"deeperdarker:wanderers_notebook"}'),
		[
			'minecraft:book',
			'minecraft:sculk'
		]
	)


	// Create a Quest Book Recipe
	event.shapeless(
		Item.of('heracles:quest_book'),
		[
			'minecraft:book',
			'minecraft:emerald'
		]
	)

	// Diamond Grit Sandpaper
	event.shapeless(
		Item.of('createaddition:diamond_grit_sandpaper'),
		[
			'minecraft:paper',
			'createaddition:diamond_grit'
		]
	)

	// New Nether Wart Block Crushing Recipe
	event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'minecraft:nether_wart_block' }
		],
		processingTime: 400,
		results: [
			{ item: 'minecraft:nether_wart', count: 2 },
			{ item: 'minecraft:nether_wart', chance: 0.10 }]
	}).id('kubejs:crushing/nether_wart_block');

	// Create Chromatic Compound
	event.custom({
		type: "create:mixing",
		ingredients: [
			Ingredient.of('minecraft:glowstone_dust').toJson(),
			Ingredient.of('create:powdered_obsidian').toJson(),
			Ingredient.of('create:polished_rose_quartz').toJson()
		],
		results: [
			Ingredient.of('create:chromatic_compound').toJson()
		],
		conditions: ["superheated"]
	}).id('kubejs:create/chromatic_compound');

	// Fixes Chipped Tinkering Table Recipe
	event.shaped(
		Item.of('chipped:tinkering_table', 1),
		[
			'A  ',
			'BCC',
			'DED'
		],
		{
			A: 'minecraft:redstone_torch',
			B: 'minecraft:piston',
			C: '#minecraft:wooden_slabs',
			D: '#forge:stripped_logs',
			E: 'minecraft:tnt'
		}
	)

	// New Dragon's Breath Recipe
	event.custom({
		type: 'create:emptying',
		ingredients: [
			{
				item: 'minecraft:dragon_breath',
				count: 1
			}
		],
		results: [
			{
				item: 'minecraft:glass_bottle'
			},
			{
				fluid: 'kubejs:liquid_dragons_breath',
				amount: 100
			}
		],
	}).id('kubejs:emptying/dragons_breath')

	// Liquid to Bottle Recipe
	event.custom({
		type: 'create:filling',
		ingredients: [
			{
				fluid: 'kubejs:liquid_dragons_breath',
				amount: 100
			},
			{
				item: 'minecraft:glass_bottle',
				count: 1
			}
		],
		results: [
			{
				item: 'minecraft:dragon_breath',
				count: 1
			}
		]
	}).id('kubejs:filling/dragons_breath')

})

