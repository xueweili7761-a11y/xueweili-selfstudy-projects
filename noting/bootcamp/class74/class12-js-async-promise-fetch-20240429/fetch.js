// google image/weather
// All data (images, videos, contents...) are downloaded from a server (backend)

// Through protocols: such as http(s), ftp...
// refer to: https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview
// https is a protocol to fetch resources (html, css, js, images, video, audio)

// how? API ---> application programme interface
// 1. fetch(ES2015): returns a promise in response to a request
// 2. axios: 3rd party. Refer to: https://www.npmjs.com/package//axios
// 3. XMLHttp Request API (core of AJAX) ---> old way

const container = document.getElementById('container')

const res = fetch('https://jsonplaceholder.typicode.com/users')

// res.then(initialRes => initialRes.json())  // To convert raw data to json format, return a promise
//     .then(finalRes => console.log(finalRes))  // when promise is resolved, print it out
//     .catch(e => console.log(e))
    //.finally(()=> window.alert('hello'))

// JSON: javascript object notation
// const data = [
//     {"id": 1, "cart": []},
//     {"id": 2, "cart": []},
//     {"id": 3, "cart": []}
// ]

res.then(initialRes => initialRes.json())  // To convert raw data to json format, return a promise
    .then(finalRes => {
        console.log(finalRes)
        finalRes.forEach(person => {
            const eleP = document.createElement('p')
            eleP.innerText = person.name
            container.append(eleP)
        })
    })  // when promise is resolved, print it out
    .catch(e => console.log(e))
