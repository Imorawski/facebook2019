import { IUser } from './user.interface';
import { ICommentList } from './comment-list.interface';

export interface IPost {
    id: string;
    createdTime: string;
    author: IUser;
    body: string;
    images: string[];
    comments?: ICommentList;
}
