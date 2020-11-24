const express = require('express'); 
const sha1 = require("sha1");

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get("/signup/:email", (req, res) => {
  //receive email, form a link, send email with the link
  let email = req.params.email;
  console.log(email)
  res.json({"success": email});
})

app.listen(3000, () => console.log('server started'));
