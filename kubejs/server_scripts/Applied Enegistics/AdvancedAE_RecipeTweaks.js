ServerEvents.recipes(event => {

    // Quantum Dust Recipe
    event.remove({ id: 'advanced_ae:quantum_infused_dust'})
    event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'advanced_ae:shattered_singularity' }
		],
		processingTime: 200,
		results: [
			{ item: 'advanced_ae:quantum_infused_dust', count: 1 }
		]
	}).id('forge_frontier:crushing/quantum_infused_dust');

    // New Quantum Processor Recipe
    event.remove({ id: 'advanced_ae:quantum_processor' })
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
                item: 'advanced_ae:printed_quantum_processor'
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
            item: 'advanced_ae:quantum_processor'
            }
        ],
        loops: 1        

    }).id('forge_frontier:sequenced_assembly/quantum_processor')

    // New Printed Quantum Circuit Recipe
    event.remove({ id: 'advanced_ae:quantum_processor_print' })
    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: {
            item: 'advanced_ae:quantum_alloy'
        },
        transitionalItem: {
            item: 'createappliedkinetics:incomplete_silicon_press'
        },
        sequence: [
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'createappliedkinetics:incomplete_silicon_press' },
                    { item: 'advanced_ae:quantum_processor_press'}
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
            { item: 'advanced_ae:printed_quantum_processor' }
        ],
        loops: 1
    }).id('forge_frontier:sequenced_assembly/printed_quantum_processor');

    // New Inscriber Quantum Press Recipe
    event.remove({ id: 'advanced_ae:quantum_processor_press' })
    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: {
            item: 'advanced_ae:quantum_infused_dust'
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
                    { item: 'ae2:engineering_processor_press' }
                ],
                results: [
                    { item: 'createappliedkinetics:incomplete_silicon_press' }
                ]
            },
            {
                type: 'create:deploying',
                "keepHeldItem": true,
                ingredients: [
                    { item: 'createappliedkinetics:incomplete_silicon_press' },
                    { item: 'ae2:logic_processor_press' }
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
            { item: 'advanced_ae:quantum_processor_press' }
        ],
        loops: 1
    }).id('forge_frontier:sequenced_assembly/quantum_processor_press');

    // New Inscriber Quantum Press Dupe Recipe
    event.remove({ id: 'advanced_ae:quantum_processor_press_from_iron' })
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
                item: 'advanced_ae:quantum_processor_press'
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
            item: 'advanced_ae:quantum_processor_press'
          }
        ],
        loops: 1
      }).id('forge_frontier:sequenced_assembly/quantum_processor_press_dupe')

})