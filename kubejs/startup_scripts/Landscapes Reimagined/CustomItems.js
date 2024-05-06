
StartupEvents.registry('block', event => {
    event.create('overcharged_iron_block')
        .displayName('Overcharged Iron Block')
        .soundType('metal') 
        .mapColor('Stone') 
        .hardness(2.0)
        .model('kubejs:block/overcharged_iron_block')
        .requiresTool(true)
        .renderType('solid')
        .tagItem('tooltiprareness:common_item')
        .tagBlock("mineable/pickaxe")
        .fullBlock(true);     
    
    event.create('overcharged_gold_block')
        .displayName('Overcharged Gold Block')
        .soundType('metal') 
        .mapColor('Stone') 
        .hardness(2.0)
        .model('kubejs:block/overcharged_gold_block')
        .requiresTool(true)
        .renderType('solid')
        .tagItem('tooltiprareness:common_item')
        .tagBlock("mineable/pickaxe")
        .fullBlock(true);     

    event.create('overcharged_diamond_block')
        .displayName('Overcharged Diamond Block')
        .soundType('metal') 
        .mapColor('Stone') 
        .hardness(2.0)
        .model('kubejs:block/overcharged_diamond_block')
        .requiresTool(true)
        .renderType('solid')
        .tagItem('tooltiprareness:common_item')
        .tagBlock("mineable/pickaxe")
        .fullBlock(true);     

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
        
        event.create('crushed_bismuth_pile')
        .displayName('Crushed Bismuth Pile')
        .soundType('metal') 
        .mapColor('Stone') 
        .hardness(2.0)
        .model('kubejs:block/crushed_bismuth_pile')
        .requiresTool(true)
        .renderType('solid')
        .tagItem('tooltiprareness:common_item')
        .tagBlock("mineable/pickaxe")
        .fullBlock(true);
        
        event.create('crushed_calorite_pile')
        .displayName('Crushed Calorite Pile')
        .soundType('metal') 
        .mapColor('Stone') 
        .hardness(2.0)
        .model('kubejs:block/crushed_calorite_pile')
        .requiresTool(true)
        .renderType('solid')
        .tagItem('tooltiprareness:common_item')
        .tagBlock("mineable/pickaxe")
        .fullBlock(true);     

        event.create('crushed_desh_pile')
        .displayName('Crushed Desh Pile')
        .soundType('metal') 
        .mapColor('Stone') 
        .hardness(2.0)
        .model('kubejs:block/crushed_desh_pile')
        .requiresTool(true)
        .renderType('solid')
        .tagItem('tooltiprareness:common_item')
        .tagBlock("mineable/pickaxe")
        .fullBlock(true);     

        event.create('crushed_irradium_pile')
        .displayName('Crushed Irradium Pile')
        .soundType('metal') 
        .mapColor('Stone') 
        .hardness(2.0)
        .model('kubejs:block/crushed_irradium_pile')
        .requiresTool(true)
        .renderType('solid')
        .tagItem('tooltiprareness:common_item')
        .tagBlock("mineable/pickaxe")
        .fullBlock(true);     

        event.create('crushed_malachite_pile')
        .displayName('Crushed Malachite Pile')
        .soundType('metal') 
        .mapColor('Stone') 
        .hardness(2.0)
        .model('kubejs:block/crushed_malachite_pile')
        .requiresTool(true)
        .renderType('solid')
        .tagItem('tooltiprareness:common_item')
        .tagBlock("mineable/pickaxe")
        .fullBlock(true);     

        event.create('crushed_ostrum_pile')
        .displayName('Crushed Ostrum Pile')
        .soundType('metal') 
        .mapColor('Stone') 
        .hardness(2.0)
        .model('kubejs:block/crushed_ostrum_pile')
        .requiresTool(true)
        .renderType('solid')
        .tagItem('tooltiprareness:common_item')
        .tagBlock("mineable/pickaxe")
        .fullBlock(true);     

        event.create('crushed_tin_pile')
        .displayName('Crushed Tin Pile')
        .soundType('metal') 
        .mapColor('Stone') 
        .hardness(2.0)
        .model('kubejs:block/crushed_tin_pile')
        .requiresTool(true)
        .renderType('solid')
        .tagItem('tooltiprareness:common_item')
        .tagBlock("mineable/pickaxe")
        .fullBlock(true);     

        event.create('crushed_uranium_pile')
        .displayName('Crushed Uranium Pile')
        .soundType('metal') 
        .mapColor('Stone') 
        .hardness(2.0)
        .model('kubejs:block/crushed_uranium_pile')
        .requiresTool(true)
        .renderType('solid')
        .tagItem('tooltiprareness:common_item')
        .tagBlock("mineable/pickaxe")
        .fullBlock(true);     

});

// New Items
StartupEvents.registry('item', event => {

    event.create('kubejs:mold_template')
        .displayName('Mold Template')
        .texture('kubejs:item/mold_template');

    event.create('kubejs:skull_mold')
        .displayName('Skull Mold')
        .texture('kubejs:item/skull_mold');

    event.create('kubejs:head_mold')
        .displayName('Head Mold')
        .texture('kubejs:item/head_mold');

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

