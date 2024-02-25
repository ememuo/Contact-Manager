const asyncHandler = require("express-async-handler");
const Contact = require("../model/contactModel")

//@desc Get Contacts
//@route GET /api/contacts
//@access public

const getContacts = asyncHandler(async(req, res) => {
    const contacts = await Contact.find({user_id: req.user.id})
    res.status(200).json(contacts)
})

//@desc Get Contact
//@route GET /api/contacts/:id
//@access public

const getContact = asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("Contact not found")
    }
    res.status(200).json(contact)
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
    const contact = await Contact.create({
        name,
        email, 
        phone,
        user_id: req.user.id
    })
    res.status(201).json(contact)
})
//@desc Update Contact
//@route GET /api/contacts/:id
//@access public

const updateContact = asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("Contact not found")
    }
    if(contact.user_id.toString() !== req.user.id){
        res.status(403)
        throw new Error("No permission to update this contact")
    }
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    )
    res.status(200).json(updatedContact)
})

//@desc Delete Contact
//@route GET /api/contacts/:id
//@access public

const deleteContact = asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("Contact not found")
    }
    if(contact.user_id.toString() !== req.user.id){
        res.status(403)
        throw new Error("No permission to delete this contact")
    }
    await Contact.deleteOne({_id: req.params.id });
    res.status(200).json(contact)
})

module.exports = {getContacts, getContact, createContact, updateContact, deleteContact}

