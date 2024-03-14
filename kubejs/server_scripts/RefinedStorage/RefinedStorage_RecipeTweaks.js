ServerEvents.recipes(event => {
    event.remove({ id: "refinedstorage:raw_basic_processor" }); // Removes Recipe
    event.remove({ id: "refinedstorage:raw_improved_processor" }); // Removes Recipe
    event.remove({ id: "refinedstorage:raw_advanced_processor" }); // Removes Recipe
    event.remove({ id: "extradisks:raw_withering_processor" }); // Removes Recipe
    event.remove({ id: "refinedstorage:processor_binding"}); //Removes Recipe
    event.remove({ id: "refinedstorage:quartz_enriched_iron"})

    // Create Quartz Enriched Iron Recipe
    event.shapeless(
      Item.of('refinedstorage:quartz_enriched_iron'),
      [
        'create_dd:andesite_sheet',
        'create_dd:andesite_sheet',
        'create_dd:andesite_sheet',
        'minecraft:quartz'
      ]
    ); 
  
    // Creates Shapeless Recipe for Processor Binding
    event.shapeless(
      Item.of('refinedstorage:processor_binding'),
      [
        'minecraft:string',
        'minecraft:slime_ball',
        'minecraft:string',
      ]
    ); 
  
    // Creates Sequenced Assembly Recipe for Raw Basic Processor
    event.custom({
      type: 'create:sequenced_assembly',
      ingredient: {
        tag: 'forge:ingots/iron'
      },
      loops: 1,
      results: [
        {
          chance: 100,
          item: 'refinedstorage:raw_basic_processor'
        }
      ],
      sequence: [
        {
          type: 'create:deploying',
          ingredients: [
            {
              item: 'kubejs:incomplete_raw_basic_processor'
            },
            {
              item: 'refinedstorage:processor_binding'
            }
          ],
          results: [
            {
              item: 'kubejs:incomplete_raw_basic_processor'
            }
          ]
        },
        {
          type: 'create:deploying',
          ingredients: [
            {
              item: 'kubejs:incomplete_raw_basic_processor'
            },
            {
              item: 'refinedstorage:silicon'
            }
          ],
          results: [
            {
              item: 'kubejs:incomplete_raw_basic_processor'
            }
          ]
        },
        {
            type: 'create:deploying',
            ingredients: [
              {
                item: 'kubejs:incomplete_raw_basic_processor'
              },
              {
                item: 'minecraft:redstone'
              }
            ],
            results: [
              {
                item: 'kubejs:incomplete_raw_basic_processor'
              }
            ]
          }
      ],
      transitionalItem: {
        item: 'kubejs:incomplete_raw_basic_processor'
      }
    });

    // Creates Sequenced Assembly Recipe for Raw Improved Processor
    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: {
          tag: 'forge:ingots/gold'
        },
        loops: 1,
        results: [
          {
            chance: 100,
            item: 'refinedstorage:raw_improved_processor'
          }
        ],
        sequence: [
          {
            type: 'create:deploying',
            ingredients: [
              {
                item: 'kubejs:incomplete_raw_improved_processor'
              },
              {
                item: 'refinedstorage:processor_binding'
              }
            ],
            results: [
              {
                item: 'kubejs:incomplete_raw_improved_processor'
              }
            ]
          },
          {
            type: 'create:deploying',
            ingredients: [
              {
                item: 'kubejs:incomplete_raw_improved_processor'
              },
              {
                item: 'refinedstorage:silicon'
              }
            ],
            results: [
              {
                item: 'kubejs:incomplete_raw_improved_processor'
              }
            ]
          },
          {
              type: 'create:deploying',
              ingredients: [
                {
                  item: 'kubejs:incomplete_raw_improved_processor'
                },
                {
                  item: 'minecraft:redstone'
                }
              ],
              results: [
                {
                  item: 'kubejs:incomplete_raw_improved_processor'
                }
              ]
            }
        ],
        transitionalItem: {
          item: 'kubejs:incomplete_raw_improved_processor'
        }
      });

      // Creates Sequenced Assembly Recipe for Raw Advanced Processor
    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: {
          tag: 'forge:gems/diamond'
        },
        loops: 1,
        results: [
          {
            chance: 100,
            item: 'refinedstorage:raw_advanced_processor'
          }
        ],
        sequence: [
          {
            type: 'create:deploying',
            ingredients: [
              {
                item: 'kubejs:incomplete_raw_advanced_processor'
              },
              {
                item: 'refinedstorage:processor_binding'
              }
            ],
            results: [
              {
                item: 'kubejs:incomplete_raw_advanced_processor'
              }
            ]
          },
          {
            type: 'create:deploying',
            ingredients: [
              {
                item: 'kubejs:incomplete_raw_advanced_processor'
              },
              {
                item: 'refinedstorage:silicon'
              }
            ],
            results: [
              {
                item: 'kubejs:incomplete_raw_advanced_processor'
              }
            ]
          },
          {
              type: 'create:deploying',
              ingredients: [
                {
                  item: 'kubejs:incomplete_raw_advanced_processor'
                },
                {
                  item: 'minecraft:redstone'
                }
              ],
              results: [
                {
                  item: 'kubejs:incomplete_raw_advanced_processor'
                }
              ]
            }
        ],
        transitionalItem: {
          item: 'kubejs:incomplete_raw_advanced_processor'
        }
      });

      // Creates Sequenced Assembly Recipe for Raw Withering Processor
    event.custom({
      type: 'create:sequenced_assembly',
      ingredient: {
        item: 'minecraft:nether_star'
      },
      loops: 1,
      results: [
        {
          chance: 100,
          item: 'extradisks:raw_withering_processor'
        }
      ],
      sequence: [
        {
          type: 'create:deploying',
          ingredients: [
            {
              item: 'kubejs:incomplete_raw_withering_processor'
            },
            {
              item: 'refinedstorage:processor_binding'
            }
          ],
          results: [
            {
              item: 'kubejs:incomplete_raw_withering_processor'
            }
          ]
        },
        {
          type: 'create:deploying',
          ingredients: [
            {
              item: 'kubejs:incomplete_raw_withering_processor'
            },
            {
              item: 'refinedstorage:silicon'
            }
          ],
          results: [
            {
              item: 'kubejs:incomplete_raw_withering_processor'
            }
          ]
        },
        {
            type: 'create:deploying',
            ingredients: [
              {
                item: 'kubejs:incomplete_raw_withering_processor'
              },
              {
                item: 'minecraft:redstone'
              }
            ],
            results: [
              {
                item: 'kubejs:incomplete_raw_withering_processor'
              }
            ]
          }
      ],
      transitionalItem: {
        item: 'kubejs:incomplete_raw_withering_processor'
      }
    });
  });
  