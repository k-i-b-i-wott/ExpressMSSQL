import * as customerServices from '../Services/customer.service';
import { Request, Response } from 'express';



export const getCustomers = async (req: Request, res: Response) => {
    try {
        const customers = await customerServices.listAllCustomers();
       res.status(200).json(customers);
    } catch (error) {
        
        res.status(500).json({ error: "Internal Server Error" });
    }
};
