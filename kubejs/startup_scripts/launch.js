StartupEvents.registry('item', (event) => {
    registerItems(event);
})



/**
* Register new items
*/
function registerItems(event){
    event.create('zinc_dust').texture('kubejs:item/zinc_dust') 
    // This texture would be located at kubejs/assets/kubejs/textures/item/iron_dust.png
}