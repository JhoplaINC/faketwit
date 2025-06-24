import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { dummyPosts } from '../../services/dummy/dummy-posts';
import { iPost } from '../../interfaces/post.interface';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
    faComment,
    faShare,
    faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';
import { iComment } from '../../interfaces/comment.interface';
import { dummyComments } from '../../services/dummy/dummy-comments';

@Component({
    selector: 'post-page',
    standalone: true,
    imports: [CommonModule, FontAwesomeModule],
    templateUrl: './post.page.html',
    styleUrl: './post.page.scss',
})
export class PostPage implements OnInit {
    post: iPost | null = null;
    posts: iPost[] = dummyPosts;
    comments: iComment[] = dummyComments;
    postId: string | null = null;

    faLike = faThumbsUp;
    faComment = faComment;
    faShare = faShare;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.postId = this.route.snapshot.paramMap.get('id');
        const exist = this.posts.some((post: iPost) => post.id === this.postId);
        if (exist) {
            this.post =
                this.posts.find((post: iPost) => post.id === this.postId) ||
                null;

            this.post!.comments = this.comments.filter(
                (comment: iComment) => comment.postId === this.postId
            );
        } else {
            window.location.href = '/not-found';
        }
    }
}
