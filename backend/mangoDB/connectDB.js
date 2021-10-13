const mongoose = require('mongoose');

const connectDB = async (URL) =>{

   return mongoose.connect(URL,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true
})
}

module.exports = connectDB; 



