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
    });
  })