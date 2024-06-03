// Ad Astral Create and Create Foundry Compat Additions

// New Items
StartupEvents.registry('item', event => {
    event.create('forge_frontier:crushed_desh_ore')
        .displayName('Crushed Desh Ore')
        .texture('forge_frontier:item/crushed_ore/crushed_desh_ore');

    event.create('forge_frontier:crushed_ostrum_ore')
        .displayName('Crushed Ostrum Ore')
        .texture('forge_frontier:item/crushed_ore/crushed_ostrum_ore');

    event.create('forge_frontier:crushed_calorite_ore')
        .displayName('Crushed Calorite Ore')
        .texture('forge_frontier:item/crushed_ore/crushed_calorite_ore');
});
