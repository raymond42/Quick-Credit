/* eslint-disable no-console */
import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users';
import adminRoutes from './routes/admin';
import herokuRoutes from './routes/Heroku';
import welcomeRoute from './routes/welcome';


const app = express();

app.use(express.json());
app.use(bodyParser.json());

app.use('/api/v1/users/', usersRoutes);
app.use('/api/v1/admin/', adminRoutes);

// for heroku deploymennt
app.use('/api/v1/heroku/users/', herokuRoutes);
app.use('/api/v1/heroku/admin/', herokuRoutes);
app.use('/api/v1/welcome', welcomeRoute);

const port = process.env.PORT || 4000;
app.listen(port, () => { console.log(`app is running on ${port}...`); });

export default app;
