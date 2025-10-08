import * as bookingService from '../Services/booking.service';
import { Request, Response } from 'express';

export const getBookings = async (req: Request, res: Response) => {
    try {
        const bookings = await bookingService.getAllBookings();
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving bookings', error });
    }
};