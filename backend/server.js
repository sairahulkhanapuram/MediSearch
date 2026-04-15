const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const topicRoutes = require('./routes/topics');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api/topics', topicRoutes);

// Serve static files from the frontend directory
app.use(express.static('../frontend'));

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: '../frontend' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
