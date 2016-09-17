export enum userType {Admin, Company, Customer}

export class User {
    username: string;
    password: string;
    type: userType;
}