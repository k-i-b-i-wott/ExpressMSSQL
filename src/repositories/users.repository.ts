import { getPool } from "../db/config";
import { createUser } from "../types/users.types";


export const getUsers = async () => {
    const pool = await getPool();
    const result = await pool.request().query('SELECT * FROM Users');
    return result.recordset;
}

export const insertUser = async (user: createUser) => {

    const pool = await getPool();
     await pool.request()
        .input('first_name', user.first_name)
        .input('last_name', user.last_name)
        .input('username', user.username)
        .input('password', user.password)
        .input('email_address', user.email_address)
        .input('phone_number', user.phone_number)
        .query('INSERT INTO Users (first_name, last_name, username, password, email_address, phone_number) VALUES (@first_name, @last_name, @username, @password, @email_address, @phone_number)');
        
    return { message: 'User created successfully' };
}   ;
    

