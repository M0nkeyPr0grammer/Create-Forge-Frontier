
StartupEvents.registry('block', event => {
    // Compressed Blocks
        // Malachite
        function createCompressedMalachite(event, level) {
            event.create(`forge_frontier:compressed_malachite_${level}x`)
                .displayName(`Compressed Malachite ${level}x`)
                .soundType('metal')
                .mapColor('stone')
                .hardness(2.0)
                .model(`forge_frontier:block/compressed_blocks/compressed_malachite_${level}x`)
                .requiresTool(true)
                .renderType('solid')
                .tagItem('tooltiprareness:common_item')
                .tagBlock('mineable/pickaxe')
                .fullBlock(true);
        }
        
        for (let i = 1; i <= 9; i++) {
            createCompressedMalachite(event, i);
        }

        // Irradium

        // Bismuth

        // Desh

        // Ostrum

        // Calorite

        // Scarlet Neodymium

        // Azure Neodymium

        // Uranium

        // Amber

        // Sulfur

        // Pearls

        // Guano


    // Overcharged Blocks
    event.create('forge_frontier:overcharged_iron_block')
        .displayName('Overcharged Iron Block')
        .soundType('metal') 
        .mapColor('Stone') 
        .hardness(2.0)
        .model('forge_frontier:block/overcharged_iron_block')
        .requiresTool(true)
        .renderType('solid')
        .tagItem('tooltiprareness:common_item')
        .tagBlock("mineable/pickaxe")
        .fullBlock(true);     
    
    event.create('forge_frontier:overcharged_gold_block')
        .displayName('Overcharged Gold Block')
        .soundType('metal') 
        .mapColor('Stone') 
        .hardness(2.0)
        .model('forge_frontier:block/overcharged_gold_block')
        .requiresTool(true)
        .renderType('solid')
        .tagItem('tooltiprareness:common_item')
        .tagBlock("mineable/pickaxe")
        .fullBlock(true);     

    event.create('forge_frontier:overcharged_diamond_block')
        .displayName('Overcharged Diamond Block')
        .soundType('metal') 
        .mapColor('Stone') 
        .hardness(2.0)
        .model('forge_frontier:block/overcharged_diamond_block')
        .requiresTool(true)
        .renderType('solid')
        .tagItem('tooltiprareness:common_item')
        .tagBlock("mineable/pickaxe")
        .fullBlock(true);
    
    event.create('forge_frontier:overcharged_netherite_block')
        .displayName('Overcharged Netherite Block')
        .soundType('metal') 
        .mapColor('Stone') 
        .hardness(2.0)
        .model('forge_frontier:block/overcharged_netherite_block')
        .requiresTool(true)
        .renderType('solid')
        .tagItem('tooltiprareness:common_item')
        .tagBlock("mineable/pickaxe")
        .fullBlock(true);     

    event.create('forge_frontier:trophy_block')
        .displayName('Landscapes Reimagined Trophy')
        .soundType('metal') // Example, replace 'wood' with the appropriate sound type
        .mapColor('DIAMOND') // Example, replace 'color' with the appropriate map color
        .hardness(2.0)
        .model('forge_frontier:block/trophy_block')
        .requiresTool(true)
        .resistance(1200)
        .waterlogged()
        .renderType('solid')
        .box(1, 0, 1, 15, 14, 15)
        .tagItem('tooltiprareness:epic_item')
        .tagBlock("mineable/pickaxe")
        .fullBlock(true);
        
        event.create('forge_frontier:crushed_bismuth_pile')
        .displayName('Crushed Bismuth Pile')
        .soundType('metal') 
        .mapColor('Stone') 
        .hardness(2.0)
        .model('forge_frontier:block/crushed_bismuth_pile')
        .requiresTool(true)
        .renderType('solid')
        .tagItem('tooltiprareness:common_item')
        .tagBlock("mineable/pickaxe")
        .fullBlock(true);
        
        event.create('forge_frontier:crushed_calorite_pile')
        .displayName('Crushed Calorite Pile')
        .soundType('metal') 
        .mapColor('Stone') 
        .hardness(2.0)
        .model('forge_frontier:block/crushed_calorite_pile')
        .requiresTool(true)
        .renderType('solid')
        .tagItem('tooltiprareness:common_item')
        .tagBlock("mineable/pickaxe")
        .fullBlock(true);     

        event.create('forge_frontier:crushed_desh_pile')
        .displayName('Crushed Desh Pile')
        .soundType('metal') 
        .mapColor('Stone') 
        .hardness(2.0)
        .model('forge_frontier:block/crushed_desh_pile')
        .requiresTool(true)
        .renderType('solid')
        .tagItem('tooltiprareness:common_item')
        .tagBlock("mineable/pickaxe")
        .fullBlock(true);     

        event.create('forge_frontier:crushed_irradium_pile')
        .displayName('Crushed Irradium Pile')
        .soundType('metal') 
        .mapColor('Stone') 
        .hardness(2.0)
        .model('forge_frontier:block/crushed_irradium_pile')
        .requiresTool(true)
        .renderType('solid')
        .tagItem('tooltiprareness:common_item')
        .tagBlock("mineable/pickaxe")
        .fullBlock(true);     

        event.create('forge_frontier:crushed_malachite_pile')
        .displayName('Crushed Malachite Pile')
        .soundType('metal') 
        .mapColor('Stone') 
        .hardness(2.0)
        .model('forge_frontier:block/crushed_malachite_pile')
        .requiresTool(true)
        .renderType('solid')
        .tagItem('tooltiprareness:common_item')
        .tagBlock("mineable/pickaxe")
        .fullBlock(true);     

        event.create('forge_frontier:crushed_ostrum_pile')
        .displayName('Crushed Ostrum Pile')
        .soundType('metal') 
        .mapColor('Stone') 
        .hardness(2.0)
        .model('forge_frontier:block/crushed_ostrum_pile')
        .requiresTool(true)
        .renderType('solid')
        .tagItem('tooltiprareness:common_item')
        .tagBlock("mineable/pickaxe")
        .fullBlock(true);     

        event.create('forge_frontier:crushed_tin_pile')
        .displayName('Crushed Tin Pile')
        .soundType('metal') 
        .mapColor('Stone') 
        .hardness(2.0)
        .model('forge_frontier:block/crushed_tin_pile')
        .requiresTool(true)
        .renderType('solid')
        .tagItem('tooltiprareness:common_item')
        .tagBlock("mineable/pickaxe")
        .fullBlock(true);     

        event.create('forge_frontier:crushed_uranium_pile')
        .displayName('Crushed Uranium Pile')
        .soundType('metal') 
        .mapColor('Stone') 
        .hardness(2.0)
        .model('forge_frontier:block/crushed_uranium_pile')
        .requiresTool(true)
        .renderType('solid')
        .tagItem('tooltiprareness:common_item')
        .tagBlock("mineable/pickaxe")
        .fullBlock(true);     

});

