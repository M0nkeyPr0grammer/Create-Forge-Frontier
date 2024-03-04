
StartupEvents.registry('block', event => {
    event.create('trophy_block')
        .displayName('Landscapes Reimagined Trophy')
        .soundType('metal') // Example, replace 'wood' with the appropriate sound type
        .mapColor('DIAMOND') // Example, replace 'color' with the appropriate map color
        .hardness(2.0)
        .model('kubejs:block/trophy_block')
        .requiresTool(true)
        .resistance(1200)
        .waterlogged()
        .renderType('solid')
        .box(1, 0, 1, 15, 14, 15)
        .tagItem('tooltiprareness:epic_item')
        .tagBlock("mineable/pickaxe")
        .fullBlock(true);     
});

// New Items
StartupEvents.registry('item', event => {
    event.create('kubejs:netherite_specks')
        .displayName('Netherite Specks')
        .texture('kubejs:item/netherite_specks');

    event.create('kubejs:incomplete_netherite_dust')
        .displayName('Incomplete Netherite Dust')
        .texture('spelunkery:item/dust');
    
    event.create('kubejs:netherite_dust')
        .displayName('Netherite Dust')
        .texture('kubejs:item/netherite_dust')

    event.create('crushed_bismuth')
        .displayName('Crushed Bismuth')
        .texture('kubejs:item/crushed_bismuth');

    event.create('crushed_irradium')
        .displayName('Crushed Irradium')
        .texture('kubejs:item/crushed_irradium');

    event.create('crushed_malachite')
        .displayName('Crushed Malachite')
        .texture('kubejs:item/crushed_malachite');

    event.create('modpack_logo')
        .displayName('Forge Frontier Logo')
        .texture('kubejs:item/landscapes_reimagined_forgefrontier')

    event.create('netherite_iron_upgrade')
        .displayName('Netherite Iron Smithing Template')
        .texture('kubejs:item/netherite_iron_upgrade_smithing_template')

    event.create('netherite_gold_upgrade')
        .displayName('Netherite Gold Smithing Template')
        .texture('kubejs:item/netherite_gold_upgrade_smithing_template')

    event.create('netherite_emerald_upgrade')
        .displayName('Netherite Emerald Smithing Template')
        .texture('kubejs:item/netherite_emerald_upgrade_smithing_template')

    event.create('netherite_diamond_upgrade')
        .displayName('Netherite Diamond Smithing Template')
        .texture('kubejs:item/netherite_diamond_upgrade_smithing_template')
});

