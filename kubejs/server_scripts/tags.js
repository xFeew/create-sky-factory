ServerEvents.tags('item', event =>{
    let types = ['Apatite','Niter','Cinnabar','Quartz']
	types.forEach(e => {
		let id = e.toLowerCase()
        event.add('forge:gems', 'kubejs:pure_' + id + '_crystal')
        event.add('forge:gems/'+ id, 'kubejs:pure_' + id + '_crystal')
	});

    event.add('forge:saws', [KJ('stone_saw'),KJ('iron_saw'),KJ('diamond_saw')])
    event.add('forge:screwdrivers', [KJ('screwdriver')])
    event.add('forge:pliers', [KJ('pliers')])
    event.add('forge:files', [KJ('file')])


    event.add('forge:sand', [CH('white_sand')])
    event.add('forge:casting_sand', [IW('sand_layer_block')])
    event.add('forge:casting_sand', [IW('red_sand_layer_block')])


    event.add('forge:dough/wheat', [PC('sourdough')])
    event.add('forge:dough', [PC('sourdough')])

    event.add('forge:dusts/zinc', [KJ('zinc_dust')])
    event.add('forge:dusts/coal', [KJ('coal_dust')])

    event.add('forge:plates/compressed_iron', [KJ('compress_iron_sheet')])
    event.add('forge:plates', [KJ('compress_iron_sheet')])


    event.add('immersive_weathering:bark','#forge:barks')

    global.trades.forEach(element => {
		event.get('forge:trade_cards').add(`kubejs:trade_card_${element}`)
		event.get('thermal:crafting/dies').add(`kubejs:trade_card_${element}`)
	});
	
	global.professions.forEach(element => {
		event.get('forge:profession_cards').add(`kubejs:profession_card_${element}`)
		event.get('thermal:crafting/dies').add(`kubejs:profession_card_${element}`)
	});

})