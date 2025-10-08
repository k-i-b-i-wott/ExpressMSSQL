import { getPool } from "../db/config"
import { createCustomerDTO } from "../types/customer.types";


export const getAllCustomers = async () => {
    const pool = await getPool();
    const result = await pool.request().query("SELECT * FROM Customer");
    return result.recordset;
}


export const getCustomerById = async (id: number) => {
    const pool = await getPool();
    const result = await pool.request()
        .input('id', id)
        .query('SELECT * FROM Customer WHERE customer_id = @id');
    return result.recordset[0];
}

export const createCustomer= async(customerData:createCustomerDTO)=>{
    const pool = await getPool();
    const result = await pool.request()
        .input('firstName', customerData.firstName)
        .input('lastName', customerData.lastName)
        .input('email', customerData.email)
        .input('phone_number', customerData.phone_number)
        .input('address', customerData.address)
        .query('INSERT INTO Customer (firstName, lastName, email, phone_number, address) VALUES (@firstName, @lastName, @email, @phone_number, @address)')
    return result.recordset;
}

export const deleteCustomer = async (id: number) => {
    const pool = await getPool();
    await pool.request()
        .input('id', id)
        .query('DELETE FROM Customer WHERE customer_id = @id');
    return { message: "Customer deleted successfully" };
}