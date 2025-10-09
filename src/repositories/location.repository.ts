import { getPool } from "../db/config";

export const getLocations = async () => {
    const pool = await getPool();
    const result = await pool.query("SELECT * FROM Location");
    return result.recordset;
};