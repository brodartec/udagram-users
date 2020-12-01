import {Router, Request, Response} from 'express';
import { v4 as uuid } from 'uuid';
import {User} from '../models/User';
import {AuthRouter} from './auth.router';

const router: Router = Router();

router.use('/auth', AuthRouter);

router.get('/');

router.get('/:id', async (req: Request, res: Response) => {
  const {id} = req.params;
  const reqId = uuid();
  console.log(new Date().toLocaleString() + `: ${reqId} - REQUEST STARTED: Get user with id ${id}`);
  const item = await User.findByPk(id);
  console.log(new Date().toLocaleString() + `: ${reqId} - REQUEST FINISHED: Get user with id ${id}`);
  res.send(item);
});

export const UserRouter: Router = router;
