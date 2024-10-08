import express from "express";
import apiRoutes from "./api.js";
import cors from "cors";

const app = express();
const port = 3000;
app.use(cors({
  origin: '*'
}));

app.get("/", (req, res) => {
  res.send("Welcome to the ARTUR Geodata API");
});

app.use("/api", apiRoutes);

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${port}`);
});
