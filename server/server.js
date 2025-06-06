const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORTNUMBER;
const authRouter = require('./router/auth-router')
const contactRouter = require('./router/contact-router')
app.use(express.json());
const connectDB = require('./utils/db');
const errorMiddlewares = require('./middlewares/error-middlewares');


app.use('/api/auth', authRouter);
app.use('/api/form', contactRouter)

app.use(errorMiddlewares)

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`server is running this port ${port}`);
    });
})
