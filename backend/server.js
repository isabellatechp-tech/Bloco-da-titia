const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");

const loja = require("./routes/loja");
const agenda = require("./routes/agenda");
const fotos = require("./routes/fotos");
const orcamento = require("./routes/orcamento");
const patrocinadores = require("./routes/patrocinadores");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/loja", loja);
app.use("/api/agenda", agenda);
app.use("/api/fotos", fotos);
app.use("/api/orcamento", orcamento);
app.use("/api/patrocinadores", patrocinadores);

const swaggerDoc = {
  openapi: "3.0.0",
  info: { title: "API Bloco Carnaval", version: "1.0.0" }
};

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.listen(3001, () => console.log("Backend rodando porta 3001"));

