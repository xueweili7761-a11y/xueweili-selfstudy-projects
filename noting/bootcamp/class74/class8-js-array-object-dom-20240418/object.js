// object: contains key
let shelves = {
    history: 'shelf1',
    sport: 'shelf2',
    literature: 'shelf3',
    'biology related': 'shelf4'
}
// key should not contain '-', space, unless use inside ''
console.log(shelves.sport, shelves['sport'], shelves['biology related'])

// Categories of keys: property, method
const car = {
    // property
    color: 'red',
    make: 'ford',
    tires: ['Michelin', 'WinterWorries'],
    owner: {
        name: 'JT',
        age: 18
    },
    // methods
    horn: function(){
        console.log('hello', this.color, this.make)
    }
}
console.log(car.owner.name)
car.horn() // Math.round(), Array.isArray(), array.pop()

// this ===> object itself

//todo: how do we duplicate array/object?

// what can js do?
// edit/create/delete html document dynamically

// DOM ---> Document Object Model


