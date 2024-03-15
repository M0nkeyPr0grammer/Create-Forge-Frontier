ServerEvents.recipes(event => {

    // Bismuth Pile to Crushed Bismuth
	event.custom({
		type: "minecraft:crafting_shapeless",
		ingredients: [
			{
				item: 'kubejs:crushed_bismuth_pile'
			}
		],
		result: {
			item: 'kubejs:crushed_bismuth',
			count: 9
		  }
	})

    // Desh Pile to Crushed Desh
	event.custom({
		type: "minecraft:crafting_shapeless",
		ingredients: [
			{
				item: 'kubejs:crushed_desh_pile'
			}
		],
		result: {
			item: 'kubejs:crushed_desh_ore',
			count: 9
		  }
	})

    // Irradium Pile to Crushed Irradium
	event.custom({
		type: "minecraft:crafting_shapeless",
		ingredients: [
			{
				item: 'kubejs:crushed_irradium_pile'
			}
		],
		result: {
			item: 'kubejs:crushed_irradium',
			count: 9
		  }
	})

    // Malachite Pile to Crushed Malachite
	event.custom({
		type: "minecraft:crafting_shapeless",
		ingredients: [
			{
				item: 'kubejs:crushed_malachite_pile'
			}
		],
		result: {
			item: 'kubejs:crushed_malachite',
			count: 9
		  }
	})

    // Ostrum Pile to Crushed Ostrum
	event.custom({
		type: "minecraft:crafting_shapeless",
		ingredients: [
			{
				item: 'kubejs:crushed_ostrum_pile'
			}
		],
		result: {
			item: 'kubejs:crushed_ostrum_ore',
			count: 9
		  }
	})

    // Tin Pile to Crushed Tin
	event.custom({
		type: "minecraft:crafting_shapeless",
		ingredients: [
			{
				item: 'kubejs:crushed_tin_pile'
			}
		],
		result: {
			item: 'create:crushed_raw_tin',
			count: 9
		  }
	})

    // Uranium Pile to Crushed Uranium
	event.custom({
		type: "minecraft:crafting_shapeless",
		ingredients: [
			{
				item: 'kubejs:crushed_uranium_pile'
			}
		],
		result: {
			item: 'create:crushed_raw_uranium',
			count: 9
		  }
	})

    // Calorite Pile to Crushed Calorite
	event.custom({
		type: "minecraft:crafting_shapeless",
		ingredients: [
			{
				item: 'kubejs:crushed_calorite_pile'
			}
		],
		result: {
			item: 'kubejs:crushed_calorite_ore',
			count: 9
		  }
	})

    // Crushed Bismuth Pile Recipe
    event.shaped(
		Item.of('kubejs:crushed_bismuth_pile'),
		[
			'AAA',
			'AAA',
			'AAA'
		],
		{
			A: 'kubejs:crushed_bismuth'
		}
	)

    // Crushed Calorite Pile Recipe
    event.shaped(
		Item.of('kubejs:crushed_calorite_pile'),
		[
			'AAA',
			'AAA',
			'AAA'
		],
		{
			A: 'kubejs:crushed_calorite_ore'
		}
	)

    // Crushed Desh Pile Recipe
    event.shaped(
		Item.of('kubejs:crushed_desh_pile'),
		[
			'AAA',
			'AAA',
			'AAA'
		],
		{
			A: 'kubejs:crushed_desh_ore'
		}
	)

    // Crushed Irradium Pile Recipe
    event.shaped(
		Item.of('kubejs:crushed_irradium_pile'),
		[
			'AAA',
			'AAA',
			'AAA'
		],
		{
			A: 'kubejs:crushed_irradium'
		}
	)

    // Crushed Malachite Pile Recipe
    event.shaped(
        Item.of('kubejs:crushed_malachite_pile'),
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A: 'kubejs:crushed_malachite'
        }
    )

    // Crushed Ostrum Pile Recipe
    event.shaped(
        Item.of('kubejs:crushed_ostrum_pile'),
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A: 'kubejs:crushed_ostrum_ore'
        }
    )

    // Crushed Tin Pile Recipe
    event.shaped(
        Item.of('kubejs:crushed_tin_pile'),
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A: 'create:crushed_raw_tin'
        }
    )

    // Crushed Tin Pile Recipe
    event.shaped(
        Item.of('kubejs:crushed_uranium_pile'),
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A: 'create:crushed_raw_uranium'
        }
    )
})