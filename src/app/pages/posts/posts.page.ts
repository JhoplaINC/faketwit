import { Component } from '@angular/core';
import { dummyPosts } from '../../services/dummy/dummy-posts';
import { iPost } from '../../interfaces/post.interface';
import { CommonModule } from '@angular/common';
import { InfoPostComponent } from '../../components/modal/info-post/info-post.component';
import { MatDialog } from '@angular/material/dialog';
import {
    faChevronLeft,
    faChevronRight,
    faComment,
    faShare,
    faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
    selector: 'posts-page',
    standalone: true,
    imports: [CommonModule, InfoPostComponent, FontAwesomeModule],
    templateUrl: './posts.page.html',
    styleUrl: './posts.page.scss',
})
export class PostsPage {
    constructor(public dialog: MatDialog) {}

    maxPagesPerView = 6;
    currentPage = 1;
    totalPosts = dummyPosts.length;
    totalPages = Math.ceil(this.totalPosts / this.maxPagesPerView);

    faLike = faThumbsUp;
    faComment = faComment;
    faShare = faShare;
    faChevronLeft = faChevronLeft;
    faChevronRight = faChevronRight;

    posts: iPost[] = dummyPosts;

    openDialog(post: iPost) {
        const dialogRef = this.dialog.open(InfoPostComponent, {
            data: post,
            width: '400px',
            height: '300px',
        });
    }

    previousPage() {
        if (this.currentPage > 1) {
            this.currentPage--;
        }
    }

    nextPage() {
        if (this.currentPage < this.totalPages) {
            this.currentPage++;
        }
    }

    onGoToPost(postid: string) {
        window.open(`/post/${postid}`, '_blank');
    }
}
