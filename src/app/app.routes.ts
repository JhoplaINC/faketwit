import { Routes } from '@angular/router';
import { LoginPage } from './pages/login/login.page';
import { ProfilePage } from './pages/profile/profile.page';
import { LoginGuard } from './auth/login.guard';
import { AuthGuard } from './auth/auth.guard';
import { AboutPage } from './pages/about/about.page';
import { PostsPage } from './pages/posts/posts.page';
import { PostPage } from './pages/post/post.page';
import { NotFoundPage } from './pages/not-found/not-found.page';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./pages/home/home.page').then((m) => m.HomePage),
    },
    {
        path: 'login',
        loadComponent: () =>
            import('./pages/login/login.page').then((m) => m.LoginPage),
        canActivate: [LoginGuard],
    },
    {
        path: 'profile',
        loadComponent: () =>
            import('./pages/profile/profile.page').then((m) => m.ProfilePage),
        canActivate: [AuthGuard],
    },
    // {
    //     path: 'about',
    //     loadComponent: () =>
    //         import('./pages/about/about.page').then((m) => m.AboutPage),
    // },
    {
        path: 'posts',
        loadComponent: () =>
            import('./pages/posts/posts.page').then((m) => m.PostsPage),
    },
    {
        path: 'post/:id',
        loadComponent: () =>
            import('./pages/post/post.page').then((m) => m.PostPage),
    },
    {
        path: 'not-found',
        loadComponent: () =>
            import('./pages/not-found/not-found.page').then(
                (m) => m.NotFoundPage
            ),
    },
];
