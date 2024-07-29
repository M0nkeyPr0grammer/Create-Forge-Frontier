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
    
})