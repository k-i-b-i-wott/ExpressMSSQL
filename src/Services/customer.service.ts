import * as customerRepositories from '../repositories/customer.repository';

export const listAllCustomers = async () => {
    return await customerRepositories.getAllCustomers();
}

