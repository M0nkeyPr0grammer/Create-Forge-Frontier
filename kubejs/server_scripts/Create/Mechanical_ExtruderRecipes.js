ServerEvents.recipes(event => {
event.remove({ id: 'create_mechanical_extruder:mechanical_extruder'})

// Creates Sequenced Assembly Recipe for Mechanical Extruder
    event.custom({
      type: 'create:sequenced_assembly',
      ingredient: {
        item: 'create_dd:steel_casing'
      },
      loops: 1,
      results: [
        {
          chance: 100,
          item: 'create_mechanical_extruder:mechanical_extruder'
        }
      ],
      sequence: [
        {
          type: 'create:deploying',
          ingredients: [
            {
              item: 'create_dd:steel_casing'
            },
            {
              item: 'create:deployer'
            }
          ],
          results: [
            {
              item: 'create_dd:steel_casing'
            }
          ]
        },
        {
          type: 'create:deploying',
          ingredients: [
            {
              item: 'create_dd:steel_casing'
            },
            {
              item: 'create:mechanical_drill'
            }
          ],
          results: [
            {
              item: 'create_dd:steel_casing'
            }
          ]
        },
        {
            type: 'create:deploying',
            ingredients: [
              {
                item: 'create_dd:steel_casing'
              },
              {
                item: 'minecraft:glass'
              }
            ],
            results: [
              {
                item: 'create_dd:steel_casing'
              }
            ]
          }
      ],
      transitionalItem: {
        item: 'create_dd:steel_casing'
      }
    }).id('forge_frontier:sequenced_assembly/mechanical_extruder');

    // Extruding Recipes

      // Sky Stone
      event.custom({
        type: 'create_mechanical_extruder:extruding',
        ingredients: [
          {
            fluid: 'minecraft:water',
            amount: 1000
          },
          {
            fluid: 'minecraft:lava',
            amount: 1000
          }
        ],
        catalyst: {
          item: 'ae2:sky_stone_block'
        },
        result: {
          item: 'ae2:sky_stone_block'
        }
      }).id('forge_frontier:extruding/sky_stone')

      // Gabbro
      event.remove({ id: 'create_dd:acompat/create_mechanical_extruder/extruding/gabbro' })

      event.custom({
        type: 'create_mechanical_extruder:extruding',
        ingredients: [
          {
            fluid: 'create_dd:strawberry',
            amount: 1000
          },
          {
            fluid: 'minecraft:lava',
            amount: 1000
          }
        ],
        catalyst: {
          item: 'create_dd:gabbro'
        },
        result: {
          item: 'create_dd:gabbro'
        }
      }).id('forge_frontier:extruding/gabbro')

      // Cobbled Crimsite
      event.remove({ id: 'create_dd:acompat/create_mechanical_extruder/extruding/crimsite_cobble' })

      event.custom({
        type: 'create_mechanical_extruder:extruding',
        ingredients: [
          {
            fluid: 'create_dd:strawberry_milkshake',
            amount: 1000
          },
          {
            fluid: 'minecraft:lava',
            amount: 1000
          }
        ],
        catalyst: {
          item: 'create:crimsite'
        },
        result: {
          item: 'create_dd:crimsite_cobble'
        },
        requiredBonks: 2
      }).id('forge_frontier:extruding/crimsite_cobble')

      // Deepslate
      event.remove({ id: 'create_dd:acompat/create_mechanical_extruder/extruding/deepslate' })

      event.custom({
        type: 'create_mechanical_extruder:extruding',
        ingredients: [
          {
            fluid: 'create_dd:vanilla',
            amount: 1000
          },
          {
            fluid: 'minecraft:lava',
            amount: 1000
          }
        ],
        catalyst: {
          item: 'minecraft:deepslate'
        },
        result: {
          item: 'minecraft:deepslate'
        }
      }).id('forge_frontier:extruding/deepslate')

      // Dripstone Block
      event.remove({ id: 'create_dd:acompat/create_mechanical_extruder/extruding/dripstone' })

      event.custom({
        type: 'create_mechanical_extruder:extruding',
        ingredients: [
          {
            fluid: 'create_dd:glowberry',
            amount: 1000
          },
          {
            fluid: 'minecraft:lava',
            amount: 1000
          }
        ],
        catalyst: {
          item: 'minecraft:dripstone_block'
        },
        result: {
          item: 'minecraft:dripstone_block'
        }
      }).id('forge_frontier:extruding/dripstone')

      // Calcite
      event.remove({ id: 'create_dd:acompat/create_mechanical_extruder/extruding/calcite' })

      event.custom({
        type: 'create_mechanical_extruder:extruding',
        ingredients: [
          {
            fluid: 'create_dd:condense_milk',
            amount: 1000
          },
          {
            fluid: 'minecraft:lava',
            amount: 1000
          }
        ],
        catalyst: {
          item: 'minecraft:calcite'
        },
        result: {
          item: 'minecraft:calcite'
        }
      }).id('forge_frontier:extruding/calcite')

      // Scoria
      event.remove({ id: 'create_dd:acompat/create_mechanical_extruder/extruding/scoria_milkshake' })

      event.remove({ id: 'create_dd:acompat/create_mechanical_extruder/extruding/scoria' })

      event.custom({
        type: 'create_mechanical_extruder:extruding',
        ingredients: [
          {
            fluid: 'create_dd:chocolate_milkshake',
            amount: 1000
          },
          {
            fluid: 'minecraft:lava',
            amount: 1000
          }
        ],
        catalyst: {
          item: 'create:scoria'
        },
        result: {
          item: 'create:scoria'
        },
        requiredBonks: 2
      }).id('forge_frontier:extruding/scoria')

      // Scorchia
      event.remove({ id: 'create_dd:acompat/create_mechanical_extruder/extruding/scorchia' })

      event.custom({
        type: 'create_mechanical_extruder:extruding',
        ingredients: [
          {
            fluid: 'create_dd:hot_chocolate',
            amount: 1000
          },
          {
            fluid: 'minecraft:lava',
            amount: 1000
          }
        ],
        catalyst: {
          item: 'create:scorchia'
        },
        result: {
          item: 'create:scorchia'
        },
        requiredBonks: 2
      }).id('forge_frontier:extruding/scorchia')

      // Cobblestone
      event.remove({ id: 'create_mechanical_extruder:extruding/cobblestone' })

      event.custom({
        type: 'create_mechanical_extruder:extruding',
        ingredients: [
          {
            fluid: 'minecraft:water',
            amount: 1000
          },
          {
            fluid: 'minecraft:lava',
            amount: 1000
          }
        ],
        catalyst: {
          item: 'minecraft:cobblestone'
        },
        result: {
          item: 'minecraft:cobblestone'
        }
      }).id('forge_frontier:extruding/cobblestone')

      // Cobbled Potassic
      event.remove({ id: 'create_dd:acompat/create_mechanical_extruder/extruding/potassic_cobble' })

      event.custom({
        type: 'create_mechanical_extruder:extruding',
        ingredients: [
          {
            fluid: 'create_dd:vanilla_milkshake',
            amount: 1000
          },
          {
            fluid: 'minecraft:lava',
            amount: 1000
          }
        ],
        catalyst: {
          item: 'create_dd:potassic'
        },
        result: {
          item: 'create_dd:potassic_cobble'
        },
        requiredBonks: 2
      }).id('forge_frontier:extruding/potassic_cobble')

      // Cobbled Asurine
      event.remove({ id: 'create_dd:acompat/create_mechanical_extruder/extruding/asurine_cobble' })

      event.custom({
        type: 'create_mechanical_extruder:extruding',
        ingredients: [
          {
            fluid: 'create_dd:cream',
            amount: 1000
          },
          {
            fluid: 'minecraft:lava',
            amount: 1000
          }
        ],
        catalyst: {
          item: 'create:asurine'
        },
        result: {
          item: 'create_dd:asurine_cobble'
        },
        requiredBonks: 2
      }).id('forge_frontier:extruding/asurine_cobble')

      // Cobbled Ochrum
      event.remove({ id: 'create_dd:acompat/create_mechanical_extruder/extruding/ochrum_cobble' })

      event.custom({
        type: 'create_mechanical_extruder:extruding',
        ingredients: [
          {
            fluid: 'create_dd:glowberry_milkshake',
            amount: 1000
          },
          {
            fluid: 'minecraft:lava',
            amount: 1000
          }
        ],
        catalyst: {
          item: 'create:ochrum'
        },
        result: {
          item: 'create_dd:ochrum_cobble'
        },
        requiredBonks: 2
      }).id('forge_frontier:extruding/ochrum_cobble')

      // Blackstone
      event.remove({ id: 'create_dd:acompat/create_mechanical_extruder/extruding/blackstone' })

      event.custom({
        type: 'create_mechanical_extruder:extruding',
        ingredients: [
          {
            fluid: 'create_dd:caramel',
            amount: 1000
          },
          {
            fluid: 'minecraft:lava',
            amount: 1000
          }
        ],
        catalyst: {
          item: 'minecraft:blackstone'
        },
        result: {
          item: 'minecraft:blackstone'
        }
      }).id('forge_frontier:extruding/blackstone')

      // Cobbled Verdium
      event.remove({ id: 'create_dd:acompat/create_mechanical_extruder/extruding/veridium_cobble' })

      event.custom({
        type: 'create_mechanical_extruder:extruding',
        ingredients: [
          {
            fluid: 'create_dd:caramel_milkshake',
            amount: 1000
          },
          {
            fluid: 'minecraft:lava',
            amount: 1000
          }
        ],
        catalyst: {
          item: 'create:veridium'
        },
        result: {
          item: 'create_dd:veridium_cobble'
        },
        requiredBonks: 2
      }).id('forge_frontier:extruding/veridium_cobble')

      // Limestone
      event.remove({ id: 'create_dd:acompat/create_mechanical_extruder/extruding/limestone' })

      event.custom({
        type: 'create_mechanical_extruder:extruding',
        ingredients: [
          {
            fluid: 'create:honey',
            amount: 1000
          },
          {
            fluid: 'minecraft:lava',
            amount: 1000
          }
        ],
        catalyst: {
          item: 'create:limestone'
        },
        result: {
          item: 'create:limestone'
        }
      }).id('forge_frontier:extruding/limestone')

      // Stone
      event.remove({ id: 'create_mechanical_extruder:extruding/stone' })

      event.custom({
        type: 'create_mechanical_extruder:extruding',
        ingredients: [
          {
            fluid: 'minecraft:water',
            amount: 1000
          },
          {
            fluid: 'minecraft:lava',
            amount: 1000
          }
        ],
        catalyst: {
          item: 'minecraft:stone'
        },
        result: {
          item: 'minecraft:stone'
        }
      }).id('forge_frontier:extruding/stone')

      // Aethersite
      event.custom({
        type: 'create_mechanical_extruder:extruding',
        ingredients: [
          {
            fluid: 'create_dd:shimmer',
            amount: 1000
          },
          {
            fluid: 'minecraft:lava',
            amount: 1000
          }
        ],
        catalyst: {
          item: 'create_dd:aethersite'
        },
        result: {
          item: 'create_dd:aethersite'
        }
      }).id('forge_frontier:extruding/aethersite')

      // Crying Obsidian
      event.custom({
        type: 'create_mechanical_extruder:extruding',
        ingredients: [
          {
            fluid: 'create_dd:chromatic_waste',
            amount: 1000
          },
          {
            fluid: 'minecraft:lava',
            amount: 1000
          }
        ],
        catalyst: {
          item: 'minecraft:crying_obsidian'
        },
        result: {
          item: 'minecraft:crying_obsidian'
        }
      }).id('forge_frontier:extruding/crying_obsidian')

      // Obsidian
      event.custom({
        type: 'create_mechanical_extruder:extruding',
        ingredients: [
          {
            fluid: 'create_dd:chromatic_waste',
            amount: 1000
          },
          {
            fluid: 'minecraft:water',
            amount: 1000
          }
        ],
        catalyst: {
          item: 'minecraft:obsidian'
        },
        result: {
          item: 'minecraft:obsidian'
        },
      }).id('forge_frontier:extruding/obsidian')

  })