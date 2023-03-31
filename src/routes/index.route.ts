import { Router } from 'express';

const router = Router();

router.get('/api', (req, res, next) => {
  res.json({ message: 'welcome to my app' });
});

export default router;
