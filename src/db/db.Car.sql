CREATE DATABASE CarRental;

-- CREATE SCHEMA cars;



-- CREATE TABLE Car(
-- car_id INT IDENTITY(1,1) PRIMARY KEY,
-- car_model VARCHAR(30) NOT NULL,
-- manufucturer VARCHAR(30) NOT NULL,
-- year INT NOT NULL,
-- color VARCHAR(20) NOT NULL,
-- rental_rate MONEY NOT NULL,
-- availability VARCHAR(50) NOT NULL,

-- );

SELECT * FROM Car;

INSERT INTO Car (car_model, manufucturer, year, color, rental_rate, availability)
VALUES
('Camry', 'Toyota', 2023, 'White', 45.00, 'Available'),
('Civic', 'Honda', 2022, 'Black', 40.00, 'Available'),
('Model 3', 'Tesla', 2024, 'Red', 75.00, 'Rented'),
('Accord', 'Honda', 2023, 'Blue', 42.00, 'Available'),
('F-150', 'Ford', 2022, 'Silver', 65.00, 'Available'),
('X5', 'BMW', 2024, 'Black', 85.00, 'Available'),
('Corolla', 'Toyota', 2023, 'Gray', 38.00, 'Maintenance'),
('Mustang', 'Ford', 2024, 'Yellow', 70.00, 'Available'),
('CX-5', 'Mazda', 2023, 'White', 48.00, 'Rented'),
('Altima', 'Nissan', 2022, 'Blue', 35.00, 'Available');



-- -- Always check what you're about to delete
-- SELECT * FROM cars.car WHERE car_id = 10;
-- -- Then delete
-- DELETE FROM cars.car WHERE car_id = 10;

-- SELECT * FROM cars.car;


-- -- Delete car with ID 10 and all its dependencies
-- BEGIN TRANSACTION;

-- DELETE FROM cars.Insurance WHERE car_id = 10;
-- DELETE FROM cars.maintenance WHERE car_id = 10;
-- DELETE FROM cars.Location WHERE car_id = 10;
-- DELETE FROM cars.Booking WHERE car_id = 10;
-- DELETE FROM cars.Reservation WHERE car_id = 10;
-- DELETE FROM cars.car WHERE car_id = 10;

-- COMMIT TRANSACTION;

-- CREATE TABLE cars.Insurance (
--     insurance_id INT IDENTITY(1,1) PRIMARY KEY,
--     car_id INT,
--     insurance_provider VARCHAR(50),
--     policy_number VARCHAR(30),
--     start_date DATE,
--     end_date DATE,
--     FOREIGN KEY (car_id) REFERENCES cars.Car(car_id)
-- );

-- INSERT INTO cars.insurance (car_id, insurance_provider, policy_number, start_date, end_date)
-- VALUES
-- (1, 'Geico', 'GEC-001-2024', '2024-01-01', '2024-12-31'),
-- (2, 'State Farm', 'STF-002-2024', '2024-02-01', '2024-11-30'),
-- (3, 'Allstate', 'ALL-003-2024', '2024-03-15', '2025-03-14'),
-- (4, 'Progressive', 'PRO-004-2024', '2024-01-20', '2024-12-19'),
-- (5, 'Liberty Mutual', 'LBM-005-2024', '2024-04-01', '2025-03-31'),
-- (6, 'Nationwide', 'NTW-006-2024', '2024-05-10', '2025-05-09'),
-- (7, 'Farmers', 'FRM-007-2024', '2024-06-01', '2024-11-30'),
-- (8, 'USAA', 'USA-008-2024', '2024-02-15', '2025-02-14'),
-- (9, 'Travelers', 'TRV-009-2024', '2024-03-01', '2024-08-31'),
-- (10, 'American Family', 'AMF-010-2024', '2024-07-01', '2025-06-30');

-- SELECT * FROM cars.Insurance;

-- DROP TABLE cars.Insurance;


-- CREATE TABLE cars.maintenance(
-- maintainace_id INT IDENTITY(1,1) PRIMARY KEY,
-- car_id INT NOT NULL,
-- maintainance_date DATE NOT NULL,
-- description VARCHAR(MAX) NOT NULL,
-- cost MONEY NOT NULL

-- );

-- -- Drop all possible variations of the table
-- DROP TABLE IF EXISTS cars.maintenance;
-- DROP TABLE IF EXISTS maintenance;
-- DROP TABLE IF EXISTS cars.maintainance;
-- DROP TABLE IF EXISTS dbo.maintenance;

-- --rename table name

-- EXEC sp_rename 'maintenance', 'cars.maintenance', 'OBJECT';

-- INSERT INTO cars.maintenance (car_id, maintainance_date, description, cost)
-- VALUES
-- (1, '2024-03-15', 'Regular oil change and filter replacement', 85.00),
-- (2, '2024-02-20', 'Brake pad replacement and rotor resurfacing', 320.00),
-- (3, '2024-04-10', 'Tire rotation and battery check', 65.00),
-- (4, '2024-01-25', 'Engine tune-up and spark plug replacement', 180.00),
-- (5, '2024-05-05', 'Transmission fluid flush and replacement', 250.00),
-- (6, '2024-03-30', 'Air conditioning system service and recharge', 150.00),
-- (7, '2024-02-10', 'Wheel alignment and suspension check', 120.00),
-- (8, '2024-04-22', 'Complete detailing and interior cleaning', 200.00),
-- (9, '2024-01-15', 'Fuel system cleaning and injector service', 95.00),
-- (10, '2024-05-12', 'Coolant flush and radiator service', 110.00);

-- SELECT * FROM cars.maintenance;

