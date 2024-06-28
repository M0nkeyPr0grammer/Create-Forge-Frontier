ServerEvents.tags('worldgen/biome', event => {

    // Ad Astra Ore Vein Biome Linkage
    event.add('ad_astra:moon_ore_veins', 'ad_astra:lunar_wastelands');
    event.add('ad_astra:venus_ore_veins', 'ad_astra:venus_wastelands');
    event.add('ad_astra:glacio_ore_veins', 'ad_astra:glacio_ice_peaks');
  
    // Adds New Structure Gen
    event.add('cataclysm:has_structure/burning_arena_biomes', 'ad_astra:mercury_deltas');
    event.add('cataclysm:has_structure/soul_black_smith_biomes', 'ad_astra:martian_polar_caps');
    event.add('cataclysm:has_structure/cursed_pyramid_biomes', 'ad_astra:venus_wastelands');
    event.add('cataclysm:has_structure/ancient_factory_biomes', 'ad_astra:glacio_ice_peaks');
    event.add('incendium:structure/has_pipeline', 'ad_astra:lunar_wastelands');
    event.add('incendium:structure/has_sanctum', 'ad_astra:glacio_snowy_barrens');
    event.add('incendium:structure/has_reactor', 'ad_astra:venus_wastelands');

    // Removes Old Structure Gen
    event.remove('cataclysm:has_structure/burning_arena_biomes', 'minecraft:nether_wastes');
    event.remove('cataclysm:has_structure/soul_black_smith_biomes', [
      'minecraft:crimson_forest',
      'minecraft:nether_wastes',
      'minecraft:soul_sand_valley',
      'minecraft:warped_forest'
    ]);
    event.remove('cataclysm:has_structure/cursed_pyramid_biomes', 'minecraft:desert');
    event.remove('cataclysm:has_structure/ancient_factory_biomes', '#forge:is_underground');
    event.remove('incendium:structure/has_pipeline', [
    'incendium:infernal_dunes',
    'basalt_deltas',
    'incendium:toxic_heap'
    ]);
    event.remove('incendium:structure/has_sanctum', 'incendium:quartz_flats')
    event.remove('incendium:structure/has_reactor', [
        'incendium:volcanic_deltas',
        'minecraft:basalt_deltas',
        'incendium:toxic_heap'
    ]);
  });
  