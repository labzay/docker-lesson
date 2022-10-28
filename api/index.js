import express from "express"

const app = express()

app.get('/', (req, res) => {
    return res.json("Приложение работает")
})

app.listen(4000, ()=>console.log(`Приложение запущено на localhost:!`))