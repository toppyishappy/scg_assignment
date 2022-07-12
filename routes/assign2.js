var express = require('express');
const FamilyController = require('../controllers/assign2/familyController')
const GroupController = require('../controllers/assign2/groupController')
const EmailController = require('../controllers/assign1/emailController')
const TaxController = require('../controllers/assign3/taxController');
const {HttpError} = require('../systems/httpError')
const {FamilyValidation} = require('../validations/familyValidation')
const {SendEmailValidation} = require('../validations/emailValidation')
const {TaxValidation} = require('../validations/taxValidation')

const {validateRequestMiddleware} = require('../middlewares/validation');
var router = express.Router();


router.get('/groups', GroupController.getAll)
router.get('/groups/:id', GroupController.getId)
router.post('/groups', GroupController.insert)


router.post('/family', FamilyValidation, validateRequestMiddleware, FamilyController.insert)
router.get('/family', FamilyController.getAll)
router.get('/family/:id', FamilyController.getFamByGroupId)


router.post('/send-email', SendEmailValidation, validateRequestMiddleware, EmailController.sendEmail)

router.post('/cal-tax', TaxValidation, validateRequestMiddleware, TaxController.calTax)

router.use( '/*', ( req, res, next ) => {
    const error = new Error( 'Requested path does not exist.' );
    error.statusCode = 404;
    next(error)
  } );

router.use((error, req, res, next) => {
    res.status( error.statusCode ).json( new HttpError( error ) );
})
module.exports = router;