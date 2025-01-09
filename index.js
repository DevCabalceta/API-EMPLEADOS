import express from 'express'
const app = express()

app.get('/', function (require, response) {

    const persona = {
        name: "Gabriel",
        age: 23
    }

    response.json(persona)
})

app.listen(3000, () => {
    console.log("Server on port 3000")
})