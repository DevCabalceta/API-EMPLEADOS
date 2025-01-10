import express, { Request, Response} from 'express'
const app = express()

app.get('/', function (req:Request, res:Response) {

    const persona = {
        name: "Gabriel",
        age: 25
    }

    res.json(persona)
})

app.listen(3000, () => {
    console.log("Server on port 3000")
})