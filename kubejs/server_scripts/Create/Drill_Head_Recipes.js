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
                C: 'createoreexcavation:echo_drill',
                D: 'quark:dragon_scale'
            }
        ).id( 'forge_frontier:shaped/dragon_drill' )

        // Amber Drill Head
        event.shaped(
            Item.of('createoreexcavation:amber_drill'),
            [
                'AB ',
                'BCB',
                ' BB'
            ],
            {
                A: 'alexscaves:amber_curiosity',
                B: 'alexscaves:amber',
                C: 'createoreexcavation:guano_drill'
            }
        ).id( 'forge_frontier:shaped/amber_drill' )

        // Azure Drill Head
        event.shaped(
            Item.of('createoreexcavation:azure_drill'),
            [
                'AB ',
                'BCB',
                ' BB'
            ],
            {
                A: 'alexscaves:block_of_azure_neodymium',
                B: 'alexscaves:azure_neodymium_ingot',
                C: 'createoreexcavation:amber_drill'
            }
        ).id( 'forge_frontier:shaped/azure_drill' )

        // Guano Drill Head
        event.shaped(
            Item.of('createoreexcavation:guano_drill'),
            [
                'AB ',
                'BCB',
                ' BB'
            ],
            {
                A: 'alexscaves:guano_block',
                B: 'alexscaves:guano',
                C: 'createoreexcavation:pearl_drill'
            }
        ).id( 'forge_frontier:shaped/guano_drill' )

        // Pearl Drill Head
        event.shaped(
            Item.of('createoreexcavation:pearl_drill'),
            [
                'AB ',
                'BCB',
                ' BB'
            ],
            {
                A: 'alexscaves:block_of_pearl',
                B: 'alexscaves:pearl',
                C: 'createoreexcavation:dragon_drill'
            }
        ).id( 'forge_frontier:shaped/pearl_drill' )

        // Scarlet Drill Head
        event.shaped(
            Item.of('createoreexcavation:scarlet_drill'),
            [
                'AB ',
                'BCB',
                ' BB'
            ],
            {
                A: 'alexscaves:block_of_scarlet_neodymium',
                B: 'alexscaves:scarlet_neodymium_ingot',
                C: 'createoreexcavation:azure_drill'
            }
        ).id( 'forge_frontier:shaped/scarlet_drill' )

        // Sulfur Drill Head
        event.shaped(
            Item.of('createoreexcavation:sulfur_drill'),
            [
                'AB ',
                'BCB',
                ' BB'
            ],
            {
                A: 'alexscaves:sulfur',
                B: 'alexscaves:sulfur_dust',
                C: 'createoreexcavation:scarlet_drill'
            }
        ).id( 'forge_frontier:shaped/sulfur_drill' )

        // Uranium Drill Head
        event.shaped(
            Item.of('createoreexcavation:uranium_drill'),
            [
                'AB ',
                'BCB',
                ' BB'
            ],
            {
                A: 'alexscaves:block_of_uranium',
                B: 'alexscaves:uranium',
                C: 'createoreexcavation:sulfur_drill'
            }
        ).id( 'forge_frontier:shaped/uranium_drill' )

        // Echo Drill Head
        event.shaped(
            Item.of('createoreexcavation:echo_drill'),
            [
                'AB ',
                'BCB',
                ' BB'
            ],
            {
                A: 'deeperdarker:heart_of_the_deep',
                B: 'minecraft:echo_shard',
                C: 'createoreexcavation:calorite_drill'
            }
        ).id( 'forge_frontier:shaped/echo_drill' )
    
})