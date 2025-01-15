ServerEvents.recipes(event => {

// Standard Hopper Botany Pots
    // List of all botany pots
    const HopperbotanyPots = [
        'black_concrete',
        'black_glazed_terracotta',
        'black_terracotta',
        
        'blue_concrete',
        'blue_glazed_terracotta',
        'blue_terracotta',

        'brown_concrete',
        'brown_glazed_terracotta',
        'brown_terracotta',

        'cyan_concrete',
        'cyan_glazed_terracotta',
        'cyan_terracotta',

        'gray_concrete',
        'gray_glazed_terracotta',
        'gray_terracotta',

        'green_concrete',
        'green_glazed_terracotta',
        'green_terracotta',

        'light_blue_concrete',
        'light_blue_glazed_terracotta',
        'light_blue_terracotta',

        'light_gray_concrete',
        'light_gray_glazed_terracotta',
        'light_gray_terracotta',

        'lime_concrete',
        'lime_glazed_terracotta',
        'lime_terracotta',

        'magenta_concrete',
        'magenta_glazed_terracotta',
        'magenta_terracotta',

        'orange_concrete',
        'orange_glazed_terracotta',
        'orange_terracotta',

        'pink_concrete',
        'pink_glazed_terracotta',
        'pink_terracotta',

        'purple_concrete',
        'purple_glazed_terracotta',
        'purple_terracotta',

        'red_concrete',
        'red_glazed_terracotta',
        'red_terracotta',

        'terracotta',

        'white_concrete',
        'white_glazed_terracotta',
        'white_terracotta',

        'yellow_concrete',
        'yellow_glazed_terracotta',
        'yellow_terracotta',
    ];

    // Loop through the array and change the recipe for each botany pot
    HopperbotanyPots.forEach(potType => {
        event.replaceInput({
            id: `botanypots:botanypots/crafting/${potType}_hopper_botany_pot`,
        }, 'minecraft:hopper', 'create:chute');
    });

// List of all botany pots with their matching materials
const botanyPots = [
    { type: 'black_concrete', material: 'minecraft:black_concrete' },
    { type: 'black_glazed_terracotta', material: 'minecraft:black_glazed_terracotta' },
    { type: 'black_terracotta', material: 'minecraft:black_terracotta' },

    { type: 'blue_concrete', material: 'minecraft:blue_concrete' },
    { type: 'blue_glazed_terracotta', material: 'minecraft:blue_glazed_terracotta' },
    { type: 'blue_terracotta', material: 'minecraft:blue_terracotta' },

    { type: 'brown_concrete', material: 'minecraft:brown_concrete' },
    { type: 'brown_glazed_terracotta', material: 'minecraft:brown_glazed_terracotta' },
    { type: 'brown_terracotta', material: 'minecraft:brown_terracotta' },

    { type: 'cyan_concrete', material: 'minecraft:cyan_concrete' },
    { type: 'cyan_glazed_terracotta', material: 'minecraft:cyan_glazed_terracotta' },
    { type: 'cyan_terracotta', material: 'minecraft:cyan_terracotta' },

    { type: 'gray_concrete', material: 'minecraft:gray_concrete' },
    { type: 'gray_glazed_terracotta', material: 'minecraft:gray_glazed_terracotta' },
    { type: 'gray_terracotta', material: 'minecraft:gray_terracotta' },

    { type: 'green_concrete', material: 'minecraft:green_concrete' },
    { type: 'green_glazed_terracotta', material: 'minecraft:green_glazed_terracotta' },
    { type: 'green_terracotta', material: 'minecraft:green_terracotta' },

    { type: 'light_blue_concrete', material: 'minecraft:light_blue_concrete' },
    { type: 'light_blue_glazed_terracotta', material: 'minecraft:light_blue_glazed_terracotta' },
    { type: 'light_blue_terracotta', material: 'minecraft:light_blue_terracotta' },

    { type: 'light_gray_concrete', material: 'minecraft:light_gray_concrete' },
    { type: 'light_gray_glazed_terracotta', material: 'minecraft:light_gray_glazed_terracotta' },
    { type: 'light_gray_terracotta', material: 'minecraft:light_gray_terracotta' },

    { type: 'lime_concrete', material: 'minecraft:lime_concrete' },
    { type: 'lime_glazed_terracotta', material: 'minecraft:lime_glazed_terracotta' },
    { type: 'lime_terracotta', material: 'minecraft:lime_terracotta' },

    { type: 'magenta_concrete', material: 'minecraft:magenta_concrete' },
    { type: 'magenta_glazed_terracotta', material: 'minecraft:magenta_glazed_terracotta' },
    { type: 'magenta_terracotta', material: 'minecraft:magenta_terracotta' },

    { type: 'orange_concrete', material: 'minecraft:orange_concrete' },
    { type: 'orange_glazed_terracotta', material: 'minecraft:orange_glazed_terracotta' },
    { type: 'orange_terracotta', material: 'minecraft:orange_terracotta' },

    { type: 'pink_concrete', material: 'minecraft:pink_concrete' },
    { type: 'pink_glazed_terracotta', material: 'minecraft:pink_glazed_terracotta' },
    { type: 'pink_terracotta', material: 'minecraft:pink_terracotta' },

    { type: 'purple_concrete', material: 'minecraft:purple_concrete' },
    { type: 'purple_glazed_terracotta', material: 'minecraft:purple_glazed_terracotta' },
    { type: 'purple_terracotta', material: 'minecraft:purple_terracotta' },

    { type: 'red_concrete', material: 'minecraft:red_concrete' },
    { type: 'red_glazed_terracotta', material: 'minecraft:red_glazed_terracotta' },
    { type: 'red_terracotta', material: 'minecraft:red_terracotta' },

    { type: 'terracotta', material: 'minecraft:terracotta' },

    { type: 'white_concrete', material: 'minecraft:white_concrete' },
    { type: 'white_glazed_terracotta', material: 'minecraft:white_glazed_terracotta' },
    { type: 'white_terracotta', material: 'minecraft:white_terracotta' },

    { type: 'yellow_concrete', material: 'minecraft:yellow_concrete' },
    { type: 'yellow_glazed_terracotta', material: 'minecraft:yellow_glazed_terracotta' },
    { type: 'yellow_terracotta', material: 'minecraft:yellow_terracotta' }
];

// Loop through the array and create shaped recipes for each botany pot
botanyPots.forEach(pot => {
    event.shaped(`botanypots:${pot.type}_botany_pot`, [
        'MRM',
        'MFM',
        ' M '
    ], {
        M: pot.material,               // Matching terracotta or concrete material
        F: 'minecraft:flower_pot',     // Flower Pot
        R: 'farmersdelight:rich_soil'  // Farmer's Delight Rich Soil
    });
});


// Tiered Botany Pots

    // Elite Pots
    // List of all botany pots
    const botanyPotsEliteHopper = [
        'black_concrete',
        'black_glazed_terracotta',
        'black_terracotta',
        
        'blue_concrete',
        'blue_glazed_terracotta',
        'blue_terracotta',

        'brown_concrete',
        'brown_glazed_terracotta',
        'brown_terracotta',

        'cyan_concrete',
        'cyan_glazed_terracotta',
        'cyan_terracotta',

        'gray_concrete',
        'gray_glazed_terracotta',
        'gray_terracotta',

        'green_concrete',
        'green_glazed_terracotta',
        'green_terracotta',

        'light_blue_concrete',
        'light_blue_glazed_terracotta',
        'light_blue_terracotta',

        'light_gray_concrete',
        'light_gray_glazed_terracotta',
        'light_gray_terracotta',

        'lime_concrete',
        'lime_glazed_terracotta',
        'lime_terracotta',

        'magenta_concrete',
        'magenta_glazed_terracotta',
        'magenta_terracotta',

        'orange_concrete',
        'orange_glazed_terracotta',
        'orange_terracotta',

        'pink_concrete',
        'pink_glazed_terracotta',
        'pink_terracotta',

        'purple_concrete',
        'purple_glazed_terracotta',
        'purple_terracotta',

        'red_concrete',
        'red_glazed_terracotta',
        'red_terracotta',

        'terracotta',

        'white_concrete',
        'white_glazed_terracotta',
        'white_terracotta',

        'yellow_concrete',
        'yellow_glazed_terracotta',
        'yellow_terracotta',
    ];

    // Loop through the array and change the recipe for each botany pot
    botanyPotsEliteHopper.forEach(potType => {
        event.replaceInput({
            id: `botanypotstiers:crafting/elite_${potType}_hopper_botany_pot`,
        }, 'minecraft:hopper', 'create:chute');
    });

    // List of all botany pots
    const botanyPotsElite = [
        'black_concrete',
        'black_glazed_terracotta',
        'black_terracotta',
        
        'blue_concrete',
        'blue_glazed_terracotta',
        'blue_terracotta',

        'brown_concrete',
        'brown_glazed_terracotta',
        'brown_terracotta',

        'cyan_concrete',
        'cyan_glazed_terracotta',
        'cyan_terracotta',

        'gray_concrete',
        'gray_glazed_terracotta',
        'gray_terracotta',

        'green_concrete',
        'green_glazed_terracotta',
        'green_terracotta',

        'light_blue_concrete',
        'light_blue_glazed_terracotta',
        'light_blue_terracotta',

        'light_gray_concrete',
        'light_gray_glazed_terracotta',
        'light_gray_terracotta',

        'lime_concrete',
        'lime_glazed_terracotta',
        'lime_terracotta',

        'magenta_concrete',
        'magenta_glazed_terracotta',
        'magenta_terracotta',

        'orange_concrete',
        'orange_glazed_terracotta',
        'orange_terracotta',

        'pink_concrete',
        'pink_glazed_terracotta',
        'pink_terracotta',

        'purple_concrete',
        'purple_glazed_terracotta',
        'purple_terracotta',

        'red_concrete',
        'red_glazed_terracotta',
        'red_terracotta',

        'terracotta',

        'white_concrete',
        'white_glazed_terracotta',
        'white_terracotta',

        'yellow_concrete',
        'yellow_glazed_terracotta',
        'yellow_terracotta',
    ];

    // Loop through the array and change the recipe for each botany pot
    botanyPotsElite.forEach(potType => {
        event.replaceInput({
            id: `botanypotstiers:crafting/elite_${potType}_botany_pot_2`,
        }, 'minecraft:iron_block', 'forge_frontier:overcharged_iron_block');
    });

        // List of all hopper botany pots
        const hopperBotanyPotsElite = [
            'black_concrete',
            'black_glazed_terracotta',
            'black_terracotta',
            
            'blue_concrete',
            'blue_glazed_terracotta',
            'blue_terracotta',
    
            'brown_concrete',
            'brown_glazed_terracotta',
            'brown_terracotta',
    
            'cyan_concrete',
            'cyan_glazed_terracotta',
            'cyan_terracotta',
    
            'gray_concrete',
            'gray_glazed_terracotta',
            'gray_terracotta',
    
            'green_concrete',
            'green_glazed_terracotta',
            'green_terracotta',
    
            'light_blue_concrete',
            'light_blue_glazed_terracotta',
            'light_blue_terracotta',
    
            'light_gray_concrete',
            'light_gray_glazed_terracotta',
            'light_gray_terracotta',
    
            'lime_concrete',
            'lime_glazed_terracotta',
            'lime_terracotta',
    
            'magenta_concrete',
            'magenta_glazed_terracotta',
            'magenta_terracotta',
    
            'orange_concrete',
            'orange_glazed_terracotta',
            'orange_terracotta',
    
            'pink_concrete',
            'pink_glazed_terracotta',
            'pink_terracotta',
    
            'purple_concrete',
            'purple_glazed_terracotta',
            'purple_terracotta',
    
            'red_concrete',
            'red_glazed_terracotta',
            'red_terracotta',
    
            'terracotta',
    
            'white_concrete',
            'white_glazed_terracotta',
            'white_terracotta',
    
            'yellow_concrete',
            'yellow_glazed_terracotta',
            'yellow_terracotta',
        ];
    
        // Loop through the array and change the recipe for each botany pot
        hopperBotanyPotsElite.forEach(potType => {
            event.replaceInput({
                id: `botanypotstiers:crafting/elite_${potType}_compact_hopper_botany_pot_3`,
            }, 'minecraft:iron_block', 'forge_frontier:overcharged_iron_block');
        });

    // Ultra Pots
    // List of all botany hopper pots
    const botanyPotsUltraHopper = [
        'black_concrete',
        'black_glazed_terracotta',
        'black_terracotta',
        
        'blue_concrete',
        'blue_glazed_terracotta',
        'blue_terracotta',

        'brown_concrete',
        'brown_glazed_terracotta',
        'brown_terracotta',

        'cyan_concrete',
        'cyan_glazed_terracotta',
        'cyan_terracotta',

        'gray_concrete',
        'gray_glazed_terracotta',
        'gray_terracotta',

        'green_concrete',
        'green_glazed_terracotta',
        'green_terracotta',

        'light_blue_concrete',
        'light_blue_glazed_terracotta',
        'light_blue_terracotta',

        'light_gray_concrete',
        'light_gray_glazed_terracotta',
        'light_gray_terracotta',

        'lime_concrete',
        'lime_glazed_terracotta',
        'lime_terracotta',

        'magenta_concrete',
        'magenta_glazed_terracotta',
        'magenta_terracotta',

        'orange_concrete',
        'orange_glazed_terracotta',
        'orange_terracotta',

        'pink_concrete',
        'pink_glazed_terracotta',
        'pink_terracotta',

        'purple_concrete',
        'purple_glazed_terracotta',
        'purple_terracotta',

        'red_concrete',
        'red_glazed_terracotta',
        'red_terracotta',

        'terracotta',

        'white_concrete',
        'white_glazed_terracotta',
        'white_terracotta',

        'yellow_concrete',
        'yellow_glazed_terracotta',
        'yellow_terracotta',
    ];

    // Loop through the array and change the recipe for each botany pot
    botanyPotsUltraHopper.forEach(potType => {
        event.replaceInput({
            id: `botanypotstiers:crafting/ultra_${potType}_hopper_botany_pot`,
        }, 'minecraft:hopper', 'create:chute');
    });

        // List of all botany  pots
        const botanyPotsUltra = [
            'black_concrete',
            'black_glazed_terracotta',
            'black_terracotta',
            
            'blue_concrete',
            'blue_glazed_terracotta',
            'blue_terracotta',
    
            'brown_concrete',
            'brown_glazed_terracotta',
            'brown_terracotta',
    
            'cyan_concrete',
            'cyan_glazed_terracotta',
            'cyan_terracotta',
    
            'gray_concrete',
            'gray_glazed_terracotta',
            'gray_terracotta',
    
            'green_concrete',
            'green_glazed_terracotta',
            'green_terracotta',
    
            'light_blue_concrete',
            'light_blue_glazed_terracotta',
            'light_blue_terracotta',
    
            'light_gray_concrete',
            'light_gray_glazed_terracotta',
            'light_gray_terracotta',
    
            'lime_concrete',
            'lime_glazed_terracotta',
            'lime_terracotta',
    
            'magenta_concrete',
            'magenta_glazed_terracotta',
            'magenta_terracotta',
    
            'orange_concrete',
            'orange_glazed_terracotta',
            'orange_terracotta',
    
            'pink_concrete',
            'pink_glazed_terracotta',
            'pink_terracotta',
    
            'purple_concrete',
            'purple_glazed_terracotta',
            'purple_terracotta',
    
            'red_concrete',
            'red_glazed_terracotta',
            'red_terracotta',
    
            'terracotta',
    
            'white_concrete',
            'white_glazed_terracotta',
            'white_terracotta',
    
            'yellow_concrete',
            'yellow_glazed_terracotta',
            'yellow_terracotta',
        ];
    
        // Loop through the array and change the recipe for each botany pot
        botanyPotsUltra.forEach(potType => {
            event.replaceInput({
                id: `botanypotstiers:crafting/ultra_${potType}_botany_pot_2`,
            }, 'minecraft:diamond_block', 'forge_frontier:overcharged_diamond_block');
        });

        // List of all hopper botany pots
        const hopperBotanyPotsUltra = [
            'black_concrete',
            'black_glazed_terracotta',
            'black_terracotta',
            
            'blue_concrete',
            'blue_glazed_terracotta',
            'blue_terracotta',
    
            'brown_concrete',
            'brown_glazed_terracotta',
            'brown_terracotta',
    
            'cyan_concrete',
            'cyan_glazed_terracotta',
            'cyan_terracotta',
    
            'gray_concrete',
            'gray_glazed_terracotta',
            'gray_terracotta',
    
            'green_concrete',
            'green_glazed_terracotta',
            'green_terracotta',
    
            'light_blue_concrete',
            'light_blue_glazed_terracotta',
            'light_blue_terracotta',
    
            'light_gray_concrete',
            'light_gray_glazed_terracotta',
            'light_gray_terracotta',
    
            'lime_concrete',
            'lime_glazed_terracotta',
            'lime_terracotta',
    
            'magenta_concrete',
            'magenta_glazed_terracotta',
            'magenta_terracotta',
    
            'orange_concrete',
            'orange_glazed_terracotta',
            'orange_terracotta',
    
            'pink_concrete',
            'pink_glazed_terracotta',
            'pink_terracotta',
    
            'purple_concrete',
            'purple_glazed_terracotta',
            'purple_terracotta',
    
            'red_concrete',
            'red_glazed_terracotta',
            'red_terracotta',
    
            'terracotta',
    
            'white_concrete',
            'white_glazed_terracotta',
            'white_terracotta',
    
            'yellow_concrete',
            'yellow_glazed_terracotta',
            'yellow_terracotta',
        ];
    
        // Loop through the array and change the recipe for each botany pot
        hopperBotanyPotsUltra.forEach(potType => {
            event.replaceInput({
                id: `botanypotstiers:crafting/ultra_${potType}_compact_hopper_botany_pot_3`,
            }, 'minecraft:diamond_block', 'forge_frontier:overcharged_diamond_block');
        });
    
    
    // Creative Pots
    // List of all hopper botany pots
    const botanyPotsCreativeHopper = [
        'black_concrete',
        'black_glazed_terracotta',
        'black_terracotta',
        
        'blue_concrete',
        'blue_glazed_terracotta',
        'blue_terracotta',

        'brown_concrete',
        'brown_glazed_terracotta',
        'brown_terracotta',

        'cyan_concrete',
        'cyan_glazed_terracotta',
        'cyan_terracotta',

        'gray_concrete',
        'gray_glazed_terracotta',
        'gray_terracotta',

        'green_concrete',
        'green_glazed_terracotta',
        'green_terracotta',

        'light_blue_concrete',
        'light_blue_glazed_terracotta',
        'light_blue_terracotta',

        'light_gray_concrete',
        'light_gray_glazed_terracotta',
        'light_gray_terracotta',

        'lime_concrete',
        'lime_glazed_terracotta',
        'lime_terracotta',

        'magenta_concrete',
        'magenta_glazed_terracotta',
        'magenta_terracotta',

        'orange_concrete',
        'orange_glazed_terracotta',
        'orange_terracotta',

        'pink_concrete',
        'pink_glazed_terracotta',
        'pink_terracotta',

        'purple_concrete',
        'purple_glazed_terracotta',
        'purple_terracotta',

        'red_concrete',
        'red_glazed_terracotta',
        'red_terracotta',

        'terracotta',

        'white_concrete',
        'white_glazed_terracotta',
        'white_terracotta',

        'yellow_concrete',
        'yellow_glazed_terracotta',
        'yellow_terracotta',
    ];

    // Loop through the array and change the recipe for each botany pot
    botanyPotsCreativeHopper.forEach(potType => {
        event.replaceInput({
            id: `botanypotstiers:crafting/creative_${potType}_hopper_botany_pot`,
        }, 'minecraft:hopper', 'create:chute');
    });
    
    // Non Hopper Tiered Pots
    const botanyPotsCreative = [
        'black_concrete',
        'black_glazed_terracotta',
        'black_terracotta',
        
        'blue_concrete',
        'blue_glazed_terracotta',
        'blue_terracotta',

        'brown_concrete',
        'brown_glazed_terracotta',
        'brown_terracotta',

        'cyan_concrete',
        'cyan_glazed_terracotta',
        'cyan_terracotta',

        'gray_concrete',
        'gray_glazed_terracotta',
        'gray_terracotta',

        'green_concrete',
        'green_glazed_terracotta',
        'green_terracotta',

        'light_blue_concrete',
        'light_blue_glazed_terracotta',
        'light_blue_terracotta',

        'light_gray_concrete',
        'light_gray_glazed_terracotta',
        'light_gray_terracotta',

        'lime_concrete',
        'lime_glazed_terracotta',
        'lime_terracotta',

        'magenta_concrete',
        'magenta_glazed_terracotta',
        'magenta_terracotta',

        'orange_concrete',
        'orange_glazed_terracotta',
        'orange_terracotta',

        'pink_concrete',
        'pink_glazed_terracotta',
        'pink_terracotta',

        'purple_concrete',
        'purple_glazed_terracotta',
        'purple_terracotta',

        'red_concrete',
        'red_glazed_terracotta',
        'red_terracotta',

        'terracotta',

        'white_concrete',
        'white_glazed_terracotta',
        'white_terracotta',

        'yellow_concrete',
        'yellow_glazed_terracotta',
        'yellow_terracotta',
    ];

    // Loop through the array and change the recipe for each botany pot
    botanyPotsCreative.forEach(potType => {
        event.replaceInput({
            id: `botanypotstiers:crafting/creative_${potType}_botany_pot_2`,
        }, 'minecraft:netherite_block', 'forge_frontier:overcharged_netherite_block');
    });
    
            // List of all hopper botany pots
            const hopperBotanyPotsCreative = [
                'black_concrete',
                'black_glazed_terracotta',
                'black_terracotta',
                
                'blue_concrete',
                'blue_glazed_terracotta',
                'blue_terracotta',
        
                'brown_concrete',
                'brown_glazed_terracotta',
                'brown_terracotta',
        
                'cyan_concrete',
                'cyan_glazed_terracotta',
                'cyan_terracotta',
        
                'gray_concrete',
                'gray_glazed_terracotta',
                'gray_terracotta',
        
                'green_concrete',
                'green_glazed_terracotta',
                'green_terracotta',
        
                'light_blue_concrete',
                'light_blue_glazed_terracotta',
                'light_blue_terracotta',
        
                'light_gray_concrete',
                'light_gray_glazed_terracotta',
                'light_gray_terracotta',
        
                'lime_concrete',
                'lime_glazed_terracotta',
                'lime_terracotta',
        
                'magenta_concrete',
                'magenta_glazed_terracotta',
                'magenta_terracotta',
        
                'orange_concrete',
                'orange_glazed_terracotta',
                'orange_terracotta',
        
                'pink_concrete',
                'pink_glazed_terracotta',
                'pink_terracotta',
        
                'purple_concrete',
                'purple_glazed_terracotta',
                'purple_terracotta',
        
                'red_concrete',
                'red_glazed_terracotta',
                'red_terracotta',
        
                'terracotta',
        
                'white_concrete',
                'white_glazed_terracotta',
                'white_terracotta',
        
                'yellow_concrete',
                'yellow_glazed_terracotta',
                'yellow_terracotta',
            ];
        
            // Loop through the array and change the recipe for each botany pot
            hopperBotanyPotsCreative.forEach(potType => {
                event.replaceInput({
                    id: `botanypotstiers:crafting/creative_${potType}_compact_hopper_botany_pot_3`,
                }, 'minecraft:netherite_block', 'forge_frontier:overcharged_netherite_block');
            });

});