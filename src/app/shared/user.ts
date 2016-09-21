export enum userType {ADMIN, COMPANY, CUSTOMER}

export class User {
    username: string;
    password: string;
    type: userType;
}