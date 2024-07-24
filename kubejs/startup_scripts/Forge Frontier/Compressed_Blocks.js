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
        function createCompressedIrradium(event, level) {
            event.create(`forge_frontier:compressed_irradium_${level}x`)
                .displayName(`Compressed Irradium ${level}x`)
                .soundType('metal')
                .mapColor('stone')
                .hardness(2.0)
                .model(`forge_frontier:block/compressed_blocks/compressed_irradium_${level}x`)
                .requiresTool(true)
                .renderType('solid')
                .tagItem('tooltiprareness:common_item')
                .tagBlock('mineable/pickaxe')
                .fullBlock(true);
        }
        
        for (let i = 1; i <= 9; i++) {
            createCompressedIrradium(event, i);
        }

        // Bismuth
        function createCompressedBismuth(event, level) {
            event.create(`forge_frontier:compressed_bismuth_${level}x`)
                .displayName(`Compressed Bismuth ${level}x`)
                .soundType('metal')
                .mapColor('stone')
                .hardness(2.0)
                .model(`forge_frontier:block/compressed_blocks/compressed_bismuth_${level}x`)
                .requiresTool(true)
                .renderType('solid')
                .tagItem('tooltiprareness:common_item')
                .tagBlock('mineable/pickaxe')
                .fullBlock(true);
        }
        
        for (let i = 1; i <= 9; i++) {
            createCompressedBismuth(event, i);
        }

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

    })
