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

// Drill Settings
    // Gem Ores: Lapis, Redstone, Emerald, and Diamond
        // Lapis Ore
        event.custom({
            type: 'createoreexcavation:drilling',
            drill: {
            item: 'createoreexcavation:drill'
            },
            fluid: {
                fluid: 'create_dd:condense_milk',
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
                fluid: 'create_dd:vanilla',
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
                fluid: 'create_dd:cream',
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
                fluid: 'create_dd:vanilla_milkshake',
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
                }
            ],
            priority: 0,
            stress: 256,
            ticks: 200,
            vein_id: 'createoreexcavation:ore_vein_type/gem_ore'
        }).id('forge_frontier:drilling/raw_diamond')

    // Create Ore Vein
        // Copper using Plain Drill

        // Zinc using Brass Drill

        // Tin using Brass Drill

    // Vanilla Ore Vein
        // Coal using Plain drill

        // Iron using Plain drill

        // Gold using Plain drill

    // Non Precious Nether Ore Vein
        // Glowstone using Diamond Drill

        // Quartz using Diamond Drill

        // Netherack using Plain Drill

    // Precious Nether Ore Vein
        // Nether Gold using Plain drill

        // Ancient Debris using Netherite Drill
    
    
      })