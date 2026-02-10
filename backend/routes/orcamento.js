const router = require("express").Router();
const axios = require("axios");

router.post("/", async (req,res)=>{
console.log("Orçamento recebido:", req.body);

try{
await axios.post("https://webhook.site/teste", req.body);
}catch(e){
console.log("Webhook mockado");
}

res.json({ok:true});
});

module.exports = router;

