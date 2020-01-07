'use strict';

const validator = require('../lib/validator.js');

let str = 'yes';
let num = 1;
let arr = ['a'];
let obj = {
  x: 'y'
};
let func = () => {};
let bool = false;

describe('validator module performs basic validation of', () => {

  // TODO: Make this series of tests less repetitive ... DRY it out
  it('strings', () => {

    expect(validator.isString(str)).toBeTruthy();
    expect(validator.isString(num)).toBeFalsy();
    expect(validator.isString(arr)).toBeFalsy();
    expect(validator.isString(obj)).toBeFalsy();
    expect(validator.isString(func)).toBeFalsy();
    expect(validator.isString(bool)).toBeFalsy();
  });

  it('numbers', () => {
    expect(validator.isNumber(str)).toBeFalsy();
    expect(validator.isNumber(num)).toBeTruthy();
    expect(validator.isNumber(arr)).toBeFalsy();
    expect(validator.isNumber(obj)).toBeFalsy();
    expect(validator.isNumber(func)).toBeFalsy();
    expect(validator.isNumber(bool)).toBeFalsy();
  });

  it('arrays', () => {
    expect(validator.isArray(str)).toBeFalsy();
    expect(validator.isArray(num)).toBeFalsy();
    expect(validator.isArray(arr)).toBeTruthy();
    expect(validator.isArray(obj)).toBeFalsy();
    expect(validator.isArray(func)).toBeFalsy();
    expect(validator.isArray(bool)).toBeFalsy();
  });

  it('objects', () => {
    expect(validator.isObject(str)).toBeFalsy();
    expect(validator.isObject(num)).toBeFalsy();
    expect(validator.isObject(arr)).toBeFalsy();
    expect(validator.isObject(obj)).toBeTruthy();
    expect(validator.isObject(func)).toBeFalsy();
    expect(validator.isObject(bool)).toBeFalsy();
  });

  it('booleans', () => {
    expect(true).toBeFalsy();
  });

  it('functions', () => {
    expect(true).toBeFalsy();
  });

});

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

const susan = {
  id: '123-45-6789',
  name: 'Susan McDeveloperson',
  age: 37,
  children: [],
};

const fred = {
  id: 38,
  name: 'Freddy McCoder',
  children: [],
};


describe('validator module performs complex validations', () => {

  it('validates the presence of required object properties at any level', () => {
    // i.e. does person.hair.color exist and have a good value, not just person.hair

    expect(validator.isValid(fred, personRules)).toBeFalsy();
  });

  it('validates the proper types of object properties', () => {
    // i.e. person.name must be a string, etc.
    expect(true).toBeFalsy();
  });

  it('validates the types of values contained in an array', () => {
    // i.e. an array of all strings or numbers
    expect(true).toBeFalsy();
  });

  it('validates a value array against an approved list', () => {
    // i.e. a string might only be allowed to be "yes" or "no"
    expect(true).toBeFalsy();
  });

  // TODO: Cover so, so many more cases

});