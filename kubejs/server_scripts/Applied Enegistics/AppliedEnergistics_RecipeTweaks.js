ServerEvents.recipes(event => {

// Removed OP Item in Relation to Create
event.remove({ id: 'expatternprovider:cobblestone_cell'})
event.remove({ id: 'expattenprovider:ex_inscriber'})


// New Charger Recipe
event.remove({ id: 'ae2:network/blocks/crystal_processing_charger'})
event.shaped(
  Item.of('ae2:charger'),
  [
    'IOI',
    'S  ',
    'IOI'
  ],
  {
    I: 'create_new_age:overcharged_iron',
    S: 'ae2:printed_silicon',
    O: 'create_dd:overcharge_alloy'
  }
).id( 'forge_frontier:shaped/charger')


// New ME Import Bus Recipe
event.remove({ id: 'ae2:network/parts/import_bus'})
event.shaped(
  Item.of('ae2:import_bus'),
  [
    ' A ',
    'IPI',
    ' H '
  ],
  {
    A: 'ae2:annihilation_core',
    I: 'minecraft:iron_ingot',
    P: 'minecraft:sticky_piston',
    H: 'toms_storage:ts.inventory_hopper_basic'
  }
).id( 'forge_frontier:shaped/import_bus' )

// New ME Export Bus Recipe
event.remove({ id: 'ae2:network/parts/export_bus'})
event.shaped(
  Item.of('ae2:export_bus'),
  [
    'IFI',
    ' P ',
    ' H '
  ],
  {
    I: 'minecraft:iron_ingot',
    F: 'ae2:formation_core',
    P: 'minecraft:piston',
    H: 'toms_storage:ts.inventory_hopper_basic'
  }
).id( 'forge_frontier:shaped/export_bus' )

// New ME Terminal Recipe
event.remove({ id: 'ae2:network/parts/terminals'})
event.custom({
  type: 'create:mechanical_crafting',
  pattern: [
    'FLA',
    'PTP'
  ],
  key: {
    F: Ingredient.of('ae2:formation_core'),
    L: Ingredient.of('ae2:logic_processor'),
    A: Ingredient.of('ae2:annihilation_core'),
    P: Ingredient.of('#ae2:illuminated_panel'),
    T: Ingredient.of('toms_storage:ts.storage_terminal')
  },
  result: Ingredient.of('ae2:terminal'),
  acceptMirrored: false
}).id('forge_frontier:mechancial_crafting/terminal');

// New ME Storage Terminal Recipe
event.remove({ id: 'ae2:network/parts/terminals_crafting'})
event.custom({
  type: 'create:mechanical_crafting',
  pattern: [
    'CCC',
    'PTP',
    'CCC'
  ],
  key: {
    C: Ingredient.of('create:mechanical_crafter'),
    P: Ingredient.of('ae2:calculation_processor'),
    T: Ingredient.of('ae2:terminal')
  },
  result: Ingredient.of('ae2:crafting_terminal'),
  acceptMirrored: false
}).id('forge_frontier:mechancial_crafting/crafting_terminal');

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