const mongoose = require('mongoose'); 
const connStr = require('./db');


mongoose.connect(connStr).then(()=>{
    console.log('Db connected');
}).catch((err)=>{
    console.error(err); 
}); 


const userSchema = mongoose.Schema({
    username : String, 
    name : String ,
    age : Number ,
    email : String ,
    password : String ,
    posts : [
        {
            type : mongoose.Schema.Types.ObjectId ,
            ref : 'post' 
        }
    ]
}) 


module.exports = mongoose.model('user',userSchema); 