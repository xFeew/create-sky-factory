StartupEvents.registry('fluid', (event) => {
  event.create('molten_iron')
    .thickTexture(0x5e0000)
    .bucketColor(0x5e0000)
    .displayName('Molten Iron')

  event.create('molten_copper')
    .thickTexture(0xc24d01)
    .bucketColor(0xc24d01)
    .displayName('Molten Copper')


  event.create('molten_zinc')
    .thickTexture(0x727f84)
    .bucketColor(0x727f84)
    .displayName('Molten Zinc')

  event.create('molten_gold')
    .thickTexture(0xD18236)
    .bucketColor(0xD18236)
    .displayName('Molten Gold')

})
