//Create a pizza object that has four properties and three methods

let pizza = {}

pizza.size = 'medium'
pizza.toppings = ['ban peppers', 'steak', 'tomatoes']
pizza.crust = 'stuffed'
pizza.sauce = 'light'

pizza.estimatedDeliveryTime = function(){
    console.log('In Oven')
}
pizza.cheeseStretch = function(){
    console.log('Leaning Tower of Cheeeza!')
}
pizza.sling = function(){
    console.log('No Low Putts')
}

// Anotha one!

let pizzaTwo = {}

pizza.size = 'large'
pizza.toppings = ['ban peppers', 'steak', 'tomatoes', 'onion']
pizza.crust = 'crispy'
pizza.sauce = 'heavy'

pizza.estimatedDeliveryTime = function(){
    console.log('Dropped on Floor')
}
pizza.cheeseStretch = function(){
    console.log('Leaning Tower of Cheeeza!')
}
pizza.sling = function(){
    console.log('Air Ball')
}