'use strict';

let validator = module.exports = {};

const personRules = {
  fields: {
    id: {
      type: 'string',
      required: true
    },
    name: {
      type: 'string',
      required: true
    },
    age: {
      type: 'number',
      required: true
    },
    children: {
      type: 'array',
      valueType: 'string'
    },
  },
};

/**
 * Based on a set of rules, is the input valid?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param input
 * @param rules
 * @returns {boolean}
 */
validator.isValid = (input, rules) => {
  if (typeof input !== 'object') return false;
  let entries = Object.entries(rules.fields);

  entries.forEach(prop => {
    const name = prop[0];
    const required = prop[1].required;
    const type = prop[1].type;

    if (required) {
      if (!input.hasOwnProperty(name)) return false;
      if (typeof input[name] !== type) return false;
    }
  });
  return true;
};



/**
 * Is this a string?
 * @param input
 * @returns {boolean}
 */
validator.isString = (input) => {
  return typeof input === 'string';
};

/**
 * Is this a number?
 * @param input
 * @returns {boolean}
 */
validator.isNumber = (input) => {
  return typeof input === 'number';
};

/**
 * Is this an array?
 * @param input
 * @returns {boolean}
 */
validator.isArray = (input) => {
  return Array.isArray(input);
};

/**
 * Is this an object?
 * @param input
 * @returns {boolean}
 */
validator.isObject = (input) => {
  return typeof input === 'object';
};

/**
 * Is this a boolean?
 * @param input
 * @returns {boolean}
 */
validator.isBoolean = (input) => {
  return typeof input === 'boolean';
};

/**
 * Is this a function?
 * @param input
 * @returns {boolean}
 */
validator.isFunction = (input) => {
  return typeof input === 'function';
};