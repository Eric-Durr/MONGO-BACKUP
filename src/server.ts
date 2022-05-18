import { connect } from 'mongoose';

import app from './app';

// SERVER DATABASE
const mongoUri = process.env.MAIN_DB_URL || 'mongodb://localhost:27017';

connect(mongoUri).then(() => {
  console.log('Database connection sucessfull');
}).catch((err: Error) => {
  console.error(err.message);
});

// SERVER PORT
const port: number = Number(process.env.PORT) || 5000;

export default app.listen(port, () => {
  console.log(`Server up and connected to port ${port}`);
});
