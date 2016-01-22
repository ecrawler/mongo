/**
* Photo.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    title: 'STRING',
    width: 'INTEGER',
    height: 'INTEGER',
    bucket: 'STRING',
    filename: 'STRING',
    extention: 'STRING',

    audio: {
      model:'audio'
    },
    book: {
      model: 'book'
    },
    place: {
      model:'place'
    },
    product: {
      model:'product'
    },
    job: {
      model: 'job'
    },
    feed: {
      model:'feed'
    },
    movie: {
      model:'movie'
    },
    clip: {
      model: 'clip'
    },
    news: {
      model: 'news'
    },
    music: {
      model:'music'
    }
  }
};
