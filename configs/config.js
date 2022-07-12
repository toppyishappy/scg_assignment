const path = require( 'path' );

module.exports.getConfig = () => {
    const config = {
        'MODE': 'Development',
        'PORT': process.env.PORT || 5000,
        'DB_USER': process.env.DB_USER,
        'DB_PASS': process.env.DB_PASS,
        'SENDGRID_API_KEY': process.env.SENDGRID_API_KEY || 'SG.www',
        'AUTH_USER': process.env.AUTH_USER,
        'AUTH_PASS': process.env.AUTH_PASS
        // 'MONGO_URL': process.env.MONGO_URL,
        // 'UPLOAD_PATH': path.resolve( `${__dirname }/../uploads` ),
        // 'JWT_SECRET': process.env.JWT_SECRET || 'R4ND0M5TR1NG'
    };

    // Modify for Production
    if ( process.env.NODE_ENV === 'production' ) {
        config.MODE = 'Production';
    }

    return config;
};