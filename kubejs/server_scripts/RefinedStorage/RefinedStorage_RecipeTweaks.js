ServerEvents.recipes(event => {
    event.remove({ id: "refinedstorage:raw_basic_processor" }); // Removes Recipe
    event.remove({ id: "refinedstorage:raw_improved_processor" }); // Removes Recipe
    event.remove({ id: "refinedstorage:raw_advanced_processor" }); // Removes Recipe
    event.remove({ id: "extradisks:raw_withering_processor" }); // Removes Recipe
    event.remove({ id: "refinedstorage:processor_binding"}); //Removes Recipe
    event.remove({ id: "refinedstorage:quartz_enriched_iron"})
    event.remove({ id: 'refinedstorage:grid'});
    event.remove({ id: 'refinedstorage:machine_casing'});

    // Shapeless Recipes
      // Create Quartz Enriched Iron Recipe
      event.shapeless(
        Item.of('refinedstorage:quartz_enriched_iron'),
        [
          'create_dd:industrial_iron_ingot',
          'create_dd:industrial_iron_ingot',
          'minecraft:quartz'
        ]
      ).id('forge_frontier:shapeless/quartz_enriched_iron'); 

      // Creates Shapeless Recipe for Processor Binding
      event.shapeless(
        Item.of('refinedstorage:processor_binding'),
        [
          'minecraft:string',
          'minecraft:slime_ball',
          'minecraft:string',
        ]
      ).id('forge_frontier:shapeless/processor_binding');     

    // Item Application Recipes
      // Creates New Machine Casing Recipe
    event.custom({
      type: 'create:item_application',
      ingredients: [
        {
        item: 'create:brass_block'
        },
        {
        item: 'refinedstorage:quartz_enriched_iron'
        }
      ],
      results: [
        {
        item: 'refinedstorage:machine_casing'
        }
      ]
      }).id('forge_frontier:item_application/machine_casing');

      
    // Mechanical Crafting Recipes
      // Creates New Grid Recipe using Tom's Simple Storage
      event.custom({
        type: "create:mechanical_crafting",
        pattern: [
          'ABC',
          'DEC',
          'AFC'
        ],
        key: {
          A: Ingredient.of('refinedstorage:improved_processor').toJson(),
          B: Ingredient.of('refinedstorage:construction_core').toJson(),
          C: Ingredient.of('#forge:glass').toJson(),
          D: Ingredient.of('refinedstorage:quartz_enriched_iron').toJson(),
          E: Ingredient.of('toms_storage:crafting_terminal').toJson(),
          F: Ingredient.of('refinedstorage:destruction_core').toJson(),
        },
        result: Ingredient.of('refinedstorage:grid').toJson(),
        acceptMirrored: false
      }).id('forge_frontier:mechanical_crafting/grid')

      // Switches Portable Grid to Mechanical Crafting

      // Switches Disk Drive Recipe to Mechanical Crafting

      // Switches Controller Recipe to Mechanical Crafting

      // Switches Network Receiver to Mechanical Crafting

      // Switches Network Transmitter to Mechanical Crafting

      // Switches Wireless Transmitter to Mechanical Crafting

      // Switches Relay to Mechanical Crafting

      // Switches Detector to Mechanical Crafting

      // Switches Security Manager to Mechanical Crafting

      // Switches Disk Manipulator to Mechanical Crafting

      // Switches Crafter to Mechanical Crafting

      // Switches Crafter Manager to Mechanical Crafting

      // Switches Crafting Monitor to Mechanical Crafting
  
    // Sequenced Assembly Recipes
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
                item: 'forge_frontier:incomplete_raw_basic_processor'
              },
              {
                item: 'refinedstorage:processor_binding'
              }
            ],
            results: [
              {
                item: 'forge_frontier:incomplete_raw_basic_processor'
              }
            ]
          },
          {
            type: 'create:deploying',
            ingredients: [
              {
                item: 'forge_frontier:incomplete_raw_basic_processor'
              },
              {
                item: 'refinedstorage:silicon'
              }
            ],
            results: [
              {
                item: 'forge_frontier:incomplete_raw_basic_processor'
              }
            ]
          },
          {
              type: 'create:deploying',
              ingredients: [
                {
                  item: 'forge_frontier:incomplete_raw_basic_processor'
                },
                {
                  item: 'minecraft:redstone'
                }
              ],
              results: [
                {
                  item: 'forge_frontier:incomplete_raw_basic_processor'
                }
              ]
            }
        ],
        transitionalItem: {
          item: 'forge_frontier:incomplete_raw_basic_processor'
        }
      }).id('forge_frontier:sequenched_assembley/raw_basic_processor');

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
                  item: 'forge_frontier:incomplete_raw_improved_processor'
                },
                {
                  item: 'refinedstorage:processor_binding'
                }
              ],
              results: [
                {
                  item: 'forge_frontier:incomplete_raw_improved_processor'
                }
              ]
            },
            {
              type: 'create:deploying',
              ingredients: [
                {
                  item: 'forge_frontier:incomplete_raw_improved_processor'
                },
                {
                  item: 'refinedstorage:silicon'
                }
              ],
              results: [
                {
                  item: 'forge_frontier:incomplete_raw_improved_processor'
                }
              ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                  {
                    item: 'forge_frontier:incomplete_raw_improved_processor'
                  },
                  {
                    item: 'minecraft:redstone'
                  }
                ],
                results: [
                  {
                    item: 'forge_frontier:incomplete_raw_improved_processor'
                  }
                ]
              }
          ],
          transitionalItem: {
            item: 'forge_frontier:incomplete_raw_improved_processor'
          }
        }).id('forge_frontier:sequenched_assembley/raw_improved_processor');

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
                  item: 'forge_frontier:incomplete_raw_advanced_processor'
                },
                {
                  item: 'refinedstorage:processor_binding'
                }
              ],
              results: [
                {
                  item: 'forge_frontier:incomplete_raw_advanced_processor'
                }
              ]
            },
            {
              type: 'create:deploying',
              ingredients: [
                {
                  item: 'forge_frontier:incomplete_raw_advanced_processor'
                },
                {
                  item: 'refinedstorage:silicon'
                }
              ],
              results: [
                {
                  item: 'forge_frontier:incomplete_raw_advanced_processor'
                }
              ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                  {
                    item: 'forge_frontier:incomplete_raw_advanced_processor'
                  },
                  {
                    item: 'minecraft:redstone'
                  }
                ],
                results: [
                  {
                    item: 'forge_frontier:incomplete_raw_advanced_processor'
                  }
                ]
              }
          ],
          transitionalItem: {
            item: 'forge_frontier:incomplete_raw_advanced_processor'
          }
        }).id('forge_frontier:sequenched_assembley/raw_advanced_processor');

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
                item: 'forge_frontier:incomplete_raw_withering_processor'
              },
              {
                item: 'refinedstorage:processor_binding'
              }
            ],
            results: [
              {
                item: 'forge_frontier:incomplete_raw_withering_processor'
              }
            ]
          },
          {
            type: 'create:deploying',
            ingredients: [
              {
                item: 'forge_frontier:incomplete_raw_withering_processor'
              },
              {
                item: 'refinedstorage:silicon'
              }
            ],
            results: [
              {
                item: 'forge_frontier:incomplete_raw_withering_processor'
              }
            ]
          },
          {
              type: 'create:deploying',
              ingredients: [
                {
                  item: 'forge_frontier:incomplete_raw_withering_processor'
                },
                {
                  item: 'minecraft:redstone'
                }
              ],
              results: [
                {
                  item: 'forge_frontier:incomplete_raw_withering_processor'
                }
              ]
            }
        ],
        transitionalItem: {
          item: 'forge_frontier:incomplete_raw_withering_processor'
        }
      }).id('forge_frontier:sequenched_assembley/raw_withering_processor');
    });
  