const express = require("express");
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorHandler");
const app = express();

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoute"));
app.use(errorHandler);

const port = process.env.PORT 

app.listen( port, () => {
    console.log(`Server is running on ${port}`)
})