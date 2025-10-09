export interface createUser {
    first_name: string;
    last_name: string;
    username: string;
    password: string;
    email_address: string;    
    phone_number: string;    
}
export interface updateUser {
    first_name?: string;
    last_name?: string;
    username?: string;
    password?: string;
    email_address?: string;    
    phone_number?: string;    
}

