StartupEvents.registry('fluid', (event) => {
	let fluid = (name, color) => {
		let id = name.toLowerCase().replace("'", "").split(' ').join('_')
    event.create(`molten_${id}`)
  	.displayName(`Molten ${name}`)
    .stillTexture('kubejs:block/fluid/still')
    .flowingTexture('kubejs:block/fluid/flowing')
    .bucketColor(color)
    .color(color)
    .luminosity(10)
    .temperature(1500)
    .viscosity(5000)
    .density(7000)
	}

  fluid("iron",0xa01f10)
  fluid("copper",0xc24d01)
  fluid("zinc",0xc8cc97)
  fluid("brass",0xedb83e)
  fluid("gold",0xffce00)
  fluid("lead",0xa2a2d2)
  fluid("silver",0xdfdfdf)
  fluid("tin",0x91bec7)
  fluid("nickel",0xf6f2a9)
  fluid("bronze",0xf1a82d)
  fluid("invar",0xb0c7b8)
  fluid("deorum",0xe8ae2e)
  fluid("lumium",0xfceea8)
  fluid("signalum",0xf5491c)
  fluid("enderium",0x1d7d8a)
  fluid("constantan",0xebb35a)
  fluid("glass",0xc1f5ff)


  event.create(`crystal_growth_solution`)
  	.displayName(`Crystal Growth Solution`)
    .stillTexture('kubejs:block/fluid/still')
    .flowingTexture('kubejs:block/fluid/flowing')
    .color(0x53d8b9)
    .bucketColor(0x53d8b9)
    .luminosity(10)


    
  event.create(`sulphuric_acid`)
  .displayName(`Sulphuric Acid`)
  .stillTexture('kubejs:block/fluid/still')
  .flowingTexture('kubejs:block/fluid/flowing')
  .color(0xFEFFE0)
  .bucketColor(0xFEFFE0)

      
  event.create(`nitric_acid`)
  .displayName(`Nitric acid`)
  .stillTexture('kubejs:block/fluid/still')
  .flowingTexture('kubejs:block/fluid/flowing')
  .color(0xFCFFA3)
  .bucketColor(0xFCFFA3)
})
