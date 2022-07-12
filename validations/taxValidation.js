const {body} = require('express-validator')

const TaxValidation = [
  body('income').notEmpty().isNumeric(),
];

module.exports = {TaxValidation}
