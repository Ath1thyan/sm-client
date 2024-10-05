const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Specify the folder to save files
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Append timestamp to filename
  }
});

const upload = multer({ storage });

mongoose.connect('mongodb://localhost:27017/yourdbname');

const contactSchema = new mongoose.Schema({
  fullName: String,
  institutionName: String,
  email: String,
  phone: String,
  service: String,
  message: String,
  file: String, // We will store the file path or URL
});

const Contact = mongoose.model('Contact', contactSchema);

app.post('/api/contact', upload.single('file'), async (req, res) => {
  const { fullName, institutionName, email, phone, service, message } = req.body;
  const filePath = req.file ? req.file.filename : null; // Store only the filename

  const newContact = new Contact({
    fullName,
    institutionName,
    email,
    phone,
    service,
    message,
    file: filePath // Store file path in the database
  });

  try {
    await newContact.save();
    res.status(200).send('Contact saved successfully');
  } catch (error) {
    res.status(400).send(error);
  }
});


app.get('/api/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).send('Error fetching contacts');
  }
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
