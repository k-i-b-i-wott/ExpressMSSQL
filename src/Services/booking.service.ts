import * as bookingRepository from '../repositories/booking.repository';

export const getAllBookings = async () => {
    return await bookingRepository.getBookings();
}

export const getBookingDetails = async (booking_id: number) => {
    if (isNaN(booking_id) || booking_id <= 0) {
        throw new Error('Invalid booking ID');
    }

    const booking = await bookingRepository.getBookingById(booking_id);
    if (!booking) {
        throw new Error('Booking not found');
    }

    return await bookingRepository.getBookingById(booking_id);
}
