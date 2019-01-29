var mongoose =require('mongoose')
var {db}=require('./../../credentials')
mongoose.Promise=global.Promise

mongoose.connect(db,{ useNewUrlParser: true })

module.exports = {
    mongoose :mongoose
};
