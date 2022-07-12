var express = require('express') 
var path = require('path');
const multer  = require('multer')
const passport = require('passport')

require('../configs/passport')
var assign2Router = require('../routes/assign2');
const { HttpResponse } = require('../systems/httpResponse');
const { HttpError } = require('../systems/httpError');
const config = require( '../configs/config' ).getConfig();
const {upload} = require('../configs/upload')


module.exports.setRoutes = ( app ) => {
     

    
    app.use( '/api', passport.authenticate('basic', { session: false }),assign2Router );

    app.post('/upload', passport.authenticate('basic', { session: false }), upload.single('image'), (req, res, next) => {
        res.json(new HttpResponse({imgName: req.file.filename}))
    })
    /**
     * If No route matches. Send user a 404 page
     */
    app.use( '/*', ( req, res, next ) => {
        const error = new Error( 'Requested path does not exist.' );
        
        error.statusCode = 404;
        res.status( error.statusCode ).json( new HttpError( error ) );
    } );

    app.use((error, req, res, next) => {
      res.status( error.statusCode ).json( new HttpError( error ) );
  })

    
};