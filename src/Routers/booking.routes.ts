import * as bookingController from '../controllers/booking.controller';
import { Express } from 'express';

const bookingRoutes = (app: Express) => {
    app.get('/bookings', bookingController.getBookings);
    app.get('/bookings/:id', bookingController.getBookingById);
    app.post('/bookings', bookingController.createBooking);
}

export default bookingRoutes;
