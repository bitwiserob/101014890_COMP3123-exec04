const express = require("express")

const app = express()

const SERVER_PORT = 8088


app.get("/", (req, res) => {
    res.send("<h1> GET Welcome to express server")
})

app.post("/", (req, res)=>{
    res.send("<h1> post Welcome to express server")

})

app.post("/name", (req, res) => {
    res.send("<h1>Robert kaczur</h1>")
})

app.get("/student", (req, res) => {
    var student = {
        id: 1,
        first_name: "Robert",
        last_name: "Kaczur",
        result:"Fail"
    }
    res.send(JSON.stringify(student))
})

app.get("/person/:pid/:firstname", (req,res)=> {
    const person_id = req.params.pid
    const first_name = req.params.firstname

    res.send({
        person_id, 
        first_name
    })
})



app.get("/person", (req,res)=> {
    const person_id = req.query.pid
    const first_name = req.query.name
    console.log(req.query)
    res.send({
        person_id, 
        first_name
    })
})



app.listen(SERVER_PORT, ()=>{
    console.log(`server runnin at ${SERVER_PORT}`)
})