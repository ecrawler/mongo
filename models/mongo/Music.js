/**
* Music.js
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
    actist: 'STRING',
    url: {
      type: 'STRING'
    },
    content: 'TEXT',
    country: {
      model:'country'
    },
    thumb: {
      model:'thumb'
    },
    photos: {
      collection: 'photo',
      via:'music'
    },
    topics: {
      collection:'topic',
      via: 'musics'
    },
    audios: {
      collection: 'audio',
      via:'music'
    },
    videos: {
      collection: 'video',
      via:'music'
    }
  }
};
