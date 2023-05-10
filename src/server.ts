import express from "express"
import DBCONNECT from "./config/dbconnect"
import handleErrrors from "./middlewares/errorhandler"


const app = express()
const PORT = process.env.PORT || 5000

//error middleware
app.use(handleErrrors)

// use routes


app.listen(PORT, async () => {
    await DBCONNECT()
    console.log(`Server connected on port ${PORT}`)
})