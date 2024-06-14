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
          'create_new_age:overcharged_iron',
          'create_new_age:overcharged_iron',
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
      event.remove({ id: 'refinedstorage:grid'})
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
          E: Ingredient.of('toms_storage:ts.crafting_terminal').toJson(),
          F: Ingredient.of('refinedstorage:destruction_core').toJson(),
        },
        result: Ingredient.of('refinedstorage:grid').toJson(),
        acceptMirrored: false
      }).id('forge_frontier:mechanical_crafting/grid')

      // Switches Portable Grid to Mechanical Crafting
      event.remove({ id: 'refinedstorage:portable_grid' })
      event.custom({
        type: "create:mechanical_crafting",
        pattern: [
          "EGE",
          "ECE",
          "EFE"
        ],
        key: {
          E: Ingredient.of('refinedstorage:quartz_enriched_iron').toJson(),
          G: Ingredient.of('#refinedstorage:grid').toJson(),
          F: Ingredient.of('#refinedstorage:fluid_grid').toJson(),
          C: Ingredient.of('#refinedstorage:controller').toJson()
        },
        result: Ingredient.of('refinedstorage:portable_grid').toJson(),
        acceptMirrored: false
      }).id('forge_frontier:mechanical_crafting/portable_grid')

      // Switches Disk Drive Recipe to Mechanical Crafting
      event.remove({ id: 'refinedstorage:disk_drive' })
      event.custom({
        type: "create:mechanical_crafting",
        pattern: [
          "ECE",
          "EME",
          "EPE"
        ],
        key: {
          E: Ingredient.of('refinedstorage:quartz_enriched_iron').toJson(),
          C: Ingredient.of('toms_storage:ts.storage_terminal').toJson(),
          M: Ingredient.of('refinedstorage:machine_casing').toJson(),
          P: Ingredient.of('refinedstorage:advanced_processor').toJson()
        },
        result: Ingredient.of('refinedstorage:disk_drive').toJson(),
        acceptMirrored: false
      }).id('forge_frontier:mechanical_crafting/disk_drive')

      // Switches Controller Recipe to Mechanical Crafting
      event.remove({ id: 'refinedstorage:controller' })
      event.custom({
        type: "create:mechanical_crafting",
        pattern: [
          "EPE",
          "SMS",
          "ESE"
        ],
        key: {
          E: Ingredient.of('refinedstorage:quartz_enriched_iron').toJson(),
          P: Ingredient.of('refinedstorage:advanced_processor').toJson(),
          S: Ingredient.of('#forge:silicon').toJson(),
          M: Ingredient.of('refinedstorage:machine_casing').toJson()
        },
        result: Ingredient.of('refinedstorage:controller').toJson(),
        acceptMirrored: false
      }).id('forge_frontier:mechanical_crafting/controller')

      // Switches Network Receiver to Mechanical Crafting
      event.remove({ id: 'refinedstorage:network_receiver' })
      event.custom({
        type: "create:mechanical_crafting",
        pattern: [
          "ANA",
          "CMD",
          "EEE"
        ],
        key: {
          E: Ingredient.of('#forge:ender_pearls').toJson(),
          C: Ingredient.of('refinedstorage:construction_core').toJson(),
          M: Ingredient.of('refinedstorage:machine_casing').toJson(),
          D: Ingredient.of('refinedstorage:destruction_core').toJson(),
          A: Ingredient.of('refinedstorage:advanced_processor').toJson(),
          N: Ingredient.of('minecraft:netherite_ingot').toJson(),
        },
        result: Ingredient.of('refinedstorage:network_receiver').toJson(),
        acceptMirrored: false
      }).id('forge_frontier:mechanical_crafting/network_receiver')

      // Switches Network Transmitter to Mechanical Crafting
      event.remove({ id: 'refinedstorage:network_transmitter' })
      event.custom({
        type: "create:mechanical_crafting",
        pattern: [
          "EEE",
          "CMD",
          "ANA"
        ],
        key: {
          E: Ingredient.of('#forge:ender_pearls').toJson(),
          C: Ingredient.of('refinedstorage:construction_core').toJson(),
          M: Ingredient.of('refinedstorage:machine_casing').toJson(),
          D: Ingredient.of('refinedstorage:destruction_core').toJson(),
          A: Ingredient.of('refinedstorage:advanced_processor').toJson(),
          N: Ingredient.of('minecraft:netherite_ingot').toJson(),
        },
        result: Ingredient.of('refinedstorage:network_transmitter').toJson(),
        acceptMirrored: false
      }).id('forge_frontier:mechanical_crafting/network_transmitter')

      // Switches Wireless Transmitter to Mechanical Crafting
      event.remove({ id: 'refinedstorage:wireless_transmitter' })
      event.custom({
        type: "create:mechanical_crafting",
        pattern: [
          "EPE",
          "EME",
          "EAE"
        ],
        key: {
          E: Ingredient.of('refinedstorage:quartz_enriched_iron').toJson(),
          A: Ingredient.of('refinedstorage:advanced_processor').toJson(),
          M: Ingredient.of('refinedstorage:machine_casing').toJson(),
          P: Ingredient.of('#forge:ender_pearls').toJson()
        },
        result: Ingredient.of('refinedstorage:wireless_transmitter').toJson(),
        acceptMirrored: false
      }).id('forge_frontier:mechanical_crafting/wireless_transmitter')

      // Switches Relay to Mechanical Crafting
      event.remove({ id: 'refinedstorage:relay' })
      event.custom({
        type: "create:mechanical_crafting",
        pattern: [
          "MCR"
        ],
        key: {
          M: Ingredient.of('refinedstorage:machine_casing').toJson(),
          C: Ingredient.of('refinedstorage:cable').toJson(),
          R: Ingredient.of('minecraft:redstone_torch').toJson(),
        },
        result: Ingredient.of('refinedstorage:relay').toJson(),
        acceptMirrored: false
      }).id('forge_frontier:mechanical_crafting/relay')

      // Switches Detector to Mechanical Crafting
      event.remove({ id: 'refinedstorage:detector' })
      event.custom({
        type: "create:mechanical_crafting",
        pattern: [
          "ERE",
          "CMC",
          "EPE"
        ],
        key: {
          E: Ingredient.of('refinedstorage:quartz_enriched_iron').toJson(),
          C: Ingredient.of('minecraft:comparator').toJson(),
          R: Ingredient.of('minecraft:redstone_torch').toJson(),
          M: Ingredient.of('refinedstorage:machine_casing').toJson(),
          P: Ingredient.of('refinedstorage:improved_processor').toJson()
        },
        result: Ingredient.of('refinedstorage:detector').toJson(),
        acceptMirrored: false
      }).id('forge_frontier:mechanical_crafting/detector')

      // Switches Security Manager to Mechanical Crafting
      event.remove({ id: 'refinedstorage:security_manager' })
      event.custom({
        type: "create:mechanical_crafting",
        pattern: [
          "ECE",
          "SMS",
          "ESE"
        ],
        key: {
          E: Ingredient.of('refinedstorage:quartz_enriched_iron').toJson(),
          C: Ingredient.of('#forge:chests').toJson(),
          S: Ingredient.of('refinedstorage:security_card').toJson(),
          M: Ingredient.of('refinedstorage:machine_casing').toJson()
        },
        result: Ingredient.of('refinedstorage:security_manager').toJson(),
        acceptMirrored: false
      }).id('forge_frontier:mechanical_crafting/security_manager')

      // Switches Disk Manipulator to Mechanical Crafting
      event.remove({ id: 'refinedstorage:disk_manipulator' })
      event.custom({
        type: "create:mechanical_crafting",
        pattern: [
          "ESE",
          "CMD",
          "ESE"
        ],
        key: {
          E: Ingredient.of('refinedstorage:quartz_enriched_iron').toJson(),
          S: Ingredient.of('refinedstorage:storage_housing').toJson(),
          C: Ingredient.of('refinedstorage:construction_core').toJson(),
          M: Ingredient.of('refinedstorage:machine_casing').toJson(),
          D: Ingredient.of('refinedstorage:destruction_core').toJson()
        },
        result: Ingredient.of('refinedstorage:disk_manipulator').toJson(),
        acceptMirrored: false
      }).id('forge_frontier:mechanical_crafting/disk_manipulator')

      // Switches Crafter to Mechanical Crafting
      event.remove({ id: 'refinedstorage:crafter' })
      event.custom({
        type: "create:mechanical_crafting",
        pattern: [
          "ECE",
          "AMA",
          "EDE"
        ],
        key: {
          E: Ingredient.of('refinedstorage:quartz_enriched_iron').toJson(),
          C: Ingredient.of('refinedstorage:construction_core').toJson(),
          A: Ingredient.of('refinedstorage:advanced_processor').toJson(),
          M: Ingredient.of('refinedstorage:machine_casing').toJson(),
          D: Ingredient.of('refinedstorage:destruction_core').toJson()
        },
        result: Ingredient.of('refinedstorage:crafter').toJson(),
        acceptMirrored: false
      }).id('forge_frontier:mechanical_crafting/crafter')

      // Switches Crafter Manager to Mechanical Crafting
      event.remove({ id: 'refinedstorage:crafter_manager' })
      event.custom({
        type: "create:mechanical_crafting",
        pattern: [
          "PCG",
          "EMG",
          "PCG"
        ],
        key: {
          P: Ingredient.of('refinedstorage:advanced_processor').toJson(),
          C: Ingredient.of('#refinedstorage:crafter').toJson(),
          G: Ingredient.of('#forge:glass').toJson(),
          E: Ingredient.of('refinedstorage:quartz_enriched_iron').toJson(),
          M: Ingredient.of('refinedstorage:machine_casing').toJson()
        },
        result: Ingredient.of('refinedstorage:crafter_manager').toJson(),
        acceptMirrored: false
      }).id('forge_frontier:mechanical_crafting/crafter_manager')

      // Switches Crafting Monitor to Mechanical Crafting
      event.remove({ id: 'refinedstorage:crafting_monitor' })
      event.custom({
        type: "create:mechanical_crafting",
        pattern: [
          "PAG",
          "EMG",
          "PAG"
        ],
        key: {
          P: Ingredient.of('refinedstorage:advanced_processor').toJson(),
          A: Ingredient.of('refinedstorage:pattern').toJson(),
          G: Ingredient.of('#forge:glass').toJson(),
          E: Ingredient.of('refinedstorage:quartz_enriched_iron').toJson(),
          M: Ingredient.of('refinedstorage:machine_casing').toJson()
        },
        result: Ingredient.of('refinedstorage:crafting_monitor').toJson(),
        acceptMirrored: false
      }).id('forge_frontier:mechanical_crafting/crafting_monitor')
  
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
  