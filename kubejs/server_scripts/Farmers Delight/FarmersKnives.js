// Farmer's Knives Additions
ServerEvents.recipes(event => {

	// Creates Emerald Knife
	event.shaped(
		Item.of('farmersknives:emerald_knife', 1),
		[
			'A ',
			'B '
		],
		{
			A: 'minecraft:emerald',
			B: 'minecraft:stick'
		}
	)

	// Creates Amethyst Knife
	event.shaped(
		Item.of('farmersknives:amethyst_knife', 1),
		[
			'A ',
			'B '
		],
		{
			A: 'minecraft:amethyst_shard',
			B: 'minecraft:stick'
		}
	)

	// Creates Obsidian Knife
	event.shaped(
		Item.of('farmersknives:obsidian_knife', 1),
		[
			'A ',
			'B '
		],
		{
			A: 'minecraft:obsidian',
			B: 'minecraft:stick'
		}
	)

	// Create Copper Knife
	event.shaped(
		Item.of('farmersknives:copper_knife_et', 1),
		[
			'A ',
			'B '
		],
		{
			A: 'minecraft:copper_ingot',
			B: 'minecraft:stick'
		}
	)

	// Creates Warden Knife
	event.smithing(
		Item.of('farmersknives:warden_knife', '{Damage:0}'),
		'deeperdarker:warden_upgrade_smithing_template',
		Item.of('farmersdelight:netherite_knife', '{Damage:0}'),
		'deeperdarker:reinforced_echo_shard',
	)

})
