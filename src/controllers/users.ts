import { Request, Response } from 'express';

export const getUsers = async (req: Request, res: Response) => {
  return res.status(400).json({ msg: 'Get Users' });
};

export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  return res.status(400).json({ msg: 'Get User', id });
};

export const createUser = async (req: Request, res: Response) => {
  return res.status(400).json({ msg: 'Create user' });
};

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  return res.status(400).json({ msg: 'Update User', id });
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  return res.status(400).json({ msg: 'Delete user', id });
};
