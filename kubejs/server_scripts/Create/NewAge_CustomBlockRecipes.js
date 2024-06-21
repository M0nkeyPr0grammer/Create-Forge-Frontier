// New Age Forge Frontier Custom Block Recipes
ServerEvents.recipes(event => {

// Shaped Recipes
  // Creates Overcharged Iron Block Recipe
  event.shaped(
      Item.of('forge_frontier:overcharged_iron_block'),
      [
          'AAA',
          'AAA',
          'AAA'
      ],
      {
          A: 'create_new_age:overcharged_iron'
      }
  ).id('forge_frontier:shaped/overcharged_iron_block')

  // Creates Overcharged Gold Block Recipe
  event.shaped(
      Item.of('forge_frontier:overcharged_gold_block'),
      [
          'AAA',
          'AAA',
          'AAA'
      ],
      {
          A: 'create_new_age:overcharged_gold'
      }
  ).id('forge_frontier:shaped/overcharged_gold_block')

  // Creates Overcharged Diamond Block Recipe
  event.shaped(
      Item.of('forge_frontier:overcharged_diamond_block'),
      [
          'AAA',
          'AAA',
          'AAA'
      ],
      {
          A: 'create_new_age:overcharged_diamond'
      }
  ).id('forge_frontier:shaped/overcharged_diamond_block')

  // Creates Overcharged Netherite Block Recipe
  event.shaped(
    Item.of('forge_frontier:overcharged_netherite_block'),
    [
        'AAA',
        'AAA',
        'AAA'
    ],
    {
        A: 'forge_frontier:overcharged_netherite_ingot'
    }
  ).id('forge_frontier:shaped/overcharged_netherite_block')

// Energising Recipes
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
          item: 'forge_frontier:overcharged_iron_block'
        }
      ]
    }).id('forge_frontier:energising/overcharged_iron_block')

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
            item: 'forge_frontier:overcharged_gold_block'
          }
        ]
    }).id('forge_frontier:energising/overcharged_gold_block')

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
            item: 'forge_frontier:overcharged_diamond_block'
          }
        ]
      }).id('forge_frontier:energising/overcharged_diamond_block')

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
          item: 'forge_frontier:overcharged_netherite_block'
        }
      ]
    }).id('forge_frontier:energising/overcharged_netherite_block')

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
        item: 'forge_frontier:overcharged_netherite_ingot'
      }
    ]
  }).id('forge_frontier:energising/overcharged_netherite_ingot')

// Shapeless Recipe
  // Overcharged Iron Block to Overcharged Iron Shapeless Recipe
  event.custom({
    type: "minecraft:crafting_shapeless",
    ingredients: [
      {
        item: 'forge_frontier:overcharged_iron_block'
      }
    ],
    result: {
      item: 'create_new_age:overcharged_iron',
      count: 9
      }
  }).id('forge_frontier:shapeless/overcharged_iron_block')

  // Overcharged Gold Block to Overcharged Gold Shapeless Recipe
	event.custom({
		type: "minecraft:crafting_shapeless",
		ingredients: [
			{
				item: 'forge_frontier:overcharged_gold_block'
			}
		],
		result: {
			item: 'create_new_age:overcharged_gold',
			count: 9
		  }
	}).id('forge_frontier:shapeless/overcharged_gold_block')

  // Overcharged Diamond Block to Overcharged Diamond Shapeless Recipe
	event.custom({
		type: "minecraft:crafting_shapeless",
		ingredients: [
			{
				item: 'forge_frontier:overcharged_diamond_block'
			}
		],
		result: {
			item: 'create_new_age:overcharged_diamond',
			count: 9
		  }
	}).id('forge_frontier:shapeless/overcharged_diamond_block')

  // Overcharged Netherite Block to Overcharged Netherite Shapeless Recipe
	event.custom({
		type: "minecraft:crafting_shapeless",
		ingredients: [
			{
				item: 'forge_frontier:overcharged_netherite_block'
			}
		],
		result: {
			item: 'forge_frontier:overcharged_netherite_ingot',
			count: 9
		  }
	}).id('forge_frontier:shapeless/overcharged_netherite_block')

})