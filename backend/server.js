const express = require('express');
const cors = require('cors');
const app = express();
const fs =require('fs')

app.use(cors());
app.use(express.json());

let messages = [];

// Get messages (polling)
app.get('/messages', (req, res) => {
  res.json(messages);
});

// Post a new message
app.post('/messages', (req, res) => {
  const { username, message } = req.body;
  messages.push({ username, message, timestamp: new Date().toISOString() });
  res.status(201).json({ success: true });
});

fs.read


const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
