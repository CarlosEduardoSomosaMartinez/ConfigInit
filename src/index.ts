import express from 'express';
import indexRoute from '@routes/index.route';
const app = express();

app.get('/', (req, res, next) => {
  res.json({ message: 'hola mundo' });
});
app.use('/', indexRoute);

app.listen(3000, () => {
  console.log('el servidor esta correindo en ep port 300');
});
