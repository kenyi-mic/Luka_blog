import express from "express";

const app = express();

const port = process.env.PORT || 8800;

app.use("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log("listening on port:", port);
});
