import Express from 'express';
import dotenv from 'dotenv';
dotenv.config()

const app = Express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

const port = process.env.PORT || 8080;

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});





