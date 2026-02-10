const router = require("express").Router();

router.get("/", (req,res)=>{
res.json([
{ id:1, nome:"Garrafinha de Água", preco:(Math.random()*10+5).toFixed(2), img:"https://picsum.photos/200?1"},
{ id:2, nome:"Abadá do Bloco", preco:(Math.random()*50+30).toFixed(2), img:"https://picsum.photos/200?2"},
{ id:3, nome:"Chaveiro do Bloco", preco:(Math.random()*20+10).toFixed(2), img:"https://picsum.photos/200?3"}
]);
});

module.exports = router;

