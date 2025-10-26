import { getPool } from "../src/db/config";

import app from '../index'
import express from "express";



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