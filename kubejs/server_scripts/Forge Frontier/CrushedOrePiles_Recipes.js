// Custom Crushed Ore Piles Shaped and Shapeless Recipes
ServerEvents.recipes(event => {

// Shapeless Recipes

	// Lead Pile to Crushed Lead
	event.custom({
		type: "minecraft:crafting_shapeless",
		ingredients: [
			{
				item: 'forge_frontier:crushed_lead_pile'
			}
		],
		result: {
			item: 'create:crushed_raw_lead',
			count: 9
		  }
	}).id( 'forge_frontier:shapeless/crushed_lead_pile' )	

	// Aluminum Pile to Crushed Lead
	event.custom({
		type: "minecraft:crafting_shapeless",
		ingredients: [
			{
				item: 'forge_frontier:crushed_aluminum_pile'
			}
		],
		result: {
			item: 'create:crushed_raw_aluminum',
			count: 9
		  }
	}).id( 'forge_frontier:shapeless/crushed_aluminum_pile' )	

	// Bismuth Pile to Crushed Bismuth
	event.custom({
		type: "minecraft:crafting_shapeless",
		ingredients: [
			{
				item: 'forge_frontier:crushed_bismuth_pile'
			}
		],
		result: {
			item: 'forge_frontier:crushed_bismuth',
			count: 9
		  }
	}).id( 'forge_frontier:shapeless/crushed_bismuth_pile' )

    // Desh Pile to Crushed Desh
	event.custom({
		type: "minecraft:crafting_shapeless",
		ingredients: [
			{
				item: 'forge_frontier:crushed_desh_pile'
			}
		],
		result: {
			item: 'forge_frontier:crushed_desh',
			count: 9
		  }
	}).id( 'forge_frontier:shapeless/crushed_desh_pile' )

    // Irradium Pile to Crushed Irradium
	event.custom({
		type: "minecraft:crafting_shapeless",
		ingredients: [
			{
				item: 'forge_frontier:crushed_irradium_pile'
			}
		],
		result: {
			item: 'forge_frontier:crushed_irradium',
			count: 9
		  }
	}).id( 'forge_frontier:shapeless/crushed_irradium_pile' )

    // Malachite Pile to Crushed Malachite
	event.custom({
		type: "minecraft:crafting_shapeless",
		ingredients: [
			{
				item: 'forge_frontier:crushed_malachite_pile'
			}
		],
		result: {
			item: 'forge_frontier:crushed_malachite',
			count: 9
		  }
	}).id( 'forge_frontier:shapeless/crushed_malachite_pile' )

    // Ostrum Pile to Crushed Ostrum
	event.custom({
		type: "minecraft:crafting_shapeless",
		ingredients: [
			{
				item: 'forge_frontier:crushed_ostrum_pile'
			}
		],
		result: {
			item: 'forge_frontier:crushed_ostrum',
			count: 9
		  }
	}).id( 'forge_frontier:shapeless/crushed_ostrum_pile' )

    // Tin Pile to Crushed Tin
	event.custom({
		type: "minecraft:crafting_shapeless",
		ingredients: [
			{
				item: 'forge_frontier:crushed_tin_pile'
			}
		],
		result: {
			item: 'create:crushed_raw_tin',
			count: 9
		  }
	}).id( 'forge_frontier:shapeless/crushed_tin_pile' )

    // Uranium Pile to Crushed Uranium
	event.custom({
		type: "minecraft:crafting_shapeless",
		ingredients: [
			{
				item: 'forge_frontier:crushed_uranium_pile'
			}
		],
		result: {
			item: 'create:crushed_raw_uranium',
			count: 9
		  }
	}).id( 'forge_frontier:shapeless/crushed_uranium_pile' )

    // Calorite Pile to Crushed Calorite
	event.custom({
		type: "minecraft:crafting_shapeless",
		ingredients: [
			{
				item: 'forge_frontier:crushed_calorite_pile'
			}
		],
		result: {
			item: 'forge_frontier:crushed_calorite',
			count: 9
		  }
	}).id( 'forge_frontier:shapeless/crushed_calorite_pile' )

// Shaped Recipes

	// Crushed Lead Pile Recipe
    event.shaped(
		Item.of('forge_frontier:crushed_lead_pile'),
		[
			'AAA',
			'AAA',
			'AAA'
		],
		{
			A: 'create:crushed_raw_lead'
		}
	).id( 'forge_frontier:shaped/crushed_lead_pile' )	

	// Crushed Aluminum Pile Recipe
    event.shaped(
		Item.of('forge_frontier:crushed_aluminum_pile'),
		[
			'AAA',
			'AAA',
			'AAA'
		],
		{
			A: 'create:crushed_raw_aluminum'
		}
	).id( 'forge_frontier:shaped/crushed_aluminum_pile' )		

    // Crushed Bismuth Pile Recipe
    event.shaped(
		Item.of('forge_frontier:crushed_bismuth_pile'),
		[
			'AAA',
			'AAA',
			'AAA'
		],
		{
			A: 'forge_frontier:crushed_bismuth'
		}
	).id( 'forge_frontier:shaped/crushed_bismuth_pile' )

    // Crushed Calorite Pile Recipe
    event.shaped(
		Item.of('forge_frontier:crushed_calorite_pile'),
		[
			'AAA',
			'AAA',
			'AAA'
		],
		{
			A: 'forge_frontier:crushed_calorite'
		}
	).id( 'forge_frontier:shaped/crushed_calorite_pile' )

    // Crushed Desh Pile Recipe
    event.shaped(
		Item.of('forge_frontier:crushed_desh_pile'),
		[
			'AAA',
			'AAA',
			'AAA'
		],
		{
			A: 'forge_frontier:crushed_desh'
		}
	).id( 'forge_frontier:shaped/crushed_desh_pile' )

    // Crushed Irradium Pile Recipe
    event.shaped(
		Item.of('forge_frontier:crushed_irradium_pile'),
		[
			'AAA',
			'AAA',
			'AAA'
		],
		{
			A: 'forge_frontier:crushed_irradium'
		}
	).id( 'forge_frontier:shaped/crushed_irradium_pile' )

    // Crushed Malachite Pile Recipe
    event.shaped(
        Item.of('forge_frontier:crushed_malachite_pile'),
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A: 'forge_frontier:crushed_malachite'
        }
    ).id( 'forge_frontier:shaped/crushed_malachite_pile' )

    // Crushed Ostrum Pile Recipe
    event.shaped(
        Item.of('forge_frontier:crushed_ostrum_pile'),
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A: 'forge_frontier:crushed_ostrum'
        }
    ).id( 'forge_frontier:shaped/crushed_ostrum_pile' )

    // Crushed Tin Pile Recipe
    event.shaped(
        Item.of('forge_frontier:crushed_tin_pile'),
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A: 'create:crushed_raw_tin'
        }
    ).id( 'forge_frontier:shaped/crushed_tin_pile' )

    // Crushed Tin Pile Recipe
    event.shaped(
        Item.of('forge_frontier:crushed_uranium_pile'),
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A: 'create:crushed_raw_uranium'
        }
    ).id( 'forge_frontier:shaped/crushed_uranium_pile' )
})