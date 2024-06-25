const express = require("express");
const userRoutes = require("./routes/userRoutes");
const authMiddleware = require("./middlewares/authMiddleware");
const authRoutes = require("./routes/authRoutes");
const choresRoutes = require("./routes/choresRoutes");
const app = express();



app.use(express.json());

app.get("/", (req, resp) => {
  resp.send("Hello World")
})

// app.use('/auth', authRoutes)

app.use("/users", userRoutes);

app.use('/chores', choresRoutes)

app.listen(8080, () => {
  console.log("estou rodando na porta 8080!");
});




