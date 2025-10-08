import { getPool } from "../db/config";


export const getBookings = async () => {
    const pool = getPool();
    const result = await (await pool).request().query('SELECT * FROM Booking');
    return result.recordset;
}
