import * as userRepository from '../repositories/users.repository'
import { newUser } from '../types/users.types';



export const getAllUsers = async () => {
    return await userRepository.getUsers();
}

export const insertUser = async (userData: newUser) => {
  
    if(!userData) {
        throw new Error("User data is required");
    }
    
    const newUser = await userRepository.insertUser(userData);
    return newUser;
}
