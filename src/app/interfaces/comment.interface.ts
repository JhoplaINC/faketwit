export interface iComment {
    id: string;
    author: string;
    content: string;
    createdAt: Date;
    updatedAt?: Date;
    likeCount: number;
    replyCount: number;
    postId: string;
}
