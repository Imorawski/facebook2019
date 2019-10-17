import { IUser } from './user.interface';

export interface IPost {
    id: string;
    createdTime: string;
    author: IUser;
    body: string;
    images: string[];
}
