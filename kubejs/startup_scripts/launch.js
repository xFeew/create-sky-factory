Platform.mods.kubejs.name = 'Create: Sky Factory'

StartupEvents.registry('item', (event) => {
    registerItems(event);
})



/**
* Register new items
*/
function registerItems(event){
    event.create('zinc_dust').texture('kubejs:item/zinc_dust') 
    // This texture would be located at kubejs/assets/kubejs/textures/item/iron_dust.png
    let mechanism = (name, rarity) => {
		let id = name.toLowerCase()
		event.create(id + '_mechanism').texture("kubejs:item/" + id + "_mechanism").displayName(name + ' Mechanism').rarity(rarity ? rarity : "COMMON")
		event.create('incomplete_' + id + '_mechanism').texture("kubejs:item/incomplete_" + id + "_mechanism").displayName('Incomplete ' + name + ' Mechanism').rarity(rarity ? rarity : "COMMON")
	}

	mechanism('Basic')
	mechanism('Sealed')
}