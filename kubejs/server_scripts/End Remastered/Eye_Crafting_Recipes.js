ServerEvents.recipes(event => {

// Undead Soul, which is the Centerpiece of all recipes below
    // Creates Undead Soul Recipe
    event.remove({ id: 'endrem:undead_eye'})
    event.custom({
        type: "create:mixing",
        ingredients: [
          {
            fluid: "create_enchantment_industry:hyper_experience",
            amount: 50
          },
          {
            item: "minecraft:phantom_membrane"
          },
          {
            item: "minecraft:bone"
          },
          {
            item: "minecraft:rotten_flesh"
          },
          {
            item: "minecraft:ghast_tear"
          },
          {
            item: "wstweaks:fragment"
          },
          {
            item: "minecraft:cobweb"
          },
          {
            item: "quark:soul_bead"
          }
        ],
        results: [
          {
            item: "endrem:undead_soul",
            count: 1
          }
        ],  
        heatRequirement: "superheated"
      }).id('forge_frontier:mixing/undead_soul')
 
// New End Remastered Eye Crafting Recipes

    // Black Eye: Seven Seas Loot Combination
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [
          'DAD',
          'BUB',
          'GCG'
        ],
        key: {
          D: Ingredient.of('minecraft:diamond'),
          A: Ingredient.of('forge_frontier:pirate_arrow'),
          B: Ingredient.of('forge_frontier:cannon_ball'),
          U: Ingredient.of('endrem:undead_soul'),
          G: Ingredient.of('minecraft:gunpowder'),
          C: Ingredient.of('forge_frontier:pirate_crossbow')
        },
        result: Ingredient.of('endrem:black_eye'),
        acceptMirrored: false
      }).id('forge_frontier:mechancial_crafting/black_eye');

    // Cold Eye: Glacio Loot Combination
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [
          'PDP',
          'WUW',
          'PEP'
        ],
        key: {
          P: Ingredient.of('ad_astra:permafrost'),
          D: Ingredient.of('cataclysm:music_disc_the_harbinger'),
          W: Ingredient.of('cataclysm:witherite_ingot'),
          U: Ingredient.of('endrem:undead_soul'),
          E: Ingredient.of('cataclysm:mech_eye')
        },
        result: Ingredient.of('endrem:cold_eye'),
        acceptMirrored: false
      }).id('forge_frontier:mechancial_crafting/cold_eye');

    // Corrupted Eye: Diamond, Emerald, and Gold Automation Craft
    event.custom({
      type: 'create:mechanical_crafting',
      pattern: [
        'GDG',
        'EUE',
        'GDG'
      ],
      key: {
        G: Ingredient.of('createcompression:compressed_gold_3x'),
        D: Ingredient.of('createcompression:compressed_diamond_3x'),
        E: Ingredient.of('createcompression:compressed_emerald_3x'),
        U: Ingredient.of('endrem:undead_soul')
      },
      result: Ingredient.of('endrem:corrupted_eye'),
      acceptMirrored: false
    }).id('forge_frontier:mechancial_crafting/corrupted_eye');

    // Lost Eye: Cataclysm Soul Blacksmith Loot Combination
    event.custom({
      type: 'create:mechanical_crafting',
      pattern: [
        'ADA',
        'FUH',
        'AEA'
      ],
      key: {
        A: Ingredient.of('minecraft:ancient_debris'),
        D: Ingredient.of('cataclysm:music_disc_netherite_monstrosity'),
        F: Ingredient.of('cataclysm:infernal_forge'),
        U: Ingredient.of('endrem:undead_soul'),
        H: Ingredient.of('cataclysm:monstrous_horn'),
        E: Ingredient.of('cataclysm:monstrous_eye')
      },
      result: Ingredient.of('endrem:lost_eye'),
      acceptMirrored: false
    }).id('forge_frontier:mechancial_crafting/lost_eye');

    // Nether Eye: Nether Loot Combination

    // Old Eye: Desert Pyramid/ Cataclysm Pyramid Loot Combination

    // Rogue Eye: Create Progression Combination
    event.custom({
      type: 'create:mechanical_crafting',
      pattern: [
        'MEM',
        'mUm',
        'MEM'
      ],
      key: {
        M: Ingredient.of('create_compressed:mechanism_block'),
        E: Ingredient.of('forge_frontier:compressed_ethium_2x'),
        m: Ingredient.of('forge_frontier:compressed_mithril_2x'),
        U: Ingredient.of('endrem:undead_soul'),
      },
      result: Ingredient.of('endrem:rogue_eye'),
      acceptMirrored: false
    }).id('forge_frontier:mechancial_crafting/rogue_eye');    

    // Cursed Eye: Bastion Loot/ Nether Castle Loot Combination

    // Evil Eye: Villager Trade Related Combination

    // Guardian Eye: Elder and Guardian Mob Drop Loot Combination
    event.custom({
      type: 'create:mechanical_crafting',
      pattern: [
        'SES',
        'GUG',
        'SES'
      ],
      key: {
        S: Ingredient.of('minecraft:sponge'),
        E: Ingredient.of('oceansdelight:cabbage_wrapped_elder_guardian'),
        G: Ingredient.of('oceansdelight:guardian_soup'),
        U: Ingredient.of('endrem:undead_soul'),
      },
      result: Ingredient.of('endrem:guardian_eye'),
      acceptMirrored: false
    }).id('forge_frontier:mechancial_crafting/guardian_eye');     

    // Magical Eye: Nether and Soul Infused Totem Craft Related, via Apotheosis
    event.custom({
      type: "apotheosis:enchanting",
      input: {
        item: "minecraft:totem_of_undying"
      },
      requirements: {
        eterna: 40,
        quanta: 80,
        arcana: 84,
        rectifaction: 40
      },
      "max_requirements": {
        eterna: -1,
        quanta: 100,
        arcana: -1,
        rectifaction: 60
      },
      result: {
        item: "endrem:magical_eye",
        count: 1
      }
    }).id('forge_frontier:enchanting/magical_eye')    

    // Wither Eye: Nether Star Loot Combination

    // Witch Eye: Potion Related Craft
    event.remove({ id: 'endrem:witch_eye'})
    event.custom({
      type: "create:mixing",
      ingredients: [
        {
          fluid: "create:potion",
          nbt: {
            Potion: "alexsmobs:long_lava_vision"
          },
          amount: 1000
        },
        {
          item: "create_dd:blaze_gold_block"
        },
        {
          fluid: "create:potion",
          nbt: {
            Potion: "alexsmobs:strong_soulsteal"
          },
          amount: 1000
        },
        {
          item: "endrem:undead_soul"
        }
      ],
      results: [
        {
          item: "endrem:witch_eye",
          count: 1
        }
      ],  
      heatRequirement: "superheated"
    }).id('forge_frontier:mixing/witch_eye')

    // Warden Eye: Warden/Deeper Darker Loot Combination
    event.custom({
      type: 'create:mechanical_crafting',
      pattern: [
        'CHE',
        'SUS',
        'hTc'
      ],
      key: {
        C: Ingredient.of('deeperdarker:warden_carapace'),
        H: Ingredient.of('deeperdarker:heart_of_the_deep'),
        E: Ingredient.of('silentsdelight:warden_ear'),
        S: Ingredient.of('minecraft:echo_shard'),
        h: Ingredient.of('silentsdelight:warden_heart'),
        T: Ingredient.of('apotheosis:warden_tendril'),
        c: Ingredient.of('minecraft:sculk_catalyst'),
        U: Ingredient.of('endrem:undead_soul'),
      },
      result: Ingredient.of('endrem:undead_eye'),
      acceptMirrored: false
    }).id('forge_frontier:mechancial_crafting/undead_eye'); 

    // Aetheric Eye: Ocean Boss Structure Loot Combination
    event.remove({ id: 'endrem:exotic_eye'})

    // Cryptic Eye: Mix of Nether and Soul Infused Items, via Apotheosis
    event.custom({
      type: "apotheosis:enchanting",
      input: {
        item: "minecraft:ender_eye"
      },
      requirements: {
        eterna: 40,
        quanta: 90,
        arcana: 78,
        rectifaction: 30
      },
      "max_requirements": {
        eterna: -1,
        quanta: 100,
        arcana: 78,
        rectifaction: 50
      },
      result: {
        item: "endrem:cryptic_eye",
        count: 1
      }
    }).id('forge_frontier:enchanting/cryptic_eye')

})