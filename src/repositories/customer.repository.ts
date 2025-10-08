import { getPool } from "../db/config"


export const getAllCustomers = async () => {
    const pool = await getPool();
    const result = await pool.request().query("SELECT * FROM Customer");
    return result.recordset;
}