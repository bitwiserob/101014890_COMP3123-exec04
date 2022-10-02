const express = require("express")

const app = express()

const SERVER_PORT = 8088


app.get("/hello", (req, res) => {
    res.send("Hello Express JS")
})

app.post("/", (req, res)=>{
    res.send("<h1> post Welcome to express server")

})



app.post("/user/:firstname/:lastname", (req,res)=> {
    const firstname = req.params.firstname
    const lastname = req.params.lastname

    res.send(JSON.stringify({
        firstname,
        lastname
    }))
})



app.get("/user", (req,res)=> {
    const firstname = req.query.firstname
    const lastname = req.query.lastname
    console.log(req.query)

    res.send(JSON.stringify({
        firstname,
        lastname
    }))
})



app.listen(SERVER_PORT, ()=>{
    console.log(`server runnin at ${SERVER_PORT}`)
})