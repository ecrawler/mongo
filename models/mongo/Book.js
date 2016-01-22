/**
* Book.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    slug: 'STRING',
    title: 'STRING',
    description: 'STRING',
    writer: 'STRING',
    publicser: 'STRING',
    price: 'DOUBLE',
    year: 'INTEGER',
    language: 'STRING',
    url: 'STRING',
    content: 'TEXT',
    thumb: {
      model: 'photo'
    },
    country: {
      model: 'country'
    },
    topics : {
       collection: 'topic',
       via: 'books'
    }
  }
};
