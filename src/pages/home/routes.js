export default function getContactRoutes(store) {
    return {
        getComponent(location, cb) {
            require.ensure([], require => {
                cb(null, require('./Home').default);
            }, 'home');
        }
    };
};
