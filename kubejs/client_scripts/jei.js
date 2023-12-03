Ponder.tags((event) => {
    event.createTag("kubejs:custom_generators", "minecraft:cobblestone", "Custom generators", "Special block placement to achieve different results", [
        "minecraft:andesite","minecraft:diorite","minecraft:granite","minecraft:tuff",'minecraft:blackstone'
    ]);
});

function titleCase(str) {
   var splitStr = str.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
   return splitStr.join(' '); 
}

Ponder.registry((event) => {
    const immersiveWeatheringGenerators = (name, output, sideSouth, sideNorth,requireWater) => {
        event.create(output).scene("custom_generators", "Custom Generator.", (scene, util) => {

            const centerBlockPos = util.grid.at(2, 0, 2);
            const southBlockPos = util.grid.at(2, 1, 3);
            const northBlockPos = util.grid.at(2, 1, 1);
            
            const centerTop = util.vector.topOf(centerBlockPos);
            const southTop = util.vector.topOf(southBlockPos);
            const northTop = util.vector.topOf(northBlockPos);
    
            const surroundingblock = 'minecraft:glass'
            scene.world.setBlocks([4,1,2], surroundingblock,true);
            scene.world.setBlocks([3,1,1], surroundingblock);
            scene.world.setBlocks([3,1,3], surroundingblock);
    
            if(requireWater){
                scene.world.setBlocks([0,1,2], surroundingblock);
                scene.world.setBlocks([1,1,1], surroundingblock);
                scene.world.setBlocks([1,1,3], surroundingblock);
            }
    
            scene.showBasePlate();
            scene.world.showSection([2, 2, 2], Facing.DOWN);
    
            for (let x = 0; x < 5; x++) {
                for (let z = 0; z < 5; z++) {
                    scene.world.showSection([x, 1, z], Facing.DOWN);
                }
                scene.idle(3);
            }
    
            scene.world.setBlock(util.grid.at(3,1,2), "minecraft:lava", true);

            if(requireWater){
                scene.world.setBlock([1,1,2], "minecraft:water", true);
            }else{
                scene.idle(10)
                scene.overlay.showOutline(PonderPalette.BLUE, Facing.down, [1,1,2], 60)
                scene.addKeyframe();

                scene.text(40, `This setup does not require water`, southBlockPos.above(0)).placeNearTarget();
                scene.idle(50);
            }
    
            scene.idle(10)
            //South
            scene.world.setBlock([2,1,3], sideSouth, true);
            
            scene.idle(10)
            scene.overlay.showOutline(PonderPalette.GREEN, Facing.down, [2,1,3], 60)
            scene.addKeyframe();

            let adjacent_name = titleCase(sideSouth.split(":")[1].replace("_"," "))
            scene.text(50, `Place ${adjacent_name} next to a lava source`, southBlockPos.above(0)).placeNearTarget();
            scene.idle(60);

            //North
            if(sideNorth != null){
                scene.world.setBlock([2,1,1], sideNorth, true);
                
                scene.idle(10)
                scene.overlay.showOutline(PonderPalette.GREEN, Facing.down, [2,1,1], 60)
                scene.addKeyframe();

                let adjacent_name = titleCase(sideNorth.split(":")[1].replace("_"," "))
                scene.text(50, `Place ${adjacent_name} next to a lava source`, northBlockPos.above(0)).placeNearTarget();
                scene.idle(60);
            }

            scene.addKeyframe();
            scene.idle(10);
            scene.text(40, `This setup will change the generator output to ${name}`, centerBlockPos.above(1)).placeNearTarget();
    
            scene.idle(10)
            scene.world.setBlocks([2, 1, 2], output, true);
    
            scene.idle(30)
    
            for(let c = 0; c < 2; c++){
                scene.idle(5);
                    for (let x = 0; x < 10; x++) {
                    scene.world.incrementBlockBreakingProgress([2,1,2])
                    scene.idle(2);
                    if(x == 9){
                        let entity = scene.world.createItemEntity(centerTop.add(0, 0.5, 0), util.vector.of(0.07, 0.4, 0), output);
                        scene.idle(25);
                        scene.world.modifyEntity(entity, (e) => {
                            e.kill();
                        });
                    }
                }
                scene.idle(4);
                scene.world.setBlocks([2, 1, 2], output, true);
            }
    
    
        });
    }


    immersiveWeatheringGenerators('Andesite', 'minecraft:andesite','minecraft:gravel',null)
    immersiveWeatheringGenerators('Diorite', 'minecraft:diorite','minecraft:smooth_quartz',null)
    immersiveWeatheringGenerators('Granite', 'minecraft:granite','minecraft:smooth_quartz','minecraft:diorite')
    immersiveWeatheringGenerators('Tuff', 'minecraft:tuff','minecraft:blue_ice','immersive_weathering:ash_block',false)
    immersiveWeatheringGenerators('Blackstone', 'minecraft:blackstone','minecraft:blue_ice','minecraft:magma_block',false)
    
});