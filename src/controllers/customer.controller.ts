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


export const getCustomer = async (req: Request, res: Response) => {
    const id= parseInt(req.params.id);
    try {
        const customer = await customerServices.getCustomerDetails(id);
        res.status(200).json(customer);
    } catch (error:any) {
        if (error.message === "Invalid ID") {
            return res.status(400).json({ error: error.message });
        }
            if (error.message === "Customer not found") {
            res.status(404).json({ error: error.message });
        } else {
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}