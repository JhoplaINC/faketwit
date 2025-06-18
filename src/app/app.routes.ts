import { Routes } from '@angular/router';
import { LoginPage } from './pages/login/login.page';
import { ProfilePage } from './pages/profile/profile.page';
import { LoginGuard } from './auth/login.guard';
import { AuthGuard } from './auth/auth.guard';
import { AboutPage } from './pages/about/about.page';
import { PostsPage } from './pages/posts/posts.page';
import { PostPage } from './pages/post/post.page';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginPage,
        canActivate: [LoginGuard],
    },
    {
        path: 'profile',
        component: ProfilePage,
        canActivate: [AuthGuard],
    },
    {
        path: 'about',
        component: AboutPage,
    },
    {
        path: 'posts',
        component: PostsPage,
    },
    {
        path: 'post/:id',
        component: PostPage,
    },
];
