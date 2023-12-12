import express from 'express';

const app = express();
const port = 3000;

var cors = require('cors');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

var corsOptions = {
  "origin": "http://localhost:4200",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}
app.use(cors());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});