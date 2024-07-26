const express = require('express');
const cors = require('cors');
const backupRoutes = require('./routes/backupRoutes');

const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(cors());

app.use('/api', backupRoutes);

module.exports = app;
