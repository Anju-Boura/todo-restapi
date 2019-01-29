 const  express =require('express')
 const body_parser = require('body-parser')
 var {mongoose} =require('./db/mongoose')
 var {todo} =require('./model/todo')
var {user}=require('./model/user')
var {user}=require('./model/user')
var {ObjectID} = require('mongodb')

const app = express()
app.use(body_parser.json())
const port = process.env.PORT || 3030

app.post('/todos', (req,res)=>{
   // console.log(req.body)
   var newtodo =new todo({
       text : req.body.text
   });
   newtodo.save().then((result)=>{
      res.send(result)
   },(e) =>{
     res.status(400).send(e);
   }
   )
    
});

app.get('/todos',(req,res) =>{
    todo.find().then( (result) =>{
    res.send(result)
    },(error) =>{
        res.status(400).send((error))
    })
})
app.get('/todos/:id',(req,res) =>{
    var id = req.params.id
    if(!ObjectID.isValid(id)){
        return res.status(400).send('id is invalid')
    }
    
    console.log(id)
    todo.findById(id).then((docs) =>{
        if(!docs){
          return   res.status(400).send('oops !!!! not any document found with this id')
        }
        console.log(docs.text)

       res.send({docs})
    },(error) =>{
        res.status(400).send(error);
        
    })
});


app.listen(port ,() =>{
console.log('this app is running on port ${port}' )
})
 