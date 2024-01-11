ServerEvents.recipes(event => {

    event.remove({ id: 'buildinggadgets2:gadget_building' }); // Removes Recipe
    event.remove({ id: 'buildinggadgets2:gadget_exchanging' }); // Removes Recipe
    event.remove({ id: 'buildinggadgets2:gadget_copy_paste' }); // Removes Recipe
    event.remove({ id: 'buildinggadgets2:gadget_cut_paste' }); // Removes Recipe
    event.remove({ id: 'buildinggadgets2:gadget_destruction' }); // Removes Recipe

    // Creates New Building Gadget Recipe
    event.shaped(
		Item.of('buildinggadgets2:gadget_building', 1),
		[
			'ABA',
			'CBC',
			'ADA'
		],
		{
			A: 'create:andesite_alloy',
			B: 'minecraft:redstone',
			C: 'minecraft:diamond',
            D: 'minecraft:lapis_lazuli'
		}
	)
	
    // Creates New Exchanging Gadget Recipe
    event.shaped(
		Item.of('buildinggadgets2:gadget_exchanging', 1),
		[
			'ABA',
			'CDC',
			'ADA'
		],
		{
			A: 'create:brass_ingot',
			B: 'minecraft:redstone',
			C: 'minecraft:diamond',
            D: 'minecraft:lapis_lazuli'
		}
	)

    // Creates New Copy Paste Gadget Recipe
    event.shaped(
		Item.of('buildinggadgets2:gadget_copy_paste', 1),
		[
			'ABA',
			'CBC',
			'ADA'
		],
		{
			A: 'create:andesite_alloy',
			B: 'minecraft:redstone',
			C: 'minecraft:emerald',
            D: 'minecraft:lapis_lazuli'
		}
	)

    // Creates New Cut Paste Gadget Recipe
    event.shaped(
		Item.of('buildinggadgets2:gadget_cut_paste', 1),
		[
			'ABA',
			'CBC',
			'ADA'
		],
		{
			A: 'create:andesite_alloy',
			B: 'minecraft:redstone',
			C: 'minecraft:shears',
            D: 'minecraft:lapis_lazuli'
		}
	)

    // Creates New Destruction Gadget Recipe
    event.shaped(
		Item.of('buildinggadgets2:gadget_destruction', 1),
		[
			'ABA',
			'CBC',
			'ADA'
		],
		{
			A: 'create:andesite_alloy',
			B: 'minecraft:redstone',
			C: '#forge:ender_pearls',
            D: 'minecraft:lapis_lazuli'
		}
	)

})
