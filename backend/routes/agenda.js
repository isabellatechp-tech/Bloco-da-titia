const router = require("express").Router();

router.get("/", (req,res)=>{
res.json([
{ data:"2026-02-13", evento:"Abertura do Bloco", local:"Praça Central"},
{ data:"2026-02-14", evento:"Show Principal", local:"Palco Principal"},
{ data:"2026-02-15", evento:"Encerramento", local:"Praça Central"},
{ data:"2026-02-16", evento:"After Party", local:"Clube Noturno"},
{ data:"2026-02-20", evento:"Bloco Infantil", local:"Parque da Cidade"}
]);
});

module.exports = router;

