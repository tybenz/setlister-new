var Settings = {
    port: {
        local: 4567,
        dev: 443,
        stage: 443,
        production: 443
    },

    host: {
        local: 'localhost',
        dev: 'localhost',
        stage: 'localhost',
        production: 'setlister-new.herokuapp.com'
    },

    cdn: {
        host: 'setlister-prod-ue1-assets.s3.amazonaws.com',
        protocol: 'https:'
    }
};

module.exports = Settings;
