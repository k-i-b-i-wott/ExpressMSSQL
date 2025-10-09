import * as locationController from '../controllers/location.controller';
import e, { Router } from 'express';

import { Express } from 'express';


const locationRouter =(app: Express) => {
    app.get('/locations', locationController.getLocations);
}

export default locationRouter;