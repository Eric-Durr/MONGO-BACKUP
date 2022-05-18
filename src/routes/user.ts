import { Router } from 'express';

import UserController from '../controllers/user.controller';

const execmdRouter: Router = Router();

// execmdRouter.get('/', UserController.allUsers);
// execmdRouter.get('/', UserController.getUser);
execmdRouter.post('/', UserController.postUser);
// execmdRouter.put('/', UserController.updateUser);
// execmdRouter.delete('/', UserController.deleteUser);

export default execmdRouter;
