import express from "express";

import { getPool } from "./src/db/config";
import carRoutes from "./src/Routers/car.router";
import customerRoutes from "./src/Routers/customer.routes";
import bookingRoutes from "./src/Routers/booking.routes";
import locationRouter from "./src/Routers/location.routes";
import userRoutes from "./src/Routers/users.routes";


const app = express();

app.use(express.json());

//register routes here

carRoutes (app);
customerRoutes(app);
bookingRoutes(app);
locationRouter(app);
userRoutes(app);




const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


getPool()
  .then((pool) => {
    console.log("Connected to SQL Server");
  })
  .catch((error) => {
    console.error("Error connecting to SQL Server:", error);
  });
