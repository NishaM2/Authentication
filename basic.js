const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://nisham2522:Y3cSidKuvsIC1qro@cluster0.mgif8.mongodb.net/")

const User1 = mongoose.model('users', { name: String, email: String, password: String });

app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const existingUser1 = await User1.findOne({ email: username});
    if(existingUser1) {
        return res.status(400).send({ "username already exists" });
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

