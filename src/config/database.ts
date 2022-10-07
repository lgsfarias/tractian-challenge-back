import mongoose from 'mongoose';
import chalk from 'chalk';

const mongoURI = String(process.env.MONGO_URI);

mongoose.connect(mongoURI);

const db = mongoose.connection;

db.on(
  'error',
  console.error.bind(console, chalk.bold.red('MongoDB connection error:')),
);

db.once('open', () => {
  console.log(chalk.bold.blue('Connected to MongoDB'));
});

export default db;
