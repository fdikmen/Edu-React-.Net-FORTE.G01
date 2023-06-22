import { createContext } from 'react';

export const UserContextApi = createContext(
   /* {
        name: 'John',
        age: 20,
        email: ''
    }
    */
);

export const ThemeContextApi = createContext(
    {
        color: 'red',
        fontSize: '20px'
    }
);

export const AuthContextApi = createContext(
    {
        isAuth: false
    }
);

export const CartContextApi = createContext(
    {
        cart: []
    }
);