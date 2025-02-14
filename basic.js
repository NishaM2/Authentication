require('dotenv').config();

const mongoose = require("mongoose");

const mongoURI = process.env.MANGO_URI;
mongoose.connect(mongoURI)

const User1 = mongoose.model('users', { name: String, email: String, password: String });

app.post("/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const existingUser1 = await User1.findOne({ email: username});
    if(existingUser1) {
        return res.status(400).send({ "error": "username already exists" });
    }

    const user = new User1({
        name: "nisham",
        email: "nisham@gmail.com",
        password: "123"
    });

    user.save();
    res.json({
        "msg": "user created successfully"
    })
})

