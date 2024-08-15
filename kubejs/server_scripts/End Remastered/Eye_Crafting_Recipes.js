ServerEvents.recipes(event => {

// Undead Soul, which is the Centerpiece of all recipes below
    // Creates Undead Soul Recipe
    event.remove({ id: 'endrem:undead_eye'})

    // Will Tweak Recipe soon
	/*event.shaped(
		Item.of('endrem:undead_soul'),
		[
			' A ',
			'BEC',
			' D '
		],
		{
			A: 'minecraft:phantom_membrane',
			B: 'minecraft:bone',
			C: 'minecraft:rotten_flesh',
			D: 'minecraft:ghast_tear',
			E: 'minecraft:cobweb' 
		}
	).id( 'forge_frontier:shaped/undead_soul' )*/
    
// New End Remastered Eye Crafting Recipes

    // Black Eye: Seven Seas Loot Combination

    // Cold Eye: Glacio Loot Combination

    // Corrupted Eye: Diamond, Emerald, and Gold Automation Craft

    // Lost Eye: Cataclysm Soul Blacksmith Loot Combination

    // Nether Eye: Nether Loot Combination

    // Old Eye: Desert Pyramid/ Cataclysm Pyramid Loot Combination

    // Rogue Eye: Create Progression Combination

    // Cursed Eye: Bastion Loot/ Nether Castle Loot Combination

    // Evil Eye: Villager Trade Related Combination

    // Guardian Eye: Elder and Guardian Mob Drop Loot Combination

    // Magical Eye: Nether and Soul Infused Totem Craft Related, via Apotheosis

    // Wither Eye: Nether Star Loot Combination

    // Witch Eye: Potion Related Craft
    event.remove({ id: 'endrem:witch_eye'})

    // Warden Eye: Warden/Deeper Darker Loot Combination

    // Aetheric Eye: Ocean Boss Structure Loot Combination
    event.remove({ id: 'endrem:exotic_eye'})

    // Cryptic Eye: Mix of Nether and Soul Infused Items, via Apotheosis

})