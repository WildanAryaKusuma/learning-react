import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/auth/login", async (req, res) => {
  try {
    const response = await axios.post(
      "https://dummyjson.com/auth/login",
      req.body,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    res.json(response.data);
  } catch (err) {
    res
      .status(err.response?.status || 500)
      .json(err.response?.data || { message: "Server Error" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
