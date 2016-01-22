/**
* Product.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    slug: 'STRING',
    title: 'STRING',
    description: 'STRING',
    address: 'STRING',
    phone:'STRING',
    email:'STRING',
    price: 'DOUBLE',
    url: {
      type: 'STRING',
      require: true,
      unique: true
    },
    content: 'TEXT',
    country: {
      model: 'country'
    },
    thumb: {
      model:'thumb'
    },
    photos: {
      collection: 'photo',
      via:'product'
    },
    topics: {
      collection:'topic',
      via:'products'
    }
  }
};
