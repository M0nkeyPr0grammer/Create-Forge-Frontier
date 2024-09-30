ServerEvents.recipes(event => {

    // New Amethyst Mix Mixing Recipe
    event.custom({
        type: "create:mixing",
        ingredients: [
          {
            item: "minecraft:amethyst_shard"
          },
          {
            fluid: "create:potion",
            nbt: {
              Potion: "minecraft:thick"
            },
            amount: 1000
          },
        ],
        results: [
          {
            count: 4,
            item: "create_ethium:amethyst_mix",
          }
        ],  
        heatRequirement: "heated"
      }).id('forge_frontier:mixing/amethyst_mix')

    // New Echo Compound Mixing Recipe
    event.custom({
        type: "create:mixing",
        ingredients: [
          {
            item: "create_ethium:amethyst_mix",
          },
          {
            item: "create_ethium:amethyst_mix",
          },
          {
            item: "create_ethium:amethyst_mix",
          },
          {
            item: "create_ethium:amethyst_mix",
          },
          {
            item: "create_ethium:echo_dust"
          },
        ],
        results: [
          {
            count: 4,
            item: "create_ethium:echo_compound",
          }
        ],  
        heatRequirement: "heated"
      }).id('forge_frontier:mixing/echo_compound')   

})