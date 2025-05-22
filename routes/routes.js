const express = require('express');
const router = express.Router();
router.get("/", (req, res) =>{
   res.render("index")
})
router.get("/privacy-policy", (req, res) =>{
   res.render("privacy-policy")
})
router.post("/connect", (req, res) =>{
   res.render("connect")
})
router.post("/connect", (req, res) => {

   users.firstName = req.body.firstName;
   users.lastName = req.body.lastName;
   users.email = req.body.email;
   users.message = req.body.message;

   console.log(users)
   res.redirect(`/`)
 })
 const users = { firstName: "", lastName: "",email:"",message:""}

module.exports = router;