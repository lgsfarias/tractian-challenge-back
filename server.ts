import './src/config/setup';
import './src/config/database';
import express, { json } from 'express';
import cors from 'cors';
import chalk from 'chalk';

const app = express();
app.use(json());
app.use(cors());
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(chalk.bold.green(`Server running on http://localhost:${port}`));
});
