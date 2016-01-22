/**
* Audio.js
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
    artist: 'STRING',
    length:    'INTEGER',
    thumbBucket: 'STRING',
    thumbFile: 'STRING',
    extention: 'STRING',
    thumb: {
        model:'photo'
    },
    music: {
        model: 'music'
    }
  }
};
