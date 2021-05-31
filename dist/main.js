const getPrice = function() {
    let input = $("#item-input").val()
    $.get(`priceCheck/${input}`, function(item) {

        $("#getPrice").append(`<div class="child">${item} </div>`)
    })
}

const buyItem = function() {
    let input = $("#buy-input").val()
    $.get(`buy/${input}`, function(item) {

        $("#buyItem").append(`<div class="child">Congratulations, you’ve just bought "${item.name}" for "${item.price}". There are "${item.inventory}" left now in the store.</div>`)
    })
}