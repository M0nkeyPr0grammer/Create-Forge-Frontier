ServerEvents.recipes(event => {

// Creates Overcharged Iron Block Recipe
event.shaped(
    Item.of('kubejs:overcharged_iron_block'),
    [
        'AAA',
        'AAA',
        'AAA'
    ],
    {
        A: 'create_new_age:overcharged_iron'
    }
)

// Creates Overcharged Gold Block Recipe
event.shaped(
    Item.of('kubejs:overcharged_gold_block'),
    [
        'AAA',
        'AAA',
        'AAA'
    ],
    {
        A: 'create_new_age:overcharged_gold'
    }
)
// Creates Overcharged Diamond Block Recipe
event.shaped(
    Item.of('kubejs:overcharged_diamond_block'),
    [
        'AAA',
        'AAA',
        'AAA'
    ],
    {
        A: 'create_new_age:overcharged_diamond'
    }
)

// Creates Overcharged Iron Block Charging Recipe
event.custom({
    type: "create_new_age:energising",
    energy_needed: 9000,
    ingredients: [
      {
        item: 'minecraft:iron_block'
      }
    ],
    results: [
      {
        item: 'kubejs:overcharged_iron_block'
      }
    ]
  })

  // Creates Overcharged Gold Block Charging Recipe
event.custom({
    type: "create_new_age:energising",
    energy_needed: 18000,
    ingredients: [
      {
        item: 'minecraft:gold_block'
      }
    ],
    results: [
      {
        item: 'kubejs:overcharged_gold_block'
      }
    ]
  })

  // Creates Overcharged Diamond Block Charging Recipe
event.custom({
    type: "create_new_age:energising",
    energy_needed: 90000,
    ingredients: [
      {
        item: 'minecraft:diamond_block'
      }
    ],
    results: [
      {
        item: 'kubejs:overcharged_diamond_block'
      }
    ]
  })

    // Overcharged Iron Block to Overcharged Iron Shapeless Recipe
	event.custom({
		type: "minecraft:crafting_shapeless",
		ingredients: [
			{
				item: 'kubejs:overcharged_iron_block'
			}
		],
		result: {
			item: 'create_new_age:overcharged_iron',
			count: 9
		  }
	})

    // Overcharged Gold Block to Overcharged Iron Shapeless Recipe
	event.custom({
		type: "minecraft:crafting_shapeless",
		ingredients: [
			{
				item: 'kubejs:overcharged_gold_block'
			}
		],
		result: {
			item: 'create_new_age:overcharged_gold',
			count: 9
		  }
	})

    // Overcharged Diamond Block to Overcharged Iron Shapeless Recipe
	event.custom({
		type: "minecraft:crafting_shapeless",
		ingredients: [
			{
				item: 'kubejs:overcharged_diamond_block'
			}
		],
		result: {
			item: 'create_new_age:overcharged_diamond',
			count: 9
		  }
	})

})