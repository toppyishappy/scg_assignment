const {body} = require('express-validator')

const SendEmailValidation = [
  body('from')
    .isEmail()
    .withMessage('email must contain a valid email address'),
  body('to')
    .isEmail()
    .withMessage('email must contain a valid email address'),
  body('message')
    .notEmpty(),
  body('templateId')
];

module.exports = {SendEmailValidation}
