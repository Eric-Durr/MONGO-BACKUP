import { Request, Response } from 'express';
import User from '../models/user.model';

export default {
  allUsers: (_: Request, res: Response) => {
    User.find()
      .then((data) => {
        res.status(201).send(data);
      })
      .catch((error) => {
        res.status(400).send(error.message);
      });
  },
  getUser: (req: Request, res: Response) => {
    User.find({ email: req.params.email.toString() })
      .then((data: Object[]) => {
        if (data.length === 0) {
          res.status(400).send(`User with email ${req.params.email} not found`);
        }
        res.status(201).send(data);
      })
      .catch((error) => {
        res.status(400).send(error.message);
      });
  },
  postUser: (req: Request, res: Response) => {
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
        res.status(201).send(`User ${req.body.name} added to database`);
      })
      .catch((error) => {
        res.status(400).send(error.message);
      });
  },
  updateUser: (req: Request, res: Response) => {
    User.findOneAndUpdate({ email: req.params.email.toString() }, req.body)
      .then(() => {
        res.status(200).send(`User with email ${req.params.email} updated`);
      })
      .catch((error) => {
        res.status(400).send(error.message);
      });
  },
  deleteUser: (req: Request, res: Response) => {
    User.find({ email: req.params.email.toString() })
      .then((data: Object[]) => {
        if (data.length === 0) {
          res.status(400).send(`User with email ${req.params.email} not found`);
        }
        User.deleteOne({ email: req.params.email.toString() })
          .then(() => {
            res.status(200).send(`User with email ${req.params.email} deleted`);
          })
          .catch((error) => {
            res.status(400).send(error.message);
          });
      })
      .catch((error) => {
        res.status(400).send(error.message);
      });
  },
};
