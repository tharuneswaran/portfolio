
const express =require('express')

const cors = require("cors")

const app=express()
app.use(cors())
const obj = 
[
    {
        id: 101,
        title: "Complete Assessment",
        details: { priority: "High", isCompleted: false }
    },
    {
        id: 103,
        title: "Complete projects",
        details: { priority: "High", isCompleted: true}
    }
]


app.listen(5040,()=>{
  console.log("server is on 5040")
})

app.get("/",(req,res)=>{
  res.send(obj)
})