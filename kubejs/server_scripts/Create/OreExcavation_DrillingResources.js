ServerEvents.recipes(event => {
// New Drill Heads
    // Brass Drill Head
    event.shaped(
		Item.of('createoreexcavation:brass_drill'),
		[
			'AB ',
			'BCB',
			' BB'
		],
		{
			A: 'create:brass_block',
			B: 'create:brass_ingot',
			C: 'createoreexcavation:diamond_drill'
		}
	).id( 'forge_frontier:shaped/brass_drill' )

    // Desh Drill Head
    event.shaped(
		Item.of('createoreexcavation:desh_drill'),
		[
			'AB ',
			'BCB',
			' BB'
		],
		{
			A: 'ad_astra:desh_block',
			B: 'ad_astra:desh_ingot',
			C: 'createoreexcavation:brass_drill'
		}
	).id( 'forge_frontier:shaped/desh_drill' )

    // Ostrum Drill Head
    event.shaped(
		Item.of('createoreexcavation:ostrum_drill'),
		[
			'AB ',
			'BCB',
			' BB'
		],
		{
			A: 'ad_astra:ostrum_block',
			B: 'ad_astra:ostrum_ingot',
			C: 'createoreexcavation:desh_drill'
		}
	).id( 'forge_frontier:shaped/ostrum_drill' )

    // Calorite Drill Head
    event.shaped(
		Item.of('createoreexcavation:calorite_drill'),
		[
			'AB ',
			'BCB',
			' BB'
		],
		{
			A: 'ad_astra:calorite_block',
			B: 'ad_astra:calorite_ingot',
			C: 'createoreexcavation:ostrum_drill'
		}
	).id( 'forge_frontier:shaped/calorite_drill' )

    // Dragon Drill Head
    event.shaped(
		Item.of('createoreexcavation:dragon_drill'),
		[
			'AD ',
			'BCB',
			' DD'
		],
		{
			A: 'minecraft:dragon_head',
			B: 'minecraft:dragon_breath',
			C: 'createoreexcavation:calorite_drill',
            D: 'quark:dragon_scale'
		}
	).id( 'forge_frontier:shaped/dragon_drill' )

// Drill Settings
    // Gem Ores: Lapis, Redstone, Emerald, and Diamond
        // Lapis Ore
        event.custom({
            type: 'createoreexcavation:drilling',
            drill: {
            item: 'createoreexcavation:drill'
            },
            fluid: {
                fluid: 'create_dd:chocolate_milkshake',
                amount: 100
            },
            output: [
            {
                item: 'minecraft:lapis_ore',
                count: 1, 
            },
            {
                item: 'minecraft:lapis_ore',
                count: 1,
                chance: .25
            },
            {
                item: 'create:experience_nugget',
                count: 1,
                chance: .50
            },
            {
                item: 'minecraft:cobblestone',
                count: 1,
                chance: .10
            }
            ],
            priority: 0,
            stress: 256,
            ticks: 200,
            vein_id: 'createoreexcavation:ore_vein_type/gem_ore'
        }).id('forge_frontier:drilling/lapis_ore')
        
        // Raw Redstone
        event.custom({
            type: 'createoreexcavation:drilling',
            drill: {
            item: 'createoreexcavation:drill'
            },
            fluid: {
                fluid: 'create_central_kitchen:tomato_sauce',
                amount: 100
            },
            output: [
                {
                    item: 'createoreexcavation:raw_redstone',
                    count: 3
                },
                {
                    item: 'createoreexcavation:raw_redstone',
                    count: 1, 
                    chance: .20
                },
                {
                    item: 'create:experience_nugget',
                    count: 1,
                    chance: .50
                },
                {
                    item: 'minecraft:cobblestone',
                    count: 1,
                    chance: .10
                }
            ],
            priority: 0,
            stress: 256,
            ticks: 200,
            vein_id: 'createoreexcavation:ore_vein_type/gem_ore'
        }).id('forge_frontier:drilling/raw_redstone')

        // Raw Emerald
        event.custom({
            type: 'createoreexcavation:drilling',
            drill: {
            item: 'createoreexcavation:diamond_drill'
            },
            fluid: {
                fluid: 'create_things_and_misc:slime',
                amount: 100
            },
            output: [
                {
                    item: 'createoreexcavation:raw_emerald',
                    count: 3
                },
                {
                    item: 'createoreexcavation:raw_emerald',
                    count: 1, 
                    chance: .20
                },
                {
                    item: 'create:experience_nugget',
                    count: 1,
                    chance: .50
                },
                {
                    item: 'minecraft:cobblestone',
                    count: 1,
                    chance: .10
                },
                {
                    item: 'totemfactory:inactive_totem',
                    count: 1,
                    chance: .01
                }
            ],
            priority: 0,
            stress: 256,
            ticks: 200,
            vein_id: 'createoreexcavation:ore_vein_type/gem_ore'
        }).id('forge_frontier:drilling/raw_emerald')

        // Raw Diamond
        event.custom({
            type: 'createoreexcavation:drilling',
            drill: {
            item: 'createoreexcavation:diamond_drill'
            },
            fluid: {
                fluid: 'create_confectionery:black_chocolate',
                amount: 100
            },
            output: [
                {
                    item: 'createoreexcavation:raw_diamond',
                    count: 3
                },
                {
                    item: 'createoreexcavation:raw_diamond',
                    count: 1, 
                    chance: .20
                },
                {
                    item: 'create:experience_nugget',
                    count: 1,
                    chance: .50
                },
                {
                    item: 'minecraft:cobblestone',
                    count: 1,
                    chance: .10
                },
                {
                    item: 'aquaculture:neptunium_nugget',
                    count: 1,
                    chance: .02
                }
            ],
            priority: 0,
            stress: 256,
            ticks: 200,
            vein_id: 'createoreexcavation:ore_vein_type/gem_ore'
        }).id('forge_frontier:drilling/raw_diamond')

    // Create Ore Vein
        // Copper using Plain Drill
        event.custom({
            type: 'createoreexcavation:drilling',
            drill: {
            item: 'createoreexcavation:drill'
            },
            fluid: {
                fluid: 'create_dd:caramel_milkshake',
                amount: 100
            },
            output: [
                {
                    item: 'minecraft:raw_copper',
                    count: 3
                },
                {
                    item: 'minecraft:raw_copper',
                    count: 1, 
                    chance: .20
                },
                {
                    item: 'create:experience_nugget',
                    count: 1,
                    chance: .50
                },
                {
                    item: 'minecraft:andesite',
                    count: 1,
                    chance: .10
                },
                {
                    item: 'create:andesite_alloy',
                    count: 1,
                    chance: .05
                }
            ],
            priority: 0,
            stress: 256,
            ticks: 200,
            vein_id: 'createoreexcavation:ore_vein_type/create_ore'
        }).id('forge_frontier:drilling/raw_copper')

        // Zinc using Brass Drill
        event.custom({
            type: 'createoreexcavation:drilling',
            drill: {
            item: 'createoreexcavation:brass_drill'
            },
            fluid: {
                fluid: 'create_dd:cream',
                amount: 100
            },
            output: [
                {
                    item: 'create:raw_zinc',
                    count: 3
                },
                {
                    item: 'create:raw_zinc',
                    count: 1, 
                    chance: .20
                },
                {
                    item: 'create:experience_nugget',
                    count: 1,
                    chance: .50
                },
                {
                    item: 'minecraft:andesite',
                    count: 1,
                    chance: .10
                },
                {
                    item: 'create:andesite_alloy',
                    count: 1,
                    chance: .10
                }
            ],
            priority: 0,
            stress: 256,
            ticks: 200,
            vein_id: 'createoreexcavation:ore_vein_type/create_ore'
        }).id('forge_frontier:drilling/raw_zinc')

        // Tin using Brass Drill
        event.custom({
            type: 'createoreexcavation:drilling',
            drill: {
            item: 'createoreexcavation:brass_drill'
            },
            fluid: {
                fluid: 'create_dd:vanilla_milkshake',
                amount: 100
            },
            output: [
                {
                    item: 'create_dd:raw_tin',
                    count: 3
                },
                {
                    item: 'create_dd:raw_tin',
                    count: 1, 
                    chance: .20
                },
                {
                    item: 'create:experience_nugget',
                    count: 1,
                    chance: .50
                },
                {
                    item: 'minecraft:andesite',
                    count: 1,
                    chance: .10
                },
                {
                    item: 'create:andesite_alloy',
                    count: 1,
                    chance: .15
                }
            ],
            priority: 0,
            stress: 256,
            ticks: 200,
            vein_id: 'createoreexcavation:ore_vein_type/create_ore'
        }).id('forge_frontier:drilling/raw_tin')

    // Vanilla Ore Vein
        // Coal using Plain drill
        event.custom({
            type: 'createoreexcavation:drilling',
            drill: {
            item: 'createoreexcavation:drill'
            },
            fluid: {
                fluid: 'minecraft:lava',
                amount: 100
            },
            output: [
                {
                    item: 'minecraft:coal_ore',
                    count: 3
                },
                {
                    item: 'minecraft:coal_ore',
                    count: 1, 
                    chance: .20
                },
                {
                    item: 'create:experience_nugget',
                    count: 1,
                    chance: .50
                },
                {
                    item: 'minecraft:cobblestone',
                    count: 1,
                    chance: .10
                }
            ],
            priority: 0,
            stress: 256,
            ticks: 200,
            vein_id: 'createoreexcavation:ore_vein_type/vanilla_ore'
        }).id('forge_frontier:drilling/coal_ore')

        // Iron using Plain drill
        event.custom({
            type: 'createoreexcavation:drilling',
            drill: {
            item: 'createoreexcavation:drill'
            },
            fluid: {
                fluid: 'create_dd:strawberry_milkshake',
                amount: 100
            },
            output: [
                {
                    item: 'minecraft:raw_iron',
                    count: 3
                },
                {
                    item: 'minecraft:raw_iron',
                    count: 1, 
                    chance: .20
                },
                {
                    item: 'create:experience_nugget',
                    count: 1,
                    chance: .50
                },
                {
                    item: 'minecraft:cobblestone',
                    count: 1,
                    chance: .10
                }
            ],
            priority: 0,
            stress: 256,
            ticks: 200,
            vein_id: 'createoreexcavation:ore_vein_type/vanilla_ore'
        }).id('forge_frontier:drilling/raw_iron')

        // Gold using Plain drill
        event.custom({
            type: 'createoreexcavation:drilling',
            drill: {
            item: 'createoreexcavation:drill'
            },
            fluid: {
                fluid: 'create_dd:glowberry_milkshake',
                amount: 100
            },
            output: [
                {
                    item: 'minecraft:raw_gold',
                    count: 3
                },
                {
                    item: 'minecraft:raw_gold',
                    count: 1, 
                    chance: .20
                },
                {
                    item: 'create:experience_nugget',
                    count: 1,
                    chance: .50
                },
                {
                    item: 'minecraft:cobblestone',
                    count: 1,
                    chance: .10
                }
            ],
            priority: 0,
            stress: 256,
            ticks: 200,
            vein_id: 'createoreexcavation:ore_vein_type/vanilla_ore'
        }).id('forge_frontier:drilling/raw_gold')

    // Non Precious Nether Ore Vein
        // Glowstone using Diamond Drill
        event.custom({
            type: 'createoreexcavation:drilling',
            drill: {
            item: 'createoreexcavation:diamond_drill'
            },
            fluid: {
                fluid: 'create_confectionery:hot_chocolate',
                amount: 100
            },
            output: [
                {
                    item: 'minecraft:glowstone_dust',
                    count: 3
                },
                {
                    item: 'minecraft:glowstone_dust',
                    count: 1, 
                    chance: .20
                },
                {
                    item: 'create:experience_nugget',
                    count: 1,
                    chance: .50
                },
                {
                    item: 'minecraft:netherrack',
                    count: 1,
                    chance: .10
                }
            ],
            priority: 0,
            stress: 256,
            ticks: 200,
            vein_id: 'createoreexcavation:ore_vein_type/non_precious_nether_ore'
        }).id('forge_frontier:drilling/glowstone_dust')

        // Quartz using Diamond Drill
        event.custom({
            type: 'createoreexcavation:drilling',
            drill: {
            item: 'createoreexcavation:diamond_drill'
            },
            fluid: {
                fluid: 'create_confectionery:white_chocolate',
                amount: 100
            },
            output: [
                {
                    item: 'minecraft:quartz',
                    count: 3
                },
                {
                    item: 'minecraft:quartz',
                    count: 1, 
                    chance: .20
                },
                {
                    item: 'create:experience_nugget',
                    count: 1,
                    chance: .50
                },
                {
                    item: 'minecraft:netherrack',
                    count: 1,
                    chance: .10
                }
            ],
            priority: 0,
            stress: 256,
            ticks: 200,
            vein_id: 'createoreexcavation:ore_vein_type/non_precious_nether_ore'
        }).id('forge_frontier:drilling/quartz')

    // Precious Nether Ore Vein
        // Nether Gold using Plain drill
        event.custom({
            type: 'createoreexcavation:drilling',
            drill: {
            item: 'createoreexcavation:drill'
            },
            fluid: {
                fluid: 'create_dd:glowberry_milkshake',
                amount: 200
            },
            output: [
                {
                    item: 'minecraft:raw_gold',
                    count: 4
                },
                {
                    item: 'minecraft:raw_gold',
                    count: 1, 
                    chance: .20
                },
                {
                    item: 'create:experience_nugget',
                    count: 1,
                    chance: .50
                },
                {
                    item: 'minecraft:netherrack',
                    count: 1,
                    chance: .10
                }
            ],
            priority: 0,
            stress: 256,
            ticks: 200,
            vein_id: 'createoreexcavation:ore_vein_type/precious_nether_ore'
        }).id('forge_frontier:drilling/nether_raw_gold')

        // Ancient Debris using Netherite Drill
        event.custom({
            type: 'createoreexcavation:drilling',
            drill: {
            item: 'createoreexcavation:netherite_drill'
            },
            fluid: {
                fluid: 'createaddition:bioethanol',
                amount: 1000
            },
            output: [
                {
                    item: 'minecraft:ancient_debris',
                    count: 2
                },
                {
                    item: 'minecraft:netherite_scrap',
                    count: 1, 
                    chance: .20
                },
                {
                    item: 'create:experience_nugget',
                    count: 1,
                    chance: .50
                },
                {
                    item: 'minecraft:netherrack',
                    count: 1,
                    chance: .10
                }
            ],
            priority: 0,
            stress: 256,
            ticks: 800,
            vein_id: 'createoreexcavation:ore_vein_type/precious_nether_ore'
        }).id('forge_frontier:drilling/ancient_debris')

        // End Ores: Malachite, Irradium, and Bismuth Ore
            // Malachite
            event.custom({
                type: 'createoreexcavation:drilling',
                drill: {
                item: 'createoreexcavation:dragon_drill' 
                },
                fluid: {
                    fluid: 'create_confectionery:ruby_chocolate',
                    amount: 500
                },
                output: [
                    {
                        item: 'enlightened_end:malachite_ore',
                        count: 1
                    },
                    {
                        item: 'enlightened_end:malachite_ore',
                        count: 1, 
                        chance: .20
                    },
                    {
                        item: 'create:experience_nugget',
                        count: 1,
                        chance: .50
                    },
                    {
                        item: 'minecraft:end_stone',
                        count: 1,
                        chance: .10
                    },
                    {
                        item:'create_dd:mithril_nugget',
                        count: 2,
                        chance: .15
                    }
                ],
                priority: 0,
                stress: 256,
                ticks: 1000,
                vein_id: 'createoreexcavation:ore_vein_type/malachite_ore'
            }).id('forge_frontier:drilling/malachite')

            // Irradium
            event.custom({
                type: 'createoreexcavation:drilling',
                drill: {
                item: 'createoreexcavation:dragon_drill'
                },
                fluid: {
                    fluid: 'create_confectionery:ruby_chocolate',
                    amount: 500
                },
                output: [
                    {
                        item: 'enlightened_end:irradium_ore',
                        count: 1
                    },
                    {
                        item: 'enlightened_end:irradium_ore',
                        count: 1, 
                        chance: .20
                    },
                    {
                        item: 'create:experience_nugget',
                        count: 1,
                        chance: .50
                    },
                    {
                        item: 'minecraft:end_stone',
                        count: 1,
                        chance: .10
                    },
                    {
                        item:'create_dd:mithril_nugget',
                        count: 2,
                        chance: .15
                    }
                ],
                priority: 0,
                stress: 256,
                ticks: 1000,
                vein_id: 'createoreexcavation:ore_vein_type/irradium_ore'
            }).id('forge_frontier:drilling/irradium')

            // Bismuth Ore
            event.custom({
                type: 'createoreexcavation:drilling',
                drill: {
                item: 'createoreexcavation:dragon_drill'
                },
                fluid: {
                    fluid: 'create_confectionery:ruby_chocolate',
                    amount: 500
                },
                output: [
                    {
                        item: 'enlightened_end:bismuth_ore',
                        count: 1
                    },
                    {
                        item: 'enlightened_end:bismuth_ore',
                        count: 1, 
                        chance: .20
                    },
                    {
                        item: 'create:experience_nugget',
                        count: 1,
                        chance: .50
                    },
                    {
                        item: 'minecraft:end_stone',
                        count: 1,
                        chance: .10
                    },
                    {
                        item:'create_dd:mithril_nugget',
                        count: 2,
                        chance: .15
                    }
                ],
                priority: 0,
                stress: 256,
                ticks: 1000,
                vein_id: 'createoreexcavation:ore_vein_type/bismuth_ore'
            }).id('forge_frontier:drilling/bismuth')

        // Moon Ores: Cheese and Desh Ore
        event.custom({
            type: 'createoreexcavation:drilling',
            drill: {
            item: 'createoreexcavation:desh_drill' 
            },
            fluid: {
                fluid: 'createdieselgenerators:plant_oil',
                amount: 1000
            },
            output: [
                {
                    item: 'ad_astra:moon_cheese_ore',
                    count: 3
                },
                {
                    item: 'ad_astra:raw_desh',
                    count: 2,
                    chance: .75
                },
                {
                    item: 'create:experience_nugget',
                    count: 1,
                    chance: .50
                },
                {
                    item: 'ad_astra:moon_stone',
                    count: 1,
                    chance: .10
                },
                {
                    item:'create_dd:industrial_iron_nugget',
                    count: 4,
                    chance: .15
                }
            ],
            priority: 0,
            stress: 256,
            ticks: 700,
            vein_id: 'createoreexcavation:ore_vein_type/moon_ore'
        }).id('forge_frontier:drilling/moon')

        // Mars Ores: Ostrum Ore
        event.custom({
            type: 'createoreexcavation:drilling',
            drill: {
            item: 'createoreexcavation:ostrum_drill'
            },
            fluid: {
                fluid: 'createdieselgenerators:ethanol',
                amount: 1000
            },
            output: [
                {
                    item: 'ad_astra:raw_ostrum',
                    count: 2, 
                    chance: .75
                },
                {
                    item: 'create:experience_nugget',
                    count: 1,
                    chance: .50
                },
                {
                    item: 'ad_astra:mars_stone',
                    count: 1,
                    chance: .10
                },
                {
                    item:'create_dd:steel_nugget',
                    count: 4,
                    chance: .15
                }
            ],
            priority: 0,
            stress: 256,
            ticks: 700,
            vein_id: 'createoreexcavation:ore_vein_type/mars_ore'
        }).id('forge_frontier:drilling/ostrum')

        // Venus Ores: Calorite Ore
        event.custom({
            type: 'createoreexcavation:drilling',
            drill: {
            item: 'createoreexcavation:calorite_drill'
            },
            fluid: {
                fluid: 'createdieselgenerators:biodiesel',
                amount: 1000
            },
            output: [
                {
                    item: 'ad_astra:raw_calorite',
                    count: 2, 
                    chance: .75
                },
                {
                    item: 'create:experience_nugget',
                    count: 1,
                    chance: .50
                },
                {
                    item: 'ad_astra:venus_stone',
                    count: 1,
                    chance: .10
                },
                {
                    item:'create_dd:bronze_nugget',
                    count: 4,
                    chance: .15
                }
            ],
            priority: 0,
            stress: 256,
            ticks: 800,
            vein_id: 'createoreexcavation:ore_vein_type/venus_ore'
        }).id('forge_frontier:drilling/calorite')

        // Glacio Ores: Ice Shard Ore
        event.custom({
            type: 'createoreexcavation:drilling',
            drill: {
            item: 'createoreexcavation:diamond_drill'
            },
            fluid: {
                fluid: 'minecraft:water',
                amount: 1000
            },
            output: [
                {
                    item: 'ad_astra:glacio_ice_shard_ore',
                    count: 1,
                },
                {
                    item: 'create:experience_nugget',
                    count: 1,
                    chance: .50
                },
                {
                    item: 'ad_astra:glacio_stone',
                    count: 1,
                    chance: .10
                }
            ],
            priority: 0,
            stress: 256,
            ticks: 500,
            vein_id: 'createoreexcavation:ore_vein_type/glacio_ore'
        }).id('forge_frontier:drilling/ice_shard')
    
      })