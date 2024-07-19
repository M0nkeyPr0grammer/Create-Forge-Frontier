ServerEvents.recipes(event => {

    // Energy Processor Create Energistics Recipe
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

    // Printed Energy Circuit Create Energistics Recipe
    event.remove({ id:'appflux:inscriber/energy_print' })
    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: {
            item: 'appflux:energy_processor_press'
        },
        transitionalItem: {
            item: 'createappliedkinetics:incomplete_silicon_press'
        },
        sequence: [
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'createappliedkinetics:incomplete_silicon_press' },
                    { item: 'appflux:charged_redstone' }
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