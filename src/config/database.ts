import { MongoClient } from 'mongodb';
import chalk from 'chalk';

const mongoURI = process.env.MONGO_URI || '';
const mongoClient = new MongoClient(mongoURI);

(async () => {
  try {
    await mongoClient.connect();
    console.log(chalk.bold.blue('Connected to MongoDB'));
  } catch (err) {
    console.log(chalk.bold.red(`Error connecting to MongoDB ${err}`));
  }
})();

const db = mongoClient.db(process.env.MONGO_DB || '');
export default db;
