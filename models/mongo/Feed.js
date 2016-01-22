/**
* Feed.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    title: 'STRING',
    description: 'STRING',
    url: {
      type: 'STRING',
      require: true,
      unique: true
    },
    content: 'TEXT',
    topics:{
        collection: 'topic',
        via: 'feeds'
    },
    country:{
           model:'country'
    },
    thumb: {
           model:'thumb'
    },
    photos: {
      collection: 'photo',
      via:'feed'
    }

  }
};
