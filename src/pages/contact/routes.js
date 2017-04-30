export default function getContactRoutes(store) {
    return {
        path: '/contact',
        getComponent(location, cb) {
            require.ensure([], require => {
                cb(null, require('./Contact').default);
            }, 'contact');
        }
    };
};
