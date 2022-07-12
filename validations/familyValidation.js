const {body} = require('express-validator')

const FamilyValidation = [
  body('groupId').notEmpty().withMessage('Required filed'),
  body('firstname').notEmpty().withMessage('Required filed'),
  body('lastname'),
  body('phone').notEmpty().withMessage('Required filed'),
  body('email').isEmail(),
  body('avatarPath').notEmpty().withMessage('Required filed'),
  body('birthDate'),
];

module.exports = {FamilyValidation}
