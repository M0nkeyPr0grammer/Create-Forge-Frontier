// Charger Recipe Tweaks
ServerEvents.recipes(event => {

	// Shaped Recipes
		// Charger Tier I
		event.remove({ id: 'chargers:charger_t1' })
		event.custom({
			type: 'create:item_application',
			ingredients: [
			  {
				item: 'createaddition:tesla_coil'
			  },
			  {
				item: 'forge_frontier:overcharged_iron_block'
			  }
			],
			results: [
			  {
				item: 'chargers:charger_t1'
			  }
			]
		  }).id('forge_frontier:item_application/charger_t1');

		// Charger Tier II
		event.remove({ id: 'chargers:charger_t2' }) 
		event.custom({
			type: 'create:item_application',
			ingredients: [
			  {
				item: 'chargers:charger_t1'
			  },
			  {
				item: 'forge_frontier:overcharged_gold_block'
			  }
			],
			results: [
			  {
				item: 'chargers:charger_t2'
			  }
			]
		  }).id('forge_frontier:item_application/charger_t2');

		// Charger Tier III
		event.remove({ id: 'chargers:charger_t3' }) 
		event.custom({
			type: 'create:item_application',
			ingredients: [
			  {
				item: 'chargers:charger_t2'
			  },
			  {
				item: 'forge_frontier:overcharged_diamond_block'
			  }
			],
			results: [
			  {
				item: 'chargers:charger_t3'
			  }
			]
		  }).id('forge_frontier:item_application/charger_t3');

		// Charger Tier IV
		event.remove({ id: 'chargers:charger_t4' }) 
		event.custom({
			type: 'create:item_application',
			ingredients: [
			  {
				item: 'chargers:charger_t3'
			  },
			  {
				item: 'forge_frontier:overcharged_netherite_block'
			  }
			],
			results: [
			  {
				item: 'chargers:charger_t4'
			  }
			]
		  }).id('forge_frontier:item_application/charger_t4');

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