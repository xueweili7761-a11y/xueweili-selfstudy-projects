function filterUnpaidCustomers(carts){
    const unpaidCustomers =[]
    for(let i=0;i<carts.length; i++){
    if(carts[i].paid ===false){
    unpaidCustomers.push(carts[i].name)}
    }
    return unpaidCustomers
}
const x=[
    {name: 'customer1', paid: true, carts: ['apple', 'orange']},
    {name: 'customer2', paid: false, carts: ['apple', 'orange']},
    {name: 'customer3', paid: true, carts: ['apple', 'orange']},
    {name: 'customer4', paid: true, carts: ['apple', 'orange']},
    {name: 'customer5', paid: false, carts: ['apple', 'orange']},
    {name: 'customer6', paid: true, carts: ['apple', 'orange']},
]
console.log(filterUnpaidCustomers(x))
