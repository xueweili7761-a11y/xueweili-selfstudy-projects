const list=document.getElementById('list')
const list2=document.getElementById('list2')
const list3=document.getElementById('list3')
const data= fetch('https://jsonplaceholder.typicode.com/users')
data.then(abc=>abc.json())
    .then(array=> {
        console.log(array)
        array.forEach((person) => {
            const names = document.createElement('p')
            names.innerText=person.name
            list.append(names)
            const emails = document.createElement('p')
            emails.innerText=person.email
            list2.append(emails)
            const phoneN = document.createElement('p')
            phoneN.innerText=person.phone
            list3.append(phoneN)
        })
    })