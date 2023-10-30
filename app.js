const express = require("express")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())


app.get("/test", (req, res) => {
    console.log('asdasd')

    res.send({message: "ok"})
})


app.listen(2511)


