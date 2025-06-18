import { iComment } from './comment.interface';

export interface iPost {
    id: string;
    author: string;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt?: Date;
    likeCount: number;
    commentCount: number;
    sharedCount: number;
    comments?: iComment[];
}
