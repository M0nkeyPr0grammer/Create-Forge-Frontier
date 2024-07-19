ServerEvents.recipes(event => {

// Removed OP Item in Relation to Create
event.remove({ id: 'expatternprovider:cobblestone_cell'})

// Flawed Budding Cerus Quartz Create Compat Recipe
event.custom({
    type: "create:mixing",
    ingredients: [
      {
        item: "ae2:charged_certus_quartz_crystal"
      },
      {
        fluid: "minecraft:water",
        nbt: {},
        amount: 250
      },
      {
        item: "ae2:chipped_budding_quartz"
      }
    ],
    results: [
      {
        item: "ae2:flawed_budding_quartz",
        count: 1
      }
    ],
    heatRequirement: "none"
  }).id('forge_frontier:mixing/flawed_budding_quartz')

  // Certus Quartz Crystal Create Compat Recipe
  event.custom({
    type: "create:mixing",
    ingredients: [
      {
        item: "ae2:charged_certus_quartz_crystal"
      },
      {
        fluid: "minecraft:water",
        nbt: {},
        amount: 250
      },
      {
        item: "ae2:certus_quartz_dust"
      }
    ],
    results: [
      {
        item: "ae2:certus_quartz_crystal",
        count: 2
      }
    ],
    heatRequirement: "none"
  }).id('forge_frontier:mixing/certus_quartz_crystal')

  // Chipped Budding Certus Quartz Create Compat Recipe
  event.custom({
    type: "create:mixing",
    ingredients: [
      {
        item: "ae2:charged_certus_quartz_crystal"
      },
      {
        fluid: "minecraft:water",
        nbt: {},
        amount: 250
      },
      {
        item: "ae2:damaged_budding_quartz"
      }
    ],
    results: [
      {
        item: "ae2:chipped_budding_quartz",
        count: 1
      }
    ],
    heatRequirement: "none"
  }).id('forge_frontier:mixing/chipped_budding_quartz')

  // Fluix Crystal Create Compat Recipe
  event.custom({
    type: "create:mixing",
    ingredients: [
      {
        item: "ae2:charged_certus_quartz_crystal"
      },
      {
        fluid: "minecraft:water",
        nbt: {},
        amount: 250
      },
      {
        item: "ae2:fluix_dust"
      }
    ],
    results: [
      {
        item: "ae2:fluix_crystal",
        count: 1
      }
    ],
    heatRequirement: "none"
  }).id('forge_frontier:mixing/fluix_crystal')

  // Damaged Budding Certus Quartz
  event.custom({
    type: "create:mixing",
    ingredients: [
      {
        item: "ae2:charged_certus_quartz_crystal"
      },
      {
        fluid: "minecraft:water",
        nbt: {},
        amount: 250
      },
      {
        item: "ae2:quartz_block"
      }
    ],
    results: [
      {
        item: "ae2:damaged_budding_quartz",
        count: 1
      }
    ],
    heatRequirement: "none"
  }).id('forge_frontier:mixing/damaged_budding_quartz')
    
})