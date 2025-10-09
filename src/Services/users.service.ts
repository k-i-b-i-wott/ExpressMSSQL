import * as userRepository from '../repositories/users.repository'
import { createUser } from '../types/users.types';

import bcrypt from 'bcrypt';

export const getAllUsers = async () => {
    return await userRepository.getUsers();
}

export const insertUser = async (userData: createUser) => {
    

    const newUser = await userRepository.insertUser(userData);
    return newUser;
}