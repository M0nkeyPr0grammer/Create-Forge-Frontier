// Listen to the loot tables modification event
LootJS.modifiers((event) => {
    
    // Target the witch's loot table
    event.modify('minecraft:entities/witch', (table) => {
        table.removePool((pool) => {
            pool.entry((entry) => {
                return entry.type === 'item' && entry.name === 'netherremastered:seal_piece_2';
            });
        });
    });

    // Target the evokers's loot table
    event.modify('minecraft:entities/evoker', (table) =>{
        table.removePool((pool) => {
            pool.entry((entry) => {
                return entry.type === 'item' && entry.name === 'netherremastered:seal_piece_3';
            });
        });
    })

    // Target the warden's loot table
    event.modify('minecraft:entities/warden', (table) =>{
        table.removePool((pool) => {
            pool.entry((entry) => {
                return entry.type === 'item' && entry.name === 'netherremastered:seal_crystal';
            });
        });
    })
});
