import * as userRepository from '../repositories/users.repository';

import { Request, Response } from 'express';


export const getAllUsers = async (_req: Request, res: Response) => {
    try {
        const users = await userRepository.getUsers();
        res.status(200).json(users);
    } catch (error:any) {
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
}

export const createUser = async (req:Request, res:Response) => {
    const userData = req.body;

  try {

    const newUser = await userRepository.insertUser(userData);
    res.status(201).json({message: 'User created successfully', user: newUser});
    
} catch (error:any) {

    if(error.message === "User data is required") {
        return res.status(400).json({error: error.message});
    }else if(error.message === "Username or Email already exists") {
        return res.status(409).json({error: error.message});
    }

    res.status(500).json({ error: "Internal Server Error", details: error.message });
}
    
}
