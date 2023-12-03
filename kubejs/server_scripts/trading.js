MoreJSEvents.playerStartTrading((event) => {
    if (!event.player.stages.has("allow_trading")) {
        event.forEachOffers((o, i) => {
            var input =  o.getFirstInput()
            var output = o.getOutput()

            //dissable economy breaking trades, todo: find and add more
            if(input == "minecraft:stick" || input == "minecraft:flint"){
                o.disabled = true
            }


            if(input == "minecraft:emerald"){
                //triple the price
                let firstInputCount = o.getFirstInput().getCount()
                let newCount = Math.ceil(firstInputCount*3);

                let currency = 'thermal:silver_coin'
                let goldCoins = 0;
                while(newCount>64){
                    currency = 'thermal:gold_coin'
                    goldCoins++;
                    newCount = newCount - 64
                }

                o.setFirstInput(currency)

                if(goldCoins == 0){
                    o.getFirstInput().setCount(Number(newCount))
                }else if(goldCoins > 0){
                    o.getFirstInput().setCount(Number(goldCoins))
                }
            }   


            if(output == "minecraft:emerald"){
                let currency = 'thermal:silver_coin'
                o.setOutput(currency)
            }
        });
    }
});