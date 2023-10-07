
let KJ = (id, x) => MOD("kubejs", id, x)

JEIEvents.hideItems(event =>{
    event.hide(KJ('incomplete_basic_mechanism'))
    event.hide(KJ('incomplete_sealed_mechanism'))
})