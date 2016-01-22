/**
* Movies.js
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
    imbd:'STRING',
    year: 'INTEGER',
    actors: 'STRING',
    actist: 'STRING',
    url: 'STRING',
    content: 'TEXT',
    thumb: {
      model:'thumb'
    },
    photos: {
      collection: 'photo',
      via:'movie'
    },
    country: {
      model: 'country'
    },
    topics: {
      collection:'topic',
      via: 'movies'
    },
    videos: {
      collection: 'video',
      via:'movie'
    }
  }
};
