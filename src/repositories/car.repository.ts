
import { getPool } from '../db/config';
import { CarUpdate, NewCar } from '../types/car.types';

export const getAllCars = async () => {
    const pool = await getPool();
    const result = await pool.request().query('SELECT * FROM Car');
    return result.recordset;}

export const addCar = async(carData:NewCar) => {
     const pool = await getPool();
    await pool
    .request()
    .input('car_model', carData.car_model)   
    .input('manufucturer', carData.manufucturer)
    .input('year', carData.year)
    .input('color', carData.color)
    .input('rental_rate', carData.rental_rate)
    .input('availability', carData.availability)
    .query('INSERT INTO Car (car_model, manufucturer, year, color, rental_rate, availability) VALUES (@car_model,@manufucturer, @year, @color, @rental_rate, @availability)'    );
    return{ message: 'Car added successfully' };
}


export const getCarById = async (car_id: number) => {
    const pool = await getPool();
    const result = await pool
      .request()
      .input('car_id', car_id)
      .query('SELECT * FROM Car WHERE car_id = @car_id');
    return result.recordset[0];
  }

export const deleteCar = async (car_id: number) => {
    const pool= await getPool();
    await pool
    .request()
    .input('car_id', car_id)
    .query('DELETE FROM Car WHERE car_id = @car_id');
    return { message: 'Car deleted successfully' };
}  


export const updateCar = async (car_id: number, carData: CarUpdate) => {
  const pool = await getPool();
  const request = pool.request().input('car_id', car_id);

  const setClauses: string[] = [];

  if (carData.car_model !== undefined) {
    request.input('car_model', carData.car_model);
    setClauses.push('car_model = @car_model');
  }
  if (carData.manufucturer !== undefined) {
    request.input('manufucturer', carData.manufucturer);
    setClauses.push('manufucturer = @manufucturer');
  }
  if (carData.year !== undefined) {
    request.input('year', carData.year);
    setClauses.push('year = @year');
  }
  if (carData.color !== undefined) {
    request.input('color', carData.color);
    setClauses.push('color = @color');
  }
  if (carData.rental_rate !== undefined) {
    request.input('rental_rate', carData.rental_rate);
    setClauses.push('rental_rate = @rental_rate');
  }
  if (carData.availability !== undefined) {
    request.input('availability', carData.availability);
    setClauses.push('availability = @availability');
  }

  if (setClauses.length === 0) {
    throw new Error('No fields to update');
  }

  const query = `UPDATE Car SET ${setClauses.join(', ')} WHERE car_id = @car_id`;
  await request.query(query);
  return { message: 'Car details updated successfully' };
}