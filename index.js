
const express = require('express')
const app = express()

PORT = process.env.PORT || 8000

app.get("/", (req, res) => {
    res.json({
        message: "Welcome to Crud 1.000"
    })
})


app.use("/api/todos", require("./routes/TodoRoutes"))
app.listen(PORT, () => console.log(`server is running at : ${PORT}`))