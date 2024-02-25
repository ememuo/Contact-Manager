 const mongoose = require('mongoose');

 const contactSchema = mongoose.Schema({
    user_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User"
    },
    name:{
        type: String,
        required: (true, "Please add the contact name")
    },
    phone:{
        type: Number,
        required: (true, "Please add the contact phone number")
    },
    email:{
        type: String,
        required: (true, "Please add the contact email address")
    }
 }, {
    timestamps: true
 })

 module.exports = mongoose.model("Contacts", contactSchema)