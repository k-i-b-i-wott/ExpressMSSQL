import { getPool } from "../db/config"


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