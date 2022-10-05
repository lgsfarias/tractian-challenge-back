import './src/config/setup';
import './src/config/database';
import chalk from 'chalk';
import app from './src/app';

const port = process.env.PORT || '5000';

app.listen(port, () => {
  console.log(chalk.bold.green(`Server running on http://localhost:${port}`));
});
