import * as carRepositories from "../src/repositories/car.repository";
import * as carServices from '../src/Services/car.service';


jest.mock("../src/repositories/car.repository")


describe("Test Suites for the car",()=>{
    afterEach(()=>{
    jest.clearAllMocks()
   })

   it("Should return a list of cars",async()=>{
    const mockCar=[{
        "car_id": 1,
        "car_model": "C200",
        "manufucturer": "Mercedes-Benz",
        "year": 2021,
        "color": "Black",
        "rental_rate": 2400,
        "availability": "Available"
    },
    {
        "car_id": 3,
        "car_model": "Model 3",
        "manufucturer": "Tesla",
        "year": 2024,
        "color": "Red",
        "rental_rate": 75,
        "availability": "Rented"
    }];

(carRepositories.getAllCars as jest.Mock).mockResolvedValue(mockCar);

const results = await carServices.listAllCars();

expect(results).toEqual(mockCar);
expect(carRepositories.getAllCars).toHaveBeenCalledTimes(1);


   });

   it("Should return the car's details", async ()=>{
    const mockCar={
        "car_id": 1,
        "car_model": "C200",
        "manufucturer": "Mercedes-Benz",
        "year": 2021,
        "color": "Black",
        "rental_rate": 2400,
        "availability": "Available"
    };

    
   })
})