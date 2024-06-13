import Express from 'express';
import dotenv from 'dotenv';
dotenv.config()

const app = Express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

const PORT = process.env.PORT || 8080;

console.log('PORT', PORT);

app.listen(PORT, () => {
  console.log('Server is running on port 3000');
});





