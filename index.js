const express =  require("express");
const app = express();

app.get("/",(req, res)=>{
    res.send("Hello Parther");
})

app.listen(3000,()=>{
    console.log("http server is runing on port 3000");
})