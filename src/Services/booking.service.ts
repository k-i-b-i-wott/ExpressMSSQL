import * as bookingRepository from '../repositories/booking.repository';

export const getAllBookings = async () => {
    return await bookingRepository.getBookings();
}