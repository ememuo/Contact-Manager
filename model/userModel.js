const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
   username:{
       type: String,
       required: (true, "Please add the username")
   },
   password:{
       type: String,
       required: (true, "Please add the user password")
   },
   email:{
       type: String,
       required: (true, "Please add the email address"),
       unique: [true, "Email address in use"]
   }
}, {
   timestamps: true
})

module.exports = mongoose.model("User", userSchema)