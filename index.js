import express from "express";

const app = express();
const port = 9000 || process.env.PORT;
app.use("/", (req, res) => {
  res.json({ message: "Hello From Express App" });
});

app.get("/get-user", (req, res) => {
  res.json({ 
    user: [
      {
        "name":'Rajiv',
        "phone": 9729188851
      },
      {
        "name":'Sanjiv',
        "phone": 9729188851
      },
      {
        "name":'Rajiv',
        "phone": 9729188851
      }
    ],
    message: "Hello From Express App"
  });
});

app.get("/get-userss", (req, res) => {
  res.json({ 
    user: [
      {
        "name":'Rajiv',
        "phone": 9729188851
      },
      {
        "name":'Sanjiv',
        "phone": 9729188851
      },
      {
        "name":'Rajiv',
        "phone": 9729188851
      }
    ],
    message: "Hello From Express App"
  });
});
app.listen(9000, () => {
  console.log(`Starting Server on Port ${port}`);
});
