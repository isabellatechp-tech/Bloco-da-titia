const router = require("express").Router();

router.get("/", (req,res)=>{
const eventos = ["Abertura do Bloco", "Show Principal", "Encerramento", "After Party", "Bloco Infantil"];
const fotos = [];
for(let i = 0; i < 20; i++) {
  fotos.push({
    id: i + 1,
    evento: eventos[Math.floor(Math.random() * eventos.length)],
    foto: `https://picsum.photos/400/400?random=${i + 1}`
  });
}
res.json(fotos);
});

module.exports = router;