// New Items
StartupEvents.registry('item', event => {

    // Overcharged Items
        event.create('forge_frontier:overcharged_netherite_ingot')
            .displayName('Overcharged Netherite Ingot')
            .texture('forge_frontier:item/overcharged_netherite_ingot');

    // New Molds
        event.create('forge_frontier:upgrade_mold')
            .displayName('Upgrade Template Mold')
            .texture('forge_frontier:item/molds/upgrade_mold');
            
        event.create('forge_frontier:axe_mold')
            .displayName('Axe Mold')
            .texture('forge_frontier:item/molds/axe_mold');

        event.create('forge_frontier:boots_mold')
            .displayName('Boots Mold')
            .texture('forge_frontier:item/molds/boots_mold');

        event.create('forge_frontier:block_mold')
            .displayName('Block Mold')
            .texture('forge_frontier:item/molds/block_mold');

        event.create('forge_frontier:chestplate_mold')
            .displayName('Chestplate Mold')
            .texture('forge_frontier:item/molds/chestplate_mold');

        event.create('forge_frontier:coal_mold')
            .displayName('Coal Mold')
            .texture('forge_frontier:item/molds/coal_mold');

        event.create('forge_frontier:gem_mold')
            .displayName('Gem Mold')
            .texture('forge_frontier:item/molds/gem_mold');

        event.create('forge_frontier:head_mold')
            .displayName('Head Mold')
            .texture('forge_frontier:item/molds/head_mold');

        event.create('forge_frontier:helmet_mold')
            .displayName('Helmet Mold')
            .texture('forge_frontier:item/molds/helmet_mold');

        event.create('forge_frontier:hoe_mold')
            .displayName('Hoe Mold')
            .texture('forge_frontier:item/molds/hoe_mold');

        event.create('forge_frontier:ingot_mold')
            .displayName('Ingot Mold')
            .texture('forge_frontier:item/molds/ingot_mold');

        event.create('forge_frontier:leggings_mold')
            .displayName('Leggings Mold')
            .texture('forge_frontier:item/molds/leggings_mold');

        event.create('forge_frontier:mold_template')
            .displayName('Mold Template')
            .texture('forge_frontier:item/molds/mold_template');

        event.create('forge_frontier:pickaxe_mold')
            .displayName('Pickaxe Mold')
            .texture('forge_frontier:item/molds/pickaxe_mold');

        event.create('forge_frontier:shovel_mold')
            .displayName('Shovel Mold')
            .texture('forge_frontier:item/molds/shovel_mold');

        event.create('forge_frontier:skull_mold')
            .displayName('Skull Mold')
            .texture('forge_frontier:item/molds/skull_mold');

        event.create('forge_frontier:sword_mold')
            .displayName('Sword Mold')
            .texture('forge_frontier:item/molds/sword_mold');

    // Netherite Automation Parts
        event.create('forge_frontier:netherite_specks')
            .displayName('Netherite Specks')
            .texture('forge_frontier:item/netherite_specks');

        event.create('forge_frontier:incomplete_netherite_dust')
            .displayName('Incomplete Netherite Dust')
            .texture('tfmg:item/coal_coke_dust');
        
        event.create('forge_frontier:netherite_dust')
            .displayName('Netherite Dust')
            .texture('forge_frontier:item/netherite_dust')

    // Crushed Ores
        event.create('forge_frontier:crushed_bismuth')
            .displayName('Crushed Bismuth')
            .texture('forge_frontier:item/crushed_ore/crushed_bismuth');

        event.create('forge_frontier:crushed_irradium')
            .displayName('Crushed Irradium')
            .texture('forge_frontier:item/crushed_ore/crushed_irradium');

        event.create('forge_frontier:crushed_malachite')
            .displayName('Crushed Malachite')
            .texture('forge_frontier:item/crushed_ore/crushed_malachite');

        event.create('forge_frontier:crushed_raw_redstone')
            .displayName('Crushed Raw Redstone')
            .texture('forge_frontier:item/crushed_ore/crushed_raw_redstone');
        
        event.create('forge_frontier:crushed_raw_emerald')
            .displayName('Crushed Raw Emerald')
            .texture('forge_frontier:item/crushed_ore/crushed_raw_emerald');
            
        event.create('forge_frontier:crushed_raw_diamond')
            .displayName('Crushed Raw Diamond')
            .texture('forge_frontier:item/crushed_ore/crushed_raw_diamond');

    // Drills Heads
        event.create("createoreexcavation:brass_drill")
            .displayName("Brass Drill")
            .texture('createoreexcavation:item/brass_drill');
        
        event.create("createoreexcavation:desh_drill")
            .displayName("Desh Drill")
            .texture('createoreexcavation:item/desh_drill');

        event.create("createoreexcavation:ostrum_drill")
            .displayName("Ostrum Drill")
            .texture('createoreexcavation:item/ostrum_drill');

        event.create("createoreexcavation:calorite_drill")
            .displayName("Calorite Drill")
            .texture('createoreexcavation:item/calorite_drill');

        event.create("createoreexcavation:dragon_drill")
            .displayName("Dragon Drill")
            .texture('createoreexcavation:item/dragon_drill');

    // Logo
        event.create('forge_frontier:modpack_logo')
            .displayName('Forge Frontier Logo')
            .texture('forge_frontier:item/forgefrontier')

    // Upgrades
        event.create('forge_frontier:netherite_iron_upgrade')
            .displayName('Netherite Iron Smithing Template')
            .texture('forge_frontier:item/upgrades/netherite_iron_upgrade_smithing_template')

        event.create('forge_frontier:netherite_gold_upgrade')
            .displayName('Netherite Gold Smithing Template')
            .texture('forge_frontier:item/upgrades/netherite_gold_upgrade_smithing_template')

        event.create('forge_frontier:netherite_emerald_upgrade')
            .displayName('Netherite Emerald Smithing Template')
            .texture('forge_frontier:item/upgrades/netherite_emerald_upgrade_smithing_template')

        event.create('forge_frontier:netherite_diamond_upgrade')
            .displayName('Netherite Diamond Smithing Template')
            .texture('forge_frontier:item/upgrades/netherite_diamond_upgrade_smithing_template')
});

