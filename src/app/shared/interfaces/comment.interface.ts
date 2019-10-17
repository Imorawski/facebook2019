import { IUser } from './user.interface';

export interface IComment {
    id: string;
    createdTime: string;
    body: string;
    author: IUser
}
