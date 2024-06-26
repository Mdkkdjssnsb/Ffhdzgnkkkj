const express = require('express');
const axios = require('axios');

const app = express();

app.get("openai/gpt", async (req, res) => {
  try {
    const { prompt } = req.query;

    const response = await axios.get(`https://hercai.onrender.com/v3/hercai?question=${prompt}`);
    const answer = response.data.reply;

    res.json({ answer: answer });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
