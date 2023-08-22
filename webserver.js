const express = require('express');
const app = express();
const pgp = require("pg-promise")();

const db = pgp('postgres://postgres:1234@localhost:5432/accountant');

app.listen(3000, () => {
    console.log("server is running...")
})



app.get("/helloworld", (req, res) => {
    db.any("select * from ac_test")
    .then((data1) => {
        console.log(data1);
        return res.status(200).json(data1);
    })
    .catch((error1) => {
        console.log(error1);
        return res.status(400)
    })
})