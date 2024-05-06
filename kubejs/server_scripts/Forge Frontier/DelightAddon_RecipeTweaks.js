ServerEvents.recipes(event => {

    // Casualness Delight
    event.remove({ id: 'casualness_delight:cooking/beef_noodles' })
    event.remove({ id: 'casualness_delight:cooking/bobo_chicken' })
    event.remove({ id: 'casualness_delight:cooking/fish_and_chips' })
    event.remove({ id: 'casualness_delight:cooking/raw_cheese_wheel' })

    // Twilight Delight
    event.remove({ id: 'twilightdelight:twilight_ice_cream' })
    event.remove({ id: 'twilightdelight:teardrop_sword' })
    event.remove({ id: 'twilightdelight:refreshing_ice_cream' })
    event.remove({ id: 'twilightdelight:rainbow_ice_cream' })

    // Casualness Delight

    // Beef Noodles Recipe Fix
    event.custom({
        type: "farmersdelight:cooking",
        ingredients: [
          {
            item: "minecraft:beef"
          },
          {
            item: "minecraft:beef"
          },
          {
            tag: "forge:pasta"
          },
          {
            tag: "forge:vegetables/carrot"
          },
          {
            tag: "forge:crops/cabbage"
          },
          {
            tag: "forge:vegetables/onion"
          }
        ],
        result: {
          item: "casualness_delight:beef_noodles"
        },
        container: {
          item: "minecraft:bowl"
        },
        cookingtime: 200,
        experience: 10
      })

      // Bobo Chicken Recipe Fix
      event.custom({
        type: "farmersdelight:cooking",
        ingredients: [
          {
            item: "casualness_delight:raw_cabbage_bobo_chicken"
          },
          {
            item: "casualness_delight:raw_cabbage_bobo_chicken"
          },
          {
            item: "casualness_delight:raw_potato_bobo_chicken"
          },
          {
            item: "casualness_delight:raw_potato_bobo_chicken"
          },
          {
            item: "casualness_delight:raw_chicken_bobo_chicken"
          },
          {
            item: "casualness_delight:raw_chicken_bobo_chicken"
          }
        ],
        result: {
          item: "casualness_delight:bobo_chicken"
        },
        container: {
          item: "farmersdelight:tomato_sauce"
        },
        cookingtime: 200,
        experience: 10
      })

      // Fish and Chips Recipe Fix
      event.custom({
        type: "farmersdelight:cooking",
        recipe_book_tab: "meals",
        ingredients: [
          {
            item: "farmersdelight:cod_slice"
          },
          {
            tag: "forge:vegetables/potato"
          },
          {
            tag: "forge:vegetables/potato"
          },
          {
            tag: "forge:dough"
          }
        ],
        result: {
          item: "casualness_delight:fish_and_chips"
        },
        container: {
          item: "minecraft:bowl"
        },
        cookingtime: 200,
        experience: 10
      })

      // Raw Cheese Wheel Recipe Fix
      event.custom({
        type: "farmersdelight:cooking",
        recipe_book_tab: "misc",
        ingredients: [
          {
            tag: "forge:milk"
          },
          {
            tag: "forge:milk"
          },
          {
            tag: "forge:milk"
          },
          {
            tag: "forge:mushrooms"
          },
          {
            tag: "forge:mushrooms"
          },
          {
            tag: "forge:mushrooms"
          }
        ],
        result: {
          item: "casualness_delight:raw_cheese_wheel"
        },
        cookingtime: 400,
        experience: 10
      })

    // Ends Delight
    event.remove({ id: 'ends_delight:food/dragon_meat_stew_block' })
    event.remove({ id: 'ends_delight:food/chorus_fruit_milk_tea' })
    event.remove({ id: 'ends_delight:food/bubble_tea' })
    event.remove({ id: 'ends_delight:food/ender_sauce' })
    event.remove({ id: 'ends_delight:food/chorus_fruit_wine' })
    event.remove({ id: 'ends_delight:food/chorus_flower_tea' })
    event.remove({ id: 'ends_delight:food/steamed_dragon_egg_block' })
    event.remove({ id: 'ends_delight:food/dragon_breath_and_chorus_soup' })
    event.remove({ id: 'ends_delight:food/ender_congee' })

    // Dragon Meat Stew Block Recipe Fix
    event.custom({
        type: "farmersdelight:cooking",
        ingredients: [
          {
            tag: "forge:raw_dragon_meat"
          },
          {
            item: "minecraft:chorus_fruit"
          },
          {
            item: "ends_delight:chorus_succulent"
          },
          {
            item: "minecraft:carrot"
          },
          {
            item: "minecraft:potato"
          },
          {
            tag: "forge:crops/tomato"
          }
        ],
        result: {
          item: "ends_delight:dragon_meat_stew_block"
        },
        container: {
          item: "ends_delight:half_dragon_egg_shell"
        },
        cookingtime: 200,
        experience: 10
      })

})
