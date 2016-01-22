/**
* Job.js
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
    salary: 'DECIMAL',
    email: 'STRING',
    location: 'STRING',
    content: 'TEXT',
    thumb: {
           model:'thumb'
    },
    photos: {
      collection: 'photo',
      via:'job'
    },
    country: {
      model: 'country'
    },
    topics: {
      collection:'topic',
      via:'jobs'
    }
  }
};
