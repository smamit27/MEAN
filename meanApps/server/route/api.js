const express = require('express');
const router  =  express.Router();

router.get('/',(req,res)=>{
    res.send('from Api Ends');
})

module.exports = router;