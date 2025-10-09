import { getPool } from "../db/config";

export const getLocations = async () => {
    const pool = await getPool();
    const result = await pool.query("SELECT * FROM Location");
    return result.recordset;
};


export const getLocationDetails =async(location_id:number)=>{
    const pool= await getPool()
   const result=  await pool.request()
    .input("location_id",location_id)
    .query('SELECT * FROM Location WHERE location_id= @location_id')

    return result.recordset[0];
}

export const createLocation = async(locationData:any)=>{
    const pool= await getPool()
   const result=  await pool.request()
    .input("car_id",locationData.car_id)
    .input("location_name",locationData.location_name)
    .input("address",locationData.address)
    .input("contact_number",locationData.contact_number)
    .query('INSERT INTO Location (car_id, location_name, address, contact_number) VALUES (@car_id, @location_name, @address, @contact_number)')
   return result.recordset;
}