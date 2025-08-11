const mongoose = require('mongoose'); 

mongoose.connect('mongodb+srv://chinmaymk13:jaisadguru@cluster0.p10bjgn.mongodb.net/postApp?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
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