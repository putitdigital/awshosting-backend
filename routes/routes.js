const express = require('express');
const router = express.Router();
router.get("/", (req, res) =>{
   res.render("index")
})
router.post("/connect", (req, res) =>{
   res.render("connect")
})


module.exports = router;