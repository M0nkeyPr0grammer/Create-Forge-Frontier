ServerEvents.recipes(event => {

    // Casualness Delight
    event.remove({ id: 'casualness_delight:cooking/beef_noodles' })
    event.remove({ id: 'casualness_delight:cooking/bobo_chicken' })
    event.remove({ id: 'casualness_delight:cooking/fish_and_chips' })
    event.remove({ id: 'casualness_delight:cooking/raw_cheese_wheel' })

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

      // Chorus Fruit Milk Tea Recipe Fix
      event.custom({
        type: "farmersdelight:cooking",
        ingredients: [
          {
            tag: "forge:milk"
          },
          [
            {
              item: "minecraft:chorus_fruit"
            },
            {
              item: "ends_delight:chorus_fruit_grain"
            }
          ]
        ],
        result: {
          item: "ends_delight:chorus_fruit_milk_tea"
        },
        cookingtime: 200,
        experience: 5
      })

      // Bubble Tea Recipe Fix
      event.custom({
        type: "farmersdelight:cooking",
        ingredients: [
          {
            tag: "forge:milk"
          },
          [
            {
              item: "minecraft:chorus_fruit"
            },
            {
              item: "ends_delight:chorus_fruit_grain"
            }
          ],
          {
            item: "ends_delight:ender_pearl_grain"
          }
        ],
        result: {
          item: "ends_delight:bubble_tea"
        },
        cookingtime: 200,
        experience: 5
      })

      // Ender Sauce Recipe Fix
      event.custom({
          type: "farmersdelight:cooking",
          ingredients: [
            {
              item: "ends_delight:chorus_succulent"
            },
            [
              {
                item: "minecraft:chorus_fruit"
              },
              {
                item: "ends_delight:chorus_fruit_grain"
              }
            ]
          ],
          result: {
            item: "ends_delight:ender_sauce"
          },
          cookingtime: 200,
          experience: 5
        })

        // Chorus Fruit Wine Recipe Fix
        event.custom(
          {
            type: "farmersdelight:cooking",
            ingredients: [
              {
                item: "minecraft:sugar"
              },
              [
                {
                  item: "minecraft:chorus_fruit"
                },
                {
                  item: "ends_delight:chorus_fruit_grain"
                }
              ],
              [
                {
                  item: "minecraft:chorus_fruit"
                },
                {
                  item: "ends_delight:chorus_fruit_grain"
                }
              ]
            ],
            result: {
              item: "ends_delight:chorus_fruit_wine"
            },
            cookingtime: 200,
            experience: 5
          })

          // Ender Congee Recipe Fix
          event.custom({
              type: "farmersdelight:cooking",
              ingredients: [
                {
                  tag: "forge:crops/rice"
                },
                {
                  item: "ends_delight:dried_endermite_meat"
                },
                {
                  item: "ends_delight:ender_pearl_grain"
                }
              ],
              container: {
                "item": "minecraft:bowl"
              },
              result: {
                item: "ends_delight:ender_congee"
              },
              cookingtime: 200,
              experience: 5
            })

            // Dragon Breath and Chorus Fruit Soup Recipe Fix
            event.custom({
                type: "farmersdelight:cooking",
                ingredients: [
                  {
                    item: "minecraft:suspicious_stew"
                  },
                  {
                    item: "minecraft:dragon_breath"
                  },
                  {
                    item: "minecraft:chorus_flower"
                  },
                  {
                    item: "minecraft:chorus_fruit"
                  },
                  {
                    item: "minecraft:chorus_fruit"
                  }
                ],
                result: {
                  item: "ends_delight:dragon_breath_and_chorus_soup"
                },
                cookingtime: 200,
                experience: 5
              })

              // Steam Dragon Egg Block Recipe Fix
              event.custom({
                  type: "farmersdelight:cooking",
                  ingredients: [
                    {
                      item: "ends_delight:liquid_dragon_egg"
                    },
                    {
                      tag: "forge:shulker_meat"
                    },
                    {
                      item: "minecraft:chorus_fruit"
                    },
                    {
                      item: "minecraft:brown_mushroom"
                    },
                    {
                      item: "ends_delight:chorus_succulent"
                    },
                    {
                      tag: "forge:crops/onion"
                    }
                  ],
                  result: {
                    item: "ends_delight:steamed_dragon_egg_block"
                  },
                  container: {
                    item: "ends_delight:half_dragon_egg_shell"
                  },
                  cookingtime: 200,
                  experience: 5
                }
              )

              // Chorus Flower Tea Recipe Fix
              event.custom({
                type: "farmersdelight:cooking",
                ingredients: [
                  {
                    item: "minecraft:ghast_tear"
                  },
                  {
                    item: "ends_delight:dried_chorus_flower"
                  }
                ],
                result: {
                  "item": "ends_delight:chorus_flower_tea"
                },
                cookingtime: 200,
                experience: 5
              })

              // Ender Sauce Recipe Fix
              event.custom({
                type: "farmersdelight:cooking",
                ingredients: [
                  {
                    item: "ends_delight:chorus_succulent"
                  },
                  [
                    {
                      item: "minecraft:chorus_fruit"
                    },
                    {
                      item: "ends_delight:chorus_fruit_grain"
                    }
                  ]
                ],
                result: {
                  item: "ends_delight:ender_sauce"
                },
                cookingtime: 200,
                experience: 5
              })

      // Twilight Delight
        event.remove({ id: 'twilightdelight:teardrop_sword' })

      // Twilight Tear Drop Sword
      event.smithing(
        "twilightdelight:teardrop_sword",
        'minecraft:netherite_upgrade_smithing_template',
        "twilightforest:fiery_sword",
        "twilightdelight:experiment_110"
      )

})
