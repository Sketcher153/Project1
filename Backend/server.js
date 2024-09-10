const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://sureshd:suresh%40007@cluster0.qwmqi.mongodb.net/', 
{
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('MongoDB connection error:', error));


const FormData = require('./models/FormData');

app.get('/', (req, res) => {
  res.send('Server is Working')
})

app.post('/submit', async (req, res) => {
  const {name, email, message} = req.body;
  try {
    const formData = new FormData({name, email, message});
    await formData.save();
    res.status(201).json({ message: 'Form data saved successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save form data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
