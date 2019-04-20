/* eslint-disable no-console */
import express from 'express';
import bodyParser from 'body-parser';
import users from './routes/users';

const app = express();

app.use(express.json());
app.use(bodyParser.json());

app.use(users);

const port = process.env.PORT || 4000;
app.listen(port, () => { console.log(`app is running on ${port}...`); });

export default app;
