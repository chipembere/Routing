const express = require('express'); //$ npm install express -save  
const app = express();
const bodyParser = require('body-parser')
// const urlencodedParser = bodyParser.urlencoded({ extended: true })
const port = process.env.PORT || 5000;
app.use(express.static('public'));
app.use(express.static('views'));
app.engine('html', require('ejs').renderFile); //$ npm install ejs -save   
app.use(express.urlencoded());
// app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.render("index.html")
});
// declare variable to be populated by (req.body) from post.
let zita;
// Post form data and render second page.
app.post("/show", function (req, res) {
    // Add username to variable
    zita = req.body.username
    res.render("second.html");
});
// Use a get route to access information from the above post route.
app.get("/zi", (req, res) => {
    // Send data from post route.
    res.send(zita);
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`));