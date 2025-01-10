const express = require("express");
const cors = require("cors");

const app = express();
// const options = {origin:"*"}
const options = { origin:(origin,callback) => { callback(null,true) } }

app.use(cors(options));
app.use(express.json)

const data = ["hello",123,{"key":"value"}]
app.get('/',(req,res)=>{
    res.send(data)
})
let studentData = [{
    name:"arshathbashil",
    age:19,
    rollNumber:233047
}];
app.post('/',(req,res)=> {
    studentData.push(req.body);
    console.log(req.body)
    res.send("done")
})

app.listen(3333,()=>{
    console.log("started hhg")
})