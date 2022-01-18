import app from './app';
import dotenv from 'dotenv';
import mongoose from 'mongoose'

dotenv.config();

const port = normalizePort(process.env.PORT || '3001');

mongoose.connect(process.env.CONNECTION_STRING);

app.listen(port, () => {
  console.log(`Escutando na porta ${port}`);
});

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port) ){
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}
