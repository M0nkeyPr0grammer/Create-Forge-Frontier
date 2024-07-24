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
        function createCompressedDesh(event, level) {
            event.create(`forge_frontier:compressed_desh_${level}x`)
                .displayName(`Compressed Desh ${level}x`)
                .soundType('metal')
                .mapColor('stone')
                .hardness(2.0)
                .model(`forge_frontier:block/compressed_blocks/compressed_desh_${level}x`)
                .requiresTool(true)
                .renderType('solid')
                .tagItem('tooltiprareness:common_item')
                .tagBlock('mineable/pickaxe')
                .fullBlock(true);
        }
        
        for (let i = 1; i <= 9; i++) {
            createCompressedDesh(event, i);
        }

        // Ostrum
        function createCompressedOstrum(event, level) {
            event.create(`forge_frontier:compressed_ostrum_${level}x`)
                .displayName(`Compressed Ostrum ${level}x`)
                .soundType('metal')
                .mapColor('stone')
                .hardness(2.0)
                .model(`forge_frontier:block/compressed_blocks/compressed_ostrum_${level}x`)
                .requiresTool(true)
                .renderType('solid')
                .tagItem('tooltiprareness:common_item')
                .tagBlock('mineable/pickaxe')
                .fullBlock(true);
        }
        
        for (let i = 1; i <= 9; i++) {
            createCompressedOstrum(event, i);
        }        

        // Calorite
        function createCompressedCalorite(event, level) {
            event.create(`forge_frontier:compressed_calorite_${level}x`)
                .displayName(`Compressed Calorite ${level}x`)
                .soundType('metal')
                .mapColor('stone')
                .hardness(2.0)
                .model(`forge_frontier:block/compressed_blocks/compressed_calorite_${level}x`)
                .requiresTool(true)
                .renderType('solid')
                .tagItem('tooltiprareness:common_item')
                .tagBlock('mineable/pickaxe')
                .fullBlock(true);
        }
        
        for (let i = 1; i <= 9; i++) {
            createCompressedCalorite(event, i);
        }                

        // Scarlet Neodymium
        function createCompressedScarletNeodymium(event, level) {
            event.create(`forge_frontier:compressed_scarlet_neodymium_${level}x`)
                .displayName(`Compressed Scarlet Neodymium ${level}x`)
                .soundType('metal')
                .mapColor('stone')
                .hardness(2.0)
                .model(`forge_frontier:block/compressed_blocks/compressed_scarlet_neodymium_${level}x`)
                .requiresTool(true)
                .renderType('solid')
                .tagItem('tooltiprareness:common_item')
                .tagBlock('mineable/pickaxe')
                .fullBlock(true);
        }
        
        for (let i = 1; i <= 9; i++) {
            createCompressedScarletNeodymium(event, i);
        }          

        // Azure Neodymium

        // Uranium

        // Amber

        // Sulfur

        // Pearls

        // Guano

        // Methril

        // Bronze

        // Industrial Iron

        // Void Steel

        // Ethium

        // Netherite-Iron

        // Netherite-Gold

        // Netherite-Emerald

        // Netherite-Diamond

        // Star Infused Netherite Block

    })
