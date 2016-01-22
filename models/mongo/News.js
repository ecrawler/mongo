/**
* News.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    slug: 'STRING',
    title: 'STRING',
    description: 'STRING',
    url: {
      type: 'STRING',
      require: true,
      unique: true
    },
    site: 'STRING',
    content: 'TEXT',
    country: {
      model: 'country'
    },
    thumb: {
      model:'thumb'
    },
    photos: {
      collection: 'photo',
      via:'news'
    },
    topics: {
      collection: 'topic',
      via:'news'
    }
  }
};
