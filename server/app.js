const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const responseSchema = require("./model/responseSchema");

const app = express();
port = 5000;
app.use(bodyParser.json());
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
    next();
});
app.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
});

mongoose
// .connect("mongodb+srv://yash:jOhfBi3986fmdSAM@cluster0.uqlowxi.mongodb.net/ExpenseTracker")
    .connect("mongodb://0.0.0.0:27017/Futura")
    .then(() => {
        console.log("Connected to mongo");
    })
    .catch((err) => {
        console.log("error" + err);
    });

app.post("/response", async(req, res) => {
    const { name, email, address } = req.body;
    if (!name || !email || !address) {
        return res.json({ error: "plz fill it" });
    }
    try {
        const userExist = await responseSchema.findOne({ email: email });


        const user1 = new responseSchema({ name, email, address });

        await user1.save();

        res.status(201).json({ message: "successfully" });
    } catch (err) {
        console.log(err);
    }
});

app.listen(port, () => {
    console.log(`server is running at ${port}`);
});