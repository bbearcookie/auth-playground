import 'dotenv/config';
import app from '@/configs/express';
import router from '@/routes';
import '@/configs/mongoose';

app.use('/', router);

app.listen(5010, () => {
  console.log('Server running on port 5010');
});
