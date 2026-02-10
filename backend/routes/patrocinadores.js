const router = require("express").Router();

router.post("/", (req,res)=>{
console.log("Novo patrocinador:", req.body);
res.json({ok:true});
});

module.exports = router;

