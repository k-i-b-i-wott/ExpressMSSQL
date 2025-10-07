import * as carRepositories from "../repositories/car.repository";

export const listAllCars = async () => {
    return await carRepositories.getAllCars();
}

export const createCar = async (carData: any) => {
    return await carRepositories.addCar(carData);
}


export const getCarDetails = async (id: number) => {
    return await carRepositories.getCarById(id);
}