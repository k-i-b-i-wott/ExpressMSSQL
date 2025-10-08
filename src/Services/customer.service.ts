import e from 'express';
import * as customerRepositories from '../repositories/customer.repository';

export const listAllCustomers = async () => {
    return await customerRepositories.getAllCustomers();
}

export const getCustomerDetails = async (id: number) => {
    if (isNaN(id) || id <= 0) {
        throw new Error("Invalid ID");
    }

    const customer = await customerRepositories.getCustomerById(id);
    if (!customer) {
        throw new Error("Customer not found");
    }

    return customer;
}

export const addNewCustomer = async (customerData: any) => {
    return await customerRepositories.createCustomer(customerData);
}