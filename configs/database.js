const mongoose = require( 'mongoose' ),
    config = require( './config' ).getConfig();

// Mongo Connection Class
class Connection {
    constructor() {
        const url = `mongodb+srv://${config.DB_USER}:${config.DB_PASS}@cluster0.z2mw7iw.mongodb.net/?retryWrites=true&w=majority`;

        mongoose.Promise = global.Promise;
        this.connect( url ).then( () => {
            console.log( '✔ Database Connected' );
        } ).catch( ( err ) => {
            console.error( '✘ MONGODB ERROR: ', err.message );
        } );

    }

    async connect( url ) {
        try {
            await mongoose.connect( url );
        } catch ( e ) {
            throw e;
        }
    }
}

module.exports = new Connection();