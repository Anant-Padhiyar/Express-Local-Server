const express = require('express');
const { MongoClient } = require("mongodb");

const app = express();
const PORT = 3001;

const uri = "mongodb+srv://"+'snowpoint100'+":"+'Z8o1BYVmWknOCELx'+"@cluster0.jxhbvhf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a ProductDB Database & ProductsList Collection in Atlas

// Insert Object with Modal ,Price key value Pairs manually & try this API

// ViewWallList
app.get('/', async (req, res) => {
    try {

let result = ['1','2','3','4','5']

return res.json(result);

} catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

app.listen(PORT, () => console.log(`Server Started At PORT :${PORT}`));
module.exports = app;
