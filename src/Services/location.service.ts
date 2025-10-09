import { error } from 'console';
import * as locationRepository from '../repositories/location.repository';

export const getAllLocations = async () => {
    return await locationRepository.getLocations();
};

export const getLocationDetails = async(location_id:number)=>{
    if(isNaN(location_id) ||location_id <=0)  {
        throw error("Invalid location ID")
    } 
    
    const location = locationRepository.getLocationDetails(location_id)

    if(!location){
        throw error("Location not found")
    }

    return location
}