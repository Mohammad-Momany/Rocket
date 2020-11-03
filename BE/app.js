const express = require('express');
const router = require('./routes');
const cors = require('cors');

require('dotenv').config();
const app = express();
 app.use(cors());

app.use(express.json());
app.use(router);

const PORT = 5000 || process.env.PORT;  
app.listen(PORT, () => console.log(`AUTH at http://localhost:${PORT}`));