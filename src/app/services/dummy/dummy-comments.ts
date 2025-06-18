import { iComment } from '../../interfaces/comment.interface';

export const dummyComments: iComment[] = [
    {
        id: '1',
        author: 'Jane Smith',
        content: "This is a comment on John Doe's post.",
        createdAt: new Date('2023-10-01T12:30:00Z'),
        updatedAt: new Date('2023-10-01T12:30:00Z'),
        likeCount: 2,
        replyCount: 0,
        postId: '1',
    },
    {
        id: '2',
        author: 'John Doe',
        content: "This is a comment on Jane Smith's post.",
        createdAt: new Date('2023-10-02T15:00:00Z'),
        updatedAt: new Date('2023-10-02T15:00:00Z'),
        likeCount: 3,
        replyCount: 1,
        postId: '2',
    },
    {
        id: '3',
        author: 'Alice Johnson',
        content: "Another comment on Jane Smith's post.",
        createdAt: new Date('2023-10-02T15:30:00Z'),
        updatedAt: new Date('2023-10-02T15:30:00Z'),
        likeCount: 1,
        replyCount: 0,
        postId: '2',
    },
    {
        id: '4',
        author: 'Bob Brown',
        content: "This is a comment on Alice Johnson's post.",
        createdAt: new Date('2023-10-03T09:45:00Z'),
        updatedAt: new Date('2023-10-03T09:45:00Z'),
        likeCount: 4,
        replyCount: 0,
        postId: '3',
    },
];
