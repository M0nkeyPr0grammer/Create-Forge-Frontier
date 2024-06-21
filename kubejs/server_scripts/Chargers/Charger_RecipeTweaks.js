// Charger Recipe Tweaks
ServerEvents.recipes(event => {

	// Shaped Recipes
		// Charger Tier I
		event.remove({ id: 'chargers:charger_t1' })
		event.shaped(
			Item.of('chargers:charger_t1'),
			[
				'ABA',
				'ACA',
				'ADA'
			],
			{
				A: 'create_new_age:overcharged_iron',
				B: 'minecraft:redstone',
				C: 'minecraft:redstone_block',
				D: 'createaddition:tesla_coil'
			}
		).id('forge_frontier:shaped/charger_t1')

		// Charger Tier II
		event.remove({ id: 'chargers:charger_t2' }) 
		event.shaped(
			Item.of('chargers:charger_t2'),
			[
				'ABA',
				'ACA',
				'ADA'
			],
			{
				A: 'create_new_age:overcharged_gold',
				B: 'minecraft:redstone',
				C: 'minecraft:redstone_block',
				D: 'chargers:charger_t1'
			}
		).id('forge_frontier:shaped/charger_t2')

		// Charger Tier III
		event.remove({ id: 'chargers:charger_t3' }) 
		event.shaped(
			Item.of('chargers:charger_t3'),
			[
				'ABA',
				'ACA',
				'ADA'
			],
			{
				A: 'create_new_age:overcharged_diamond',
				B: 'minecraft:redstone',
				C: 'minecraft:redstone_block',
				D: 'chargers:charger_t2'
			}
		).id('forge_frontier:shaped/charger_t3')

		// Charger Tier IV
		event.remove({ id: 'chargers:charger_t4' }) 
		event.shaped(
			Item.of('chargers:charger_t4'),
			[
				'ABA',
				'ACA',
				'ADA'
			],
			{
				A: 'forge_frontier:overcharged_netherite_ingot',
				B: 'minecraft:redstone',
				C: 'minecraft:redstone_block',
				D: 'chargers:charger_t3'
			}
		).id('forge_frontier:shaped/charger_t4')

		// Wireless Charger
		event.remove({ id: 'chargers:wireless_charger' })  
		event.shaped(
			Item.of('chargers:wireless_charger'),
			[
				'ABA',
				'ACA',
				'ADA'
			],
			{
				A: 'create_new_age:overcharged_iron',
				B: '#forge:ender_pearls',
				C: 'minecraft:redstone_block',
				D: 'createaddition:tesla_coil'
			}
		).id('forge_frontier:shaped/wireless_charger')
})