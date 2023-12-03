// Crafting Table Recipes
ServerEvents.recipes(event => {

	// All Planks to Crafting Table Recipe
	event.shaped(
		Item.of('minecraft:crafting_table', 1),
		[
			'AA',
			'AA'
		],
		{
			A: '#minecraft:planks'
		}
	)

	// Modded Crafting Tables to Vanilla Crafting Table
	var table_types = [
		// More Crafting Tables
		['minecraft:crafting_table', 'lolmct:warped_crafting_table'],
		['minecraft:crafting_table', 'lolmct:spruce_crafting_table'],
		['minecraft:crafting_table', 'lolmct:birch_crafting_table'],
		['minecraft:crafting_table', 'lolmct:jungle_crafting_table'],
		['minecraft:crafting_table', 'lolmct:acacia_crafting_table'],
		['minecraft:crafting_table', 'lolmct:dark_oak_crafting_table'],
		['minecraft:crafting_table', 'lolmct:mangrove_crafting_table'],
		['minecraft:crafting_table', 'lolmct:cherry_crafting_table'],
		['minecraft:crafting_table', 'lolmct:bamboo_crafting_table'],
		['minecraft:crafting_table', 'lolmct:crimson_crafting_table'],

		// Better Nether Crafting Tables
		['minecraft:crafting_table', 'betternether:nether_reed_crafting_table'],
		['minecraft:crafting_table', 'betternether:stalagnate_crafting_table'],
		['minecraft:crafting_table', 'betternether:willow_crafting_table'],
		['minecraft:crafting_table', 'betternether:wart_crafting_table'],
		['minecraft:crafting_table', 'betternether:warped_crafting_table'],
		['minecraft:crafting_table', 'betternether:crimson_crafting_table'],
		['minecraft:crafting_table', 'betternether:rubeus_crafting_table'],
		['minecraft:crafting_table', 'betternether:mushroom_fir_crafting_table'],
		['minecraft:crafting_table', 'betternether:nether_mushroom_crafting_table'],
		['minecraft:crafting_table', 'betternether:anchor_tree_crafting_table'],
		['minecraft:crafting_table', 'betternether:nether_sakura_crafting_table'],

		// Better End Crafting Tables
		['minecraft:crafting_table', 'betterend:mossy_glowshroom_crafting_table'],
		['minecraft:crafting_table', 'betterend:pythadendron_crafting_table'],
		['minecraft:crafting_table', 'betterend:end_lotus_crafting_table'],
		['minecraft:crafting_table', 'betterend:lacugrove_crafting_table'],
		['minecraft:crafting_table', 'betterend:dragon_tree_crafting_table'],
		['minecraft:crafting_table', 'betterend:tenanea_crafting_table'],
		['minecraft:crafting_table', 'betterend:helix_tree_crafting_table'],
		['minecraft:crafting_table', 'betterend:umbrella_tree_crafting_table'],
		['minecraft:crafting_table', 'betterend:jellyshroom_crafting_table'],
		['minecraft:crafting_table', 'betterend:lucernia_crafting_table'],
	];

	table_types.forEach(table_type => {
		event.shapeless(
			Item.of(table_type[0], 1),
			[
				table_type[1]
			]
		);
	});
})