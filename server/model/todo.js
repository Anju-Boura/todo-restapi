var mongoose =require('mongoose')
var todo =mongoose.model('todo',{
    text :{
        type :String,
        required : true,
        minlength :1,
        trim :true
    }, 
    completed :{
        type :Boolean,
        default : false
    } ,
    completedat :{
      type :Number,
      default :123
    }
 })
 // var newtodo = new todo({text : 'cooking',})
 
//   newtodo.save().then( (result) =>{
//       console.log('saved :',result)
//   },(error) =>{
//       console.log(error)
//   })
 
  module.exports ={
      todo
  }
 