# Modpack Patch Notes: Version 1.3.0 [Pack Overhaul]
**Release Date**: March 17th, 2024

Version 1.3.0 marks a significant milestone in our development journey, representing a comprehensive enhancement of our modpack. This release concentrates on refining the overall experience through meticulous recipe adjustments, the introduction of innovative items, resolution of quest-related issues, selective mod removals, and extensive mod updates. The alterations delineated below are meticulously curated to align more closely with a Create modpack ethos, moving away from the eclectic assortment typical of Kitchen Sink packs. Our objective is to deliver a more cohesive and immersive experience, elevating your engagement and enjoyment.

### As a standard safety protocol, we advise creating a backup of your saved data prior to updating the modification package to ensure the preservation of your progress.

## New Additions
- [Adaptive Performance Tweaks: Core](https://modrinth.com/mod/adaptive-performance-tweaks-core): The core is required for all adaptive performance tweaks modules and provides a shared API, monitoring functionality, events, and commands.
- [Adaptive Performance Tweaks: Items](https://modrinth.com/mod/adaptive-performance-tweaks-items): Item clustering (fallen blocks, experience orbs, ...) and garbage cleanup.
- [Adaptive Performance Tweaks: Player](https://modrinth.com/mod/adaptive-performance-tweaks-player): Protects players during login and provides a special "easy" mode for less experienced and child players.
- [Adaptive Performance Tweaks: Spawn](https://modrinth.com/mod/adaptive-performance-tweaks-spawn): Optimization for monster spawn events and spawner.
- [Create Mechanical Spawner](https://modrinth.com/mod/create-mechanical-spawner): A mechanical spawner block. Generates Mobs with rotation power. This mod is meant to be used in modpacks.
- [Create Ratatouille](https://modrinth.com/mod/create-ratatouille): Adds machines and items about agricultural and food processing.
- [Diagonal Fences](https://modrinth.com/mod/diagonal-fences): Diagonal Fences makes all kinds of fences able to connect diagonally. Works just like you would expect it to.
- [Equipment Compare](https://modrinth.com/mod/equipment-compare): Makes it easier to compare equipment by showing a tooltip for what you're already wearing.
- [[EMF] Entity Model Features](https://modrinth.com/mod/entity-model-features): EMF is an OptiFine format, Custom Entity Model replacement mod available for Fabric and Forge.
- [Fresh Animations](https://modrinth.com/resourcepack/fresh-animations): Fresh Animations is a work in progress resource pack that gives an animation overhaul to the creatures in the default look of Minecraft.
- [Handcrafted](https://modrinth.com/mod/handcrafted): Are you looking for a fantasy, steampunk or medieval feel? Or do you want to stick to a more vanilla decor? Look no further! We've created over 250 furniture pieces for you to choose from.
- [Time in a Bottle](https://www.curseforge.com/minecraft/mc-mods/time-in-a-bottle-forge): Mod that brings in the time in a bottle.
- [Time in a bottle Curio Support](https://legacy.curseforge.com/minecraft/mc-mods/time-in-a-bottle-curio-support): Adds a Curio slot for Time in a bottle.
- [Zume](https://modrinth.com/mod/zume): An over-engineered Zoom mod by Nolij.

## Mod Removals
- **Apotheotic Additions**: Not essential to the pack progression and has had internal coding issues causing false positives on many Virus Scanning Programs
- **Armor Statues**: Not essential to pack progression and also clashes with the **Create** theme of the pack
- **Better Animations Collection**: Features will be covered by newly added resource pack, Fresh Animations
- **Building Gadgets 2**: Most features already covered by the Create Scematica cannon
- **Collective:** Library mod for Just Mob Heads and Player Heads which have been removed
- **CorgoLib**: Library mod for Enhanced Celestials which is being removed, and causes MacOS compatibility issues
- **EnderChests**: Most Features already covered by the Create Utilities Void Chest, and also clashes with the **Create** theme of the pack
- **EnderTanks**: Most Features already covered by the Create Utilities Void Tank, and also clashes with the **Create** theme of the pack
- **Enhanced Celestials**: Causes MacOS compatibility issues and not essential to pack progression
- **Immersive Paintings**: Not essential to pack progression and also clashes with the **Create** theme of the pack
- **Item Obliterator**: Item Removal features, don't remove recipes causing players to think they can craft the item, then all crafted items are lost during the crafting process
- **Modern UI**: Clashes with other GUI changing mods in the pack, and cleans up player logs due to the constant GUI scale spamming
- **Necronomicon**: Library mod for Item Obliterator which is being removed
- **Just Player Heads**: Not essential to pack progression and also clashes with the **Create** theme of the pack
- **Just Mob Heads**: Not essential to pack progression and also clashes with the **Create** theme of the pack
- **ShetiPhian-Core**: Library mod for EnderTanks and EnderChests which are being removed
- **Shrink**: Not essential to pack progression and also clashes with the **Create** theme of the pack

## KubeJS Updates
- Assets/kubejs/blocks: Added in Custom Crushed Ore Pile Blocks for Bismuth, Calorite, Desh, Irradium, Malachite, Ostrum, Tin, and Uranium
- Assets/kubejs/items: Added in Custom Mold Template, Skull Mold, and Head Mold, for custom recipes
- Data/kubejs/farmingforblockheads: Added in fungi and missing plants/sapplings, thanks to Voidmaster
- Server_Scripts: Created Blasting and Seething Recipes for all crushed ore blocks. Create Item Draining Sap recipes for all logs. Tweaked Jetpack recipes to lock behind different vanilla dimensios. Created custom recipes for Time in a Bottle, Coal Pieces, Crushing Netherite, Crushing Nether Stars, and other QOL recipes. Created custom recipes for Skeleton Skulls, Wither Skeleton Skulls, and Dragon Head, using custom molds. Created custom recipe for Quartz Enriched Iron, and first creative wireless grid recipe. Adjusted Recipe for Tieless tracks for better mod compatibility. 
- Startup_Scripts: Created Molten Bone Marrow for custom Skeleton Skull. Created Custom Blocks, and items listed above in Assets section.

## Mod Loader Update
- v47.1.1.100 > v47.1.101

## Mod Updates
- Advanced Netherite: v2.0.2 > v2.0.3
- Alex Caves: v1.1.3 > v1.1.4
- Alex Mobs: v1.22.7 > v1.22.8
- Amendments: v1.1.6 > v1.1.10
- Apothic Attributes: v1.2.1 > v1.3.1
- Apotheosis: v7.3.1 > v7.3.3
- Athena: v3.1.1 > v3.1.2
- Better Archeology: v1.1.6 > v1.1.7
- Botany Pots: v13.0.24 > v13.0.25
- Casualness Delight: v0.3n > v0.4n
- Charm of Undying: v6.4.5 > v6.5.0
- Chat Heads: v0.10.31 > v0.10.32
- Corpse: v1.0.10 > v1.0.12
- Create Connected: v0.7.2 > v0.7.3
- Creative Core: v2.11.24 > v2.11.25
- Curios: v5.7.0 > v5.7.2
- Easy Anvils: v8.0.1 > v8.0.2
- EMI: v1.1.2 > v1.1.3
- Embeddium: v0.3.7 > v0.3.9
- Embeddium Plus: v1.2.4 > v1.2.5
- Every Compat: v2.6.35 > v2.6.36
- Excavated Variants: v3.0.8 > v3.0.9
- Extra Storage: v4.0.5 > v4.0.7
- Friends and Foes: v2.0.9 > v2.0.10
- Functional Storage: v1.2.9 > v1.2.10
- Geckolib: v4.4.2 > v4.4.4
- Heracles: v1.1.10 > v1.1.11
- IDAS: v1.8.5 > v1.9.1
- Immersive Aircrafts: v0.7.1 > v0.7.5
- Intigrated API: v1.4.0 > v1.4.2
- JEED: v2.1.7 > v2.1.12
- Journeymap: v5.9.18 > v5.9.18p1
- Modernfix: v5.13.0 > v5.14.0
- Moonlight: v2.10.10 > v5.14.0
- Rubidium Extra: v0.5.4.1 > v0.5.4.2
- Seasonhub: v1.7.13 > v1.7.14
- Simple Voice Chat: v2.5.7 > v2.5.9
- Sophisticated Backpacks: 3.20.1.1012 > v3.20.3.1029
- Sophisticated Core: v0.6.3.553 > v0.6.9.569
- Sophisticated Storage: v0.9.6.720 > v0.10.10.757
- Vintage Improvements: v0.1.2.0 > v0.1.3.1

## Global Pack Updates
- Shapeless Portals: v1.0.4 > v1.0.6
- Create Immersive Aircrafts: v1.2.0 > v2.0.0
- Sparkles Addon: v1.0.0 > v1.0.1

## Drippy Loading Screen Updates
- Updated version number to 1.3.0
- Recolored to match Neoforge Coloring scheme

## Fancy Menu Updates
- Updated version number to 1.3.0
- Recolored to match Neoforge Coloring scheme

### More Details about the changes can be found here: [github repository merge](https://github.com/M0nkeyPr0grammer/Landscapes-Reimagined-Forge-Frontier/commit/86f3551d359c0a85f0877e1879c72533c050ab3b)

### Note: If you encounter any issues, please request support on our [Discord](https://discord.gg/quenZthXgy). Enjoy the update!

### Want to setup a server using our official server host, click the banner below!
[![BisectHosting Code](https://raw.githubusercontent.com/M0nkeyPr0grammer/Landscapes-Reimagined/main/BH_Landscape_Reimagined.png)](https://bisecthosting.com/M0nkeyPr0grammer?r=modrinth+chanelog)