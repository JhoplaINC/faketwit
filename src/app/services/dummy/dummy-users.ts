import { iDummyUser } from '../../interfaces/dummy_users.interface';

/*
    ROLES:
    1: Admin
    2: User
*/

export const DUMMY_USERS: iDummyUser[] = [
    {
        email: 'user@fakeapp.cl',
        password: 'password1!',
        name: 'John',
        lastname: 'Doe',
        username: 'johndoe',
        rol: 1,
    },
    {
        email: 'user2@fakeapp.cl',
        password: 'password2!',
        name: 'Jane',
        lastname: 'Smith',
        username: 'janesmith',
        rol: 2,
    },
    {
        email: 'user3@fakeapp.cl',
        password: 'password3!',
        name: 'Alice',
        lastname: 'Johnson',
        username: 'alicejohnson',
        rol: 2,
    },
    {
        email: 'user4@fakeapp.cl',
        password: 'password4!',
        name: 'Bob',
        lastname: 'Brown',
        username: 'bobbrown',
        rol: 2,
    },
];
