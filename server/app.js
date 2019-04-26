/* eslint-disable no-console */
import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users';
import adminRoutes from './routes/admin';

const app = express();

app.use(express.json());
app.use(bodyParser.json());

// app.use(users);
app.use('/api/v1/users/', usersRoutes);
app.use('/api/v1/admin/', adminRoutes);

const port = process.env.PORT || 4000;
app.listen(port, () => { console.log(`app is running on ${port}...`); });

export default app;
