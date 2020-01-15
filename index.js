'use strict';

const validator = require('./lib/validator');

const personRules = {
  fields: {
    id: {
      type: 'string',
      required: true,
    },
    name: {
      type: 'string',
      required: true,
    },
    age: {
      type: 'number',
      required: true,
    },
    children: {
      type: 'array',
      valueType: 'string',
    },
  },
};

const fred = {
  id: 38,
  name: 'Freddy McCoder',
  children: [],
};

console.log(validator.isValid(personRules, fred));