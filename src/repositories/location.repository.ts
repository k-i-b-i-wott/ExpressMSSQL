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