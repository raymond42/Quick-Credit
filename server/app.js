import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(express.json());
app.use(bodyParser.json());

const port = process.env.PORT || 4000;
app.listen( port, () => {console.log(`app is running on ${port}...`)});

export default app;