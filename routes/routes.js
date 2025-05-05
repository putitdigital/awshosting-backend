const express = require('express');
const router = express.Router();
router.get("/", (req, res) =>{
   res.render("index")
})
router.post("/connect", (req, res) =>{
   var firstName = req.body.firstName;
   var lastName = req.body.lastName;
   var email = req.body.email;
   var message = req.body.message;
   res.render("connect")
})


module.exports = router;