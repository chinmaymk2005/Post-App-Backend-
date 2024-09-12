const mongoose = require('mongoose'); 

mongoose.connect('mongodb+srv://cmkhairnar05:jaisadguru@cluster0.zdargvi.mongodb.net/miniproject?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
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