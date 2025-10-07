
import { getPool } from '../db/config';

export const getAllCars = async () => {
    const pool = await getPool();
    const result = await pool.request().query('SELECT * FROM Car');
    return result.recordset;}

export const addCar = async(todo:any) => {
     const pool = await getPool();
    await pool
    .request()
    .input('car_model', todo.car_model)   
    .input('manufucturer', todo.manufucturer)
    .input('year', todo.year)
    .input('color', todo.color)
    .input('rental_rate', todo.rental_rate)
    .input('availability', todo.availability)
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