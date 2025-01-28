ServerEvents.recipes(event => {

    // New Amethyst Mix Mixing Recipe - 1 Thick Potion
    event.custom({
      type: "create:mixing",
      ingredients: [
        {
          item: "minecraft:amethyst_shard"
        },
        {
          item: "minecraft:potion",
          nbt: {
            Potion: "minecraft:thick"
          }
        }
      ],
      results: [
        {
          item: "create_ethium:amethyst_mix",
          count: 1
        }
      ],
      heatRequirement: "heated"
    }).id('forge_frontier:mixing/amethyst_mix_1');

    // New Amethyst Mix Mixing Recipe - 2 Thick Potions
    event.custom({
      type: "create:mixing",
      ingredients: [
        {
          item: "minecraft:amethyst_shard"
        },
        {
          item: "minecraft:potion",
          nbt: {
            Potion: "minecraft:thick"
          }
        },
        {
          item: "minecraft:potion",
          nbt: {
            Potion: "minecraft:thick"
          }
        }
      ],
      results: [
        {
          item: "create_ethium:amethyst_mix",
          count: 2
        }
      ],
      heatRequirement: "heated"
    }).id('forge_frontier:mixing/amethyst_mix_2');

    // New Amethyst Mix Mixing Recipe - 3 Thick Potions
    event.custom({
      type: "create:mixing",
      ingredients: [
        {
          item: "minecraft:amethyst_shard"
        },
        {
          item: "minecraft:potion",
          nbt: {
            Potion: "minecraft:thick"
          }
        },
        {
          item: "minecraft:potion",
          nbt: {
            Potion: "minecraft:thick"
          }
        },
        {
          item: "minecraft:potion",
          nbt: {
            Potion: "minecraft:thick"
          }
        }
      ],
      results: [
        {
          item: "create_ethium:amethyst_mix",
          count: 3
        }
      ],
      heatRequirement: "heated"
    }).id('forge_frontier:mixing/amethyst_mix_3');

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