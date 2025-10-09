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