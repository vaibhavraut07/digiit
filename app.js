const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const simRoutes = require('./src/router/simRouter'); 
const config = require('./config');
const path = require('path'); 

const app = express();


app.use(bodyParser.json());


app.use(express.static('public'));


app.use('/api', simRoutes);


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// MongoDB
mongoose.connect(config.mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.error(err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
