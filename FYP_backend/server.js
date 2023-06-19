const express = require('express');
const cors = require('cors');
const errorHandler = require('./middleware/errorHandler');
const connectDB = require('./config/dbConnect');
const dotenv = require('dotenv').config();
connectDB();
const app = express();
app.use(cors());
const port = process.env.PORT || 5000;
app.use(express.json());
app.use('/user', require('./routes/userRoute'));
app.use(errorHandler);

app.listen(port, () => {
    console.log(`server running in post ${port} `);
});
