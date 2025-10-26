import * as userRepository from '../src/repositories/users.repository'

import * as userService from '../src/Services/users.service';

import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { sendMail } from '../src/mailer/mailer';
import { mailTemplate } from '../src/mailer/mailTemplate';


dotenv.config()


jest.mock("../src/repositories/users.repository")
jest.mock("../src/types/users.types")
jest.mock("bcrypt")
jest.mock('jsonwebtoken')
jest.mock("../src/mailer/mailer")
jest.mock('../src/mailer/mailTemplate')


describe("User service tests", ()=>{

   afterEach(()=>{
    jest.clearAllMocks()
   })

   it("Should return user list", async()=>{

    const mockUsers =[
    {  
        user_id: 1,
        first_name: "Tanui",
        last_name: "Biwott",
        user_name: "adminuser",
        email_address: "admin@example.com",
        password: "password123",
        phone_number: "0712345678",
        role: "admin"
   },
   {
         user_id: 2,
        first_name: "Tanui",
        last_name: "Biwott",
        user_name: "user",
        email_address: "user@example.com",
        password: "password123",
        phone_number: "07124345678",
        role: "user"
    }
];

   (userRepository.getUsers as jest.Mock ).mockResolvedValue(mockUsers)

   const users = await userService.getAllUsers()


   expect(users).toEqual(mockUsers)
   expect(userRepository.getUsers).toHaveBeenCalledTimes(1)


   })

   it("It should be able to send the verification code", async ()=>{
    const mockUser = {
         user_id: 2,
        first_name: "Tanui",
        last_name: "Biwott",
        user_name: "user",
        email_address: "user@example.com",
        password: "password123",
        phone_number: "07124345678",
        role: "user"        
    };
(bcrypt.hash as jest.Mock).mockResolvedValue("hashedpassword");
(userRepository.insertUser as jest.Mock).mockResolvedValue( {message:"User created successfully"});
(userRepository.setVerificationCode as jest.Mock).mockResolvedValue({});
(sendMail as jest.Mock).mockResolvedValue(true);
(mailTemplate.verify as jest.Mock).mockResolvedValue('<h2>Email Verification</h2>');

 const results = await userService.insertUser(mockUser);


 expect(userRepository.insertUser ).toHaveBeenCalled();
 expect(userRepository.setVerificationCode).toHaveBeenCalled();
 expect(sendMail).toHaveBeenCalled();
 expect(results).toEqual({message:"User created successfully"});



   })

   it("Should send the verification success email", async ()=>{
      const mockUser = {
         user_id: 2,
        first_name: "Tanui",
        last_name: "Biwott",
        user_name: "user",
        email_address: "user@example.com",
        password: "password123",
        phone_number: "07124345678",
        role: "user" ,
        verification_code: "123456",
        is_verified: false

    };
   

    (userRepository.getUserByEmailAddress as jest.Mock).mockResolvedValue(mockUser);
    (userRepository.verifyUserEmail as jest.Mock).mockResolvedValue({});
    (sendMail as jest.Mock).mockResolvedValue(true);
    (mailTemplate.verificationSuccess as jest.Mock).mockResolvedValue('<h2>Verification Success</h2>');
    const results = await userService.verifyEmail(mockUser.email_address, "123456");
    expect(userRepository.getUserByEmailAddress).toHaveBeenCalled();
    expect(userRepository.verifyUserEmail).toHaveBeenCalled();
    expect(sendMail).toHaveBeenCalled();
    expect(results).toEqual({ message: "Email verified successfully" });




});



it("Should verify user with the correct code",  async ()=>{
      const mockUser = {
                
        email_address: "user@example.com",  
        
        verification_code: "123456",
        is_verified: false
    };

    ( userRepository.getUserByEmailAddress as jest.Mock).mockResolvedValue(mockUser);
    (userRepository.verifyUserEmail as jest.Mock).mockResolvedValue({});
    (sendMail as jest.Mock).mockResolvedValue(true);
    (mailTemplate.welcome as jest.Mock).mockResolvedValue('<p>Thank you for registering.</p>');


    const results = await userService.verifyEmail("user@example.com","123456");

    expect(userRepository.getUserByEmailAddress).toHaveBeenCalledWith("user@example.com");
    expect(sendMail).toHaveBeenCalled()

    expect(results).toEqual({ message: "Email verified successfully" });

    
    


})

it("Should throw an error for invalid code", async ()=>{
     const mockUser = {
         user_id: 2,
        first_name: "Tanui",
        last_name: "Biwott",
        user_name: "user",
        email_address: "user@example.com",
        password: "password123",
        phone_number: "07124345678",
        role: "user" ,
        verification_code: "123456",
        is_verified: false
    };

    (userRepository.getUserByEmailAddress as jest.Mock).mockResolvedValue(mockUser);

    await expect(userService.verifyEmail("user@example.com","133456"))
    .rejects
    .toThrow("Invalid verification code");
    
});


it("Should return token and user info when login is successful", async()=>{
const mockUser={
      user_id: 2,
        first_name: "Tanui",
        last_name: "Biwott",
        user_name: "user",
        email_address: "user@example.com",
        password: "hashedPassword",
        phone_number: "07124345678",
        role: "user" ,       
        is_verified: true
    };


    (userRepository.getUserByEmailAddress as jest.Mock).mockResolvedValue(mockUser);
    (bcrypt.compare as jest.Mock).mockResolvedValue(true);
    (jwt.sign as jest.Mock).mockReturnValue("mockjwtToken");

     const results = await userService.loginUser("user@example.com","password123");

     expect(userRepository.getUserByEmailAddress).toHaveBeenCalledWith("user@example.com");

     expect(jwt.sign).toHaveBeenCalled();

     expect(results).toHaveProperty("token", "mockjwtToken");

})

})
