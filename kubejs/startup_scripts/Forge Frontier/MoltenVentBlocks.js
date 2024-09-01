StartupEvents.registry('block', event => {

    // Ore Blocks
        const ores = [
            { id: 'amberlite', name: 'Amberlite' },
            { id: 'aubrum', name: 'Aubrum' },
            { id: 'azurnium', name: 'Azurnium' },
            { id: 'frostite', name: 'Frostite' },
            { id: 'glacium', name: 'Glacium' },
            { id: 'guanite', name: 'Guanite' },
            { id: 'neodymrium', name: 'Neodymrium' },
            { id: 'pearlyte', name: 'Pearlyte' },
            { id: 'pyroclast', name: 'Pyroclast' },
            { id: 'radiantite', name: 'Radiantite' },
            { id: 'stellaris', name: 'Stellaris' },
            { id: 'sulphite', name: 'Sulphite' },
            { id: 'verdantine', name: 'Verdantine' }
        ];
    
        ores.forEach(ore => {
            event.create(`forge_frontier:${ore.id}`)
                .displayName(ore.name)
                .soundType('stone')
                .mapColor('stone')
                .hardness(2.0)
                .model(`forge_frontier:block/ore_stones/${ore.id}`)
                .requiresTool(true)
                .renderType('solid')
                .tagItem('tooltiprareness:common_item')
                .tagBlock("mineable/pickaxe")
                .fullBlock(true);
        });
    
// Active Molten Blocks
    const actives = [
        { id: 'amberlite', name: 'Active Molten Amberlite'},
        { id: 'ancient_debris', name: 'Active Molten Ancient Debris'},
        { id: 'aubrum', name: 'Active Molten Aubrum'},
        { id: 'azurnium', name: 'Active Molten Azurnium'},
        { id: 'frostite', name: 'Active Molten Frostite'},
        { id: 'glacium', name: 'Active Molten Glacium'},
        { id: 'guanite', name: 'Active Molten Guanite'},
        { id: 'neodymrium', name: 'Active Molten Neodymrium'},
        { id: 'palerock', name: 'Active Molten Palerock'},
        { id: 'pearlyte', name: 'Active Molten Pearlyte'},
        { id: 'pyroclast', name: 'Active Molten Pyroclast'},
        { id: 'radiantite', name: 'Active Molten radiantite'},
        { id: 'sculk_grime', name: 'Active Molten Sculk_grime'},
        { id: 'stellaris', name: 'Active Molten Stellaris'},
        { id: 'sulphite', name: 'Active Molten Sulphite'},
        { id: 'verdantine', name: 'Active Molten Verdantine'},
        { id: 'void_shale', name: 'Active Molten Void Shale'}
    ];

    actives.forEach(active => {
        event.create(`forge_frontier:active_molten_${active.id}`)
                .displayName(active.name)
                .soundType('stone')
                .mapColor('stone')
                .hardness(2.0)
                .model(`forge_frontier:block/active_molten_blocks/active_molten_${active.id}`)
                .requiresTool(true)
                .renderType('solid')
                .tagItem('tooltiprareness:common_item')
                .tagBlock("mineable/pickaxe")
                .fullBlock(true);
    });

// Dormant Molten Blocks
const dormants = [
    { id: 'amberlite', name: 'Dormant Molten Amberlite'},
    { id: 'ancient_debris', name: 'Dormant Molten Ancient Debris'},
    { id: 'aubrum', name: 'Dormant Molten Aubrum'},
    { id: 'azurnium', name: 'Dormant Molten Azurnium'},
    { id: 'frostite', name: 'Dormant Molten Frostite'},
    { id: 'glacium', name: 'Dormant Molten Glacium'},
    { id: 'guanite', name: 'Dormant Molten Guanite'},
    { id: 'neodymrium', name: 'Dormant Molten Neodymrium'},
    { id: 'palerock', name: 'Dormant Molten Palerock'},
    { id: 'pearlyte', name: 'Dormant Molten Pearlyte'},
    { id: 'pyroclast', name: 'Dormant Molten Pyroclast'},
    { id: 'radiantite', name: 'Dormant Molten Radiantite'},
    { id: 'sculk_grime', name: 'Dormant Molten Sculk grime'},
    { id: 'stellaris', name: 'Dormant Molten Stellaris'},
    { id: 'sulphite', name: 'Dormant Molten Sulphite'},
    { id: 'verdantine', name: 'Dormant Molten Verdantine'},
    { id: 'void_shale', name: 'Dormant Molten Void Shale'}
];

dormants.forEach(dormant => {
    event.create(`forge_frontier:dormant_molten_${dormant.id}`)
            .displayName(dormant.name)
            .soundType('stone')
            .mapColor('stone')
            .hardness(2.0)
            .model(`forge_frontier:block/dormant_molten_blocks/dormant_molten_${dormant.id}`)
            .requiresTool(true)
            .renderType('solid')
            .tagItem('tooltiprareness:common_item')
            .tagBlock("mineable/pickaxe")
            .fullBlock(true);
});

});
