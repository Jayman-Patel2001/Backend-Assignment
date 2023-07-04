const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

const validUsernameRegex = /^[a-zA-Z0-9]{6,12}$/;
const validPasswordRegex = /^[\w!@#$%^&*()\-+=<>?]+$/;

app.post("/api/login", (req, res) => {
  const { userName, password } = req.body;

  //TODO: Validate username
  if (!validUsernameRegex.test(userName)) {
    return res.status(400).json({
      error:
        "Invalid username. It should be alphanumeric and between 6-12 characters.",
    });
  }

  //TODO: Validate password
  if (!validPasswordRegex.test(password) || password.length < 6) {
    return res.status(400).json({
      error:
        "Invalid password. It should be at least 6 characters long and can contain letters, numbers, and special characters.",
    });
  }

  //TODO: Login the user directly
  return res.status(200).json({
    message: "Login successful",
  });
});

app.listen(8000, () => {
  console.log("Server started on port 8000");
});
