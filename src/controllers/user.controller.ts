import { Request, Response } from 'express';
import User from '../models/user.model'

export default {
  // allUsers: (_: Request, res: Response) => {},
  // getUser: (req: Request, res: Response) => {},
  postUser: (req: Request, res: Response) => new Promise((resolve, reject) => {
    const user = new User({
      name: req.body.name,
      firstSurname: req.body.firstSurname,
      secondSurname: req.body.secondSurname,
      age: req.body.age,
      email: req.body.email,
      password: req.body.password,
    });

    user.save()
      .then(() => {
        resolve(res.status(201).send(`User ${req.body.name} added to database`));
      })
      .catch((error) => {
        reject(res.status(400).send(error.message));
      });
  }),
  // updateUser: (req: Request, res: Response) => {},
  // deleteUser: (req: Request, res: Response) => {},
};
