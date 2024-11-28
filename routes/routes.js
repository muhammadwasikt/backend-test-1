import { albums } from "../products/albums.js";
import { comments } from "../products/comments.js";
import { mainPage } from "../products/mainPage.js";
import { posts } from "../products/posts.js";
import { todos } from "../products/todos.js";
import { users } from "../products/users.js";

export const routes = [
    {
        id: 1,
        path: '/',
        element: mainPage
    },
    {
        id: 2,
        path: '/posts',
        element: posts
    },
    {
        id: 3,
        path: '/comments',
        element: comments
    },
    {
        id: 4,
        path: '/albums',
        element: albums
    },
    {
        id: 5,
        path: '/photos',
        element: 'Welcome to photos'
    },
    {
        id: 6,
        path: '/todos',
        element: todos
    },
    {
        id: 7,
        path: '/users',
        element: users
    },
    {
        id: 8,
        path: '*',
        element: '404 Page not found'
    },
]