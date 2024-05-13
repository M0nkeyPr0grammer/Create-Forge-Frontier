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

// Creates Overcharged Netherite Block Recipe
event.shaped(
  Item.of('kubejs:overcharged_netherite_block'),
  [
      'AAA',
      'AAA',
      'AAA'
  ],
  {
      A: 'kubejs:overcharged_netherite_ingot'
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

  // Creates Overcharged Netherite Block Charging Recipe
event.custom({
  type: "create_new_age:energising",
  energy_needed: 450000,
  ingredients: [
    {
      item: 'minecraft:netherite_block'
    }
  ],
  results: [
    {
      item: 'kubejs:overcharged_netherite_block'
    }
  ]
})

// Creates Overcharged Netherite Ingot Charging Recipe
event.custom({
  type: "create_new_age:energising",
  energy_needed: 50000,
  ingredients: [
    {
      item: 'minecraft:netherite_ingot'
    }
  ],
  results: [
    {
      item: 'kubejs:overcharged_netherite_ingot'
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

    // Overcharged Gold Block to Overcharged Gold Shapeless Recipe
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

    // Overcharged Diamond Block to Overcharged Diamond Shapeless Recipe
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

  // Overcharged Netherite Block to Overcharged Netherite Shapeless Recipe
	event.custom({
		type: "minecraft:crafting_shapeless",
		ingredients: [
			{
				item: 'kubejs:overcharged_netherite_block'
			}
		],
		result: {
			item: 'kubejs:overcharged_netherite_ingot',
			count: 9
		  }
	})

})