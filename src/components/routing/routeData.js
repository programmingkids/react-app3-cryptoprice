import { Layout } from './../layouts/Layout';
import { Home } from './../pages/Home';
import { Coin } from './../pages/Coin';
import { About } from './../pages/About';
import { NotFound } from './../pages/NotFound';

export const routeData = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: 'about',
                element: <About />,
            },
            {
                path: '*',
                element: <NotFound />,
            },
        ],
    }
];
