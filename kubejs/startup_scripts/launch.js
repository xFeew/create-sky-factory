Platform.mods.kubejs.name = 'Create: Sky Factory'

StartupEvents.registry('item', (event) => {
    registerItems(event);
})

StartupEvents.registry("block", (event) => {
	registerBlocks(event);
})

ItemEvents.modification(event => {
	event.modify('dimension_crystals:dimension_end', item => {
	  item.rarity = "EPIC"
	})
	
})


/**
* Register new items
*/
function registerItems(event){
	newItems(event)
	mechanism(event)
	tools(event)
	crystals(event)
	misc(event)
}

function registerBlocks(event){

}

function newItems(event){
    event.create('zinc_dust').texture('kubejs:item/zinc_dust').displayName('Zinc Dust')
    event.create('brass_dust').texture('kubejs:item/brass_dust').displayName('Brass Blend')
    event.create('coal_dust').texture('kubejs:item/coal_dust').displayName('Powdered Coal')
	event.create('compressed_iron_sheet').texture('kubejs:item/compressed_iron_sheet').displayName("Compressed Iron Sheet")

	event.create('incomplete_dimension_end').texture('kubejs:item/incomplete_dimension_end').displayName('Incomplete End Dimension Crystal')

	event.create('blank_cast').texture('kubejs:item/blank_cast').displayName('Blank Cast')
	event.create('ingot_cast').texture('kubejs:item/ingot_cast').displayName('Ingot Cast')
	event.create('nugget_cast').texture('kubejs:item/nugget_cast').displayName('Nugget Cast')
	event.create('tube_base_cast').texture('kubejs:item/tube_base_cast').displayName('Tube Base Cast')

	event.create('apatite_tube').texture('kubejs:item/apatite_tube').displayName('Apatite Tube')

	event.create('incomplete_capacitor').texture('kubejs:item/incomplete_capacitor').displayName('Incomplete Capacitor')
	event.create('incomplete_transistor').texture('kubejs:item/incomplete_transistor').displayName('Incomplete Transistor')
	event.create('incomplete_pcb').texture('kubejs:item/incomplete_pcb').displayName('Incomplete PCB')

}

function mechanism(event){
    let mechanism = (name, rarity) => {
		let id = name.toLowerCase()
		event.create(id + '_mechanism').texture("kubejs:item/" + id + "_mechanism").displayName(name + ' Mechanism').rarity(rarity ? rarity : "COMMON")
		event.create('incomplete_' + id + '_mechanism').texture("kubejs:item/incomplete_" + id + "_mechanism").displayName('Incomplete ' + name + ' Mechanism').rarity(rarity ? rarity : "COMMON")
	}

	mechanism('Basic')
	mechanism('Sealed')
	mechanism('Train',"EPIC")
	mechanism('Magmatic',"EPIC")
	mechanism('Pneumatic',"EPIC")
	mechanism('Shadow',"UNCOMMON")

	event.create('incomplete_microcontroller').texture('kubejs:item/incomplete_microcontroller').displayName('Incomplete Microcontroller').rarity("EPIC")
	event.create('unpowered_microcontroller').texture('kubejs:item/unpowered_microcontroller').displayName('Unpowered Microcontroller').rarity("EPIC")
	event.create('microcontroller').texture('kubejs:item/microcontroller').displayName('Microcontroller').rarity("EPIC")

}



function tools(event){
	event.create('stone_saw').texture("kubejs:item/stone_saw").displayName('Flint Saw').maxDamage(128)
	event.create('iron_saw').texture("kubejs:item/iron_saw").displayName('Iron Saw').maxDamage(512)
	event.create('diamond_saw').texture("kubejs:item/diamond_saw").displayName('Diamond Saw').maxDamage(2048)
	event.create('screwdriver').texture("kubejs:item/screwdriver").displayName('Screwdriver').maxDamage(512)
	event.create('pliers').texture("kubejs:item/pliers").displayName('Pliers').maxDamage(512)
	event.create('file').texture("kubejs:item/file").displayName('File').maxDamage(256)
}


function crystals(event){
	let typesNonQuartz = ['Apatite','Niter','Cinnabar','Quartz']
	typesNonQuartz.forEach(e => {
		let id = e.toLowerCase()
		event.create(id + '_seed').texture("kubejs:item/crystal_seed_" + id).displayName(e + ' Seed')
		event.create('tiny_' + id + '_crystal').texture("kubejs:item/crystal_seed_" + id + "2").displayName('Tiny ' + e + ' Crystal')
		event.create('small_' + id + '_crystal').texture("kubejs:item/crystal_seed_" + id + "3").displayName('Small ' + e + ' Crystal')
		event.create('pure_' + id + '_crystal').texture("kubejs:item/pure_" + id).displayName('Pure ' + e + ' Crystal')
	});
}


function misc(event){
	event.create('tube_base').texture('kubejs:item/tube_base').displayName('Tube Base')
	event.create('empty_tube').texture("kubejs:item/empty_tube").displayName("Empty Tube")

	event.create('profession_permit')
	.displayName("Profession Permit")
	.texture("kubejs:item/profession_permit")
    .rarity("EPIC")
    .maxStackSize(16)
    .glow(true)
    
}