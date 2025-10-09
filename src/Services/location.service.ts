import * as locationRepository from '../repositories/location.repository';

export const getAllLocations = async () => {
    return await locationRepository.getLocations();
};