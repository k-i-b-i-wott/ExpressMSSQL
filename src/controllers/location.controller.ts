import * as locationService from '../Services/location.service';
import { Request, Response } from 'express';

export const getLocations = async (req: Request, res: Response) => {
    try {
        const locations = await locationService.getAllLocations();
        res.json(locations);
    } catch (error) {
        console.error("Error fetching locations:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const getLocationDetails = async(req:Request,res:Response)=>{
    const location_id = parseInt(req.params.location_id)
    try {
        const locationDetails = await locationService.getLocationDetails(location_id);
        res.status(200).json(locationDetails)

    } catch (error:any) {
        if(error.message === "Invalid location ID") {
            res.status(400).json({error:error.message})
        }else if(error.message === "Location not found") {
            res.status(404).json({error:error.message})
        } 
        else {
            res.status(500).json({error:"Internal server error"})
        }

    }
}