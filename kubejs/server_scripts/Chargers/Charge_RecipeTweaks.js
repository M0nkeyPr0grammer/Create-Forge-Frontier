ServerEvents.recipes(event => {

    // Recipe Removals
    event.remove({ id: 'chargers:charger_t1' })
    event.remove({ id: 'chargers:charger_t2' }) 
    event.remove({ id: 'chargers:charger_t3' }) 
    event.remove({ id: 'chargers:wireless_charger' })  

    // Recipe Additions
    // Charger Tier I
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
	)

    // Charger Tier II
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
	)

    // Charger Tier III
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
	)

    // Wireless Charger
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
	)
})