ServerEvents.recipes(event => {
  
    // Creates Sequenced Assembly Recipe for Raw Basic Processor
    event.custom({
      type: 'create:sequenced_assembly',
      ingredient: {
        item: 'minecraft:redstone'
      },
      loops: 1,
      results: [
        {
          chance: 100,
          item: 'fluxnetworks:flux_dust'
        }
      ],
      sequence: [
        {
          type: 'create:pressing',
          ingredients: [
            {
              item: 'kubejs:incomplete_flux_dust'
            }
          ],
          results: [ // Define a results array even if it's empty
            {
              item: 'kubejs:incomplete_flux_dust'
            }
          ]
        },
        {
          type: 'create:pressing',
          ingredients: [ 
            {
              item: 'kubejs:incomplete_flux_dust'
            }
          ],
          results: [ // Define a results array even if it's empty
            {
              item: 'kubejs:incomplete_flux_dust'
            }
          ]
        },
      ],
      transitionalItem: {
        item: 'kubejs:incomplete_flux_dust'
      }
    });
  });
  