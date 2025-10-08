import { getPool } from "../db/config";


export const getBookings = async () => {
    const pool = await getPool();
    const result = await pool
    .request()
    .query('SELECT * FROM Booking');
    return result.recordset;
}


export const getBookingById = async (booking_id: number) => {
    const pool = await getPool();
    const result = await pool
    .request()
    .input('booking_id', booking_id)
    .query('SELECT * FROM Booking WHERE booking_id = @booking_id');
    return result.recordset[0];
};

