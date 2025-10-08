import * as bookingController from '../controllers/booking.controller';
import { Express } from 'express';

const bookingRoutes = (app: Express) => {
    app.get('/bookings', bookingController.getBookings);
}

export default bookingRoutes;
