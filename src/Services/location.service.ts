import { error } from 'console';
import * as locationRepository from '../repositories/location.repository';
import { locationData, updatedLocation } from '../types/location.types';

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

export const createLocation = async(locationData:locationData)=>{
    const createdLocation = await locationRepository.createLocation(locationData)
    return createdLocation
}

export const updateLocation = async(location_id:number, locationData:Partial<updatedLocation>)=>{
    if(isNaN(location_id) || location_id <= 0){
        throw error("Invalid location ID")
    }    
    const updatedLocation = await locationRepository.updateLocation(location_id, locationData)
    return updatedLocation
}