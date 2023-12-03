// Ponder.tags((event) => {
//     event.createTag("kubejs:custom_generatorss", "minecraft:cobblestone", "Custom generators", "Special block placement to achieve different results", [
//         "minecraft:andesite",
//     ]);
// });


// Ponder.registry((event) => {
//     const immersiveWeatheringGenerators = (name, output, sideSouth, sideNorth) => {
//         event.create(output).scene("set_replace_modify_tutorial", "Custom Generator.", (scene, util) => {

//             const centerBlockPos = util.grid.at(2, 0, 2);
//             const southBlockPos = util.grid.at(2, 1, 3);
//             const northBlockPos = util.grid.at(2, 1, 1);
            
//             const centerTop = util.vector.topOf(centerBlockPos);
//             const southTop = util.vector.topOf(southBlockPos);
//             const northTop = util.vector.topOf(northBlockPos);
    
//             const surroundingblock = 'minecraft:glass'
//             scene.world.setBlocks([4,1,2], surroundingblock,true);
//             scene.world.setBlocks([3,1,1], surroundingblock);
//             scene.world.setBlocks([3,1,3], surroundingblock);
    
//             scene.world.setBlocks([0,1,2], surroundingblock);
//             scene.world.setBlocks([1,1,1], surroundingblock);
//             scene.world.setBlocks([1,1,3], surroundingblock);
    
//             scene.showBasePlate();
//             scene.world.showSection([2, 2, 2], Facing.DOWN);
    
//             for (let x = 0; x < 5; x++) {
//                 for (let z = 0; z < 5; z++) {
//                     scene.world.showSection([x, 1, z], Facing.DOWN);
//                 }
//                 scene.idle(3);
//             }
    
//             scene.world.setBlock(util.grid.at(3,1,2), "minecraft:lava", true);
//             scene.world.setBlock([1,1,2], "minecraft:water", true);
    
//             scene.idle(10)
//             //South
//             scene.world.setBlock([2,1,3], sideSouth, true);
            
//             scene.idle(10)
//             scene.overlay.showOutline(PonderPalette.GREEN, Facing.down, [2,1,3], 60)
//             scene.addKeyframe();
//             scene.text(50, "Placing gravel next to a lava source", southBlockPos.above(0)).placeNearTarget();
//             scene.idle(60);
            
//             scene.addKeyframe();
//             scene.idle(10);
//             scene.text(40, `Will change the generator output to ${name}`, centerBlockPos.above(1)).placeNearTarget();
    
//             scene.idle(10)
//             scene.world.setBlocks([2, 1, 2], output, true);
    
//             scene.idle(30)
    
//             for(let c = 0; c < 2; c++){
//                 scene.idle(5);
//                     for (let x = 0; x < 10; x++) {
//                     scene.world.incrementBlockBreakingProgress([2,1,2])
//                     scene.idle(2);
//                     if(x == 9){
//                         let entity = scene.world.createItemEntity(centerTop.add(0, 0.5, 0), util.vector.of(0.07, 0.4, 0), output);
//                         scene.idle(25);
//                         scene.world.modifyEntity(entity, (e) => {
//                             e.kill();
//                         });
//                     }
//                 }
//                 scene.idle(4);
//                 scene.world.setBlocks([2, 1, 2], output, true);
//             }
    
    
//         });
//     }


//     immersiveWeatheringGenerators('Andesite', 'minecraft:andesite','minecraft:gravel',null)
    
// });