const asyncHandler = require("express-async-handler")

//@desc Get Contacts
//@route GET /api/contacts
//@access public

const getContacts = asyncHandler(async(req, res) => {
    res.status(200).json({message: "Get all contacts"})
})

//@desc Get Contact
//@route GET /api/contacts/:id
//@access public

const getContact = asyncHandler(async(req, res) => {
    res.status(200).json({message: `Get contact for ${req.params.id}`})
})

//@desc Create new Contact
//@route GET /api/contacts
//@access public

const createContact = asyncHandler(async(req, res) => {
    console.log("The request body is : " , req.body)
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory")
    }
    res.status(201).json({message: "Create contact"})
})
//@desc Update Contact
//@route GET /api/contacts/:id
//@access public

const updateContact = asyncHandler(async(req, res) => {
    res.status(200).json({message: `Update contact for ${req.params.id}`})
})

//@desc Delete Contact
//@route GET /api/contacts/:id
//@access public

const deleteContact = asyncHandler(async(req, res) => {
    res.status(200).json({message: `Delete contact for ${req.params.id}`})
})

module.exports = {getContacts, getContact, createContact, updateContact, deleteContact}

