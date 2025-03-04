ServerEvents.recipes(event => {

    // Removes Not Needed Recipes
    event.remove({ id: 'ad_astra_giselle_addon:compat/ae2/inscriber/sky_stone_dust' })
    event.remove({ id: 'appflux:transform/redstone_crystal'})

    // Inscriber Energy Press Duplication Create Energistics Compat Recipe
    event.remove({ id: 'appflux:inscriber/energy_press' })
    event.remove({ id: 'appflux:charger/energy_press'})
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: {
          item: "minecraft:iron_block"
        },
        transitionalItem: {
          item: "createappliedkinetics:incomplete_calculation_processor_press"
        },
        sequence: [
          {
            keepHeldItem: true,
            type: "create:deploying",
            ingredients: [
              {
                item: "createappliedkinetics:incomplete_calculation_processor_press"
              },
              {
                item: "appflux:energy_processor_press"
              }
            ],
            results: [
              {
                item: "createappliedkinetics:incomplete_calculation_processor_press"
              }
            ]
          },
          {
            type: "create:pressing",
            ingredients: [
              {
                item: "createappliedkinetics:incomplete_calculation_processor_press"
              }
            ],
            results: [
              {
                item: "createappliedkinetics:incomplete_calculation_processor_press"
              }
            ]
          }
        ],
        results: [
          {
            item: "appflux:energy_processor_press"
          }
        ],
        loops: 1
      }).id('forge_frontier:sequenced_assembly/energy_processor_press')

    // Energy Processor Create Energistics Compat Recipe
    event.remove({ id:'appflux:inscriber/energy' })
    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: {
            item: 'ae2:printed_silicon'
        },
        transitionalItem: {
            item: 'createappliedkinetics:incomplete_silicon_print'
        },
        sequence: [
            {
            type: 'create:deploying',
            ingredients: [
                {
                item: 'createappliedkinetics:incomplete_silicon_print'
                },
                {
                item: 'appflux:printed_energy_processor'
                }
            ],
            results: [
                {
                item: 'createappliedkinetics:incomplete_silicon_print'
                }
            ]
            },
            {
            type: 'create:deploying',
            ingredients: [
                {
                item: 'createappliedkinetics:incomplete_silicon_print'
                },
                {
                item: 'minecraft:redstone'
                }
            ],
            results: [
                {
                item: 'createappliedkinetics:incomplete_silicon_print'
                }
            ]
            },
            {
            type: 'create:pressing',
            ingredients: [
                {
                item: 'createappliedkinetics:incomplete_silicon_print'
                }
            ],
            results: [
                {
                item: 'createappliedkinetics:incomplete_silicon_print'
                }
            ]
            }
        ],
        results: [
            {
            item: 'appflux:energy_processor'
            }
        ],
        loops: 1        

    }).id('forge_frontier:sequenced_assembly/energy_processor')

    // Printed Energy Circuit Create Energistics Compat Recipe
    event.remove({ id:'appflux:inscriber/energy_print' })
    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: {
            item: 'appflux:charged_redstone'
        },
        transitionalItem: {
            item: 'createappliedkinetics:incomplete_silicon_press'
        },
        sequence: [
            {
                "keepHeldItem": true,
                type: 'create:deploying',
                ingredients: [
                    { item: 'createappliedkinetics:incomplete_silicon_press' },
                    { item: 'appflux:energy_processor_press'}
                ],
                results: [
                    { item: 'createappliedkinetics:incomplete_silicon_press' }
                ]
            },
            {
                type: 'create:pressing',
                ingredients: [
                    { item: 'createappliedkinetics:incomplete_silicon_press' }
                ],
                results: [
                    { item: 'createappliedkinetics:incomplete_silicon_press' }
                ]
            }
        ],
        results: [
            { item: 'appflux:printed_energy_processor' }
        ],
        loops: 1
    }).id('forge_frontier:sequenced_assembly/printed_energy_processor');
    
    
})