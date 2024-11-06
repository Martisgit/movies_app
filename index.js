import express from "express";
import cors from "cors";
import movieRouter from "./src/route/movies.js";
const app = express();

app.use(cors());

app.use(express.json());

app.use(movieRouter);

app.use((req, res) => {
  res.status(404).json({ response: "your endpoint does not exit" });
});

const port = 3000;

app.listen(port, () => {
  console.log(`App was started on port ${port}`);
});
