/**
* Video.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    title: 'STRING',
    description: 'STRING',
    bucket: 'STRING',
    filename: 'STRING',
    duaration: 'STRING',
    length:    'INTEGER',
    thumbBucket: 'STRING',
    thumbFile: 'STRING',
    type: 'INTEGER', // movies, music mv, clip, funny clip...
    extention: 'STRING',
    movie: {
       model:'movie'
    },
    clip: {
      model: 'clip'
    },
    music: {
      model: 'music'
    },
    thumb: {
      model: 'thumb'
    }
  }
};
