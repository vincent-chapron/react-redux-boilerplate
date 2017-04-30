import App from './App';

import getHomeRoutes from './home';
import getContactRoutes from './contact';

export default function getRoutes(store) {
    return {
        path: '/',
        component: App,
        indexRoute: getHomeRoutes(),
        childRoutes: [
            getContactRoutes(),
            // ...
        ]
    };
};
