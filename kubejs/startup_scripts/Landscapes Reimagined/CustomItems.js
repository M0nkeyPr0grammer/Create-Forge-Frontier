
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

