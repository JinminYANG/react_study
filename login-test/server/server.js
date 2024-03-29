const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const app = express();

app.use(express.json());
app.use(
    cors({
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"],
        credentials: true,
    })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
    session({
        key: "userId",
        secret: "subscribe",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 60 * 60 * 24 * 60,
        },
    })
);

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "965vhqud!",
    database: "loginsystem",
});

db.connect();

db.query('select * from users', function (error, results, fields) {
    if (error){
        console.log(error);
    }
});


app.post("/register", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
            console.log(err);
        }

        db.query(
            "INSERT INTO users (username, password) VALUES (?,?)",
            [username, hash],
            function (err, rows, fields) {
                if (err) {
                    console.log("DB저장 실패");
                    return [res.status(400).send()];
                } else {
                    console.log("DB저장 성공");
                    return res.status(200).send();
                }
            }
        )
    });

});

app.get("/login", (req, res) => {
    if (req.session.user) {
        res.send({ loggedIn: true, user: req.session.user });
    } else {
        res.send({ loggedIn: false });
    }
});

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "SELECT * FROM users WHERE username = ?;",
        username,
        (err, result) => {
            if (err) {
                res.send({err: err});
            }

            if (result.length > 0) {
                bcrypt.compare(password, result[0].password, (error, response) => {
                    if (response) {
                        console.log(response);
                        req.session.user = result;
                        console.log(req.session.user);
                        res.send(result);
                    } else {
                        res.send({message: "Wrong username/password combination"});
                    }
                });
            } else {
                res.send({message: "User doesn't exist"});
            }
        }
    );
});


app.get('/api/host', (req, res) => {
    res.send({ host : 'Jinmin' });
});

app.listen(4000, () => {
    console.log("running server!");
});
