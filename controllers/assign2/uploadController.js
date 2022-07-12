
class UploadController{
    constructor(){
        // this.service
    }
    

    async insert( req, res, next ) {
        try {
            const uploadPath = config.UPLOAD_PATH;

            req.file.path = req.file.path.split( `${uploadPath }/` )[ 1 ];
            const response = await this.service.insert( req.file );

            return res.status( response.statusCode ).json( response );
        } catch ( e ) {
            next( e );
        }
    }
}

module.exports = UploadController