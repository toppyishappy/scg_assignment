require( 'dotenv' ).config();
// Initialize DB Connection
require( './configs/database' );

const config = require( './configs/config' ).getConfig(),
    PORT = config.PORT;

console.log( '✔ Bootstrapping Application' );
console.log( `✔ Mode: ${config.MODE}` );
console.log( `✔ Port: ${PORT}` );

const { app } = require( './configs/server' );

app.listen( PORT ).on( 'error', ( err ) => {
    console.log( '✘ Application failed to start' );
    console.error( '✘', err.message );
    process.exit( 0 );
} ).on( 'listening', () => {
    console.log( '✔ Application Started' );
} );


module.exports = { app };