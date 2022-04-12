import express from "express";
import notesRoutes from "./routes/notes";
import statsRoutes from "./routes/stats";

const app = express();
app.use(express.json());

app.get("/", function (req, res) {
  res.send("Task#3 REST Endpoints");
});

app.use("/notes", notesRoutes);
app.use("/stats", statsRoutes);

async function startApp() {
  try {
    app.listen(3000, () => console.log("SERVER STARTED ON PORT 3000"));
  } catch (e) {
    console.log(e);
  }
}

startApp();
