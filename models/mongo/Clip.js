/**
* Clip.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    slug: 'STRING',
    title: 'STRING',
    description: 'STRING',
    duaration: 'STRING',
    length:    'INTEGER',
    url: 'STRING',
    content: 'TEXT',
    thumb: {
      model:'thumb'
    },
    photos: {
      collection: 'photo',
      via:'clip'
    },
    country: {
      model: 'country'
    },
    topics: {
      collection:'topic',
      via: 'clips'
    },
    videos: {
      collection: 'video',
      via:'clip'
    }
  }
};
