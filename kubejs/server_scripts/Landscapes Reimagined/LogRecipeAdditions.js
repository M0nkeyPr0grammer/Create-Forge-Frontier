 // Log Recipe Additions
ServerEvents.recipes(event => {
	
	// Alternate Chest Recipes
	var chest_types = [
		['minecraft:chest', 'minecraft:oak_log'],
		['lolmcv:acacia_chest', 'minecraft:acacia_log'],
		['lolmcv:birch_chest', 'minecraft:birch_log'],
		['lolmcv:spruce_chest', 'minecraft:spruce_log'], 
		['lolmcv:dark_oak_chest', 'minecraft:dark_oak_log'],
		['lolmcv:jungle_chest', 'minecraft:jungle_log'],
		['lolmcv:mangrove_chest', 'minecraft:mangrove_log'],
		['lolmcv:bamboo_chest', 'minecraft:bamboo_block'],
		['lolmcv:cherry_chest', 'minecraft:cherry_log'],
		['lolmcv:warped_chest', 'minecraft:warped_stem'],
		['betternether:warped_chest', 'minecraft:warped_stem'],
		['lolmcv:crimson_chest', 'minecraft:crimson_stem'],
		['betternether:crimson_chest', 'minecraft:crimson_stem'],
		['betternether:stalagnate_chest', 'betternether:stalagnate_log'],
		['betternether:willow_chest', 'betternether:willow_log'],
		['betternether:wart_chest', 'betternether:wart_log'],
		['betternether:rubeus_chest', 'betternether:rubeus_log'],
		['betternether:mushroom_fir_chest', 'betternether:mushroom_fir_log'],
		['betternether:nether_mushroom_chest', 'betternether:nether_mushroom_stem'],
		['betternether:anchor_tree_chest', 'betternether:anchor_tree_log'],
		['betternether:nether_sakura_chest', 'betternether:nether_sakura_log'],
		['betterend:mossy_glowshroom_chest', 'betterend:mossy_glowshroom_log'],
		['betterend:pythadendron_chest', 'betterend:pythadendron_log'],
		['betterend:end_lotus_chest', 'betterend:end_lotus_log'],
		['betterend:lacugrove_chest', 'betterend:lacugrove_log'],
		['betterend:dragon_tree_chest', 'betterend:dragon_tree_log'],
		['betterend:helix_tree_chest', 'betterend:helix_tree_log'],
		['betterend:umbrella_tree_chest', 'betterend:umbrella_tree_log'],
		['betterend:lucernia_chest', 'betterend:lucernia_log'],
		['betterend:tenanea_chest', 'betterend:tenanea_log'],
		['betterend:jellyshroom_chest', 'betterend:jellyshroom_log'],
		// Regions Unexplore Log to Chest Recipes
		['minecraft:chest', 'regions_unexplored:blackwood_log'],
		['minecraft:chest', 'regions_unexplored:blue_bioshroom_stem'],
		['minecraft:chest', 'regions_unexplored:brimwood_log'],
		['minecraft:chest', 'regions_unexplored:cobalt_log'],
		['minecraft:chest', 'regions_unexplored:dead_log'],
		['minecraft:chest', 'regions_unexplored:eucalyptus_log'],
		['minecraft:chest', 'regions_unexplored:green_bioshroom_stem'],
		['minecraft:chest', 'regions_unexplored:joshua_log'],
		['minecraft:chest', 'regions_unexplored:kapok_log'],
		['minecraft:chest', 'regions_unexplored:magnolia_log'],
		['minecraft:chest', 'regions_unexplored:maple_log'],
		['minecraft:chest', 'regions_unexplored:mauve_log'],
		['minecraft:chest', 'regions_unexplored:palm_log'],
		['minecraft:chest', 'regions_unexplored:pine_log'],
		['minecraft:chest', 'regions_unexplored:pink_bioshroom_stem'],
		['minecraft:chest', 'regions_unexplored:redwood_log'],
		['minecraft:chest', 'regions_unexplored:socotra_log'],
		['minecraft:chest', 'regions_unexplored:willow_log'],
		['minecraft:chest', 'regions_unexplored:yellow_bioshroom_stem'],
		['minecraft:chest', 'regions_unexplored:baobab_log'],
		['minecraft:chest', 'regions_unexplored:cypress_log'],
		// Terrestria Log to Chest Recipes
		['minecraft:chest', 'terrestria:yucca_palm_log'],
		['minecraft:chest', 'terrestria:sakura_log'],
		['minecraft:chest', 'terrestria:rainbow_eucalyptus_log'],
		['minecraft:chest', 'terrestria:japanese_maple_log'],
		['minecraft:chest', 'terrestria:willow_log'],
		['minecraft:chest', 'terrestria:cypress_log'],
		['minecraft:chest', 'terrestria:rubber_log'],
		['minecraft:chest', 'terrestria:hemlock_log'],
		['minecraft:chest', 'terrestria:redwood_log'],
	]

	chest_types.forEach(chest_type => {
		event.shaped(
			Item.of(chest_type[0], 4),
			[
				'AAA',
				'A A',
				'AAA'
			],
			{
				A: chest_type[1]
			}
		)
	}); 
	
	// Alternate Stick Recipe
	event.shaped(
		Item.of('minecraft:stick', 16),
		[
			'#minecraft:logs',
			'#minecraft:logs'
		]
	)

	// Alternate Trapdoor Recipes
	var trapdoor_types = [
		['minecraft:oak_trapdoor', 'minecraft:oak_log'],
		['minecraft:acacia_trapdoor', 'minecraft:acacia_log'],
		['minecraft:birch_trapdoor', 'minecraft:birch_log'],
		['minecraft:spruce_trapdoor', 'minecraft:spruce_log'],
		['minecraft:dark_oak_trapdoor', 'minecraft:dark_oak_log'],
		['minecraft:jungle_trapdoor', 'minecraft:jungle_log'],
		['minecraft:mangrove_trapdoor', 'minecraft:mangrove_log'],
		['minecraft:warped_trapdoor', 'minecraft:warped_stem'],
		['minecraft:crimson_trapdoor', 'minecraft:crimson_stem'],
		['deeperdarker:echo_trapdoor', 'deeperdarker:echo_log'],
		['minecraft:bamboo_trapdoor', 'minecraft:bamboo_block'],
		['minecraft:cherry_trapdoor', 'minecraft:cherry_log'],
		['betternether:anchor_tree_trapdoor', 'betternether:anchor_tree_log'],
		['regions_unexplored:blackwood_trapdoor', 'regions_unexplored:blackwood_log'],
		['regions_unexplored:blue_bioshroom_trapdoor', 'regions_unexplored:blue_bioshroom_stem'],
		['regions_unexplored:brimwood_trapdoor', 'regions_unexplored:brimwood_log'],
		['regions_unexplored:cobalt_trapdoor', 'regions_unexplored:cobalt_log'],
		['regions_unexplored:dead_trapdoor', 'regions_unexplored:dead_log'],
		['betterend:dragon_tree_trapdoor', 'betterend:dragon_tree_log'],
		['betterend:end_lotus_trapdoor', 'betterend:end_lotus_log'],
		['regions_unexplored:eucalyptus_trapdoor', 'regions_unexplored:eucalyptus_log'],
		['regions_unexplored:green_bioshroom_trapdoor', 'regions_unexplored:green_bioshroom_stem'],
		['betterend:helix_tree_trapdoor', 'betterend:helix_tree_log'],
		['betterend:jellyshroom_trapdoor', 'betterend:jellyshroom_log'],
		['regions_unexplored:joshua_trapdoor', 'regions_unexplored:joshua_log'],
		['regions_unexplored:kapok_trapdoor', 'regions_unexplored:kapok_log'],
		['betterend:lacugrove_trapdoor', 'betterend:lacugrove_log'],
		['regions_unexplored:larch_trapdoor', 'regions_unexplored:larch_log'],
		['betterend:lucernia_trapdoor', 'betterend:lucernia_log'],
		['regions_unexplored:magnolia_trapdoor', 'regions_unexplored:magnolia_log'],
		['regions_unexplored:maple_trapdoor', 'regions_unexplored:maple_log'],
		['regions_unexplored:mauve_trapdoor', 'regions_unexplored:mauve_log'],
		['betterend:mossy_glowshroom_trapdoor', 'betterend:mossy_glowshroom_log'],
		['betternether:mushroom_fir_trapdoor', 'betternether:mushroom_fir_log'],
		['betternether:nether_mushroom_trapdoor', 'betternether:nether_mushroom_stem'],
		['betternether:nether_sakura_trapdoor', 'betternether:nether_sakura_log'],
		['regions_unexplored:palm_trapdoor', 'regions_unexplored:palm_log'],
		['regions_unexplored:pine_trapdoor', 'regions_unexplored:pine_log'],
		['regions_unexplored:pink_bioshroom_trapdoor', 'regions_unexplored:pink_bioshroom_stem'],
		['betterend:pythadendron_trapdoor', 'betterend:pythadendron_log'],
		['regions_unexplored:redwood_trapdoor', 'regions_unexplored:redwood_log'],
		['betterarcheology:rotten_trapdoor', 'betterarcheology:rotten_log'],
		['betternether:rubeus_trapdoor', 'betternether:rubeus_log'],
		['regions_unexplored:socotra_trapdoor', 'regions_unexplored:socotra_log'],
		['betternether:stalagnate_trapdoor', 'betternether:stalagnate_log'],
		['betterend:tenanea_trapdoor', 'betterend:tenanea_log'],
		['betterend:umbrella_tree_trapdoor', 'betterend:umbrella_tree_log'],
		['betternether:wart_trapdoor', 'betternether:wart_log'],
		['betternether:willow_trapdoor', 'betternether:willow_log'],
		['regions_unexplored:willow_trapdoor', 'regions_unexplored:willow_log'],
		['regions_unexplored:yellow_bioshroom_trapdoor', 'regions_unexplored:yellow_bioshroom_stem'],
		['regions_unexplored:baobab_trapdoor', 'regions_unexplored:baobab_log'],
		['regions_unexplored:cypress_trapdoor', 'regions_unexplored:cypress_log'],
	]

	trapdoor_types.forEach(trapdoor_type => {
		event.shaped(
			Item.of(trapdoor_type[0], 8),
			[
				'AAA',
				'AAA'
			],
			{
				A: trapdoor_type[1]
			}
		)
	});

	// Alternate Slab Recipes
	var slab_types = [
		['minecraft:oak_slab', 'minecraft:oak_log'],
		['minecraft:acacia_slab', 'minecraft:acacia_log'],
		['minecraft:birch_slab', 'minecraft:birch_log'],
		['minecraft:spruce_slab', 'minecraft:spruce_log'],
		['minecraft:dark_oak_slab', 'minecraft:dark_oak_log'],
		['minecraft:jungle_slab', 'minecraft:jungle_log'],
		['minecraft:mangrove_slab', 'minecraft:mangrove_log'],
		['minecraft:warped_slab', 'minecraft:warped_stem'],
		['minecraft:crimson_slab', 'minecraft:crimson_stem'],
		['deeperdarker:echo_slab', 'deeperdarker:echo_log'],
		['minecraft:bamboo_slab', 'minecraft:bamboo_block'],
		['minecraft:cherry_slab', 'minecraft:cherry_log'],
		['betternether:anchor_tree_slab', 'betternether:anchor_tree_log'],
		['regions_unexplored:blackwood_slab', 'regions_unexplored:blackwood_log'],
		['regions_unexplored:blue_bioshroom_slab', 'regions_unexplored:blue_bioshroom_stem'],
		['regions_unexplored:brimwood_slab', 'regions_unexplored:brimwood_log'],
		['regions_unexplored:cobalt_slab', 'regions_unexplored:cobalt_log'],
		['regions_unexplored:dead_slab', 'regions_unexplored:dead_log'],
		['betterend:dragon_tree_slab', 'betterend:dragon_tree_log'],
		['betterend:end_lotus_slab', 'betterend:end_lotus_log'],
		['regions_unexplored:eucalyptus_slab', 'regions_unexplored:eucalyptus_log'],
		['regions_unexplored:green_bioshroom_slab', 'regions_unexplored:green_bioshroom_stem'],
		['betterend:helix_tree_slab', 'betterend:helix_tree_log'],
		['betterend:jellyshroom_slab', 'betterend:jellyshroom_log'],
		['regions_unexplored:joshua_slab', 'regions_unexplored:joshua_log'],
		['regions_unexplored:kapok_slab', 'regions_unexplored:kapok_log'],
		['betterend:lacugrove_slab', 'betterend:lacugrove_log'],
		['regions_unexplored:larch_slab', 'regions_unexplored:larch_log'],
		['betterend:lucernia_slab', 'betterend:lucernia_log'],
		['regions_unexplored:magnolia_slab', 'regions_unexplored:magnolia_log'],
		['regions_unexplored:maple_slab', 'regions_unexplored:maple_log'],
		['regions_unexplored:mauve_slab', 'regions_unexplored:mauve_log'],
		['betterend:mossy_glowshroom_slab', 'betterend:mossy_glowshroom_log'],
		['betternether:mushroom_fir_slab', 'betternether:mushroom_fir_log'],
		['betternether:nether_mushroom_slab', 'betternether:nether_mushroom_stem'],
		['betternether:nether_sakura_slab', 'betternether:nether_sakura_log'],
		['regions_unexplored:palm_slab', 'regions_unexplored:palm_log'],
		['regions_unexplored:pine_slab', 'regions_unexplored:pine_log'],
		['regions_unexplored:pink_bioshroom_slab', 'regions_unexplored:pink_bioshroom_stem'],
		['betterend:pythadendron_slab', 'betterend:pythadendron_log'],
		['regions_unexplored:redwood_slab', 'regions_unexplored:redwood_log'],
		['betterarcheology:rotten_slab', 'betterarcheology:rotten_log'],
		['betternether:rubeus_slab', 'betternether:rubeus_log'],
		['regions_unexplored:socotra_slab', 'regions_unexplored:socotra_log'],
		['betternether:stalagnate_slab', 'betternether:stalagnate_log'],
		['betterend:tenanea_slab', 'betterend:tenanea_log'],
		['betterend:umbrella_tree_slab', 'betterend:umbrella_tree_log'],
		['betternether:wart_slab', 'betternether:wart_log'],
		['betternether:willow_slab', 'betternether:willow_log'],
		['regions_unexplored:willow_slab', 'regions_unexplored:willow_log'],
		['regions_unexplored:yellow_bioshroom_slab', 'regions_unexplored:yellow_bioshroom_stem'],
		['regions_unexplored:baobab_slab', 'regions_unexplored:baobab_log'],
		['regions_unexplored:cypress_slab', 'regions_unexplored:cypress_log'],
		['regions_unexplored:alpha_slab', 'regions_unexplored:alpha_log'],
	]

	slab_types.forEach(slab_type => {
		event.shaped(
			Item.of(slab_type[0], 24),
			[
				'AAA'
			],
			{
				A: slab_type[1]
			}
		)
	});

	// Alternate Door Recipes
	var door_types = [
		['minecraft:oak_door', 'minecraft:oak_log'],
		['minecraft:acacia_door', 'minecraft:acacia_log'],
		['minecraft:birch_door', 'minecraft:birch_log'],
		['minecraft:spruce_door', 'minecraft:spruce_log'],
		['minecraft:dark_oak_door', 'minecraft:dark_oak_log'],
		['minecraft:jungle_door', 'minecraft:jungle_log'],
		['minecraft:mangrove_door', 'minecraft:mangrove_log'],
		['minecraft:warped_door', 'minecraft:warped_stem'],
		['minecraft:crimson_door', 'minecraft:crimson_stem'],
		['deeperdarker:echo_door', 'deeperdarker:echo_log'],
		['minecraft:bamboo_door', 'minecraft:bamboo_block'],
		['minecraft:cherry_door', 'minecraft:cherry_log'],
		['betternether:anchor_tree_door', 'betternether:anchor_tree_log'],
		['regions_unexplored:blackwood_door', 'regions_unexplored:blackwood_log'],
		['regions_unexplored:blue_bioshroom_door', 'regions_unexplored:blue_bioshroom_stem'],
		['regions_unexplored:brimwood_door', 'regions_unexplored:brimwood_log'],
		['regions_unexplored:cobalt_door', 'regions_unexplored:cobalt_log'],
		['regions_unexplored:dead_door', 'regions_unexplored:dead_log'],
		['betterend:dragon_tree_door', 'betterend:dragon_tree_log'],
		['betterend:end_lotus_door', 'betterend:end_lotus_log'],
		['regions_unexplored:eucalyptus_door', 'regions_unexplored:eucalyptus_log'],
		['regions_unexplored:green_bioshroom_door', 'regions_unexplored:green_bioshroom_stem'],
		['betterend:helix_tree_door', 'betterend:helix_tree_log'],
		['betterend:jellyshroom_door', 'betterend:jellyshroom_log'],
		['regions_unexplored:joshua_door', 'regions_unexplored:joshua_log'],
		['regions_unexplored:kapok_door', 'regions_unexplored:kapok_log'],
		['betterend:lacugrove_door', 'betterend:lacugrove_log'],
		['regions_unexplored:larch_door', 'regions_unexplored:larch_log'],
		['betterend:lucernia_door', 'betterend:lucernia_log'],
		['regions_unexplored:magnolia_door', 'regions_unexplored:magnolia_log'],
		['regions_unexplored:maple_door', 'regions_unexplored:maple_log'],
		['regions_unexplored:mauve_door', 'regions_unexplored:mauve_log'],
		['betterend:mossy_glowshroom_door', 'betterend:mossy_glowshroom_log'],
		['betternether:mushroom_fir_door', 'betternether:mushroom_fir_log'],
		['betternether:nether_mushroom_door', 'betternether:nether_mushroom_stem'],
		['betternether:nether_sakura_door', 'betternether:nether_sakura_log'],
		['regions_unexplored:palm_door', 'regions_unexplored:palm_log'],
		['regions_unexplored:pine_door', 'regions_unexplored:pine_log'],
		['regions_unexplored:pink_bioshroom_door', 'regions_unexplored:pink_bioshroom_stem'],
		['betterend:pythadendron_door', 'betterend:pythadendron_log'],
		['regions_unexplored:redwood_door', 'regions_unexplored:redwood_log'],
		['betterarcheology:rotten_door', 'betterarcheology:rotten_log'],
		['betternether:rubeus_door', 'betternether:rubeus_log'],
		['regions_unexplored:socotra_door', 'regions_unexplored:socotra_log'],
		['betternether:stalagnate_door', 'betternether:stalagnate_log'],
		['betterend:tenanea_door', 'betterend:tenanea_log'],
		['betterend:umbrella_tree_door', 'betterend:umbrella_tree_log'],
		['betternether:wart_door', 'betternether:wart_log'],
		['betternether:willow_door', 'betternether:willow_log'],
		['regions_unexplored:willow_door', 'regions_unexplored:willow_log'],
		['regions_unexplored:yellow_bioshroom_door', 'regions_unexplored:yellow_bioshroom_stem'],
		['regions_unexplored:baobab_door', 'regions_unexplored:baobab_log'],
		['regions_unexplored:cypress_door', 'regions_unexplored:cypress_log'],
	]

	door_types.forEach(door_type => {
		event.shaped(
			Item.of(door_type[0], 12),
			[
				'AA ',
				'AA ',
				'AA '
			],
			{
				A: door_type[1]
			}
		)
	});

	// Alternate Vertical Slab Recipes
	var vertslab_types = [
		['enchanted-vertical-slabs:vertical_oak_slab', 'minecraft:oak_log'],
		['enchanted-vertical-slabs:vertical_acacia_slab', 'minecraft:acacia_log'],
		['enchanted-vertical-slabs:vertical_birch_slab', 'minecraft:birch_log'],
		['enchanted-vertical-slabs:vertical_spruce_slab', 'minecraft:spruce_log'],
		['enchanted-vertical-slabs:vertical_dark_oak_slab', 'minecraft:dark_oak_log'],
		['enchanted-vertical-slabs:vertical_jungle_slab', 'minecraft:jungle_log'],
		['enchanted-vertical-slabs:vertical_mangrove_slab', 'minecraft:mangrove_log'],
		['enchanted-vertical-slabs:vertical_warped_slab', 'minecraft:warped_stem'],
		['enchanted-vertical-slabs:vertical_crimson_slab', 'minecraft:crimson_stem'],
		['enchanted-vertical-slabs:vertical_bamboo_slab', 'minecraft:bamboo_block'],
		['enchanted-vertical-slabs:vertical_cherry_slab', 'minecraft:cherry_log'],
	]

	vertslab_types.forEach(vertslab_type => {
		event.shaped(
			Item.of(vertslab_type[0], 24),
			[
				'A  ',
				'A  ',
				'A  '
			],
			{
				A: vertslab_type[1]
			}
		)
	});

	// Alternate Stair Recipes
	var stairs_types = [
		['minecraft:oak_stairs', 'minecraft:oak_log'],
		['minecraft:acacia_stairs', 'minecraft:acacia_log'],
		['minecraft:birch_stairs', 'minecraft:birch_log'],
		['minecraft:spruce_stairs', 'minecraft:spruce_log'],
		['minecraft:dark_oak_stairs', 'minecraft:dark_oak_log'],
		['minecraft:jungle_stairs', 'minecraft:jungle_log'],
		['minecraft:mangrove_stairs', 'minecraft:mangrove_log'],
		['minecraft:warped_stairs', 'minecraft:warped_stem'],
		['minecraft:crimson_stairs', 'minecraft:crimson_stem'],
		['deeperdarker:echo_stairs', 'deeperdarker:echo_log'],
		['minecraft:bamboo_stairs', 'minecraft:bamboo_block'],
		['minecraft:cherry_stairs', 'minecraft:cherry_log'],
		['betternether:anchor_tree_stairs', 'betternether:anchor_tree_log'],
		['regions_unexplored:blackwood_stairs', 'regions_unexplored:blackwood_log'],
		['regions_unexplored:blue_bioshroom_stairs', 'regions_unexplored:blue_bioshroom_stem'],
		['regions_unexplored:brimwood_stairs', 'regions_unexplored:brimwood_log'],
		['regions_unexplored:cobalt_stairs', 'regions_unexplored:cobalt_log'],
		['regions_unexplored:dead_stairs', 'regions_unexplored:dead_log'],
		['betterend:dragon_tree_stairs', 'betterend:dragon_tree_log'],
		['betterend:end_lotus_stairs', 'betterend:end_lotus_log'],
		['regions_unexplored:eucalyptus_stairs', 'regions_unexplored:eucalyptus_log'],
		['regions_unexplored:green_bioshroom_stairs', 'regions_unexplored:green_bioshroom_stem'],
		['betterend:helix_tree_stairs', 'betterend:helix_tree_log'],
		['betterend:jellyshroom_stairs', 'betterend:jellyshroom_log'],
		['regions_unexplored:joshua_stairs', 'regions_unexplored:joshua_log'],
		['regions_unexplored:kapok_stairs', 'regions_unexplored:kapok_log'],
		['betterend:lacugrove_stairs', 'betterend:lacugrove_log'],
		['regions_unexplored:larch_stairs', 'regions_unexplored:larch_log'],
		['betterend:lucernia_stairs', 'betterend:lucernia_log'],
		['regions_unexplored:magnolia_stairs', 'regions_unexplored:magnolia_log'],
		['regions_unexplored:maple_stairs', 'regions_unexplored:maple_log'],
		['regions_unexplored:mauve_stairs', 'regions_unexplored:mauve_log'],
		['betterend:mossy_glowshroom_stairs', 'betterend:mossy_glowshroom_log'],
		['betternether:mushroom_fir_stairs', 'betternether:mushroom_fir_log'],
		['betternether:nether_mushroom_stairs', 'betternether:nether_mushroom_stem'],
		['betternether:nether_sakura_stairs', 'betternether:nether_sakura_log'],
		['regions_unexplored:palm_stairs', 'regions_unexplored:palm_log'],
		['regions_unexplored:pine_stairs', 'regions_unexplored:pine_log'],
		['regions_unexplored:pink_bioshroom_stairs', 'regions_unexplored:pink_bioshroom_stem'],
		['betterend:pythadendron_stairs', 'betterend:pythadendron_log'],
		['regions_unexplored:redwood_stairs', 'regions_unexplored:redwood_log'],
		['betterarcheology:rotten_stairs', 'betterarcheology:rotten_log'],
		['betternether:rubeus_stairs', 'betternether:rubeus_log'],
		['regions_unexplored:socotra_stairs', 'regions_unexplored:socotra_log'],
		['betternether:stalagnate_stairs', 'betternether:stalagnate_log'],
		['betterend:tenanea_stairs', 'betterend:tenanea_log'],
		['betterend:umbrella_tree_stairs', 'betterend:umbrella_tree_log'],
		['betternether:wart_stairs', 'betternether:wart_log'],
		['betternether:willow_stairs', 'betternether:willow_log'],
		['regions_unexplored:willow_stairs', 'regions_unexplored:willow_log'],
		['regions_unexplored:yellow_bioshroom_stairs', 'regions_unexplored:yellow_bioshroom_stem'],
		['regions_unexplored:baobab_stairs', 'regions_unexplored:baobab_log'],
		['regions_unexplored:cypress_stairs', 'regions_unexplored:cypress_log'],
		['regions_unexplored:alpha_stairs', 'regions_unexplored:alpha_log'],
	]

	stairs_types.forEach(stairs_type => {
		event.shaped(
			Item.of(stairs_type[0], 16),
			[
				'A  ',
				'AA ',
				'AAA'
			],
			{
				A: stairs_type[1]
			}
		)
	});

	// Plank to Oak Chest Recipes
	var chest_types2 = [
		// Regions Unexplore planks to Chest Recipes
		['minecraft:chest', 'regions_unexplored:blackwood_planks'],
		['minecraft:chest', 'regions_unexplored:blue_bioshroom_stem'],
		['minecraft:chest', 'regions_unexplored:brimwood_planks'],
		['minecraft:chest', 'regions_unexplored:cobalt_planks'],
		['minecraft:chest', 'regions_unexplored:dead_planks'],
		['minecraft:chest', 'regions_unexplored:eucalyptus_planks'],
		['minecraft:chest', 'regions_unexplored:green_bioshroom_stem'],
		['minecraft:chest', 'regions_unexplored:joshua_planks'],
		['minecraft:chest', 'regions_unexplored:kapok_planks'],
		['minecraft:chest', 'regions_unexplored:magnolia_planks'],
		['minecraft:chest', 'regions_unexplored:maple_planks'],
		['minecraft:chest', 'regions_unexplored:mauve_planks'],
		['minecraft:chest', 'regions_unexplored:palm_planks'],
		['minecraft:chest', 'regions_unexplored:pine_planks'],
		['minecraft:chest', 'regions_unexplored:pink_bioshroom_stem'],
		['minecraft:chest', 'regions_unexplored:redwood_planks'],
		['minecraft:chest', 'regions_unexplored:socotra_planks'],
		['minecraft:chest', 'regions_unexplored:willow_planks'],
		['minecraft:chest', 'regions_unexplored:yellow_bioshroom_stem'],
		['minecraft:chest', 'regions_unexplored:baobab_planks'],
		['minecraft:chest', 'regions_unexplored:cypress_planks'],
		// Terrestria planks to Chest Recipes
		['minecraft:chest', 'terrestria:yucca_palm_planks'],
		['minecraft:chest', 'terrestria:sakura_planks'],
		['minecraft:chest', 'terrestria:rainbow_eucalyptus_planks'],
		['minecraft:chest', 'terrestria:japanese_maple_planks'],
		['minecraft:chest', 'terrestria:willow_planks'],
		['minecraft:chest', 'terrestria:cypress_planks'],
		['minecraft:chest', 'terrestria:rubber_planks'],
		['minecraft:chest', 'terrestria:hemlock_planks'],
		['minecraft:chest', 'terrestria:redwood_planks'],
	]

	chest_types2.forEach(chest_type2 => {
		event.shaped(
			Item.of(chest_type2[0], 1),
			[
				'AAA',
				'A A',
				'AAA'
			],
			{
				A: chest_type2[1]
			}
		)
	});
});
