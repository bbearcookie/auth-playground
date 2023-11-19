import express, { Request, Response, NextFunction } from 'express';
import check from '@/handlers/auth/check/get';
import signin from '@/handlers/auth/signin/post';
import signup from '@/handlers/auth/signup/post';
import signout from '@/handlers/auth/signout/get';

const router = express.Router();

router.get('/', async (req, res) => {
  res.send('Hello World!!');
});

router.get('/auth/check', check);
router.post('/auth/signin', signin);
router.post('/auth/signup', signup);
router.get('/auth/signout', signout);

/**
 * 앞선 미들웨어에서 처리되지 않은 오류는 이 미들웨어에서 처리합니다.
 */
router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).send('서버 문제로 오류가 발생했어요.');
});

export default router;