-- -- Delete maintenance record by ID
-- DELETE FROM cars.maintenance WHERE maintainace_id = 3;

-- -- Delete maintenance records with cost less than $100
-- DELETE FROM cars.maintenance WHERE cost < 100.00;

-- -- Delete maintenance records before a certain date
-- DELETE FROM cars.maintenance WHERE maintainance_date < '2024-03-01';

-- SELECT * FROM cars.maintenance;

CREATE TABLE Customer(
    customer_id INT IDENTITY(1,1) PRIMARY KEY,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone_number VARCHAR(13) NOT NULL,
    address VARCHAR(100) NOT NULL
);

-- DROP TABLE IF EXISTS Customer;

SELECT * FROM Customer;

INSERT INTO Customer (firstName, lastName, email, phone_number, address) VALUES
( 'John', 'Doe', 'john.doe@email.com', '0712345678', 'Nairobi'),
('Jane', 'Smith', 'jane.smith@email.com', '0723456789', 'Mombasa'),
( 'Alice', 'Brown', 'alice.brown@email.com', '0734567890', 'Kisumu'),
('Bob', 'Johnson', 'bob.j@email.com', '0745678901', 'Nakuru'),
( 'Charlie', 'Lee', 'charlie.lee@email.com', '0756789012', 'Eldoret');

-- -- Update customer email
-- UPDATE cars.Customer 
-- SET email = 'john.doe.new@email.com' 
-- WHERE customer_id = 1;

-- -- Update customer address and phone
-- UPDATE cars.Customer 
-- SET address = 'Westlands', phone_number = '0711222333' 
-- WHERE customer_id = 2;

-- -- Update last name
-- UPDATE cars.Customer 
-- SET lastName = 'Williams' 
-- WHERE firstName = 'Jane' AND lastName = 'Smith';

-- SELECT * FROM  cars.Customer 

-- WHERE  customer_id = 1

-- ;
-- DROP TABLE cars.Customer;

-- CREATE TABLE cars.Location (
--     location_id INT  PRIMARY KEY,
--     car_id INT,
--     location_name VARCHAR(50),
--     address VARCHAR(30),
--     contact_number VARCHAR(13),
--     FOREIGN KEY (car_id) REFERENCES cars.car(car_id)
-- );

-- INSERT INTO cars.Location (location_id, car_id, location_name, address, contact_number) VALUES
-- (1, 1, 'Nairobi Branch', 'Moi Avenue', '0711000001'),
-- (2, 2, 'Mombasa Branch', 'Nkrumah Rd', '0711000002'),
-- (3, 3, 'Kisumu Branch', 'Oginga Odinga St', '0711000003'),
-- (4, 4, 'Nakuru Branch', 'Kenyatta Ave', '0711000004'),
-- (5, 5, 'Eldoret Branch', 'Uganda Rd', '0711000005');

-- SELECT * FROM cars.Location;

-- CREATE TABLE cars.Reservation (
--     reservation_id INT PRIMARY KEY,
--     car_id INT,
--     customer_id INT,
--     reservation_date DATE,
--     pickup_date DATE,
--     return_date DATE,
--     FOREIGN KEY (car_id) REFERENCES cars.Car(car_id),
--     FOREIGN KEY (customer_id) REFERENCES cars.Customer(customer_id)
-- );

-- INSERT INTO cars.Reservation (reservation_id, car_id, customer_id, reservation_date, pickup_date, return_date) VALUES
-- (1, 1, 1, '2024-01-10', '2024-01-12', '2024-01-15'),
-- (2, 2, 2, '2024-02-05', '2024-02-06', '2024-02-10'),
-- (3, 3, 3, '2024-03-01', '2024-03-03', '2024-03-07'),
-- (4, 4, 4, '2024-04-08', '2024-04-10', '2024-04-14'),
-- (5, 5, 5, '2024-05-12', '2024-05-13', '2024-05-17');


CREATE TABLE Booking (
    booking_id INT IDENTITY(1,1) PRIMARY KEY,
    car_id INT NOT NULL,
    customer_id INT NOT NULL,
    rental_start_date DATETIME NOT NULL DEFAULT GETDATE(),
    rental_end_date DATETIME NOT NULL,
    total_amount MONEY NOT NULL,
    FOREIGN KEY (car_id) REFERENCES Car(car_id),
    FOREIGN KEY (customer_id) REFERENCES Customer(customer_id)
);
SELECT * FROM Booking;

DROP TABLE IF EXISTS Booking;

INSERT INTO Booking (car_id, customer_id, rental_start_date, rental_end_date, total_amount) VALUES


(3, 3, '2024-03-03', '2024-03-07', 400.00),

(5, 5, '2024-05-13', '2024-05-17', 168.00);


-- SELECT * FROM cars.Booking;
-- CREATE TABLE cars.Payment (
--     payment_id INT PRIMARY KEY,
--     booking_id INT,
--     payment_date DATE,
--     amount MONEY,
--     payment_method VARCHAR(50),
--     FOREIGN KEY (booking_id) REFERENCES cars.Booking(booking_id)
-- );


-- INSERT INTO cars.Payment (payment_id, booking_id, payment_date, amount, payment_method) VALUES
-- (1, 1, '2024-01-15', 120.00, 'Credit Card'),
-- (2, 2, '2024-02-10', 180.00, 'Cash'),
-- (3, 3, '2024-03-07', 400.00, 'Mobile Money'),
-- (4, 4, '2024-04-14', 200.00, 'Credit Card'),
-- (5, 5, '2024-05-17', 168.00, 'Cash');

-- SELECT * FROM cars.Payment;


