import { Router } from 'express';

import UserController from '../controllers/user.controller';

const userRouter: Router = Router();

userRouter.get('/', UserController.allUsers);
userRouter.get('/:email', UserController.getUser);
userRouter.post('/', UserController.postUser);
userRouter.put('/:email', UserController.updateUser);
userRouter.delete('/:email', UserController.deleteUser);

export default userRouter;
