import express, { Request, Response, NextFunction } from 'express';
import signup from '@/handlers/auth/signup/post';

const router = express.Router();

router.get('/', async (req, res) => {
  res.send('Hello World!');
});

router.post('/auth/signup', signup);

/**
 * 앞선 미들웨어에서 처리되지 않은 오류는 이 미들웨어에서 처리합니다.
 */
router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).send('서버 문제로 오류가 발생했어요.');
});

export default router;
