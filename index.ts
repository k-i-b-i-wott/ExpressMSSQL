import express from "express";

import { getPool } from "./src/db/config";
import carRoutes from "./src/Routers/car.router";
import customerRoutes from "./src/Routers/customer.routes";
import bookingRoutes from "./src/Routers/booking.routes";
import locationRouter from "./src/Routers/location.routes";
import userRoutes from "./src/Routers/users.routes";




//register routes here


const initializeApp = ()=>{
const app = express();

app.use(express.json());


carRoutes (app);
customerRoutes(app);
bookingRoutes(app);
locationRouter(app);
userRoutes(app);


return app;

}


const app = initializeApp()

export default app;







