/**
* Link.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    url: {
      type: 'STRING',
      unique: true
    },
    hostname: 'STRING',
    parsed: 'BOOLEAN',
    country: {
      model:'country'
    },
    category: {
      model: 'category'
    }
  }
};
