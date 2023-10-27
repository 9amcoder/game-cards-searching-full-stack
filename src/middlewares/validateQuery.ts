import { query } from 'express-validator';

const validateQuery = [
  query('q').notEmpty().trim().escape().withMessage('query is required'),
  query('page')
    .optional()
    .isInt({ gt: 0 })
    .withMessage('page should be a positive integer'),
  query('dir')
    .optional()
    .isIn(['auto', 'asc', 'desc'])
    .withMessage('dir should be one of: auto, asc, desc'),
  query('format')
    .optional()
    .isIn(['json', 'csv'])
    .withMessage('format should be one of: json, csv'),
  query('include_extras')
    .optional()
    .isBoolean()
    .withMessage('include_extras should be boolean'),
  query('include_multilingual')
    .optional()
    .isBoolean()
    .withMessage('include_multilingual should be boolean'),
  query('include_variations')
    .optional()
    .isBoolean()
    .withMessage('include_variations should be boolean'),
];

export default validateQuery;
