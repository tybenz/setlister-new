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
        local: 'localhost',
        dev: 'localhost',
        stage: 'localhost',
        production: 'setlister-prod-ue1-assets.s3.amazonaws.com'
    }
};

module.exports = Settings;
