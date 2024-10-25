const express = require('express');
const app = express();
const {createtodo,updatetodo} = require("./type")
const {todo} = require("./db")
const port = 3000
app.use(express.json());

app.get("/todos", async(req,res)=>{
    let todos = await todo.find({});
    res.json({todos})
    
})

app.post("/todo", async (req,res)=>{
    const createpayload = req.body;
    const parsedpayload = createtodo.safeParse(createpayload)
      if(!parsedpayload.success){
        res.status(411).json({
            msg : "enter valid input"
        })
        return ;

      }
      await todo.create({
        title : createpayload.title,
        description : createpayload.description,
        completed : false

      })
      res.json({
        msg : "todo created"
      })
})

app.put("/rem",async (req,res)=>{
    const id = req.body;
    const parsedid = updatetodo.safeParse(id);
      if(!parsedid.success){
        res.status(411).json({
            msg : "give valid id"
        })
        return;
      }
      await todo.update({_id  : req.body.id},{completed : true})
      res.json({
        msg : "update is done"
      })

})

app.listen(port)