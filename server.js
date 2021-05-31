const express = require('express')
const path = require('path')
const app = express()

const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]



app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.get('/priceCheck/:name', function(request, response) {
    let itemName = request.params.name
    const findByName = store.find(p => p.name === itemName)
    if (findByName)
        response.send(itemName + ' price:' + findByName.price)
    else response.send(' price: null')
})






app.get('/buy/:name', function(request, response) {

    let itemName = request.params.name
    const findByName = store.find(p => p.name === itemName)
    if (findByName) {
        findByName.inventory -= 1
        response.send(findByName)
    } else response.send(' price: null')

})





app.get('/sale', function(request, response) {
    let admin = request.query
    if (admin.admin === "true") {
        store.filter(i => i.inventory > 10).map(c => c.price = c.price / 2)
        response.send(store)
    }
})








const port = 3000
app.listen(port, function() {
    console.log(`Running server on port ${port}`)
})