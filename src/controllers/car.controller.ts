

import { Request, Response } from 'express';
import { getPool } from '../db/config';
import sql from 'mssql';



export const getAllCars = async (req: Request, res: Response) => {
    try {
        const pool = await getPool();
        const result = await pool.request().query('SELECT * FROM Cars');
        res. status(200).json(result.recordset);
    }  catch (error) {
        console.error('Error fetching cars: ', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};