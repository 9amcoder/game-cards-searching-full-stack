/* eslint-disable @typescript-eslint/naming-convention */
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './routes/cards';

// Loading environment variables
dotenv.config();

const app = express();
app.use(cors());

const port = process.env['PORT'] || 3001;

// Define a constant for the API endpoint
const API = process.env['API_ENDPOINT'];

if (!API) {
  console.error('API_ENDPOINT is not set');
  process.exit(1);
}

app.use('/cards', router);

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});