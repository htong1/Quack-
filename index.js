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
  console.log(email);
  let password 
  res.json({"success": email});
})

const cors = require('cors');
// set up port
const PORT = process.env.PORT || 3000;

app.use(cors());
// add routes
const router = require('./routes/router.js');
app.use('/api', router);
// run server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));